import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import NavigationCards from '@/components/NavigationCards';
import FindChurchSection from '@/components/FindChurchSection';
import MessagesSection from '@/components/MessagesSection';
import AudioSection from '@/components/AudioSection';
import DevotionalSection from '@/components/DevotionalSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <NavigationCards />
        <FindChurchSection />
        <MessagesSection />
        <AudioSection />
        <DevotionalSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
