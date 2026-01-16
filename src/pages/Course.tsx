import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { lessons, quizQuestions } from '@/data/courseData';
import CourseSidebar from '@/components/course/CourseSidebar';
import LessonContent from '@/components/course/LessonContent';
import Quiz from '@/components/course/Quiz';
import Certificate from '@/components/course/Certificate';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

const API_BASE_URL = "https://fols-backend.onrender.com/api/students";

type Student = { id: string; fullName: string; email: string };

const Course = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState<Student | null>(null);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizPassed, setQuizPassed] = useState<boolean | null>(null);
  const [showCertificate, setShowCertificate] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentLesson = lessons[currentLessonIndex];
  const isLastLesson = currentLessonIndex === lessons.length - 1;
  const allLessonsCompleted = completedLessons.length === lessons.length;

  // --- Load student + progress ---
  useEffect(() => {
    const loadStudentAndProgress = async () => {
      try {
        const studentRes = await fetch(`${API_BASE_URL}/me`, { credentials: "include" });
        if (!studentRes.ok) throw new Error();
        const studentData = await studentRes.json();
        setStudent(studentData);

        const progressRes = await fetch(`${API_BASE_URL}/progress`, { credentials: "include" });
        if (progressRes.ok) {
          const progress = await progressRes.json();
          setCompletedLessons(progress.completedLessons || []);
          setCurrentLessonIndex(progress.currentLessonIndex || 0);
          setQuizPassed(progress.quizPassed);
          setFinalScore(progress.quizScore || 0);
          if (progress.certificateIssued) setShowCertificate(true);
        }
      } catch {
        navigate('/student/auth');
      }
    };

    loadStudentAndProgress();
  }, [navigate]);

  // --- Persist progress ---
  useEffect(() => {
    if (!student) return;
    fetch(`${API_BASE_URL}/progress`, {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        completedLessons,
        currentLessonIndex,
        quizPassed,
        quizScore: finalScore,
        certificateIssued: showCertificate,
      }),
    });
  }, [completedLessons, currentLessonIndex, quizPassed, finalScore, showCertificate, student]);

  const handleLogout = async () => {
    await fetch(`${API_BASE_URL}/logout`, { method: "POST", credentials: "include" });
    navigate('/student/auth');
  };

  const handleCompleteLesson = () => {
    if (!completedLessons.includes(currentLesson.id)) setCompletedLessons([...completedLessons, currentLesson.id]);
    if (isLastLesson) setShowQuiz(true);
    else setCurrentLessonIndex(currentLessonIndex + 1);
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

  const handleQuizComplete = async (passed: boolean, score: number) => {
    setQuizPassed(passed);
    setFinalScore(score);

    await fetch(`${API_BASE_URL}/progress`, {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        completedLessons,
        quizPassed: passed,
        quizScore: score,
        certificateIssued: passed,
      }),
    });

    if (passed) setShowCertificate(true);
  };

  if (!student) return null;

  return (
    <div className="min-h-screen bg-background flex print:block">
      {/* Mobile header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border print:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => setSidebarOpen(true)} className="p-2 hover:bg-muted rounded-lg"><Menu className="w-6 h-6" /></button>
          <h1 className="font-body font-semibold text-foreground">Foundations of Faith</h1>
          <button onClick={handleLogout} className="p-2 hover:bg-muted rounded-lg"><LogOut className="w-6 h-6" /></button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 print:hidden">
          <div className="absolute inset-0 bg-foreground/50" onClick={() => setSidebarOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85%] animate-slide-in-right">
            <div className="absolute top-4 right-4"><button onClick={() => setSidebarOpen(false)}><X className="w-6 h-6" /></button></div>
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
          <p className="text-sm text-muted-foreground text-center">Welcome, <span className="font-medium text-foreground">{student.fullName}</span></p>
          <div className="flex gap-2 mt-2">
            <Link to="/" className="flex-1"><Button variant="outline" className="w-full" size="sm"><Home className="w-4 h-4 mr-2"/>Home</Button></Link>
            <Button variant="ghost" size="sm" onClick={handleLogout}><LogOut className="w-4 h-4"/></Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className={cn("flex-1 lg:ml-80 pt-16 lg:pt-0 print:ml-0 print:pt-0", showCertificate && "print:bg-transparent")}>
        <div className="max-w-3xl mx-auto px-4 py-8 lg:py-16">
          {showCertificate ? (
            <Certificate score={finalScore} userName={student.fullName}/>
          ) : showQuiz ? (
            <Quiz questions={quizQuestions} onComplete={handleQuizComplete} userName={student.fullName}/>
          ) : (
            <LessonContent lesson={currentLesson} onComplete={handleCompleteLesson} isLastLesson={isLastLesson}/>
          )}
        </div>
      </main>
    </div>
  );
};

export default Course;
