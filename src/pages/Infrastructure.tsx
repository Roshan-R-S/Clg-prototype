import { motion } from 'motion/react';
import { Building2, Laptop, Library, Coffee, ShieldCheck, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import { Card, Badge } from '@/components/ui';

interface Facility {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

const facilities: Facility[] = [
  {
    icon: Building2,
    title: 'Smart Classrooms',
    description: 'Equipped with modern audio-visual aids and interactive boards to enhance the learning experience.',
    image: 'https://picsum.photos/seed/classroom/800/600',
  },
  {
    icon: Laptop,
    title: 'Advanced Labs',
    description: 'State-of-the-art computer and science laboratories with the latest equipment and software.',
    image: 'https://picsum.photos/seed/lab/800/600',
  },
  {
    icon: Library,
    title: 'Central Library',
    description: 'A vast collection of books, journals, and digital resources to support research and academic pursuits.',
    image: 'https://picsum.photos/seed/library/800/600',
  },
  {
    icon: Coffee,
    title: 'Cafeteria',
    description: 'Hygienic and spacious cafeteria serving a variety of nutritious meals and snacks.',
    image: 'https://picsum.photos/seed/cafe/800/600',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Hostel',
    description: 'Safe and comfortable on-campus housing with 24/7 security and modern amenities.',
    image: 'https://picsum.photos/seed/hostel/800/600',
  },
  {
    icon: Wifi,
    title: 'Wi-Fi Campus',
    description: 'High-speed internet connectivity across the campus to facilitate digital learning.',
    image: 'https://picsum.photos/seed/wifi/800/600',
  },
];

export default function Infrastructure() {
  return (
    <div className="min-h-screen pb-20">
      <Header />
      <FacilitiesGrid />
      <VirtualTourCTA />
    </div>
  );
}

function Header() {
  return (
    <section className="bg-primary text-white py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-center">World-Class Campus</h1>
        <p className="text-white/80 max-w-2xl mx-auto text-lg text-center">
          Our campus is designed to provide an inspiring environment for learning, innovation, and personal growth.
        </p>
      </div>
    </section>
  );
}

function FacilitiesGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {facilities.map((facility, idx) => (
          <FacilityCard key={idx} facility={facility} index={idx} />
        ))}
      </div>
    </section>
  );
}

function FacilityCard({ facility, index }: { facility: Facility; index: number }) {
  const Icon = facility.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group space-y-6"
    >
      <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg group-hover:shadow-2xl transition-all">
        <img
          src={facility.image}
          alt={facility.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-primary">
          <Icon size={24} />
          <h3 className="text-2xl font-bold">{facility.title}</h3>
        </div>
        <p className="text-slate-500 text-sm leading-relaxed">{facility.description}</p>
      </div>
    </motion.div>
  );
}

function VirtualTourCTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Card className="bg-secondary border border-slate-100" padding="lg">
          <div className="flex flex-col md:flex-row items-center gap-12 text-slate-900">
            <div className="space-y-6 flex-grow">
              <h2 className="text-4xl font-bold tracking-tight">Experience our campus from anywhere.</h2>
              <p className="text-slate-600 max-w-xl">
                Take a virtual tour of our facilities and get a feel for the vibrant campus life at Anna Adarsh.
              </p>
              <Link
                to="/virtual-tour"
                className="inline-block bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Start Virtual Tour
              </Link>
            </div>
            <Link
              to="/virtual-tour"
              className="w-full md:w-1/3 aspect-video bg-white rounded-2xl flex items-center justify-center border border-slate-200 group/play shadow-sm"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-xl shadow-primary/20 group-hover/play:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1" />
              </div>
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
}