import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CHURCH_LOCATOR_URL = 'https://rccgcentraloffice.church/rccg-church-locator/';

const FindChurchSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const featuredRegions = [
    { name: 'United Kingdom', description: 'Find parishes across the UK', icon: '🇬🇧' },
    { name: 'Europe', description: 'Churches throughout Europe', icon: '🇪🇺' },
    { name: 'North America', description: 'USA & Canada parishes', icon: '🌎' },
    { name: 'Africa', description: 'Parishes across Africa', icon: '🌍' },
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
            <span className="text-accent font-medium tracking-wide uppercase text-sm font-body">
              Connect Locally
            </span>
            <h2 className="font-body text-3xl md:text-4xl font-bold text-foreground">
              Find a Church Near You
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-body">
              Being part of a local church family is essential for your spiritual growth. 
              RCCG has parishes in over 190 nations worldwide. Find a loving community 
              near you where you can worship, learn, and grow together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href={CHURCH_LOCATOR_URL} target="_blank" rel="noopener noreferrer">
                  <MapPin className="w-5 h-5 mr-2" />
                  Find a Parish
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={CHURCH_LOCATOR_URL} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Open Parish Locator
                </a>
              </Button>
            </div>
          </div>

          {/* Featured Regions */}
          <div className="space-y-4">
            <h3 className="font-body text-xl font-semibold text-foreground mb-4">
              Parishes Worldwide
            </h3>
            {featuredRegions.map((region, index) => (
              <a
                key={region.name}
                href={CHURCH_LOCATOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-background rounded-xl border border-border/50 hover:border-accent/50 hover:shadow-soft transition-all cursor-pointer group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{region.icon}</span>
                    <div>
                      <h4 className="font-body font-semibold text-foreground group-hover:text-primary transition-colors">
                        {region.name}
                      </h4>
                      <p className="text-sm text-muted-foreground font-body">
                        {region.description}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindChurchSection;
