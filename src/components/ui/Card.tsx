import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
  hover?: boolean;
  className?: string;
  key?: React.Key;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const paddingStyles = {
  none: '',
  sm: 'p-6',
  md: 'p-8',
  lg: 'p-12',
};

export function Card({ children, className, hover = false, padding = 'md', ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-[2rem] border border-slate-100 shadow-sm',
        hover && 'hover:shadow-xl transition-all duration-300',
        paddingStyles[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}