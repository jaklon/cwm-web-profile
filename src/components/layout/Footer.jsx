import { MapPin, Phone, Mail, Globe, ArrowUpRight } from 'lucide-react';

function LinkedinIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function InstagramIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function YoutubeIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/>
    </svg>
  );
}

import cwmLogo from '../../assets/cwm_logo.png';
import { company } from '../../data/company';

const NAV_LINKS = [
  { label: 'Beranda',   href: '#home' },
  { label: 'Tentang',   href: '#about' },
  { label: 'Layanan',   href: '#services' },
  { label: 'Mitra',     href: '#partners' },
  { label: 'Galeri',    href: '#gallery' },
  { label: 'Berita',    href: '#news' },
  { label: 'Tim',       href: '#team' },
  { label: 'Legalitas', href: '#legal' },
  { label: 'Kontak',    href: '#contact' },
];

function scrollTo(href) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 overflow-hidden">
      {/* Wave divider */}
      <div className="wave-divider">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12 lg:h-16"
        >
          <path
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,0 L0,0 Z"
            fill="#0f172a"
          />
        </svg>
      </div>

      {/* Top green accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-40" />

      {/* Aurora blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <button
              onClick={() => scrollTo('#home')}
              className="flex items-center gap-2.5 mb-5 group"
              aria-label="CWM Home"
            >
              <img
                src={cwmLogo}
                alt="PT. Circular Waste Management"
                className="h-12 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <div className="leading-none">
                <span className="block text-xl font-bold font-display text-gradient-green">
                  CWM
                </span>
                <span className="block text-xs text-slate-400 tracking-wider uppercase">
                  Circular Waste Management
                </span>
              </div>
            </button>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              PT. Circular Waste Management — menghadirkan inovasi pengolahan
              sampah industri melalui teknologi mutakhir dan prinsip
              ekonomi sirkular.
            </p>

            <div className="flex flex-wrap gap-2">
              {['NIB: ' + company.legal.nib, 'NPWP: ' + company.legal.npwp].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-full text-xs font-mono text-slate-400 bg-white/5 border border-white/10"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
              <span className="text-slate-600 dark:text-slate-500">Didukung oleh</span>
              <span className="font-semibold text-slate-300">INTEC Group Berlin 🇩🇪</span>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                <LinkedinIcon size={14} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                <InstagramIcon size={14} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                 className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                <YoutubeIcon size={14} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-300 mb-5">
              Tautan Cepat
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-slate-400 hover:text-green-400 text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-green-500/50 group-hover:bg-green-400 transition-colors" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-300 mb-5">
              Kontak
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${company.contact.email}`}
                  className="flex items-start gap-3 group"
                >
                  <Mail size={15} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-400 group-hover:text-white text-xs leading-relaxed transition-colors break-all">
                    {company.contact.email}
                  </span>
                </a>
              </li>

              {company.contact.phone.map((p) => (
                <li key={p}>
                  <a
                    href={`tel:${p.replace(/[^0-9+]/g, '')}`}
                    className="flex items-center gap-3 group"
                  >
                    <Phone size={15} className="text-green-400 flex-shrink-0" />
                    <span className="text-slate-400 group-hover:text-white text-xs transition-colors">
                      {p}
                    </span>
                  </a>
                </li>
              ))}

              <li>
                <div className="flex items-start gap-3">
                  <MapPin size={15} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-400 text-xs leading-relaxed">
                    {company.contact.address}
                  </span>
                </div>
              </li>

              <li>
                <div className="flex items-center gap-3">
                  <Globe size={15} className="text-green-400 flex-shrink-0" />
                  <span className="text-slate-400 text-xs">
                    {company.contact.website}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} PT. Circular Waste Management. Seluruh hak dilindungi.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              AHU-0016240.AH.01.01.Tahun 2023
            </span>
            <span className="text-white/10">|</span>
            <span>{company.legal.pkp}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
