import { Lesson } from '@/data/courseData';
import { CheckCircle2, Circle, Lock, FileQuestion, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CourseSidebarProps {
  lessons: Lesson[];
  currentLessonIndex: number;
  completedLessons: number[];
  onSelectLesson: (index: number) => void;
  showQuiz: boolean;
  quizPassed: boolean | null;
  onSelectQuiz: () => void;
}

const CourseSidebar = ({
  lessons,
  currentLessonIndex,
  completedLessons,
  onSelectLesson,
  showQuiz,
  quizPassed,
  onSelectQuiz,
}: CourseSidebarProps) => {
  const allLessonsCompleted = completedLessons.length === lessons.length;

  return (
    <div className="bg-card border-r border-border h-full overflow-y-auto">
      {/* Course Header */}
      <div className="p-6 border-b border-border">
        <h2 className="font-body text-lg font-semibold text-foreground">
          Foundations of Faith
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          {completedLessons.length} of {lessons.length} lessons completed
        </p>
        {/* Progress Bar */}
        <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-500"
            style={{ width: `${(completedLessons.length / lessons.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Lessons List */}
      <nav className="p-4 space-y-2">
        {lessons.map((lesson, index) => {
          const isCompleted = completedLessons.includes(lesson.id);
          const isCurrent = !showQuiz && currentLessonIndex === index;
          const isLocked = !isCompleted && index > 0 && !completedLessons.includes(lessons[index - 1].id);

          return (
            <button
              key={lesson.id}
              onClick={() => !isLocked && onSelectLesson(index)}
              disabled={isLocked}
              className={cn(
                "w-full flex items-start gap-3 p-4 rounded-xl text-left transition-all",
                isCurrent && "bg-primary/10 border border-primary/30",
                !isCurrent && !isLocked && "hover:bg-muted",
                isLocked && "opacity-50 cursor-not-allowed"
              )}
            >
              <div className="shrink-0 mt-0.5">
                {isCompleted ? (
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                ) : isLocked ? (
                  <Lock className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <Circle className={cn("w-5 h-5", isCurrent ? "text-primary" : "text-muted-foreground")} />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className={cn(
                  "font-medium text-sm truncate",
                  isCurrent ? "text-primary" : "text-foreground"
                )}>
                  {lesson.id}. {lesson.title}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {lesson.duration}
                </p>
              </div>
            </button>
          );
        })}

        {/* Quiz Section */}
        <div className="pt-4 mt-4 border-t border-border">
          <button
            onClick={onSelectQuiz}
            disabled={!allLessonsCompleted}
            className={cn(
              "w-full flex items-start gap-3 p-4 rounded-xl text-left transition-all",
              showQuiz && "bg-accent/10 border border-accent/30",
              !showQuiz && allLessonsCompleted && "hover:bg-muted",
              !allLessonsCompleted && "opacity-50 cursor-not-allowed"
            )}
          >
            <div className="shrink-0 mt-0.5">
              {quizPassed ? (
                <Award className="w-5 h-5 text-gold" />
              ) : !allLessonsCompleted ? (
                <Lock className="w-5 h-5 text-muted-foreground" />
              ) : (
                <FileQuestion className={cn("w-5 h-5", showQuiz ? "text-accent" : "text-muted-foreground")} />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className={cn(
                "font-medium text-sm",
                showQuiz ? "text-accent" : "text-foreground"
              )}>
                Final Assessment
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {quizPassed ? "Passed!" : "10 questions • 70% to pass"}
              </p>
            </div>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default CourseSidebar;
