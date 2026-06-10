import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import cwmLogo from '../../assets/cwm_logo.png';

const NAV_LINKS = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Team',     href: '#team' },
  { label: 'Legal',    href: '#legal' },
  { label: 'Contact',  href: '#contact' },
];

const SECTION_IDS = ['home', 'about', 'services', 'team', 'legal', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled]    = useState(false);
  const [menuOpen, setMenuOpen]    = useState(false);
  const [activeSection, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observers = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = useCallback((href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  return (
    <>
      <motion.nav
        className={`
          fixed top-0 left-0 right-0 z-40
          transition-all duration-300
          ${scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm'
            : 'bg-transparent'}
        `}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <button
              onClick={() => scrollTo('#home')}
              className="flex items-center gap-2.5 group"
              aria-label="CWM Home"
            >
              <img
                src={cwmLogo}
                alt="PT. Circular Waste Management"
                className="h-10 w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
              />
              <div className="leading-none">
                <span className="block text-lg font-bold font-display text-gradient-green">
                  CWM
                </span>
                <span className="block text-[10px] text-slate-500 tracking-wider uppercase">
                  Circular Waste Mgmt
                </span>
              </div>
            </button>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map(({ label, href }) => {
                const id = href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <button
                    key={href}
                    onClick={() => scrollTo(href)}
                    className={`
                      relative px-4 py-2 text-sm font-medium rounded-lg
                      transition-colors duration-200
                      ${isActive
                        ? 'text-green-600'
                        : 'text-slate-600 hover:text-green-600'}
                    `}
                  >
                    <span className="relative z-10">{label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg bg-green-50 border border-green-200"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollTo('#contact')}
                className="
                  hidden sm:inline-flex items-center gap-2
                  px-4 py-2 rounded-xl text-sm font-semibold text-white
                  bg-gradient-to-r from-green-600 to-emerald-600
                  hover:from-green-500 hover:to-emerald-500
                  shadow-sm hover:shadow-[0_0_16px_rgba(34,197,94,0.3)]
                  transition-all duration-300 active:scale-95
                "
              >
                Get in Touch
                <ArrowRight size={14} />
              </button>

              <button
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                className="
                  lg:hidden w-10 h-10 rounded-xl
                  bg-slate-100 hover:bg-slate-200
                  border border-slate-200
                  flex items-center justify-center
                  text-slate-700 transition-colors
                "
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="overlay"
              className="fixed inset-0 z-30 bg-slate-900/20 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              key="drawer"
              className="
                fixed top-16 left-0 right-0 z-35 lg:hidden
                bg-white border-b border-slate-200
                shadow-xl
              "
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="px-4 py-4 space-y-1">
                {NAV_LINKS.map(({ label, href }, i) => {
                  const id = href.replace('#', '');
                  const isActive = activeSection === id;
                  return (
                    <motion.button
                      key={href}
                      onClick={() => scrollTo(href)}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className={`
                        w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium
                        transition-colors duration-200 text-left
                        ${isActive
                          ? 'bg-green-50 text-green-600 border border-green-200'
                          : 'text-slate-600 hover:bg-green-50 hover:text-green-600'}
                      `}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-green-600 flex-shrink-0" />
                      )}
                      {label}
                    </motion.button>
                  );
                })}

                <div className="pt-2 pb-1">
                  <button
                    onClick={() => scrollTo('#contact')}
                    className="
                      w-full flex items-center justify-center gap-2
                      px-4 py-3 rounded-xl text-sm font-semibold text-white
                      bg-gradient-to-r from-green-600 to-emerald-600
                      shadow-sm transition-all duration-300
                    "
                  >
                    Get in Touch
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
