import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children?: ReactNode;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  key?: React.Key;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const variantStyles = {
  primary: 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20',
  secondary: 'bg-secondary text-slate-900 border border-slate-200 hover:bg-white',
  outline: 'bg-transparent border border-slate-200 text-slate-900 hover:bg-slate-50',
  ghost: 'bg-transparent text-slate-600 hover:bg-slate-100',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-10 py-5 text-sm',
};

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  isLoading = false,
  leftIcon,
  rightIcon,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-full font-semibold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}