import { cn } from '@/lib/utils';
import type { TextareaHTMLAttributes, forwardRef } from 'react';
import { forwardRef as reactForwardRef } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = reactForwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            'w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 outline-none resize-none transition-all',
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

Textarea.displayName = 'Textarea';