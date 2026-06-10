import { useEffect, useState } from 'react';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';

const STATS = [
  { value: '30 Ton/Hari', label: 'Kapasitas Gasifikasi Medis' },
  { value: '4', label: 'Teknologi Industri Unggulan' },
  { value: 'Zero', label: 'Limbah Cair & Emisi Bau' },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  // helper untuk efek reveal bertahap
  const reveal = (delay = '') =>
    `transition-all duration-700 ease-out ${delay} ${
      mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
    }`;

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-slate-950">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-slate-950 to-secondary-950" />

      {/* Animated blobs */}
      <div className="absolute -left-24 top-1/4 h-80 w-80 animate-blob rounded-full bg-primary-500/30 blur-3xl" />
      <div className="absolute -right-16 top-1/3 h-96 w-96 animate-blob rounded-full bg-secondary-500/25 blur-3xl [animation-delay:4s]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <span
            className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-primary-300 backdrop-blur ${reveal()}`}
          >
            <Sparkles size={15} />
            Advance in Waste Processing Innovation
          </span>

          {/* Headline */}
          <h1
            className={`mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl ${reveal('delay-100')}`}
          >
            Menciptakan masa depan yang{' '}
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              lebih bersih &amp; berkelanjutan
            </span>{' '}
            lewat inovasi pengelolaan limbah.
          </h1>

          {/* Subtext */}
          <p className={`mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 ${reveal('delay-200')}`}>
            PT. Circular Waste Management menghadirkan solusi teknologi skala industri — mulai dari budidaya
            BSF, RDF/BBJP, Geocell, hingga Pembangkit Listrik Gasifikasi — untuk mendorong transisi menuju{' '}
            <span className="font-semibold text-white">circular economy</span>.
          </p>

          {/* CTA */}
          <div className={`mt-9 flex flex-wrap items-center gap-4 ${reveal('delay-300')}`}>
            <button
              onClick={() => scrollTo('services')}
              className="group inline-flex items-center gap-2 rounded-full bg-primary-500 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-primary-500/30 transition-all hover:-translate-y-0.5 hover:bg-primary-400 hover:shadow-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Jelajahi Layanan
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-all hover:border-white/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <Phone size={18} />
              Hubungi Kami
            </button>
          </div>

          {/* Stats */}
          <div className={`mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8 ${reveal('delay-500')}`}>
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-white sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs leading-snug text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fade transition ke section putih berikutnya */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}