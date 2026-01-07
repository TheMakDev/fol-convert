import { useEffect, useState } from 'react';

export interface Devotional {
  date: string;
  title: string;
  memoryVerse: string;
  reference: string;
  content: string;
  bibleReading: string;
  hymn: string;
  link: string;
}

export interface DevotionalListItem {
  date: string; // short date for sidebar (e.g. "Jan 05")
  title: string;
  link: string;
}

const CORS_PROXIES = [
  'https://api.allorigins.win/raw?url=',
  'https://corsproxy.io/?',
];

const FALLBACK_DEVOTIONAL: Devotional = {
  date: new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }),
  title: 'Open Heavens Daily Devotional',
  memoryVerse: 'Trust in the LORD with all your heart and lean not on your own understanding.',
  reference: 'Proverbs 3:5',
  content:
    "Today's devotional reminds us of the importance of trusting God completely. As believers, we are called to walk by faith, not by sight.",
  bibleReading: 'Proverbs 3:1-10',
  hymn: 'Trust and Obey',
  link: 'https://openheaven365.com/',
};

const decodeHtml = (raw: string) => {
  const doc = new DOMParser().parseFromString(raw, 'text/html');
  return (doc.documentElement.textContent || raw).trim();
};

const formatFullDate = (date: Date) =>
  date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

const formatShortDate = (date: Date) =>
  date.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });

const parseLatestFromItem = (item: Element): Devotional | null => {
  const title = item.querySelector('title')?.textContent?.trim() || '';
  const link = item.querySelector('link')?.textContent?.trim() || 'https://openheaven365.com/';
  const pubDate = item.querySelector('pubDate')?.textContent?.trim() || '';
  const contentEncoded =
    item.querySelector('content\\:encoded')?.textContent ||
    item.querySelector('description')?.textContent ||
    '';

  if (!title) return null;

  const dateObj = pubDate ? new Date(pubDate) : new Date();
  const formattedDate = formatFullDate(dateObj);

  // Parse HTML content -> plain text
  const contentDoc = new DOMParser().parseFromString(contentEncoded, 'text/html');
  const textContent = contentDoc.body.textContent || '';

  // Memory verse
  let memoryVerse = '';
  let reference = '';
  const memoriseMatch = textContent.match(
    /(?:MEMORISE|MEMORIZE|Memory Verse)[:\s]*[“"']?([^“"'\n]+)[”"']?\s*[-–—]?\s*([1-3]?\s*[A-Za-z]+\s+\d+:\d+[-\d]*)/i
  );
  if (memoriseMatch) {
    memoryVerse = memoriseMatch[1].trim();
    reference = memoriseMatch[2].trim();
  }

  // Bible reading
  const bibleReadingMatch = textContent.match(
    /(?:BIBLE IN ONE YEAR|Bible Reading|READ)[:\s]*([^\n]+)/i
  );
  const bibleReading = bibleReadingMatch
    ? bibleReadingMatch[1].trim().split(/[,\n]/)[0]
    : '';

  // Hymn
  const hymnMatch = textContent.match(/(?:HYMN)[:\s]*(\d+[.\s]*[^\n]*)/i);
  const hymn = hymnMatch ? hymnMatch[1].trim() : '';

  // Main content (first meaningful paragraphs)
  const paragraphs = textContent
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(
      (p) =>
        p.length > 60 &&
        !p.match(/^(MEMORISE|BIBLE IN|HYMN|READ|ACTION POINT|PRAYER|KEY POINT)/i)
    );
  const content = paragraphs.slice(0, 3).join('\n\n').slice(0, 1000);

  return {
    date: formattedDate,
    title: decodeHtml(title) || 'Open Heavens Daily Devotional',
    memoryVerse: memoryVerse || FALLBACK_DEVOTIONAL.memoryVerse,
    reference: reference || FALLBACK_DEVOTIONAL.reference,
    content: content || FALLBACK_DEVOTIONAL.content,
    bibleReading: bibleReading || FALLBACK_DEVOTIONAL.bibleReading,
    hymn: hymn || FALLBACK_DEVOTIONAL.hymn,
    link,
  };
};

const parseListItemFromItem = (item: Element): DevotionalListItem | null => {
  const title = item.querySelector('title')?.textContent?.trim() || '';
  const link = item.querySelector('link')?.textContent?.trim() || '';
  const pubDate = item.querySelector('pubDate')?.textContent?.trim() || '';
  if (!title || !link) return null;

  const dateObj = pubDate ? new Date(pubDate) : new Date();

  return {
    date: formatShortDate(dateObj),
    title: decodeHtml(title) || 'Open Heavens Devotional',
    link,
  };
};

const parseRSSFeed = (xml: string): { latest: Devotional; recent: DevotionalListItem[] } | null => {
  try {
    const doc = new DOMParser().parseFromString(xml, 'text/xml');
    const items = Array.from(doc.querySelectorAll('item'));
    if (items.length === 0) return null;

    const latest = parseLatestFromItem(items[0]);
    if (!latest) return null;

    const recent = items
      .slice(1, 5)
      .map(parseListItemFromItem)
      .filter((x): x is DevotionalListItem => Boolean(x));

    return { latest, recent };
  } catch {
    return null;
  }
};

export const useOpenHeavensDevotional = () => {
  const [devotional, setDevotional] = useState<Devotional>(FALLBACK_DEVOTIONAL);
  const [recentDevotionals, setRecentDevotionals] = useState<DevotionalListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDevotional = async () => {
      const rssUrl = 'https://openheaven365.com/feed/';

      for (const proxy of CORS_PROXIES) {
        try {
          const response = await fetch(`${proxy}${encodeURIComponent(rssUrl)}`);
          if (!response.ok) continue;

          const xml = await response.text();
          const parsed = parseRSSFeed(xml);

          if (parsed) {
            setDevotional(parsed.latest);
            setRecentDevotionals(parsed.recent);
            setError(null);
            setLoading(false);
            return;
          }
        } catch {
          // try next proxy
        }
      }

      setDevotional(FALLBACK_DEVOTIONAL);
      setRecentDevotionals([]);
      setError('Unable to fetch live devotional right now.');
      setLoading(false);
    };

    fetchDevotional();
  }, []);

  return { devotional, recentDevotionals, loading, error };
};