import { motion } from 'motion/react';
import { Eye, Target, Award, Heart, Users, Sparkles } from 'lucide-react';
import { Card, Badge } from '@/components/ui';
import { CORE_VALUES } from '@/constants';

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Award,
  Heart,
  Users,
  Sparkles,
};

export default function About() {
  return (
    <div className="min-h-screen pb-20">
      <Hero />
      <VisionMission />
      <CoreValues />
      <Leadership />
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-secondary py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <Badge variant="primary" size="md">
            Our Legacy
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.9]">
            Empowering Women Since <span className="text-primary">1985</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Anna Adarsh College for Women was established with the vision of providing quality higher education to
            women and making them self-reliant and socially responsible citizens.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
            <img
              src="https://picsum.photos/seed/legacy/800/800"
              alt="Legacy"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function VisionMission() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div whileHover={{ y: -10 }}>
          <Card className="bg-secondary border border-slate-100 space-y-6" padding="lg">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
              <Eye size={32} />
            </div>
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed">
              To be a premier institution of higher education for women, fostering excellence in academic, professional,
              and personal development, and creating leaders who contribute to a just and equitable society.
            </p>
          </Card>
        </motion.div>

        <motion.div whileHover={{ y: -10 }}>
          <Card className="border border-slate-100 shadow-sm space-y-6" padding="lg">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
              <Target size={32} />
            </div>
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              To provide a transformative learning experience through innovative curriculum, dedicated faculty, and
              state-of-the-art facilities, while instilling values of integrity, compassion, and social responsibility.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function CoreValues() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Our Core Values</h2>
          <p className="text-slate-500">The pillars that define our institution's character.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {CORE_VALUES.map((value, idx) => {
            const Icon = iconMap[value.icon];
            return (
              <div key={idx} className="text-center space-y-4">
                <div className="w-20 h-20 bg-primary/5 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-slate-500 text-sm">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  const leaders = [
    { name: 'Dr. Shanthi K.', role: 'Principal', image: 'https://picsum.photos/seed/principal/400/500' },
    { name: 'Shri. C.K. Ranganathan', role: 'Chairman', image: 'https://picsum.photos/seed/chairman/400/500' },
    { name: 'Dr. V. Bharathi', role: 'Secretary', image: 'https://picsum.photos/seed/secretary/400/500' },
  ];

  return (
    <section className="py-32 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto space-y-16">
        <h2 className="text-4xl font-bold text-center">Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {leaders.map((leader, idx) => (
            <div key={idx} className="space-y-6 group">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg group-hover:shadow-2xl transition-all">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold">{leader.name}</h3>
                <p className="text-primary font-semibold text-sm">{leader.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}