import { Lesson } from '@/data/courseData';
import { BookOpen, CheckCircle2, Quote, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LessonContentProps {
  lesson: Lesson;
  onComplete: () => void;
  isLastLesson: boolean;
}

const LessonContent = ({ lesson, onComplete, isLastLesson }: LessonContentProps) => {
  return (
    <div className="space-y-8 animate-fade-up">
      {/* Lesson Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-accent text-sm font-medium">
          <BookOpen className="w-5 h-5" />
          <span>Lesson {lesson.id} • {lesson.duration} read</span>
        </div>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          {lesson.title}
        </h1>
      </div>

      {/* Introduction */}
      <p className="text-lg text-foreground/90 leading-relaxed border-l-4 border-primary pl-6">
        {lesson.content.introduction}
      </p>

      {/* Main Content - Sections */}
      <div className="space-y-10">
        {lesson.content.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground border-b border-border/30 pb-3">
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.content.map((paragraph, paragraphIndex) => (
                <p 
                  key={paragraphIndex} 
                  className="text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
                      .replace(/•/g, '<span class="text-primary">•</span>')
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Scripture Quote */}
      <div className="bg-gold/10 rounded-2xl p-8 border border-gold/20">
        <Quote className="w-8 h-8 text-gold mb-4" />
        <blockquote className="text-lg italic text-foreground mb-3">
          "{lesson.content.scripture.text}"
        </blockquote>
        <cite className="text-gold font-medium">
          — {lesson.content.scripture.reference}
        </cite>
      </div>

      {/* Key Points */}
      <div className="bg-card rounded-2xl p-8 border border-border/30">
        <h3 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
          <Lightbulb className="w-6 h-6 text-accent" />
          Key Points to Remember
        </h3>
        <ul className="space-y-4">
          {lesson.content.keyPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Reflection */}
      <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
        <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
          Take a Moment to Reflect
        </h3>
        <p className="text-muted-foreground italic leading-relaxed">
          {lesson.content.reflection}
        </p>
      </div>

      {/* Complete Button */}
      <div className="pt-6 flex justify-end">
        <Button variant="gold" size="lg" onClick={onComplete}>
          Take Lesson Quiz
        </Button>
      </div>
    </div>
  );
};

export default LessonContent;