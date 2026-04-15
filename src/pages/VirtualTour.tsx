import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MapPin, Info, ArrowDown, CheckCircle2 } from 'lucide-react';
import tourData from '@/data/tour.json';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';

export default function VirtualTour() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.05], [1, 0.9]);
  const heroY = useTransform(scrollYProgress, [0, 0.05], [0, -20]);

  return (
    <div ref={containerRef} className="relative bg-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
        {tourData.map((_, idx) => (
          <motion.div
            key={idx}
            className="w-1 h-12 bg-black/10 rounded-full overflow-hidden relative"
          >
            <motion.div
              className="absolute inset-0 bg-primary"
              style={{
                scaleY: useTransform(
                  scrollYProgress,
                  [idx / tourData.length, (idx + 1) / tourData.length],
                  [0, 1]
                ),
                originY: 0,
              }}
            />
          </motion.div>
        ))}
      </div>

      <section className="h-screen flex flex-col items-center justify-center text-neutral-900 px-6 sticky top-0 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="text-center space-y-6 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-none text-xs font-semibold uppercase tracking-widest border border-primary/30">
            <MapPin size={14} />
            Interactive Experience
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">
            Virtual <span className="text-primary">Campus</span> Tour
          </h1>
          <p className="text-neutral-600 text-lg md:text-xl max-w-2xl mx-auto">
            Experience the vibrant life and world-class facilities of Anna Adarsh from the comfort of your home. Scroll
            to begin your journey.
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="pt-12 flex flex-col items-center gap-2 text-neutral-500"
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll to Tour</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      <div className="relative z-20">
        {tourData.map((section: any, idx) => (
          <React.Fragment key={section.id}>
            <TourSection section={section} index={idx} />
          </React.Fragment>
        ))}
      </div>

      <section className="h-screen flex items-center justify-center bg-primary text-white px-6 relative z-30">
        <div className="text-center space-y-8 max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Ready to see it in person?</h2>
          <p className="text-white/80 text-lg">
            Book a physical campus visit or talk to our admissions team to learn more about joining the Anna Adarsh
            family.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg">
              Book Campus Visit
            </Button>
            <Button size="lg" className="bg-neutral-900 hover:bg-neutral-800">
              Contact Admissions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function TourSection({ section, index }: { section: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const imgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const bgTextY = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section
      ref={ref}
      className={cn(
        'min-h-screen flex items-center justify-center py-32 px-6 relative overflow-hidden',
        index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
      )}
    >
      <motion.div
        style={{ y: bgTextY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span className="text-[20vw] font-bold text-black/[0.02] whitespace-nowrap uppercase tracking-tighter">
          {section.title.split(' ')[0]}
        </span>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full blur-sm"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div style={{ scale, opacity }} className="relative group">
          <motion.div style={{ y: imgY }} className="aspect-[4/3] rounded-none overflow-hidden shadow-2xl border-4 border-white/10">
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-none shadow-xl flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-white/20 rounded-none flex items-center justify-center">
              <Info size={24} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-semibold opacity-80">Location {index + 1}</p>
              <p className="font-bold">{section.title}</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div style={{ y, opacity }} className="space-y-8 text-neutral-900">
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            {section.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-neutral-600 text-lg leading-relaxed"
          >
            {section.description}
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {section.features.map((feature: string, fIdx: number) => (
              <motion.div
                key={fIdx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + fIdx * 0.1 }}
                className="flex items-center gap-3 bg-black/5 p-4 rounded-none border border-black/5"
              >
                <CheckCircle2 className="text-primary shrink-0" size={20} />
                <span className="text-sm font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}