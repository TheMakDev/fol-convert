import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { ExternalLink, Play } from 'lucide-react';

const MessagesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  // Using the channel uploads playlist (UU prefix replaces UC in channel ID)
  const uploadsPlaylistId = 'UUjjghk7bpRT-dd0WKoFaPhw';

  const featuredContent = [
    {
      title: 'Sunday Services',
      description: 'Weekly worship services with Pastor E.A. Adeboye',
      icon: '🙏',
    },
    {
      title: 'Holy Ghost Services',
      description: 'Monthly power-packed spiritual encounters',
      icon: '🔥',
    },
    {
      title: 'Special Programs',
      description: 'Conventions, Congress and special events',
      icon: '⭐',
    },
  ];

  return (
    <section id="messages" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="section-container">
        <div
          ref={ref}
          className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
        >
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-medium tracking-wide uppercase text-sm">
              Spiritual Nourishment
            </span>
            <h2 className="font-body text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Daddy G.O.'s Messages
            </h2>
            <p className="text-muted-foreground text-lg">
              Be blessed by the anointed teachings of Pastor E.A. Adeboye, 
              General Overseer of the Redeemed Christian Church of God.
            </p>
          </div>

          {/* Featured Video Player */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-card bg-muted">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/6WH0BX2tK8w?list=PLY2UjBLMXLF3VRl9dnylBIe8wQDXemFvY"
                title="RCCG Live - Latest Videos"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-3">
              Latest uploads from RCCG Live YouTube channel
            </p>
          </div>

          {/* Featured Content Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {featuredContent.map((item, index) => (
              <div
                key={item.title}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft border border-border/30 hover:shadow-card hover:-translate-y-1 transition-all duration-300 p-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-body text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a
                href="https://www.youtube.com/@rccglive/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Play className="w-4 h-4" />
                Watch All Videos
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://www.youtube.com/@rccglive?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Subscribe to Channel
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessagesSection;
