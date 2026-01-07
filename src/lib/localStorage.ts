// LocalStorage utilities for admin portal and student auth

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  read: boolean;
}

export interface Student {
  id: string;
  fullName: string;
  email: string;
  password: string; // In production, use proper hashing
  createdAt: string;
}

export interface CourseProgress {
  id: string;
  studentId: string;
  userName: string;
  startedAt: string;
  completedLessons: number[];
  currentLessonIndex: number;
  quizScore: number | null;
  quizPassed: boolean | null;
  certificateIssued: boolean;
  lastActivity: string;
}

const CONTACT_MESSAGES_KEY = 'fol_contact_messages';
const COURSE_PROGRESS_KEY = 'fol_course_progress';
const ADMIN_AUTH_KEY = 'fol_admin_auth';
const STUDENTS_KEY = 'fol_students';
const CURRENT_STUDENT_KEY = 'fol_current_student';

// ============ STUDENT AUTH ============

export const registerStudent = (fullName: string, email: string, password: string): { success: boolean; error?: string; student?: Student } => {
  const students = getStudents();
  
  // Check if email already exists
  if (students.find(s => s.email.toLowerCase() === email.toLowerCase())) {
    return { success: false, error: 'An account with this email already exists' };
  }
  
  const newStudent: Student = {
    id: crypto.randomUUID(),
    fullName,
    email: email.toLowerCase(),
    password, // In production, hash this
    createdAt: new Date().toISOString(),
  };
  
  students.push(newStudent);
  localStorage.setItem(STUDENTS_KEY, JSON.stringify(students));
  
  // Create initial course progress
  saveCourseProgress({
    studentId: newStudent.id,
    userName: fullName,
    completedLessons: [],
    currentLessonIndex: 0,
    quizScore: null,
    quizPassed: null,
    certificateIssued: false,
  });
  
  // Auto login after registration
  localStorage.setItem(CURRENT_STUDENT_KEY, JSON.stringify(newStudent));
  
  return { success: true, student: newStudent };
};

export const loginStudent = (email: string, password: string): { success: boolean; error?: string; student?: Student } => {
  const students = getStudents();
  const student = students.find(s => s.email.toLowerCase() === email.toLowerCase());
  
  if (!student) {
    return { success: false, error: 'No account found with this email' };
  }
  
  if (student.password !== password) {
    return { success: false, error: 'Incorrect password' };
  }
  
  localStorage.setItem(CURRENT_STUDENT_KEY, JSON.stringify(student));
  return { success: true, student };
};

export const logoutStudent = () => {
  localStorage.removeItem(CURRENT_STUDENT_KEY);
};

export const getCurrentStudent = (): Student | null => {
  const data = localStorage.getItem(CURRENT_STUDENT_KEY);
  return data ? JSON.parse(data) : null;
};

export const getStudents = (): Student[] => {
  const data = localStorage.getItem(STUDENTS_KEY);
  return data ? JSON.parse(data) : [];
};

// ============ CONTACT MESSAGES ============

export const saveContactMessage = (message: Omit<ContactMessage, 'id' | 'createdAt' | 'read'>) => {
  const messages = getContactMessages();
  const newMessage: ContactMessage = {
    ...message,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    read: false,
  };
  messages.push(newMessage);
  localStorage.setItem(CONTACT_MESSAGES_KEY, JSON.stringify(messages));
  return newMessage;
};

export const getContactMessages = (): ContactMessage[] => {
  const data = localStorage.getItem(CONTACT_MESSAGES_KEY);
  return data ? JSON.parse(data) : [];
};

export const markMessageAsRead = (id: string) => {
  const messages = getContactMessages();
  const updated = messages.map(m => m.id === id ? { ...m, read: true } : m);
  localStorage.setItem(CONTACT_MESSAGES_KEY, JSON.stringify(updated));
};

export const deleteMessage = (id: string) => {
  const messages = getContactMessages();
  const filtered = messages.filter(m => m.id !== id);
  localStorage.setItem(CONTACT_MESSAGES_KEY, JSON.stringify(filtered));
};

// ============ COURSE PROGRESS ============

export const saveCourseProgress = (progress: Omit<CourseProgress, 'id' | 'startedAt' | 'lastActivity'>) => {
  const allProgress = getCourseProgress();
  const newProgress: CourseProgress = {
    ...progress,
    id: crypto.randomUUID(),
    startedAt: new Date().toISOString(),
    lastActivity: new Date().toISOString(),
  };
  allProgress.push(newProgress);
  localStorage.setItem(COURSE_PROGRESS_KEY, JSON.stringify(allProgress));
  return newProgress;
};

export const updateCourseProgress = (id: string, updates: Partial<CourseProgress>) => {
  const allProgress = getCourseProgress();
  const updated = allProgress.map(p => 
    p.id === id ? { ...p, ...updates, lastActivity: new Date().toISOString() } : p
  );
  localStorage.setItem(COURSE_PROGRESS_KEY, JSON.stringify(updated));
};

export const getCourseProgress = (): CourseProgress[] => {
  const data = localStorage.getItem(COURSE_PROGRESS_KEY);
  return data ? JSON.parse(data) : [];
};

export const getStudentProgress = (studentId: string): CourseProgress | null => {
  const allProgress = getCourseProgress();
  return allProgress.find(p => p.studentId === studentId) || null;
};

export const getOrCreateCourseProgress = (studentId: string, userName: string): CourseProgress => {
  const existing = getStudentProgress(studentId);
  
  if (existing) {
    updateCourseProgress(existing.id, {});
    return existing;
  }
  
  return saveCourseProgress({
    studentId,
    userName,
    completedLessons: [],
    currentLessonIndex: 0,
    quizScore: null,
    quizPassed: null,
    certificateIssued: false,
  });
};

// ============ ADMIN AUTH ============

const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123' // In production, use proper auth
};

export const adminLogin = (username: string, password: string): boolean => {
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    localStorage.setItem(ADMIN_AUTH_KEY, JSON.stringify({ loggedIn: true, timestamp: Date.now() }));
    return true;
  }
  return false;
};

export const isAdminLoggedIn = (): boolean => {
  const data = localStorage.getItem(ADMIN_AUTH_KEY);
  if (!data) return false;
  const auth = JSON.parse(data);
  // Session expires after 24 hours
  const dayInMs = 24 * 60 * 60 * 1000;
  return auth.loggedIn && (Date.now() - auth.timestamp) < dayInMs;
};

export const adminLogout = () => {
  localStorage.removeItem(ADMIN_AUTH_KEY);
};