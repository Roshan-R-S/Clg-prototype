import { motion } from 'motion/react';
import { Target, Eye, CheckCircle2 } from 'lucide-react';
import { Card, Badge } from '@/components/ui';

export default function VisionMission() {
  return (
    <div className="min-h-screen pb-20">
      <Header />
      <Content />
    </div>
  );
}

function Header() {
  return (
    <section className="bg-secondary py-24 px-6 text-neutral-900 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Badge variant="primary" size="md">
            Purpose & Direction
          </Badge>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          Vision & <span className="text-primary">Mission</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 text-lg max-w-2xl mx-auto"
        >
          Our guiding principles that shape the future of every student at Anna Adarsh.
        </motion.p>
      </div>
    </section>
  );
}

function Content() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card className="relative overflow-hidden group space-y-8" padding="lg">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Eye size={200} />
            </div>
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-none flex items-center justify-center">
              <Eye size={32} />
            </div>
            <h2 className="text-4xl font-bold tracking-tight">Our Vision</h2>
            <p className="text-xl text-slate-700 leading-relaxed font-medium">
              To transform every woman student who leaves its portal into a humane, socially responsible and
              professionally successful individual who can envision her future and strive relentlessly towards
              perfection without compromising on moral and ethical values.
            </p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card className="relative overflow-hidden group space-y-8 shadow-sm" padding="lg">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Target size={200} />
            </div>
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-none flex items-center justify-center">
              <Target size={32} />
            </div>
            <h2 className="text-4xl font-bold tracking-tight">Our Mission</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="text-primary shrink-0 mt-1" size={24} />
                <p className="text-slate-600 leading-relaxed">
                  To help young women grow into confident, creative, emotionally balanced and professionally competent
                  individuals by nurturing their all-round potential through an excellent educational system that is
                  dynamic and innovative to women from all sections of society.
                </p>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="text-primary shrink-0 mt-1" size={24} />
                <p className="text-slate-600 leading-relaxed">
                  To create a trajectory for students to aspire for purity in thought, word and deed, perfection in
                  work and life and perseverance in attaining goals and to develop an approach of responsible
                  citizenship towards National Development.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}