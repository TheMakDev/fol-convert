import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Users,
  Mail,
  LogOut,
  Home,
  BookOpen,
  Award,
  Clock,
  CheckCircle,
  XCircle,
  RefreshCw,
  ArrowRight,
  Trash2,
} from 'lucide-react';
import { lessons } from '@/data/courseData';

/* ================= CONFIG ================= */

const API_URL =
  import.meta.env.VITE_API_URL || 'https://fols-backend.onrender.com';

/* ================= TYPES ================= */

export type CourseProgress = {
  id: string;
  userName: string;
  email: string;
  startedAt: string;
  completedLessons: number[];
  quizPassed: boolean | null;
  quizScore: number | null;
  certificateIssued: boolean;
  lastActivity: string;
};

/* ================= COMPONENT ================= */

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [progress, setProgress] = useState<CourseProgress[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);

  /* ================= AUTH ================= */

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(`${API_URL}/api/admin/me`, {
          credentials: 'include',
        });
        if (!res.ok) navigate('/admin');
      } catch {
        navigate('/admin');
      }
    };

    checkAuth();
  }, [navigate]);

  /* ================= DATA ================= */

  const fetchStudents = async () => {
    const res = await fetch(`${API_URL}/api/admin/students-progress`, {
      credentials: 'include',
    });
    if (res.ok) setProgress(await res.json());
  };

  const fetchUnreadMessages = async () => {
    const res = await fetch(`${API_URL}/api/contact/unread-count`, {
      credentials: 'include',
    });
    if (res.ok) {
      const { count } = await res.json();
      setUnreadCount(count);
    }
  };

  const refreshData = () => {
    fetchStudents();
    fetchUnreadMessages();
  };

  useEffect(() => {
    refreshData();
  }, []);

  /* ================= ACTIONS ================= */

  const handleLogout = async () => {
    try {
      await fetch(`${API_URL}/api/admin/logout`, {
        method: 'POST',
        credentials: 'include',
      });
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      navigate('/admin', { replace: true });
    }
  };

  const handleDeleteStudent = async (id: string) => {
    if (!confirm('Delete this student permanently?')) return;

    await fetch(`${API_URL}/api/admin/students/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    });

    refreshData();
  };

  /* ================= HELPERS ================= */

  const getProgressPercent = (p: CourseProgress) =>
    Math.round((p.completedLessons.length / lessons.length) * 100);

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

  const totalStudents = progress.length;
  const completedStudents = progress.filter(
    p => p.certificateIssued
  ).length;
  const inProgressStudents = progress.filter(
    p => !p.certificateIssued && p.completedLessons.length > 0
  ).length;

  /* ================= RENDER ================= */

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold font-body">Admin Dashboard</h1>
            <Button size="sm" variant="ghost" onClick={refreshData}>
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex gap-2">
            <Link to="/">
              <Button size="sm" variant="outline">
                <Home className="w-4 h-4 mr-2" /> View Site
              </Button>
            </Link>
            <Button size="sm" variant="destructive" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6 flex gap-4">
              <Users />
              {totalStudents} Students
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 flex gap-4">
              <BookOpen />
              {inProgressStudents} In Progress
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 flex gap-4">
              <Award />
              {completedStudents} Certified
            </CardContent>
          </Card>

          <Link to="/admin/messages">
            <Card className="hover:border-primary cursor-pointer">
              <CardContent className="pt-6 flex gap-4">
                <Mail /> {unreadCount} Unread
                <ArrowRight className="ml-auto opacity-50" />
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Students */}
        <Card>
          <CardHeader>
            <CardTitle className='font-body'>Course Progress</CardTitle>
            <CardDescription>
              Students enrolled in the course
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[500px] space-y-4">
              {progress.map(student => (
                <div key={student.id} className="p-4 border rounded-lg font-body">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-semibold font-body text-foreground uppercase">
                        {student.userName}
                        <span className="ml-2 text-sm text-muted-foreground font-body lowercase">
                          ({student.email})
                        </span>
                      </h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Started {formatDate(student.startedAt)}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      {student.certificateIssued ? (
                        <Badge>
                          <Award className="w-3 h-3 mr-1" /> Certified
                        </Badge>
                      ) : (
                        <Badge variant="secondary">In Progress</Badge>
                      )}
                      <Button
                        size="icon"
                        variant="destructive"
                        onClick={() =>
                          handleDeleteStudent(student.id)
                        }
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <Progress
                    value={getProgressPercent(student)}
                    className="mt-3"
                  />

                  {student.quizScore !== null && (
                    <div className="mt-2 flex items-center gap-2 text-sm">
                      {student.quizPassed ? (
                        <CheckCircle className="text-green-500 w-4 h-4" />
                      ) : (
                        <XCircle className="text-destructive w-4 h-4" />
                      )}
                      Quiz: {student.quizScore}%
                    </div>
                  )}

                  <p className="text-xs text-muted-foreground mt-1">
                    Last activity: {formatDate(student.lastActivity)}
                  </p>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;
