import { motion } from 'motion/react';
import { ArrowRight, GraduationCap, Users, Building2, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppStore } from '@/store/useAppStore';
import { Button, Section, SectionHeader, StatCard, FeatureCard, Badge } from '@/components/ui';
import placementData from '@/data/placements.json';
import courseData from '@/data/courses.json';

const features = [
  { icon: GraduationCap, title: "Academic Rigor", description: "A curriculum designed to challenge and inspire, delivered by distinguished faculty members." },
  { icon: Building2, title: "Smart Campus", description: "Advanced digital infrastructure including high-tech labs and a fully automated library system." },
  { icon: Trophy, title: "Global Placements", description: "Strategic partnerships with industry leaders ensuring elite career opportunities for our graduates." },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <PrincipalMessage />
      <PartnershipSection />
      <CoursesPreview />
      <AlumniSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 py-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/college-campus/1920/1080"
          alt="Campus"
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/80 to-secondary" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-10"
        >
          <Badge variant="primary" size="md">
            Excellence in Women's Education
          </Badge>
          <h1 className="text-7xl md:text-8xl font-medium leading-[1.1] tracking-tight text-slate-900 font-serif">
            Empowering <br />
            <span className="text-primary italic font-normal">Leaders</span> of <br />
            Tomorrow.
          </h1>
          <p className="text-xl text-slate-600 max-w-lg leading-relaxed font-light">
            Anna Adarsh College for Women is a premier institution dedicated to academic excellence and holistic empowerment.
          </p>
          <div className="flex flex-wrap gap-6 pt-4">
            <Link to="/admissions">
              <Button size="lg" rightIcon={<ArrowRight size={18} />}>
                Apply Now
              </Button>
            </Link>
            <Link to="/courses">
              <Button variant="secondary" size="lg">
                Explore Courses
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-none overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] relative z-10">
            <img
              src="https://picsum.photos/seed/academic-excellence/1000/1250"
              alt="Students"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute -bottom-12 -left-12 glass-card p-10 rounded-none max-w-[240px] z-20"
          >
            <p className="text-5xl font-bold text-primary leading-none mb-2">35+</p>
            <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-[0.2em] leading-tight">
              Years of Academic <br />
              Distinction
            </p>
          </motion.div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-0" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0" />
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-32 bg-white px-6 relative overflow-hidden border-y border-slate-100">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {placementData.stats.map((stat, idx) => (
            <StatCard key={idx} stat={stat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <Section background="white">
      <SectionHeader
        badge="Why Choose Us"
        title="Why Choose Anna Adarsh?"
        subtitle="We provide a holistic learning environment that combines academic rigor with personal growth."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} index={idx} />
        ))}
      </div>
    </Section>
  );
}

function PrincipalMessage() {
  return (
    <section className="py-32 px-6 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="relative">
          <div className="aspect-[4/5] rounded-none overflow-hidden shadow-2xl relative z-10">
            <img
              src="https://picsum.photos/seed/principal-portrait/800/1000"
              alt="Dr. Shirline David"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0" />
          <div className="absolute top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl -z-0" />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-8">
          <Badge variant="primary" size="md">
            Leadership Message
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight text-slate-900">
            A Beacon of <span className="text-primary italic">Empowerment</span> Through Education
          </h2>
          <div className="space-y-6 text-slate-600 leading-relaxed font-light">
            <p>
              At Anna Adarsh College for Women, we take immense pride in being a beacon of empowerment through education.
              Established under the visionary leadership of the Punjab Association, our institution has always championed
              the cause of women's education, nurturing generations of confident, competent, and compassionate women.
            </p>
            <p>
              As we march proudly towards our Golden Jubilee, the college stands tall with a legacy of academic
              brilliance and holistic development. With autonomy as our strength, we continue to innovate and inspire,
              shaping young women into leaders of tomorrow.
            </p>
            <div className="py-6 border-y border-slate-200">
              <p className="text-primary font-serif italic text-xl text-center">"Perfection, Perseverance, and Purity"</p>
            </div>
            <p>Let us continue to learn, lead, and lift each other—towards a brighter, empowered future.</p>
          </div>
          <div className="pt-6">
            <h4 className="text-2xl font-serif font-bold text-slate-900">Dr. Shirline David</h4>
            <p className="text-sm text-primary font-semibold uppercase tracking-widest">Principal</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PartnershipSection() {
  return (
    <Section background="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center border-y border-slate-100 -mx-6 px-6 py-0">
        <div className="space-y-8">
          <Badge variant="accent" size="md">
            Industry Linkages
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight text-slate-900">
            Strategic <span className="text-primary italic">Partnerships</span> & Global Collaboration
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-light">
            The partnerships and collaborations with other institutes and companies help the College to focus and develop
            on various projects, research, Faculty Development, and Orientation programs.
          </p>
          <p className="text-slate-500 leading-relaxed">
            With an objective to strengthen the linkages with the Corporate Industry and to involve in joint ventures,
            the College has linked Memorandums with various organizations, ensuring our curriculum remains contemporary
            and technically advanced.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div className="space-y-2">
              <p className="text-3xl font-bold text-primary">25+</p>
              <p className="text-[10px] uppercase tracking-widest font-semibold text-slate-400">Active MOUs</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-[10px] uppercase tracking-widest font-semibold text-slate-400">Industry Partners</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="aspect-square bg-slate-50 rounded-none flex items-center justify-center p-8 grayscale hover:grayscale-0 transition-all duration-500 border border-slate-100"
            >
              <img
                src={`https://picsum.photos/seed/logo-${i}/200/200`}
                alt="Partner Logo"
                className="max-w-full opacity-50 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function CoursesPreview() {
  return (
    <section className="py-32 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Popular Courses</h2>
            <p className="text-slate-500">
              Discover our wide range of undergraduate and postgraduate programs.
            </p>
          </div>
          <Link to="/courses" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            View All Courses <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courseData.slice(0, 3).map((course) => (
            <Link key={course.id} to="/courses" className="group">
              <div className="bg-white rounded-none overflow-hidden border border-slate-100 shadow-sm group-hover:shadow-xl transition-all">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <Badge variant="primary" size="sm">
                    {course.stream}
                  </Badge>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{course.title}</h3>
                  <p className="text-sm text-slate-500 line-clamp-2">{course.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function AlumniSection() {
  const alumni = [
    {
      name: "Chinmaya Sisters",
      role: "Carnatic Musicians",
      image: "https://picsum.photos/seed/musicians/100/100",
      text: "We still remember with happiness and gratitude the immense encouragement we received for our music from our teachers and the college. Being part of the Music Club was a very important part of our student life.",
      tag: "Jewel in the Crown of Adarsh",
    },
    {
      name: "Dr. M. Bhargavi",
      role: "Manager Operations, ITC",
      image: "https://picsum.photos/seed/manager/100/100",
      text: "My dreams had come true because of my professors. They not only gave us theoretical knowledge, they taught us morals for our life. They gave us career guidance and pushed us towards success.",
      tag: "Dept. of Tourism & Travel",
      highlighted: true,
    },
    {
      name: "S.P. Lavanya",
      role: "Addl SP, Cyber Cop",
      image: "https://picsum.photos/seed/police/100/100",
      text: "It is AACW that groomed me from a simple college girl to a cop. The staff provided me an opportunity to put my strong foot in computers and helped me cope with academics while I was part of the football team.",
      tag: "Tamil Nadu Police Dept.",
    },
  ];

  return (
    <section className="py-32 px-6 bg-white overflow-hidden relative border-y border-slate-100">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          badge="Success Stories"
          title={
            <>
              Our Distinguished <span className="italic text-primary">Alumni</span>
            </>
          }
          subtitle="Celebrating the extraordinary journeys of those who once walked our halls."
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {alumni.map((person, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`${person.highlighted ? 'bg-primary text-white shadow-2xl shadow-primary/20' : 'bg-secondary border border-slate-100'} p-10 rounded-none flex flex-col gap-8`}
            >
              <div className="flex items-center gap-4">
                <img
                  src={person.image}
                  className={`w-16 h-16 rounded-none object-cover border ${person.highlighted ? 'border-white/20' : 'border-slate-200'}`}
                  referrerPolicy="no-referrer"
                />
                <div className={person.highlighted ? 'text-white' : ''}>
                  <h4 className="font-bold text-lg">{person.name}</h4>
                  <p className={`text-[10px] uppercase tracking-widest font-semibold ${person.highlighted ? 'text-white/60' : 'text-primary'}`}>
                    {person.role}
                  </p>
                </div>
              </div>
              <p className={`text-sm leading-relaxed italic flex-grow ${person.highlighted ? 'text-white/90' : 'text-slate-600'}`}>
                "{person.text}"
              </p>
              <div className={`pt-4 border-t ${person.highlighted ? 'border-white/10' : 'border-slate-200'}`}>
                <p className={`text-[10px] uppercase tracking-widest font-semibold ${person.highlighted ? 'text-white/70' : 'text-primary'}`}>
                  {person.tag}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto bg-primary rounded-none p-12 md:p-20 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Ready to Start Your Journey?</h2>
          <p className="text-white/80 text-lg">
            Join a community of thousands of successful women who started their journey at Anna Adarsh.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/admissions">
              <Button variant="secondary" size="lg">
                Apply Now
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10"
              onClick={() => useAppStore.getState().setVoiceCallOpen(true)}
            >
              Talk to AI Counsellor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}