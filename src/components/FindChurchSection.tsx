import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FindChurchSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const featuredParishes = [
    { name: 'RCCG House of Praise', location: 'Lagos, Nigeria', members: '5000+' },
    { name: 'RCCG Living Spring', location: 'London, UK', members: '2000+' },
    { name: 'RCCG Victory Temple', location: 'Houston, USA', members: '3000+' },
    { name: 'RCCG Grace Chapel', location: 'Toronto, Canada', members: '1500+' },
  ];

  return (
    <section id="find-church" className="py-20 bg-card">
      <div className="section-container">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 items-center ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
        >
          {/* Content */}
          <div className="space-y-6">
            <span className="text-accent font-medium tracking-wide uppercase text-sm">
              Connect Locally
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Find a Church Near You
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Being part of a local church family is essential for your spiritual growth. 
              RCCG has parishes in over 190 nations worldwide. Find a loving community 
              near you where you can worship, learn, and grow together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                <MapPin className="w-5 h-5 mr-2" />
                Use My Location
              </Button>
              <Button variant="outline" size="lg">
                <ExternalLink className="w-5 h-5 mr-2" />
                Browse All Parishes
              </Button>
            </div>
          </div>

          {/* Featured Parishes */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
              Featured Parishes
            </h3>
            {featuredParishes.map((parish, index) => (
              <div
                key={parish.name}
                className="p-4 bg-background rounded-xl border border-border/50 hover:border-accent/50 hover:shadow-soft transition-all cursor-pointer group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {parish.name}
                    </h4>
                    <p className="text-sm text-muted-foreground flex items-center mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {parish.location}
                    </p>
                  </div>
                  <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">
                    {parish.members} members
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindChurchSection;
