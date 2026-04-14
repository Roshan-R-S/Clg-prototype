export interface Course {
  id: string;
  title: string;
  stream: Stream;
  duration: string;
  description: string;
  eligibility: string;
  career: string;
  image: string;
}

export type Stream = 'commerce' | 'arts' | 'science';

export interface PlacementStat {
  value: number;
  suffix: string;
  label: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  text: string;
}

export interface ShowcaseItem {
  id: string;
  name: string;
  role: string;
  achievement: string;
  image: string;
  text: string;
  type: 'alumni' | 'student';
}

export interface TourLocation {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface NavLink {
  name: string;
  path: string;
  subLinks?: NavLink[];
}

export interface Message {
  id: string;
  role: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface AdmissionFormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  stream: string;
}