import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Lightbulb, Heart, BookOpen, Users, Sparkles, Shield } from 'lucide-react';

interface NoteCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  category: string;
  delay: number;
}

const NoteCard = ({ icon, title, content, category, delay }: NoteCardProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`group p-6 bg-card rounded-2xl shadow-soft border border-border/30 
        hover:shadow-card hover:-translate-y-1 transition-all duration-300
        ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-gold/20 text-gold shrink-0">
          {icon}
        </div>
        <div className="space-y-2">
          <span className="text-xs font-medium text-accent uppercase tracking-wide">
            {category}
          </span>
          <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

const ShortNotesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const notes = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "God Loves You Unconditionally",
      content: "Nothing you do can make God love you more or less. His love is constant, eternal, and unconditional. You are His beloved child.",
      category: "God's Love",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Prayer is Simply Talking to God",
      content: "Prayer doesn't require fancy words. Just speak to God like a friend. He hears every word and understands your heart.",
      category: "Prayer",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "The Bible is Your Spiritual Food",
      content: "Reading the Bible daily nourishes your spirit just as food nourishes your body. Start with the Gospels to know Jesus better.",
      category: "Bible",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Church is Your Spiritual Family",
      content: "You're not meant to walk this journey alone. The church is a community of believers who support, encourage, and grow together.",
      category: "Fellowship",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "The Holy Spirit is Your Helper",
      content: "When you accepted Christ, the Holy Spirit came to live in you. He guides, comforts, and empowers you daily.",
      category: "Holy Spirit",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Forgiveness Sets You Free",
      content: "Forgiveness is a gift you give yourself. Release bitterness and let God heal your heart. He forgave you; you can forgive others.",
      category: "Christian Living",
    },
  ];

  return (
    <section id="short-notes" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="section-container">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
        >
          <span className="text-accent font-medium tracking-wide uppercase text-sm">
            Quick Insights
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Short Notes About Christianity
          </h2>
          <p className="text-muted-foreground text-lg">
            Simple truths to help you understand and grow in your new faith. 
            These foundational insights will strengthen your spiritual journey.
          </p>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note, index) => (
            <NoteCard key={note.title} {...note} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShortNotesSection;
