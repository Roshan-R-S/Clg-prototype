import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Trophy, Briefcase, TrendingUp, Users } from 'lucide-react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import placementData from '@/data/placements.json';
import testimonialData from '@/data/testimonials.json';
import { Card, Badge, Section, SectionHeader } from '@/components/ui';

const features = [
  { icon: Briefcase, title: 'Skill Development', description: 'Regular workshops on soft skills, aptitude, and technical training.' },
  { icon: TrendingUp, title: 'Mock Interviews', description: 'Simulated interview sessions with industry experts to build confidence.' },
  { icon: Users, title: 'Industry Connect', description: 'Frequent guest lectures and industry visits to provide real-world exposure.' },
  { icon: Trophy, title: 'Alumnae Network', description: 'Access to a vast network of successful alumnae for mentorship and guidance.' },
];

export default function Placements() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  return (
    <div className="min-h-screen pb-20">
      <Header />
      <HistorySection />
      <StatsSection statsRef={statsRef} statsInView={statsInView} />
      <RecruitersSection />
      <FeaturesSection />
      <SuccessStories />
    </div>
  );
}

function Header() {
  return (
    <section className="bg-secondary py-24 px-6 text-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
      <div className="max-w-7xl mx-auto relative z-10 space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Placement Excellence</h1>
        <p className="text-slate-600 max-w-2xl text-lg">
          Our dedicated placement cell works tirelessly to bridge the gap between academia and industry, ensuring our
          students land their dream jobs.
        </p>
      </div>
    </section>
  );
}

function HistorySection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">History</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Had a modest beginning in the year 2001-02 with two faculty coordinators. Our steps were small indeed,
                to cover a long path of directing and guiding students to successful careers.
              </p>
              <p>
                Now we have grown to have a dedicated Placement Office which takes care of the students training &
                placements, internships, Skill development programmes & Career Counseling. Department Placement
                Coordinators and Student Coordinators work along with the placement office.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-secondary border border-slate-100 space-y-4" padding="md">
              <h3 className="text-xl font-bold text-primary">Vision</h3>
              <p className="text-slate-600 leading-relaxed">
              &quot;Anna Adarsh changed my perspective on what it means to be a professional. The training was
              rigorous, but the support was unmatched.&quot;
            </p>
            </Card>
            <Card className="bg-secondary border border-slate-100 space-y-4" padding="md">
              <h3 className="text-xl font-bold text-primary">Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To enhance the employability potential of young students by giving them exposure to the Contemporary
                selection and placement process.
              </p>
            </Card>
          </div>
        </div>

        <Card className="bg-primary/5 border border-primary/10 flex flex-col justify-center space-y-6" padding="lg">
          <h2 className="text-3xl font-bold text-slate-900">Our Strength</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The enrolment every year is open to the students in the final year Under Graduate & Post Graduate Courses.
          </p>
          <div className="pt-6 border-t border-primary/10">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest">Empowering Futures</p>
          </div>
        </Card>
      </div>
    </section>
  );
}

function StatsSection({ statsRef, statsInView }: { statsRef: React.RefObject<HTMLDivElement | null>; statsInView: boolean }) {
  return (
    <section ref={statsRef} className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {testimonialData.map((testimonial, idx) => (
            <React.Fragment key={testimonial.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="space-y-6 h-full" padding="lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-none overflow-hidden">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-slate-500">{testimonial.course}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 italic">&quot;{testimonial.text}&quot;</p>
                </Card>
              </motion.div>
            </React.Fragment>
          ))}
      </div>
    </section>
  );
}

function RecruitersSection() {
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Our Top Recruiters</h2>
          <p className="text-slate-500">Leading organizations that trust Anna Adarsh graduates.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {placementData.recruiters.map((recruiter, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
            >
              <Card hover className="flex items-center justify-center grayscale hover:grayscale-0 transition-all" padding="sm">
                <img src={recruiter.logo} alt={recruiter.name} className="max-h-12 object-contain" referrerPolicy="no-referrer" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold tracking-tight">Empowering Your Career Journey</h2>
          <div className="space-y-6">
            {features.map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-none flex items-center justify-center shrink-0">
                  <item.icon size={24} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-none overflow-hidden shadow-2xl">
            <img
              src="https://picsum.photos/seed/placement/800/800"
              alt="Placement"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-10 -right-10 bg-primary text-white p-8 rounded-none shadow-xl max-w-[200px] rotate-6">
            <p className="text-4xl font-bold">150+</p>
            <p className="text-xs font-semibold uppercase tracking-wider opacity-80">Companies Visited in 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SuccessStories() {
  return (
    <section className="py-32 px-6 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Success Stories"
          title="Success Stories"
          subtitle="Hear from our students who have successfully transitioned to their professional careers."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialData.map((t) => (
            <Card key={t.id} className="space-y-6" padding="md">
              <p className="text-slate-600 italic leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-none object-cover border border-slate-200"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.course}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}