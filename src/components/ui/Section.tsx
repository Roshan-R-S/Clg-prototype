import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'secondary' | 'primary';
}

const backgroundStyles = {
  white: 'bg-white',
  secondary: 'bg-secondary',
  primary: 'bg-primary text-white',
};

export function Section({ children, className = '', id, background = 'white' }: SectionProps) {
  return (
    <section id={id} className={`py-32 px-6 ${backgroundStyles[background]} ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  highlightWord?: string;
}

export function SectionHeader({ badge, title, subtitle, centered = true }: SectionHeaderProps) {
  const content = (
    <div className={`space-y-4 ${centered ? 'text-center max-w-3xl mx-auto' : ''} mb-20`}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-[10px] font-semibold uppercase tracking-widest"
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-500"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );

  return content;
}