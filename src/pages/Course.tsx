import { useState } from 'react';
import { Link } from 'react-router-dom';
import { lessons, quizQuestions } from '@/data/courseData';
import CourseSidebar from '@/components/course/CourseSidebar';
import LessonContent from '@/components/course/LessonContent';
import Quiz from '@/components/course/Quiz';
import Certificate from '@/components/course/Certificate';
import { Button } from '@/components/ui/button';
import { Menu, X, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

const Course = () => {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizPassed, setQuizPassed] = useState<boolean | null>(null);
  const [showCertificate, setShowCertificate] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [userName, setUserName] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentLesson = lessons[currentLessonIndex];
  const isLastLesson = currentLessonIndex === lessons.length - 1;
  const allLessonsCompleted = completedLessons.length === lessons.length;

  const handleCompleteLesson = () => {
    if (!completedLessons.includes(currentLesson.id)) {
      setCompletedLessons(prev => [...prev, currentLesson.id]);
    }
    
    if (isLastLesson) {
      setShowQuiz(true);
    } else {
      setCurrentLessonIndex(prev => prev + 1);
    }
    setSidebarOpen(false);
  };

  const handleSelectLesson = (index: number) => {
    setCurrentLessonIndex(index);
    setShowQuiz(false);
    setShowCertificate(false);
    setSidebarOpen(false);
  };

  const handleSelectQuiz = () => {
    if (allLessonsCompleted) {
      setShowQuiz(true);
      setShowCertificate(false);
      setSidebarOpen(false);
    }
  };

  const handleQuizComplete = (passed: boolean, score: number, name: string) => {
    setQuizPassed(passed);
    setFinalScore(score);
    setUserName(name);
    if (passed) {
      setShowCertificate(true);
    }
  };

  return (
    <div className="min-h-screen bg-background flex print:block">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border print:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-muted rounded-lg"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="font-heading font-semibold text-foreground">
            Foundations of Faith
          </h1>
          <Link to="/" className="p-2 hover:bg-muted rounded-lg">
            <Home className="w-6 h-6" />
          </Link>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 print:hidden">
          <div
            className="absolute inset-0 bg-foreground/50"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85%] animate-slide-in-right">
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 hover:bg-muted rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <CourseSidebar
              lessons={lessons}
              currentLessonIndex={currentLessonIndex}
              completedLessons={completedLessons}
              onSelectLesson={handleSelectLesson}
              showQuiz={showQuiz && !showCertificate}
              quizPassed={quizPassed}
              onSelectQuiz={handleSelectQuiz}
            />
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-80 fixed left-0 top-0 bottom-0 print:hidden">
        <CourseSidebar
          lessons={lessons}
          currentLessonIndex={currentLessonIndex}
          completedLessons={completedLessons}
          onSelectLesson={handleSelectLesson}
          showQuiz={showQuiz && !showCertificate}
          quizPassed={quizPassed}
          onSelectQuiz={handleSelectQuiz}
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border bg-card">
          <Link to="/">
            <Button variant="outline" className="w-full">
              <Home className="w-4 h-4 mr-2" />
              Return to Home
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className={cn(
        "flex-1 lg:ml-80 pt-16 lg:pt-0 print:ml-0 print:pt-0",
        showCertificate && "print:bg-transparent"
      )}>
        <div className="max-w-3xl mx-auto px-4 py-8 lg:py-16">
          {showCertificate ? (
            <Certificate score={finalScore} userName={userName} />
          ) : showQuiz ? (
            <Quiz questions={quizQuestions} onComplete={handleQuizComplete} />
          ) : (
            <LessonContent
              lesson={currentLesson}
              onComplete={handleCompleteLesson}
              isLastLesson={isLastLesson}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default Course;
