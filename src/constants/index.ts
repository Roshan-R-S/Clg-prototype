import type { NavLink } from '@/types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  {
    name: 'About',
    path: '/about',
    subLinks: [
      { name: 'Overview', path: '/about' },
      { name: 'Vision & Mission', path: '/about/vision-mission' },
      { name: 'Punjab Association', path: '/about/punjab-association' },
    ],
  },
  { name: 'Courses', path: '/courses' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Placements', path: '/placements' },
  {
    name: 'Infrastructure',
    path: '/infrastructure',
    subLinks: [
      { name: 'Overview', path: '/infrastructure' },
      { name: 'Campus Life', path: '/campus-life' },
      { name: 'Virtual Tour', path: '/virtual-tour' },
    ],
  },
  { name: 'Contact', path: '/contact' },
];

export const QUICK_PROMPTS = [
  'What courses do you offer?',
  'Tell me about placements',
  'How do I apply?',
  'What are the fees?',
];

export const ADMISSION_STEPS = [
  {
    icon: 'FileText',
    title: 'Online Application',
    description: 'Fill out the online application form with your academic details.',
  },
  {
    icon: 'CheckCircle2',
    title: 'Document Verification',
    description: 'Upload required documents for verification by the admissions committee.',
  },
  {
    icon: 'UserCheck',
    title: 'Interview/Counseling',
    description: 'Shortlisted candidates will be called for a personal interview or counseling session.',
  },
  {
    icon: 'Calendar',
    title: 'Fee Payment',
    description: 'Once selected, confirm your seat by paying the admission fees.',
  },
];

export const CORE_VALUES = [
  { icon: 'Award', title: 'Excellence', description: 'Striving for the highest standards in everything we do.' },
  { icon: 'Heart', title: 'Integrity', description: 'Upholding honesty and ethical behavior in all interactions.' },
  { icon: 'Users', title: 'Inclusivity', description: 'Fostering a diverse and welcoming community for all.' },
  { icon: 'Sparkles', title: 'Innovation', description: 'Embracing new ideas and creative approaches to learning.' },
];

export const CONTACT_INFO = [
  { icon: 'MapPin', title: 'Visit Us', content: 'AI-1, 9th Main Road, Anna Nagar, Chennai - 600040' },
  { icon: 'Phone', title: 'Call Us', content: '+91 44 2621 2089 / 2628 4066' },
  { icon: 'Mail', title: 'Email Us', content: 'info@annaadarsh.edu.in' },
  { icon: 'Clock', title: 'Working Hours', content: 'Mon - Sat: 9:00 AM - 4:00 PM' },
];

export const COLLEGE_INFO = {
  name: 'Anna Adarsh College for Women',
  shortName: 'AACW',
  tagline: 'Excellence in Women\'s Education',
  established: 1985,
  affiliation: 'University of Madras',
  accreditation: 'NAAC A++ Grade (CGPA 3.59)',
  address: {
    street: 'AI, II Street, 9th Main Road',
    area: 'Anna Nagar',
    city: 'Chennai',
    pincode: '600040',
  },
  phone: ['044-26212089', '044-46027711'],
  email: ['aacw.college@gmail.com', 'aacw@annaadarsh.edu.in', 'helpdesk@annaadarsh.edu.in', 'admissions@annaadarsh.edu.in'],
};

export const SOCIAL_LINKS = [
  { name: 'Facebook', url: '#', icon: 'Facebook' },
  { name: 'Instagram', url: '#', icon: 'Instagram' },
  { name: 'Twitter', url: '#', icon: 'Twitter' },
];

export const STREAMS: Array<{ value: string; label: string }> = [
  { value: 'commerce', label: 'Commerce' },
  { value: 'arts', label: 'Arts' },
  { value: 'science', label: 'Science' },
];