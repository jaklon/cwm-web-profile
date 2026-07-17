import { Eye, Target, Leaf, Lightbulb, Shield, Users, CheckCircle, Lock, Building2, FileCheck, ShieldCheck, Mic2, Handshake } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import AnimatedSection from '../ui/AnimatedSection';
import { StaggerContainer, StaggerItem } from '../ui/AnimatedSection';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import { company } from '../../data/company';

const VALUE_ICONS = { Leaf, Lightbulb, Shield, Users };

const MILESTONE_ICON_MAP = { Building2, FileCheck, ShieldCheck, Mic2, Handshake, Users };

const MILESTONE_COLORS = {
  green:   { ring: 'ring-green-200',   bg: 'bg-green-100',   icon: 'text-green-600',   dot: 'bg-green-500',   year: 'text-green-700'   },
  cyan:    { ring: 'ring-cyan-200',    bg: 'bg-cyan-100',    icon: 'text-cyan-600',    dot: 'bg-cyan-500',    year: 'text-cyan-700'    },
  emerald: { ring: 'ring-emerald-200', bg: 'bg-emerald-100', icon: 'text-emerald-600', dot: 'bg-emerald-500', year: 'text-emerald-700' },
  blue:    { ring: 'ring-blue-200',    bg: 'bg-blue-100',    icon: 'text-blue-600',    dot: 'bg-blue-500',    year: 'text-blue-700'    },
  violet:  { ring: 'ring-violet-200',  bg: 'bg-violet-100',  icon: 'text-violet-600',  dot: 'bg-violet-500',  year: 'text-violet-700'  },
};

const MILESTONES = [
  { year: "Feb 2023", label: "Pendirian PT. CWM",   desc: "Akta Notaris No. 28, disahkan Kemenkumham",                           icon: "Building2",   color: "green"   },
  { year: "Mar 2023", label: "NIB & NPWP",           desc: "Terdaftar OSS, NPWP aktif di KPP Jakarta Duren Sawit",               icon: "FileCheck",   color: "cyan"    },
  { year: "Jun 2025", label: "Dikukuhkan PKP",        desc: "Dikukuhkan sebagai Pengusaha Kena Pajak",                            icon: "ShieldCheck", color: "emerald" },
  { year: "Mar 2026", label: "Kemitraan INTEC",       desc: "Surat Dukungan Mitra dari INTEC Group Berlin, Jerman",          icon: "Handshake",   color: "blue"    },
  { year: "Jun 2026", label: "BRIN Enviro Talk",     desc: "Direktur CWM hadir sebagai speaker nasional di BRIN #56",            icon: "Mic2",        color: "violet"  },
];

const LEGAL_BADGES = [
  { label: 'NIB',  value: company.legal.nib,  icon: CheckCircle },
  { label: 'NPWP', value: company.legal.npwp, icon: Lock },
  { label: 'AHU',  value: company.legal.ahu.split('.')[0] + '…', icon: CheckCircle },
  { label: 'PKP',  value: 'Dikukuhkan 2025', icon: CheckCircle },
];

export default function About() {
  return (
    <section className="relative py-24 lg:py-32 bg-gray-50 dark:bg-slate-950 overflow-hidden">

      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          badge="Tentang Kami"
          title="Tentang"
          titleGradient="PT. CWM"
          subtitle="Perusahaan teknologi pengolahan sampah industri yang berkomitmen mengubah tantangan lingkungan menjadi peluang berkelanjutan."
        />

        {/* Tagline strip */}
        <AnimatedSection className="mb-10 text-center">
          <p className="text-lg md:text-xl font-semibold text-slate-700 dark:text-slate-300 italic">
            "Dari Sampah Menjadi Solusi,{' '}
            <span className="text-gradient-green">Dari Inovasi Menjadi Keberlanjutan</span>"
          </p>
        </AnimatedSection>

        {/* Vision & Mission cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          {/* Vision */}
          <AnimatedSection direction="left" delay={0.1}>
            <div className="relative h-full rounded-2xl p-5 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 border-l-4 border-l-green-500 shadow-sm hover:shadow-md hover:border-green-300 transition-all duration-300 group overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-green-100 border border-green-200 flex items-center justify-center">
                    <Eye size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-green-600">Visi Kami</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Arah yang kami tuju</p>
                  </div>
                </div>

                <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed font-medium">
                  {company.vision}
                </p>

                <div className="mt-6 h-px bg-gradient-to-r from-green-400/40 to-transparent" />
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-slate-500 dark:text-slate-400">Pemimpin Ekonomi Sirkular</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Mission */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative h-full rounded-2xl p-5 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 border-l-4 border-l-cyan-500 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all duration-300 group overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-cyan-100 border border-cyan-200 flex items-center justify-center">
                    <Target size={20} className="text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-cyan-600">Misi Kami</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Yang menggerakkan kami</p>
                  </div>
                </div>

                <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed font-medium">
                  {company.mission}
                </p>

                <div className="mt-6 h-px bg-gradient-to-r from-cyan-400/40 to-transparent" />
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="text-xs text-slate-500 dark:text-slate-400">Dampak Berbasis Inovasi</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Company overview image */}
        <AnimatedSection className="mb-16">
          <ImagePlaceholder
            src='/images/about/tentang.png'
            label="Tentang — Gambaran Umum Perusahaan / Kantor"
            aspectRatio="16/9"
            className="shadow-lg"
          />
        </AnimatedSection>

        {/* Core Values */}
        <AnimatedSection className="mb-6">
          <h3 className="text-center text-xl font-bold font-display text-slate-900 dark:text-slate-100 mb-2">
            Nilai-Nilai <span className="text-gradient-green">Inti</span>
          </h3>
          <p className="text-center text-sm text-slate-500 dark:text-slate-400 mb-10">
            Prinsip-prinsip yang memandu setiap keputusan kami
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {company.values.map((val, i) => {
            const Icon = VALUE_ICONS[val.icon] ?? Leaf;
            const colors = [
              { bg: 'bg-green-100',   border: 'border-green-200',   icon: 'text-green-600',   glow: 'group-hover:shadow-glow-green'  },
              { bg: 'bg-cyan-100',    border: 'border-cyan-200',    icon: 'text-cyan-600',    glow: 'group-hover:shadow-glow-cyan'   },
              { bg: 'bg-emerald-100', border: 'border-emerald-200', icon: 'text-emerald-600', glow: 'group-hover:shadow-glow-green'  },
              { bg: 'bg-teal-100',    border: 'border-teal-200',    icon: 'text-teal-600',    glow: 'group-hover:shadow-glow-cyan'   },
            ][i % 4];

            return (
              <StaggerItem key={val.title}>
                <div className={`
                  relative h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm
                  group transition-all duration-300
                  hover:-translate-y-1.5 hover:shadow-md hover:border-green-300 ${colors.glow}
                `}>
                  <div className={`
                    w-12 h-12 rounded-xl ${colors.bg} border ${colors.border}
                    flex items-center justify-center mb-5
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    <Icon size={22} className={colors.icon} />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2">{val.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{val.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Company Milestones */}
        <AnimatedSection className="mb-6">
          <h3 className="text-center text-xl font-bold font-display text-slate-900 dark:text-slate-100 mb-2">
            Tonggak <span className="text-gradient-green">Sejarah Perusahaan</span>
          </h3>
          <p className="text-center text-sm text-slate-500 dark:text-slate-400 mb-10">
            Perjalanan PT. CWM dari berdiri hingga kolaborasi global
          </p>
        </AnimatedSection>

        {/* Desktop: horizontal timeline — Mobile: vertical stack */}
        <div className="relative mb-20">
          {/* Horizontal connector line (desktop only) */}
          <div className="hidden md:block absolute top-[2.25rem] left-[calc(10%+1.25rem)] right-[calc(10%+1.25rem)] h-px bg-gradient-to-r from-green-300 via-cyan-300 to-blue-300 pointer-events-none" />

          <StaggerContainer
            className="flex flex-col md:flex-row md:items-start gap-8 md:gap-0"
            staggerDelay={0.1}
            delayChildren={0.1}
          >
            {MILESTONES.map((m, i) => {
              const c = MILESTONE_COLORS[m.color] ?? MILESTONE_COLORS.green;
              const MIcon = MILESTONE_ICON_MAP[m.icon] ?? Users;
              return (
                <StaggerItem key={m.year} className="flex-1 flex flex-col items-center text-center px-3">
                  {/* Icon circle */}
                  <div className={`
                    relative z-10 w-[3.25rem] h-[3.25rem] rounded-2xl mb-3
                    ${c.bg} ring-4 ${c.ring}
                    flex items-center justify-center flex-shrink-0
                    shadow-sm
                  `}>
                    <MIcon size={22} className={c.icon} />
                  </div>

                  {/* Year */}
                  <span className={`text-xs font-bold uppercase tracking-widest mb-1 ${c.year}`}>
                    {m.year}
                  </span>

                  {/* Title */}
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug mb-1">
                    {m.label}
                  </p>

                  {/* Desc */}
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-[160px]">
                    {m.desc}
                  </p>

                  {/* Vertical connector for mobile */}
                  {i < MILESTONES.length - 1 && (
                    <div className="md:hidden w-px h-8 bg-gradient-to-b from-slate-300 to-transparent mt-3" />
                  )}
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* Legal credentials strip */}
        <AnimatedSection>
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm p-6">
            <div className="flex items-center gap-2 mb-5">
              <Lock size={14} className="text-green-600" />
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-600 dark:text-slate-400">
                Legalitas Perusahaan
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {LEGAL_BADGES.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-green-50 border border-green-200"
                >
                  <Icon size={15} className="text-green-600 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-green-700">{label}</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 font-mono truncate">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
