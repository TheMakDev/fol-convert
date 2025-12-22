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
      {/* ===== Background Image & Overlays ===== */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Joyful congregation worshipping"
          className="w-full h-full object-cover"
        />

        {/* Color Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-custom-dark/50 to-transparent" />
      </div>

      {/* ===== Main Content ===== */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
        <div className="mx-auto max-w-4xl space-y-6 sm:space-y-8">
          
          {/* Badge */}
          <div className="animate-fade-up">
            <span className="inline-block rounded-full bg-accent/20 px-4 py-2 text-sm font-medium tracking-wide text-gold-light">
              Welcome to the Family of God
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-up delay-100">
            Now That You Are{' '}
            <span className="text-gradient">Born Again</span>
          </h1>

          {/* Description */}
          <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-primary-foreground/90 animate-fade-up delay-200">
            Congratulations on your decision to accept Jesus Christ as your Lord and Savior!
            This is the greatest decision you will ever make. Heaven rejoices over you today,
            and so do we. Welcome to the family of the Redeemed!
          </p>

          {/* Scripture */}
          <blockquote className="animate-fade-up delay-300 italic text-gold-light text-base sm:text-lg">
            “Therefore, if anyone is in Christ, he is a new creation; old things have passed away;
            behold, all things have become new.”
            <cite className="mt-2 block text-sm not-italic text-primary-foreground/70">
              — 2 Corinthians 5:17
            </cite>
          </blockquote>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:justify-center sm:items-center animate-fade-up delay-400">
            <Link to="/course">
              <Button variant="gold" size="xl" className="w-full sm:w-auto">
                Begin Your Journey
              </Button>
            </Link>

            <Button
              variant="heroOutline"
              size="xl"
              onClick={scrollToSections}
              className="w-full sm:w-auto"
            >
              Explore Resources
            </Button>
          </div>
        </div>

        {/* ===== Scroll Indicator ===== */}
        <button
          onClick={scrollToSections}
          aria-label="Scroll to content"
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-float cursor-pointer"
        >
          <ChevronDown className="h-8 w-8 sm:h-10 sm:w-10 text-primary-foreground/60 hover:text-primary-foreground transition-colors" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
