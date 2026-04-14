import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import type { PlacementStat } from '@/types';

interface StatCardProps {
  stat: PlacementStat;
  index: number;
}

export function StatCard({ stat, index }: StatCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
    >
      <div className="space-y-4 text-center md:text-left">
        <div className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter">
          {inView && <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />}
        </div>
        <div className="h-px w-12 bg-primary group-hover:w-24 transition-all duration-500 mx-auto md:mx-0" />
        <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-semibold leading-relaxed">
          {stat.label}
        </p>
      </div>
    </motion.div>
  );
}