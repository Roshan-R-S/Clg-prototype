import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, User, Bot, Sparkles, Loader2 } from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';
import { getCounsellorResponse, getQuickPrompts } from '@/services/chatService';
import type { Message } from '@/types';
import { cn } from '@/lib/utils';

export function Chatbot() {
  const { isChatOpen, toggleChat } = useAppStore();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'bot',
      text: "Hello! I'm your AI Admissions Counsellor. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const quickPrompts = getQuickPrompts();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isChatOpen && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [isChatOpen]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const botResponse = await getCounsellorResponse(text, messages);

    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      role: 'bot',
      text: botResponse,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMsg]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] bg-white rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col"
            style={{ height: '80vh' }}
          >
            <div className="bg-primary p-6 text-white shrink-0">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-none flex items-center justify-center">
                    <Sparkles className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">AI Counsellor</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-[10px] uppercase tracking-widest font-bold opacity-70">
                        Online & Ready
                      </span>
                    </div>
                  </div>
                </div>
                <button onClick={toggleChat} className="p-2 hover:bg-white/10 rounded-none transition-colors">
                  <X size={20} />
                </button>
              </div>
            </div>

            <div 
              ref={scrollRef} 
              className="overflow-y-auto flex-1 p-6 space-y-4 bg-slate-50/50 overscroll-contain"
              style={{ touchAction: 'pan-y' }}
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    'flex items-start gap-3 max-w-[85%]',
                    msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''
                  )}
                >
                  <div
                    className={cn(
                      'w-8 h-8 rounded-none flex items-center justify-center shrink-0 shadow-sm',
                      msg.role === 'user' ? 'bg-white text-slate-400' : 'bg-primary text-white'
                    )}
                  >
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div
                    className={cn(
                      'p-3 rounded-none text-sm leading-relaxed shadow-sm max-w-[calc(100%-48px)]',
                      msg.role === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-white border border-slate-100 text-slate-700'
                    )}
                  >
                    {msg.text.split('\n').map((line, i) => (
                      <p key={i} className={i > 0 ? 'mt-2' : ''}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-none bg-primary text-white flex items-center justify-center shrink-0">
                    <Bot size={16} />
                  </div>
                  <div className="bg-white p-3 rounded-none shadow-sm border border-slate-100 flex items-center gap-2">
                    <Loader2 size={14} className="animate-spin text-primary" />
                    <span className="text-xs text-slate-400 font-medium">Counsellor is typing...</span>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-white border-t border-slate-100 shrink-0">
              <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handleSend(prompt)}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-primary/10 hover:text-primary rounded-none text-xs font-medium whitespace-nowrap transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
              <div className="flex gap-3 bg-slate-100 p-2 rounded-none">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                  placeholder="Ask about admissions, courses..."
                  className="flex-grow bg-transparent border-none px-4 py-2 text-sm focus:outline-none"
                />
                <button
                  onClick={() => handleSend(input)}
                  disabled={isLoading || !input.trim()}
                  className="bg-primary text-white p-3 rounded-none hover:bg-primary/90 disabled:opacity-50 transition-all shadow-lg shadow-primary/20"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={toggleChat}
        className="flex items-center gap-3 bg-primary text-white px-6 py-4 rounded-none shadow-2xl hover:bg-primary/90 transition-all"
      >
        <MessageSquare size={20} />
        <span className="font-semibold text-sm">Chat with us</span>
      </motion.button>
    </div>
  );
}