import { cn } from '@/lib/utils';
import type { InputHTMLAttributes, forwardRef } from 'react';
import { forwardRef as reactForwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = reactForwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full bg-slate-50 border-none rounded-none px-4 py-3 text-sm focus:ring-2 outline-none transition-all',
            error ? 'ring-2 ring-red-500/20' : 'focus:ring-primary/20',
            className
          )}
          {...props}
        />
        {error && <p className="text-red-500 text-[10px] font-semibold">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';