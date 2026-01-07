import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useOpenHeavensDevotional } from '@/hooks/useOpenHeavensDevotional';
import { BookOpen, Calendar, ArrowRight, Loader2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DevotionalSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { devotional, loading, error, recentDevotionals } = useOpenHeavensDevotional();

  return (
    <section id="devotional" className="py-12 md:py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="section-container px-4 md:px-6">
        <div
          ref={ref}
          className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
        >
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <span className="text-accent font-medium tracking-wide uppercase text-xs md:text-sm font-body">
              Daily Bread
            </span>
            <h2 className="font-body text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-2 md:mt-3 mb-3 md:mb-4">
              Open Heavens Devotional
            </h2>
            <p className="text-muted-foreground text-base md:text-lg px-2 font-body">
              Start each day with God's Word. The Open Heavens devotional by Pastor E.A. Adeboye 
              has blessed millions worldwide.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* Today's Devotional - Featured */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl md:rounded-2xl shadow-card border border-border/30 overflow-hidden">
                {loading ? (
                  <div className="p-8 md:p-12 flex flex-col items-center justify-center">
                    <Loader2 className="w-6 h-6 md:w-8 md:h-8 animate-spin text-primary mb-3 md:mb-4" />
                    <p className="text-muted-foreground text-sm md:text-base font-body">
                      Loading today's devotional...
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Header */}
                    <div className="bg-gradient-to-r from-primary to-red-custom-light p-4 md:p-6 text-primary-foreground">
                      <div className="flex items-center gap-2 text-gold-light text-xs md:text-sm mb-1 md:mb-2 font-body">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                        {devotional.date}
                      </div>
                      <h3 className="font-body text-xl md:text-2xl lg:text-3xl font-bold">
                        {devotional.title}
                      </h3>
                    </div>

                    {/* Content */}
                    <div className="p-4 md:p-6 lg:p-8 font-body">
                      {error && (
                        <p className="text-xs md:text-sm text-muted-foreground bg-secondary/50 border border-border/40 p-2 md:p-3 rounded-lg mb-3 md:mb-4">
                          {error}
                        </p>
                      )}
                      
                      {/* Memory Verse */}
                      <div className="bg-secondary/50 rounded-lg md:rounded-xl p-4 md:p-6 mb-4 md:mb-6 border-l-4 border-accent">
                        <p className="text-xs md:text-sm text-accent font-medium mb-1 md:mb-2">
                          Memory Verse
                        </p>
                        <blockquote className="font-body text-base md:text-lg lg:text-xl italic text-foreground">
                          "{devotional.memoryVerse}"
                        </blockquote>
                        <cite className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2 block">
                          — {devotional.reference}
                        </cite>
                      </div>

                      {/* Bible Reading */}
                      {devotional.bibleReading && (
                        <div className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                          <strong className="text-foreground">Bible Reading:</strong> {devotional.bibleReading}
                        </div>
                      )}

                      {/* Excerpt */}
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4 md:mb-6 whitespace-pre-line">
                        {devotional.content}
                      </p>

                      <a 
                        href={devotional.link || "https://openheaven365.com/"} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button variant="hero" size="lg" className="w-full sm:w-auto text-sm md:text-base">
                          <ExternalLink className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                          Read Full Devotional
                        </Button>
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Recent Devotionals */}
            <div className="space-y-3 md:space-y-4 font-body">
              <h4 className="text-lg md:text-xl font-semibold text-foreground flex items-center gap-2">
                <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                Recent Devotionals
              </h4>
              
              {loading && recentDevotionals.length === 0 ? (
                <div className="p-3 md:p-4 bg-card rounded-lg md:rounded-xl border border-border/30 text-xs md:text-sm text-muted-foreground">
                  Loading recent devotionals...
                </div>
              ) : recentDevotionals.length === 0 ? (
                <div className="p-3 md:p-4 bg-card rounded-lg md:rounded-xl border border-border/30 text-xs md:text-sm text-muted-foreground">
                  No recent devotionals found.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  {recentDevotionals.map((dev) => (
                    <a
                      key={dev.link}
                      href={dev.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 md:p-4 bg-card rounded-lg md:rounded-xl border border-border/30 hover:border-accent/50 hover:shadow-soft transition-all group"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="min-w-0 flex-1">
                          <span className="text-xs text-accent font-medium">{dev.date}</span>
                          <h5 className="font-medium text-sm md:text-base text-foreground group-hover:text-primary transition-colors truncate">
                            {dev.title}
                          </h5>
                        </div>
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </div>
                    </a>
                  ))}
                </div>
              )}

              <Button variant="outline" className="w-full mt-3 md:mt-4 text-sm">
                View All Devotionals
              </Button>

              {/* Subscribe Card */}
              <div className="mt-4 md:mt-6 p-4 md:p-6 bg-gradient-to-br from-accent/10 to-gold-light/10 rounded-lg md:rounded-xl border border-accent/20">
                <h5 className="font-body font-semibold text-sm md:text-base text-foreground mb-1 md:mb-2">
                  Daily Devotional in Your Inbox
                </h5>
                <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                  Never miss your daily spiritual nourishment.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 md:px-4 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <Button variant="gold" size="default" className="whitespace-nowrap">
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
