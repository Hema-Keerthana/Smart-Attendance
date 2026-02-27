export interface User {
  id: number;
  name: string;
  email: string;
  role: 'student' | 'faculty';
  profile?: any;
}

export interface AttendanceRecord {
  id: number;
  student_id: number;
  student_name?: string;
  roll_no?: string;
  date: string;
  status: string;
  session_id: string;
  subject?: string;
  year?: string;
  semester?: string;
  session_type?: string;
  branch?: string;
}

export interface EngagementScore {
  id: number;
  student_id: number;
  score: number;
  date: string;
}
