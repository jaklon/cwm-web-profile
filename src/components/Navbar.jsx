import { useEffect, useState } from 'react';
import { Menu, X, Recycle } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Beranda', id: 'home' },
  { label: 'Tentang', id: 'about' },
  { label: 'Layanan', id: 'services' },
  { label: 'Tim', id: 'team' },
  { label: 'Kontak', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/60 bg-white/80 shadow-sm backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <button onClick={() => handleNav('home')} className="group flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/20 transition-transform group-hover:scale-105">
            <Recycle size={22} strokeWidth={2.2} />
          </span>
          <span className="flex flex-col leading-none">
            <span className={`text-lg font-extrabold tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              CWM
            </span>
            <span className={`text-[10px] font-medium uppercase tracking-widest ${scrolled ? 'text-slate-500' : 'text-white/70'}`}>
              Circular Waste
            </span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-slate-600 hover:bg-slate-100 hover:text-primary-600'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
          onClick={() => handleNav('contact')}
          className="hidden rounded-full bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary-600/25 transition-all hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-primary-600/40 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 md:inline-flex"
        >
          Konsultasi Gratis
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className={`grid h-10 w-10 place-items-center rounded-lg transition-colors md:hidden ${
            scrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
          }`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-white/95 backdrop-blur-lg transition-[max-height] duration-300 ease-in-out md:hidden ${
          open ? 'max-h-96 border-b border-slate-200' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className="w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-slate-700 transition-colors hover:bg-primary-50 hover:text-primary-600"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNav('contact')}
              className="mt-2 w-full rounded-full bg-primary-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
            >
              Konsultasi Gratis
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}