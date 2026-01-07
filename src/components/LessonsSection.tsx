import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Clock, BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
      className={`group relative bg-card rounded-2xl shadow-soft border border-border/30 
        hover:shadow-card hover:border-primary/30 transition-all duration-300 p-6
        ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Header with number and category */}
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
          {number}
        </span>
        <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium text-sm">
          {category}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-body text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border/50">
        <span className="flex items-center gap-2 text-muted-foreground text-sm">
          <BookOpen className="w-4 h-4" />
          <Clock className="w-4 h-4" />
          {duration} read
        </span>
        <Link to="/course">
          <Button variant="ghost" size="sm" className="group-hover:text-primary">
            Read Lesson
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
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
          <h2 className="font-body text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
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
