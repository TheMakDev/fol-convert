import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MapPin, Mic2, Headphones, BookOpen, MessageCircle, Heart } from 'lucide-react';

interface NavCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  delay: number;
}

const NavCard = ({ icon, title, description, href, delay }: NavCardProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLAnchorElement>();

  return (
    <a
      href={href}
      ref={ref}
      className={`group block p-8 bg-card rounded-2xl shadow-soft border border-border/30 
        transition-all duration-500 hover:shadow-card hover:-translate-y-2 hover:border-accent/30
        ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          {icon}
        </div>
        <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        <span className="inline-flex items-center text-accent font-medium text-sm group-hover:gap-2 transition-all">
          Explore
          <svg
            className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </a>
  );
};

const NavigationCards = () => {
  const { ref, isVisible } = useScrollAnimation();

  const cards = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Find a Church Near You',
      description: 'Connect with a local RCCG parish to grow in faith and fellowship with other believers.',
      href: '#find-church',
    },
    {
      icon: <Mic2 className="w-8 h-8" />,
      title: "Daddy G.O.'s Messages",
      description: 'Access powerful sermons and teachings from Pastor E.A. Adeboye to strengthen your faith.',
      href: '#messages',
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Audio Messages',
      description: 'Listen to inspiring audio sermons anytime, anywhere on your spiritual journey.',
      href: '#audio',
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Open Heavens Devotional',
      description: "Start each day with God's Word through the daily Open Heavens devotional.",
      href: '#devotional',
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Contact a Counsellor',
      description: 'Have questions? Our counsellors are here to guide and support you on your journey.',
      href: '#contact',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Join the Community',
      description: 'Become part of our vibrant community of believers worldwide.',
      href: '#community',
    },
  ];

  return (
    <section id="navigation-cards" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
        >
          <span className="text-accent font-medium tracking-wide uppercase text-sm">
            Your Next Steps
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Begin Your Spiritual Journey
          </h2>
          <p className="text-muted-foreground text-lg">
            We have prepared resources to help you grow in your new life in Christ. 
            Explore these pathways to deepen your faith.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <NavCard key={card.title} {...card} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavigationCards;
