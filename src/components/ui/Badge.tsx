import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface BadgeProps extends React.ComponentPropsWithoutRef<'span'> {
  children?: ReactNode;
  variant?: 'default' | 'primary' | 'accent';
  size?: 'sm' | 'md';
  className?: string;
  key?: React.Key;
}

const variantStyles = {
  default: 'bg-slate-100 text-slate-600',
  primary: 'bg-primary/10 text-primary',
  accent: 'bg-accent/10 text-accent',
};

const sizeStyles = {
  sm: 'px-2 py-0.5 text-[10px]',
  md: 'px-4 py-2 text-xs',
};

export function Badge({ children, variant = 'default', size = 'sm', className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-semibold uppercase tracking-widest rounded-none',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}