import { Button } from '@/components/ui';
import { NAV_LINKS } from '@/constants';
import { cn } from '@/lib/utils';
import { ChevronDown, Menu, Sparkles, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg py-3' : 'bg-black/80'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/images/logo.png" 
            alt="Anna Adarsh College for Women" 
            className="h-20 w-auto object-contain" 
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <div
              key={link.path}
              className="relative group"
              onMouseEnter={() => link.subLinks && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {link.subLinks ? (
                <button
                  className={cn(
                    'text-[13px] font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-1 py-1',
                    location.pathname.startsWith(link.path) ? 'text-primary' : 'text-slate-300 hover:text-white'
                  )}
                >
                  {link.name}
                  <ChevronDown
                    size={14}
                    className={cn('transition-transform', activeDropdown === link.name && 'rotate-180')}
                  />
                </button>
              ) : (
                <Link
                  to={link.path}
                  className={cn(
                    'text-[13px] font-semibold uppercase tracking-wider transition-all duration-300 nav-link-hover py-1',
                    location.pathname === link.path ? 'text-primary after:w-full' : 'text-slate-300 hover:text-white'
                  )}
                >
                  {link.name}
                </Link>
              )}

              {link.subLinks && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-56 bg-black/95 backdrop-blur-xl shadow-2xl rounded-none border border-white/10 mt-2 py-3 overflow-hidden"
                    >
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className={cn(
                            'block px-6 py-3 text-sm font-medium transition-colors',
                            location.pathname === sub.path
                              ? 'bg-white/5 text-primary'
                              : 'text-slate-300 hover:bg-white/5 hover:text-white'
                          )}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <Link to="/admissions">
            <Button variant="white" size="sm">
              Apply Now
            </Button>
          </Link>
        </div>

        <button className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col gap-4 md:hidden shadow-xl max-h-[80vh] overflow-y-auto"
          >
            {NAV_LINKS.map((link) => (
              <div key={link.path} className="space-y-2">
                {link.subLinks ? (
                  <>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold px-1">
                      {link.name}
                    </p>
                    <div className="flex flex-col gap-2 pl-4 border-l-2 border-white/10">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className={cn(
                            'text-lg font-serif font-medium transition-colors',
                            location.pathname === sub.path ? 'text-primary' : 'text-slate-300 hover:text-white'
                          )}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={cn(
                      'text-lg font-serif font-medium transition-colors',
                      location.pathname === link.path ? 'text-primary' : 'text-slate-300 hover:text-white'
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/admissions" className="mt-4">
              <Button variant="white" className="w-full flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" />
                Apply Now
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}