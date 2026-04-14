import { useEffect, useState, ReactNode } from 'react';
import Lenis from 'lenis';
import { Toaster } from 'react-hot-toast';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Chatbot } from './Chatbot';
import { VoiceCall } from './VoiceCall';
import { useAppStore } from '@/store/useAppStore';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { isVoiceCallOpen, setVoiceCallOpen } = useAppStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center gap-8"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-24 w-auto flex items-center justify-center p-4 bg-white rounded-3xl shadow-2xl shadow-primary/20"
            >
              <img 
                src="/images/logo.png" 
                alt="Anna Adarsh logo" 
                className="h-full w-auto object-contain" 
              />
            </motion.div>
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                className="w-full h-full bg-primary"
              />
            </div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold">
              Anna Adarsh
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
      <Chatbot />
      <VoiceCall isOpen={isVoiceCallOpen} onClose={() => setVoiceCallOpen(false)} />
      <Toaster position="bottom-left" />
    </div>
  );
}