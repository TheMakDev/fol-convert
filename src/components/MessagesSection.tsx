import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Play, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MessagesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const messages = [
    {
      title: 'The Power of New Beginnings',
      date: 'December 15, 2024',
      duration: '58 min',
      category: 'Salvation',
    },
    {
      title: 'Walking in Divine Purpose',
      date: 'December 8, 2024',
      duration: '1 hr 5 min',
      category: 'Purpose',
    },
    {
      title: 'The Joy of the Redeemed',
      date: 'December 1, 2024',
      duration: '52 min',
      category: 'Joy',
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Daddy G.O.'s Messages
            </h2>
            <p className="text-muted-foreground text-lg">
              Be blessed by the anointed teachings of Pastor E.A. Adeboye, 
              General Overseer of the Redeemed Christian Church of God.
            </p>
          </div>

          {/* Messages Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {messages.map((message, index) => (
              <div
                key={message.title}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft border border-border/30 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Thumbnail */}
                <div className="relative h-48 bg-gradient-to-br from-primary to-red-custom-dark flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <button className="w-16 h-16 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary-foreground fill-current ml-1" />
                  </button>
                  <span className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
                    {message.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                    {message.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {message.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {message.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="outline" size="lg">
              View All Messages
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessagesSection;
