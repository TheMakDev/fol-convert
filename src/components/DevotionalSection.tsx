import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DevotionalSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const todayDevotional = {
    date: 'Tuesday, December 17, 2024',
    title: 'New Beginnings in Christ',
    memoryVerse: 'Behold, I make all things new.',
    reference: 'Revelation 21:5',
    excerpt: `As a new believer, you have embarked on the most beautiful journey of your life. 
    The old has passed away, and behold, the new has come! God is doing a new thing in your life, 
    and it shall spring forth. Today, embrace your new identity in Christ with joy and thanksgiving. 
    You are not who you used to be; you are a new creation, born of the Spirit, destined for glory...`,
  };

  const recentDevotionals = [
    { date: 'Dec 16', title: 'Walking by Faith' },
    { date: 'Dec 15', title: 'The Power of Prayer' },
    { date: 'Dec 14', title: 'Growing in Grace' },
  ];

  return (
    <section id="devotional" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="section-container">
        <div
          ref={ref}
          className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
        >
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-medium tracking-wide uppercase text-sm">
              Daily Bread
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Open Heavens Devotional
            </h2>
            <p className="text-muted-foreground text-lg">
              Start each day with God's Word. The Open Heavens devotional by Pastor E.A. Adeboye 
              has blessed millions worldwide.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Today's Devotional - Featured */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl shadow-card border border-border/30 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary to-red-custom-light p-6 text-primary-foreground">
                  <div className="flex items-center gap-2 text-gold-light text-sm mb-2">
                    <Calendar className="w-4 h-4" />
                    {todayDevotional.date}
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold">
                    {todayDevotional.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Memory Verse */}
                  <div className="bg-secondary/50 rounded-xl p-6 mb-6 border-l-4 border-accent">
                    <p className="text-sm text-accent font-medium mb-2">Memory Verse</p>
                    <blockquote className="font-heading text-xl italic text-foreground">
                      "{todayDevotional.memoryVerse}"
                    </blockquote>
                    <cite className="text-sm text-muted-foreground mt-2 block">
                      — {todayDevotional.reference}
                    </cite>
                  </div>

                  {/* Excerpt */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {todayDevotional.excerpt}
                  </p>

                  <Button variant="hero" size="lg">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Read Full Devotional
                  </Button>
                </div>
              </div>
            </div>

            {/* Recent Devotionals */}
            <div className="space-y-4">
              <h4 className="font-heading text-xl font-semibold text-foreground flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-accent" />
                Recent Devotionals
              </h4>
              
              {recentDevotionals.map((dev) => (
                <a
                  key={dev.date}
                  href="#"
                  className="block p-4 bg-card rounded-xl border border-border/30 hover:border-accent/50 hover:shadow-soft transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-accent font-medium">{dev.date}</span>
                      <h5 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {dev.title}
                      </h5>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                </a>
              ))}

              <Button variant="outline" className="w-full mt-4">
                View All Devotionals
              </Button>

              {/* Subscribe Card */}
              <div className="mt-6 p-6 bg-gradient-to-br from-accent/10 to-gold-light/10 rounded-xl border border-accent/20">
                <h5 className="font-heading font-semibold text-foreground mb-2">
                  Daily Devotional in Your Inbox
                </h5>
                <p className="text-sm text-muted-foreground mb-4">
                  Never miss your daily spiritual nourishment.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <Button variant="gold" size="default">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevotionalSection;
