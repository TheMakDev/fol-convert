import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { lessons, quizQuestions } from '@/data/courseData';
import CourseSidebar from '@/components/course/CourseSidebar';
import LessonContent from '@/components/course/LessonContent';
import LessonQuiz from '@/components/course/LessonQuiz';
import Quiz from '@/components/course/Quiz';
import Certificate from '@/components/course/Certificate';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  logoutStudent,
  updateCourseProgress,
  getOrCreateCourseProgress,
  Student
} from '@/lib/localStorage';

const API_BASE_URL = "https://fols-backend.onrender.com/api/students";

type CourseView = 'lesson' | 'lesson-quiz' | 'final-quiz' | 'certificate';

const Course = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState<Student | null>(null);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [lessonQuizCompleted, setLessonQuizCompleted] = useState<number[]>([]);
  const [currentView, setCurrentView] = useState<CourseView>('lesson');
  const [quizPassed, setQuizPassed] = useState<boolean | null>(null);
  const [showCertificate, setShowCertificate] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [progressId, setProgressId] = useState<string | null>(null);

  const currentLesson = lessons[currentLessonIndex];
  const isLastLesson = currentLessonIndex === lessons.length - 1;
  const allLessonsCompleted = completedLessons.length === lessons.length;

  const currentLessonQuizQuestions = quizQuestions.filter(
    q => q.lessonId === currentLesson.id
  );

  // === FETCH STUDENT FROM API (OLD COURSE BEHAVIOR) ===
  useEffect(() => {
    const loadStudentAndProgress = async () => {
      try {
        const studentRes = await fetch(`${API_BASE_URL}/me`, {
          credentials: 'include',
        });
        if (!studentRes.ok) throw new Error();

        const studentData = await studentRes.json();
        setStudent(studentData);

        const progress = getOrCreateCourseProgress(
          studentData.id,
          studentData.fullName
        );

        setProgressId(progress.id);
        setCompletedLessons(progress.completedLessons);
        setLessonQuizCompleted(progress.lessonQuizCompleted || []);
        setCurrentLessonIndex(progress.currentLessonIndex || 0);

        if (progress.quizPassed !== null) setQuizPassed(progress.quizPassed);
        if (progress.quizScore !== null) setFinalScore(progress.quizScore);

        if (progress.certificateIssued) {
          setShowCertificate(true);
          setCurrentView('certificate');
        }
      } catch {
        navigate('/student/auth');
      }
    };

    loadStudentAndProgress();
  }, [navigate]);

  // === PERSIST PROGRESS ===
  useEffect(() => {
    if (!progressId) return;

    updateCourseProgress(progressId, {
      completedLessons,
      currentLessonIndex,
      lessonQuizCompleted,
    });
  }, [progressId, completedLessons, currentLessonIndex, lessonQuizCompleted]);

  const handleLogout = async () => {
    await fetch(`${API_BASE_URL}/logout`, {
      method: 'POST',
      credentials: 'include',
    });
    logoutStudent();
    navigate('/student/auth');
  };

  const handleCompleteLesson = () => {
    setCurrentView('lesson-quiz');
    setSidebarOpen(false);
  };

  const handleLessonQuizComplete = (passed: boolean) => {
    if (passed) {
      if (!completedLessons.includes(currentLesson.id)) {
        setCompletedLessons(prev => [...prev, currentLesson.id]);
      }
      if (!lessonQuizCompleted.includes(currentLesson.id)) {
        setLessonQuizCompleted(prev => [...prev, currentLesson.id]);
      }

      if (isLastLesson) {
        setCurrentView('final-quiz');
      } else {
        setCurrentLessonIndex(prev => prev + 1);
        setCurrentView('lesson');
      }
    }
    setSidebarOpen(false);
  };

  const handleSelectLesson = (index: number) => {
    setCurrentLessonIndex(index);
    setCurrentView('lesson');
    setShowCertificate(false);
    setSidebarOpen(false);
  };

  const handleSelectFinalQuiz = () => {
    if (allLessonsCompleted) {
      setCurrentView('final-quiz');
      setShowCertificate(false);
      setSidebarOpen(false);
    }
  };

  const handleFinalQuizComplete = (passed: boolean, score: number) => {
    setQuizPassed(passed);
    setFinalScore(score);

    if (progressId) {
      updateCourseProgress(progressId, {
        completedLessons,
        quizScore: score,
        quizPassed: passed,
        certificateIssued: passed,
      });
    }

    if (passed) {
      setShowCertificate(true);
      setCurrentView('certificate');
    }
  };

  if (!student) return null;

  const renderContent = () => {
    if (showCertificate || currentView === 'certificate') {
      return <Certificate score={finalScore} userName={student.fullName} />;
    }

    if (currentView === 'final-quiz') {
      return (
        <Quiz
          questions={quizQuestions}
          onComplete={handleFinalQuizComplete}
          userName={student.fullName}
        />
      );
    }

    if (currentView === 'lesson-quiz') {
      return (
        <LessonQuiz
          questions={currentLessonQuizQuestions}
          lessonTitle={currentLesson.title}
          onComplete={handleLessonQuizComplete}
        />
      );
    }

    return (
      <LessonContent
        lesson={currentLesson}
        onComplete={handleCompleteLesson}
        isLastLesson={isLastLesson}
      />
    );
  };

  return (
    <div className="min-h-screen bg-background flex print:block">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border print:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => setSidebarOpen(true)} className="p-2 hover:bg-muted rounded-lg">
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="font-heading font-semibold text-foreground">
            Foundations of Faith
          </h1>
          <button onClick={handleLogout} className="p-2 hover:bg-muted rounded-lg">
            <LogOut className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 print:hidden">
          <div className="absolute inset-0 bg-foreground/50" onClick={() => setSidebarOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85%] animate-slide-in-right">
            <div className="absolute top-4 right-4">
              <button onClick={() => setSidebarOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <CourseSidebar
              lessons={lessons}
              currentLessonIndex={currentLessonIndex}
              completedLessons={completedLessons}
              lessonQuizCompleted={lessonQuizCompleted}
              onSelectLesson={handleSelectLesson}
              showFinalQuiz={currentView === 'final-quiz'}
              quizPassed={quizPassed}
              onSelectFinalQuiz={handleSelectFinalQuiz}
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
          lessonQuizCompleted={lessonQuizCompleted}
          onSelectLesson={handleSelectLesson}
          showFinalQuiz={currentView === 'final-quiz'}
          quizPassed={quizPassed}
          onSelectFinalQuiz={handleSelectFinalQuiz}
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border bg-card">
          <p className="text-sm text-muted-foreground text-center">
            Welcome, <span className="font-medium text-foreground">{student.fullName}</span>
          </p>
          <div className="flex gap-2 mt-2">
            <Link to="/" className="flex-1">
              <Button variant="outline" className="w-full" size="sm">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
            </Link>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={cn(
        "flex-1 lg:ml-80 pt-16 lg:pt-0 print:ml-0 print:pt-0",
        showCertificate && "print:bg-transparent"
      )}>
        <div className="max-w-3xl mx-auto px-4 py-8 lg:py-16">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Course;
