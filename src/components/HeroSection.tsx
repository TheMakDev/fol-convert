import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-worship.jpg';

const HeroSection = () => {
  const scrollToSections = () => {
    const element = document.getElementById('navigation-cards');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Joyful congregation worshipping"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-custom-dark/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center text-primary-foreground mt-16">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          {/* Badge */}
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-gold-light text-xs sm:text-sm font-medium tracking-wide">
              Welcome to the Family of God
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-body text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight animate-fade-up delay-100">
            Now That You Are{' '}
            <span className="text-gradient">Born Again</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed animate-fade-up delay-200">
            Congratulations on your decision to accept Jesus Christ as your Lord and Savior! 
            This is the greatest decision you will ever make. Heaven rejoices over you today, 
            and so do we. Welcome to the family of the Redeemed!
          </p>

          {/* Scripture */}
          <blockquote className="text-base sm:text-lg md:text-lg lg:text-lg italic text-gold-light animate-fade-up delay-300">
            "Therefore, if anyone is in Christ, he is a new creation; old things have passed away; 
            behold, all things have become new."
            <cite className="block mt-2 text-xs sm:text-sm not-italic text-primary-foreground/70">
              — 2 Corinthians 5:17
            </cite>
          </blockquote>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-up delay-400">
            <Link to="/student/auth">
              <Button variant="gold" size="lg">
                Start the Foundation Course
              </Button>
            </Link>
            <Button variant="heroOutline" size="lg" onClick={scrollToSections}>
              Explore Resources
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToSections}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float cursor-pointer"
          aria-label="Scroll to content"
        >
          <ChevronDown className="w-10 h-10 text-primary-foreground/60 hover:text-primary-foreground transition-colors" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
