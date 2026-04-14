import type { Message } from '@/types';
import { QUICK_PROMPTS } from '@/constants';

const RESPONSES: Record<string, string> = {
  courses: `We offer a wide range of undergraduate and postgraduate programs:

**Undergraduate Programs:**
- B.Com (General, Corporate Secretaryship, Accounting & Finance, Bank Management)
- BBA (Bachelor of Business Administration)
- B.Sc. (Computer Science, Mathematics, Physics, Chemistry, Psychology)
- B.A. (English Literature, Economics)

**Postgraduate Programs:**
- M.Com, M.Sc., M.A. in various disciplines

**Eligibility:** 10+2 with relevant subjects for UG programs. Would you like to know more about any specific program?`,

  placements: `Our placement cell is very active! Here are some highlights:

**Placement Statistics:**
- 95%+ placement rate for eligible students
- 100+ companies visit campus annually
- Top recruiters: Infosys, TCS, Wipro, Cognizant, HDFC Bank
- Average package: ₹4-6 LPA
- Highest package: ₹12+ LPA

**Career Support:**
- Resume building workshops
- Mock interviews
- Industry connect sessions
- Internship opportunities

Would you like to know about our placement partners?`,

  apply: `Great! Here's how to apply:

**Online Application Process:**
1. Visit our official website
2. Fill out the online application form
3. Upload required documents (marksheets, ID proof, photos)
4. Pay the application fee online
5. Submit and receive confirmation

**Required Documents:**
- 10th & 12th marksheets
- Transfer certificate
- Conduct certificate
- Passport size photographs
- ID proof

Applications for 2026-27 are now open! Would you like me to guide you through specific steps?`,

  fees: `Here's an overview of our fee structure:

**UG Programs:**
- B.Com: ₹45,000 - ₹55,000/year
- BBA: ₹50,000 - ₹60,000/year
- B.Sc.: ₹55,000 - ₹70,000/year
- B.A.: ₹40,000 - ₹50,000/year

**PG Programs:**
- Varies by specialization: ₹60,000 - ₹80,000/year

**Additional Fees:**
- Lab fees (for science programs)
- Library & infrastructure fees
- Examination fees

**Scholarships available for:**
- Meritorious students
- Economically weaker sections
- Sports achievers

Would you like specific fee details for any program?`,

  hostel: `Yes, we have a well-maintained hostel facility!

**Hostel Features:**
- Safe and secure environment
- 24/7 security and CCTV surveillance
- Vegetarian and non-vegetarian mess
- AC and non-AC rooms available
- Study rooms and common areas
- Recreational facilities

**Hostel Fees:**
- Single occupancy: ₹75,000/year
- Double sharing: ₹55,000/year
- Mess charges: Additional

The hostel is within the campus premises. Would you like to know about availability?`,

  default: `Hello! I'm your AI Admissions Counsellor for Anna Adarsh College for Women. I can help you with:

📌 Course information and eligibility
📌 Admission process and requirements  
📌 Fee structure and scholarships
📌 Campus facilities and hostel
📌 Placement records

Feel free to ask any question! For urgent queries, you can also contact us at:
📧 admissions@annaadarsh.edu.in
📞 044-26212089`,
};

function getIntent(message: string): string {
  const lower = message.toLowerCase();
  
  if (lower.includes('course') || lower.includes('program') || lower.includes('b.com') || lower.includes('bba') || lower.includes('b.sc') || lower.includes('b.a')) {
    return 'courses';
  }
  if (lower.includes('placement') || lower.includes('job') || lower.includes('career') || lower.includes('recruit')) {
    return 'placements';
  }
  if (lower.includes('apply') || lower.includes('admission') || lower.includes('how to') || lower.includes('process') || lower.includes('enroll')) {
    return 'apply';
  }
  if (lower.includes('fee') || lower.includes('cost') || lower.includes('scholarship') || lower.includes('payment')) {
    return 'fees';
  }
  if (lower.includes('hostel') || lower.includes('accommodation') || lower.includes('stay')) {
    return 'hostel';
  }
  
  return 'default';
}

export async function getCounsellorResponse(
  message: string,
  _history: Message[]
): Promise<string> {
  await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 700));
  
  const intent = getIntent(message);
  return RESPONSES[intent] || RESPONSES.default;
}

export function getQuickPrompts(): string[] {
  return QUICK_PROMPTS;
}