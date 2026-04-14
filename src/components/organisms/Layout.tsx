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
  useEffect(() => {
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
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
      <Chatbot />
      <VoiceCall isOpen={isVoiceCallOpen} onClose={() => setVoiceCallOpen(false)} />
      <Toaster position="bottom-left" />
    </div>
  );
}