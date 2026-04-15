import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, PhoneOff, Mic, Volume2, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VoiceCallProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VoiceCall({ isOpen, onClose }: VoiceCallProps) {
  const [status, setStatus] = useState<'connecting' | 'connected' | 'ended'>('connecting');
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setStatus('connecting');
      setTimer(0);
      const timerId = setTimeout(() => setStatus('connected'), 2500);
      return () => clearTimeout(timerId);
    }
  }, [isOpen]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (status === 'connected') {
      interval = setInterval(() => setTimer((prev) => prev + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [status]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-xl flex items-center justify-center p-6"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-slate-800 w-full max-w-md rounded-none overflow-hidden shadow-2xl border border-white/10 flex flex-col items-center p-12 space-y-12"
          >
            <div className="relative">
              <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center text-white relative z-10">
                {status === 'connecting' ? (
                  <Loader2 size={48} className="animate-spin" />
                ) : (
                  <Phone size={48} className={cn(status === 'connecting' && 'animate-pulse')} />
                )}
              </div>
              {status === 'connected' && (
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 bg-primary/20 rounded-full -z-0"
                />
              )}
            </div>

            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-white">AI Admissions Counsellor</h2>
              <p className="text-slate-400 font-mono text-sm uppercase tracking-widest">
                {status === 'connecting' ? 'Connecting...' : formatTime(timer)}
              </p>
            </div>

            {status === 'connected' && (
              <div className="w-full bg-white/5 p-6 rounded-none border border-white/5 text-center">
                <p className="text-primary font-bold text-sm animate-pulse">AI is listening...</p>
                <p className="text-slate-400 text-xs mt-2 italic">
                  "Hello! I'm your AI counsellor. How can I help you with your admission today?"
                </p>
              </div>
            )}

            <div className="flex gap-6">
              <button className="w-14 h-14 bg-white/10 text-white rounded-none flex items-center justify-center hover:bg-white/20 transition-all">
                <Mic size={24} />
              </button>
              <button
                onClick={onClose}
                className="w-14 h-14 bg-red-500 text-white rounded-none flex items-center justify-center hover:bg-red-600 transition-all shadow-xl shadow-red-500/20"
              >
                <PhoneOff size={24} />
              </button>
              <button className="w-14 h-14 bg-white/10 text-white rounded-none flex items-center justify-center hover:bg-white/20 transition-all">
                <Volume2 size={24} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}