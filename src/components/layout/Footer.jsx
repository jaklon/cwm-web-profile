import { Leaf, MapPin, Phone, Mail, Globe, ArrowUpRight } from 'lucide-react';
import { company } from '../../data/company';

const NAV_LINKS = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Team',     href: '#team' },
  { label: 'Legal',    href: '#legal' },
  { label: 'Contact',  href: '#contact' },
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
              <div className="
                w-10 h-10 rounded-xl
                bg-gradient-to-br from-green-500 to-emerald-600
                flex items-center justify-center
                shadow-glow-green group-hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]
                transition-shadow duration-300
              ">
                <Leaf size={20} className="text-white" />
              </div>
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
              PT. Circular Waste Management — advancing industrial waste
              processing innovation through cutting-edge technology and
              circular economy principles.
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
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-300 mb-5">
              Quick Links
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
              Contact
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
            © {new Date().getFullYear()} PT. Circular Waste Management. All rights reserved.
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
