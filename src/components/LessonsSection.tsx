import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Play, Clock, BookMarked } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LessonCardProps {
  number: number;
  title: string;
  description: string;
  duration: string;
  category: string;
  delay: number;
}

const LessonCard = ({ number, title, description, duration, category, delay }: LessonCardProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden bg-card rounded-2xl shadow-soft border border-border/30 
        hover:shadow-card transition-all duration-300
        ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Lesson Number Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
          {number}
        </span>
      </div>

      {/* Thumbnail Area */}
      <div className="relative h-40 bg-gradient-to-br from-primary/20 via-gold/10 to-accent/20 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-card/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
          <Play className="w-8 h-8 text-primary ml-1" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-3 text-sm">
          <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">
            {category}
          </span>
          <span className="flex items-center gap-1 text-muted-foreground">
            <Clock className="w-4 h-4" />
            {duration}
          </span>
        </div>

        <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>

        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
          <BookMarked className="w-4 h-4 mr-2" />
          Start Lesson
        </Button>
      </div>
    </div>
  );
};

const LessonsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const lessons = [
    {
      number: 1,
      title: "Understanding Salvation",
      description: "Learn what it truly means to be saved and why Jesus died for you. Discover the gift of eternal life.",
      duration: "15 min",
      category: "Foundation",
    },
    {
      number: 2,
      title: "Who is Jesus Christ?",
      description: "Explore the life, ministry, death, and resurrection of Jesus. Understand why He is the center of our faith.",
      duration: "20 min",
      category: "Foundation",
    },
    {
      number: 3,
      title: "The Holy Spirit - Your Helper",
      description: "Discover the person of the Holy Spirit and how He empowers, guides, and comforts you daily.",
      duration: "18 min",
      category: "Holy Spirit",
    },
    {
      number: 4,
      title: "How to Pray Effectively",
      description: "Learn practical ways to communicate with God. Build a consistent and meaningful prayer life.",
      duration: "22 min",
      category: "Prayer",
    },
    {
      number: 5,
      title: "Reading & Understanding the Bible",
      description: "Get practical tips for studying God's Word. Learn how to apply scripture to your daily life.",
      duration: "25 min",
      category: "Bible Study",
    },
    {
      number: 6,
      title: "Living a Holy Life",
      description: "Understand what holiness means and how to live a life that honors God in all you do.",
      duration: "20 min",
      category: "Christian Living",
    },
  ];

  return (
    <section id="lessons" className="py-20 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
        >
          <span className="text-accent font-medium tracking-wide uppercase text-sm">
            Grow Your Faith
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Lessons About Christianity
          </h2>
          <p className="text-muted-foreground text-lg">
            Structured lessons designed to help you understand the foundations of your faith. 
            Take your time and grow at your own pace.
          </p>
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lessons.map((lesson, index) => (
            <LessonCard key={lesson.number} {...lesson} delay={index * 100} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="gold" size="lg">
            View All Lessons
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LessonsSection;
