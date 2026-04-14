import { motion } from 'motion/react';
import { Heart, Brain, Users, Sparkles, Phone, Clock, CheckCircle2, MessageCircle } from 'lucide-react';
import { Card, Badge, Section, SectionHeader } from '@/components/ui';

const team = [
  { name: 'Dr. Malathi Karthiban', role: 'Counselling Psychologist', description: '27 years of experience in mental health, trainer and mentor.' },
  { name: 'Nikitha', role: 'Junior Counsellor', description: 'Masters in Counselling Psychology from MSSW. Patient and non-judgmental.' },
  { name: 'Priya', role: 'Junior Counsellor', description: 'Masters in Psychology. Passionate about working with students.' },
  { name: 'Vanmathi', role: 'Coordinator', description: 'Energetic and active person with diverse life experience.' },
];

const services = ['Individual Counselling', 'Group Counselling', 'Training Programs', 'Life Skills Workshops', 'Social Skills Training', 'Career Guidance'];

const benefits = [
  'Better coping mechanisms to everyday challenges',
  'Healthier understanding of relationships',
  'Improved mental health and academic performance',
  'Enhanced social skills and interaction',
  'Increased confidence and resilience',
  'Prioritizing value-based living',
];

const outreach = [
  { title: 'Students', description: 'Individual and group sessions where they can open up freely about anything.' },
  { title: 'Parents', description: 'Regular meetings to ensure right parenting and education about current generation issues.' },
  { title: 'Teachers', description: 'Skill updating programs and special impact sessions on understanding student worlds.' },
];

export default function CampusLife() {
  return (
    <div className="min-h-screen pb-20">
      <Hero />
      <AboutSection />
      <VisionMissionSection />
      <TeamSection />
      <ServicesSection />
      <OutreachSection />
      <ContactSection />
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-secondary py-24 px-6 text-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <Badge variant="primary" size="md">
            Holistic Wellness
          </Badge>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-none"
          >
            Adarsh Student <span className="text-primary">Counselling</span> Centre
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg leading-relaxed max-w-xl"
          >
            A model centre dedicated to the mental health and holistic wellness of our students, empowering them to
            face life's challenges with confidence.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-[3rem] overflow-hidden border-4 border-slate-200 shadow-2xl">
            <img
              src="https://picsum.photos/seed/counselling/800/600"
              alt="Counselling Centre"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
            <Brain size={32} />
          </div>
          <h2 className="text-4xl font-bold tracking-tight">A Model for Wellness</h2>
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>
              The Adarsh Student Counselling Centre is one of a kind, which stands as a Model Centre to the Chennai
              city colleges. It is the brainchild of our Respectable General Secretary Shri Ramesh Lamba, inaugurated
              on 23rd March 2019.
            </p>
            <p>
              The centre provides individual and group counselling exclusively to the students and also focuses on the
              integrative wellbeing of our teachers and parents. Adarsh Student Counselling Centre, the nucleus of
              planning, is our headquarters at Anna Nagar.
            </p>
            <p>
              We are a team of 5—Chief Counsellor, 3 Junior Counsellors and a Coordinator. We are committed to give a
              patient ear to the day-to-day concerns and personal conflicts of our students and empower them to be more
              resilient.
            </p>
          </div>
        </div>
        <Card className="space-y-8" padding="lg">
          <h3 className="text-2xl font-bold text-slate-900">The Need for Counselling</h3>
          <p className="text-slate-600 leading-relaxed italic">
            "In this fast-paced life, competition starts from school and it is encouraging as long as it is healthy.
            But in the race of coming first in the academic pursuits, the students are subjected to a new wave of
            pressure that our previous generations have not faced..."
          </p>
          <p className="text-slate-600 leading-relaxed">
            This exposure makes them vulnerable to peer pressure and a variety of other critical problems related to
            relationships, low self-esteem, exam fear, and more. The answer starts with an open ear and a consoling
            heart.
          </p>
        </Card>
      </div>
    </section>
  );
}

function VisionMissionSection() {
  return (
    <section className="py-32 px-6 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <Card className="space-y-6" padding="lg">
          <h3 className="text-2xl font-bold text-primary">Vision</h3>
          <p className="text-slate-600 leading-relaxed">
            To create a student community that thrives with progressing mental health and increased mental peace. This
            can be achieved with the right understanding of fellow beings and society.
          </p>
        </Card>
        <Card className="space-y-6" padding="lg">
          <h3 className="text-2xl font-bold text-primary">Mission</h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
              <p className="text-slate-600">
                To create a human-centric approach where every student is heard from their heart and mind.
              </p>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
              <p className="text-slate-600">
                To focus on creating a healthy ecosystem of students, teachers and parents, to wholly benefit the
                society.
              </p>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <Section background="white">
      <SectionHeader badge="Our Team" title="Our Dedicated Team" subtitle="Meet the professionals committed to your wellbeing." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
          >
            <Card className="space-y-4" padding="md">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-primary text-xs font-semibold uppercase tracking-widest">{member.role}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{member.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function ServicesSection() {
  return (
    <section className="py-32 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <h2 className="text-4xl font-bold tracking-tight">Services Provided</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm">
                <Sparkles className="text-primary" size={20} />
                <span className="font-semibold text-slate-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-12">
          <h2 className="text-4xl font-bold tracking-tight">Spreading Happiness</h2>
          <div className="space-y-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 size={14} />
                </div>
                <p className="text-slate-600 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OutreachSection() {
  return (
    <Section background="white">
      <SectionHeader badge=" Outreach" title="Who We Reach Out To" subtitle="" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {outreach.map((target, idx) => (
          <Card key={idx} className="space-y-6" padding="lg">
            <h3 className="text-2xl font-bold text-primary">{target.title}</h3>
            <p className="text-slate-600 leading-relaxed">{target.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function ContactSection() {
  return (
    <section className="py-32 px-6 bg-primary text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Connect With Us</h2>
          <p className="text-white/80 text-lg">
            The centre is open 6 days a week, between 10 AM and 4 PM (except second Saturdays). We are here to listen.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest opacity-70">Call or WhatsApp</p>
                <p className="text-xl font-bold">044-26212089</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest opacity-70">Working Hours</p>
                <p className="text-xl font-bold">10:00 AM - 4:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest opacity-70">Online Sessions</p>
                <p className="text-xl font-bold">Zoom & Google Meet Available</p>
              </div>
            </div>
          </div>
        </div>
        <Card className="space-y-8" padding="lg">
          <h3 className="text-2xl font-bold">Visit Our Headquarters</h3>
          <p className="text-slate-600">
            Adarsh Student Counselling Centre, the nucleus of planning, is our headquarters at Anna Nagar.
          </p>
          <div className="aspect-video rounded-3xl overflow-hidden bg-slate-100">
            <img src="https://picsum.photos/seed/location/600/400" alt="Location" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </Card>
      </div>
    </section>
  );
}