import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  stream: 'commerce' | 'arts' | 'science' | null;
  setStream: (stream: 'commerce' | 'arts' | 'science' | null) => void;
  isChatOpen: boolean;
  toggleChat: () => void;
  isVoiceCallOpen: boolean;
  setVoiceCallOpen: (open: boolean) => void;
  hasSeenIntro: boolean;
  setHasSeenIntro: (seen: boolean) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      stream: null,
      setStream: (stream) => set({ stream }),
      isChatOpen: false,
      toggleChat: () => set((state) => ({ isChatOpen: !state.isChatOpen })),
      isVoiceCallOpen: false,
      setVoiceCallOpen: (open) => set({ isVoiceCallOpen: open }),
      hasSeenIntro: false,
      setHasSeenIntro: (seen) => set({ hasSeenIntro: seen }),
    }),
    {
      name: 'anna-adarsh-storage',
    }
  )
);
