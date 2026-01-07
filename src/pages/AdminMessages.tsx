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
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Mail,
  LogOut,
  Home,
  Eye,
  Trash2,
  RefreshCw,
  ArrowLeft,
} from 'lucide-react';

/* ================= CONFIG ================= */

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

/* ================= TYPES ================= */

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt: string;
};

/* ================= COMPONENT ================= */

const AdminMessages = () => {
  const navigate = useNavigate();

  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [selectedMessage, setSelectedMessage] =
    useState<ContactMessage | null>(null);

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

  const fetchMessages = async () => {
    const res = await fetch(`${API_URL}/api/contact`, {
      credentials: 'include',
    });

    if (res.ok) {
      const data = await res.json();
      setMessages(data);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  /* ================= ACTIONS ================= */

  const handleLogout = async () => {
    await fetch(`${API_URL}/api/admin/logout`, {
      method: 'POST',
      credentials: 'include',
    });
    navigate('/admin');
  };

  const handleViewMessage = async (message: ContactMessage) => {
    setSelectedMessage(message);

    if (!message.read) {
      await fetch(`${API_URL}/api/contact/${message.id}/read`, {
        method: 'PATCH',
        credentials: 'include',
      });

      fetchMessages();
    }
  };

  const handleDeleteMessage = async (id: string) => {
    if (!confirm('Delete this message permanently?')) return;

    await fetch(`${API_URL}/api/contact/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    });

    setSelectedMessage(null);
    fetchMessages();
  };

  /* ================= HELPERS ================= */

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

  const unreadCount = messages.filter(m => !m.read).length;

  /* ================= RENDER ================= */

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            

            <h1 className="text-xl font-bold">Contact Messages</h1>

            {unreadCount > 0 && (
              <Badge variant="destructive">{unreadCount} unread</Badge>
            )}

            <Button variant="ghost" size="sm" onClick={fetchMessages}>
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Link to="/">
              <Button variant="outline" size="sm">
                <Home className="w-4 h-4 mr-2" />
               
              </Button>
            </Link>
            <Button variant="destructive" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Messages List */}
          <Card>
            <CardHeader>
              <CardTitle>All Messages</CardTitle>
              <CardDescription>
                Messages submitted through the contact form
              </CardDescription>
            </CardHeader>
            <CardContent>
              {messages.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <Mail className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No messages yet</p>
                </div>
              ) : (
                <ScrollArea className="h-[600px]">
                  <div className="space-y-2">
                    {messages.map(message => (
                      <button
                        key={message.id}
                        onClick={() => handleViewMessage(message)}
                        className={`w-full text-left p-4 border rounded-lg transition-colors ${
                          selectedMessage?.id === message.id
                            ? 'border-primary bg-primary/5'
                            : 'hover:bg-muted/50'
                        } ${!message.read ? 'bg-accent/5' : ''}`}
                      >
                        <div className="flex justify-between gap-2">
                          <div className="min-w-0">
                            <div className="flex gap-2 items-center">
                              <h4 className="font-medium truncate">
                                {message.name}
                              </h4>
                              {!message.read && (
                                <Badge
                                  variant="destructive"
                                  className="text-[10px]"
                                >
                                  New
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground truncate">
                              {message.subject}
                            </p>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {formatDate(message.createdAt)}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </ScrollArea>
              )}
            </CardContent>
          </Card>

          {/* Message Detail */}
          <Card>
            <CardHeader>
              <CardTitle>Message Detail</CardTitle>
            </CardHeader>
            <CardContent>
              {selectedMessage ? (
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-muted-foreground">From</span>
                    <p className="font-medium">{selectedMessage.name}</p>
                  </div>

                  <div>
                    <span className="text-sm text-muted-foreground">Email</span>
                    <p>
                      <a
                        href={`mailto:${selectedMessage.email}`}
                        className="text-primary hover:underline"
                      >
                        {selectedMessage.email}
                      </a>
                    </p>
                  </div>

                  <div>
                    <span className="text-sm text-muted-foreground">Subject</span>
                    <p className="capitalize">{selectedMessage.subject}</p>
                  </div>

                  <div>
                    <span className="text-sm text-muted-foreground">Date</span>
                    <p>{formatDate(selectedMessage.createdAt)}</p>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="whitespace-pre-wrap">
                      {selectedMessage.message}
                    </p>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button asChild variant="outline" className="flex-1">
                      <a href={`mailto:${selectedMessage.email}`}>
                        <Mail className="w-4 h-4 mr-2" />
                        Reply
                      </a>
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() =>
                        handleDeleteMessage(selectedMessage.id)
                      }
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <Eye className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Select a message to view details</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminMessages;
