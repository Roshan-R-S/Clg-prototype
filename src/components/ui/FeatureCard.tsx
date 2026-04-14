import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';

interface FeatureCardProps extends React.ComponentPropsWithoutRef<'div'> {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  className?: string;
  key?: React.Key;
}

export function FeatureCard({ icon: Icon, title, description, index, className, ...props }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={cn("p-12 rounded-[3rem] bg-white border border-slate-100 premium-shadow space-y-8 group hover:bg-primary transition-all duration-500", className)}
      {...props}
    >
      <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center group-hover:bg-white/10 group-hover:text-white transition-colors">
        <Icon size={32} />
      </div>
      <div className="space-y-4">
        <h3 className="text-3xl font-bold group-hover:text-white transition-colors">{title}</h3>
        <p className="text-slate-500 leading-relaxed group-hover:text-white/80 transition-colors">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

interface IconButtonProps {
  icon: LucideIcon;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function IconButton({ icon: Icon, onClick, className, variant = 'primary', size = 'md' }: IconButtonProps) {
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50',
    ghost: 'bg-transparent text-slate-600 hover:bg-slate-100',
  };

  const sizeStyles = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-16 h-16',
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-full flex items-center justify-center transition-all',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      <Icon size={size === 'sm' ? 16 : size === 'md' ? 20 : 24} />
    </button>
  );
}