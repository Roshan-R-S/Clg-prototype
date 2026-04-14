import { cn } from '@/lib/utils';
import type { SelectHTMLAttributes, forwardRef } from 'react';
import { forwardRef as reactForwardRef } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: Array<{ value: string; label: string }>;
}

export const Select = reactForwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={cn(
            'w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 outline-none appearance-none cursor-pointer',
            error ? 'ring-2 ring-red-500/20' : 'focus:ring-primary/20',
            className
          )}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="text-red-500 text-[10px] font-semibold">{error}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';