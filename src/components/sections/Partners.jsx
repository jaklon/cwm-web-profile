import * as LucideIcons from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import AnimatedSection from '../ui/AnimatedSection';
import { StaggerContainer, StaggerItem } from '../ui/AnimatedSection';
import { partners } from '../../data/partners';

function Icon({ name, size = 18, className = '' }) {
  const Comp = LucideIcons[name] ?? LucideIcons.Circle;
  return <Comp size={size} className={className} />;
}

const METRIC_ACCENTS = [
  { icon: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
  { icon: 'text-cyan-400',  bg: 'bg-cyan-500/10 border-cyan-500/20'  },
  { icon: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
  { icon: 'text-cyan-400',  bg: 'bg-cyan-500/10 border-cyan-500/20'  },
  { icon: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
  { icon: 'text-cyan-400',  bg: 'bg-cyan-500/10 border-cyan-500/20'  },
];

export default function Partners() {
  const partner = partners[0];

  return (
    <section className="relative py-24 lg:py-32 bg-white dark:bg-slate-900 overflow-hidden">

      {/* Background accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          badge="Mitra Strategis"
          title="Mitra"
          titleGradient="Kami"
          subtitle="Berkolaborasi dengan mitra teknologi global untuk menghadirkan solusi pengelolaan sampah kelas dunia."
        />

        {/* Featured Partner Card — intentionally dark bg, no change needed */}
        <AnimatedSection direction="up" delay={0.1} className="mb-8">
          <div className="
            relative rounded-3xl overflow-hidden
            bg-slate-900 border border-green-500/30
            shadow-[0_0_60px_rgba(34,197,94,0.08)]
          ">
            {/* Subtle top gradient bar */}
            <div className="h-1 w-full bg-gradient-to-r from-green-500 via-emerald-400 to-cyan-500" />

            <div className="grid lg:grid-cols-5 gap-0">

              {/* Left column — identity (2/5) */}
              <AnimatedSection direction="right" delay={0.2} className="lg:col-span-2 p-5 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/10">

                {/* Country + type */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl leading-none">{partner.countryFlag}</span>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {partner.country}
                    </span>
                    <span className="
                      inline-block mt-0.5 px-2.5 py-0.5 rounded-full
                      text-[10px] font-bold uppercase tracking-wide
                      bg-green-500/15 text-green-400 border border-green-500/30
                    ">
                      {partner.type}
                    </span>
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-2xl lg:text-3xl font-bold font-display text-white mb-1 leading-tight">
                  {partner.name}
                </h3>
                <p className="text-xs text-slate-400 mb-6 tracking-wide">
                  Bermitra sejak {partner.since}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-8">
                  {partner.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {partner.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        px-2.5 py-1 rounded-lg text-[11px] font-medium
                        bg-slate-800 border border-slate-700
                        text-slate-300
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Letter info */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-green-500/8 border border-green-500/20">
                  <LucideIcons.FileCheck size={16} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-green-400 mb-1">
                      Surat Dukungan Mitra
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {partner.letterSignatory}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">{partner.letterDate}</p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Right column — WTE system stepper (3/5) */}
              <AnimatedSection direction="left" delay={0.3} className="lg:col-span-3 p-5 sm:p-8 lg:p-10">
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-green-400 mb-1">
                    Sistem Terintegrasi
                  </p>
                  <h4 className="text-lg font-bold text-white leading-snug">
                    {partner.system.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">{partner.system.subtitle}</p>
                </div>

                {/* Vertical stepper */}
                <div className="space-y-0">
                  {partner.system.stages.map((stage, i) => {
                    const isLast = i === partner.system.stages.length - 1;
                    return (
                      <div key={stage.step} className="flex gap-4">

                        {/* Step indicator + connector line */}
                        <div className="flex flex-col items-center flex-shrink-0">
                          <div className="
                            w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0
                            bg-gradient-to-br from-green-500 to-emerald-600
                            shadow-[0_0_12px_rgba(34,197,94,0.3)]
                          ">
                            <Icon name={stage.icon} size={16} className="text-white" />
                          </div>
                          {!isLast && (
                            <div className="w-px flex-1 min-h-[28px] bg-gradient-to-b from-green-500/40 to-green-500/10 my-1" />
                          )}
                        </div>

                        {/* Content */}
                        <div className={`pb-${isLast ? '0' : '5'} pt-1 min-w-0`}>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest">
                              Tahap {stage.step}
                            </span>
                          </div>
                          <h5 className="text-sm font-bold text-white mb-1">{stage.title}</h5>
                          <p className="text-xs text-slate-400 leading-relaxed">{stage.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>

        {/* Key Metrics Grid */}
        <StaggerContainer
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8"
          staggerDelay={0.08}
          delayChildren={0.15}
        >
          {partner.highlights.map((metric, i) => {
            const accent = METRIC_ACCENTS[i % METRIC_ACCENTS.length];
            return (
              <StaggerItem key={metric.label}>
                <div className="
                  relative flex items-center gap-4 p-5 rounded-2xl
                  bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm
                  hover:-translate-y-1 hover:shadow-md
                  transition-all duration-300
                ">
                  <div className={`
                    w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0
                    border ${accent.bg}
                  `}>
                    <Icon name={metric.icon} size={20} className={accent.icon} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-0.5">
                      {metric.label}
                    </p>
                    <p className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug">
                      {metric.value}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Surat Dukungan Mitra notice bar */}
        <AnimatedSection delay={0.2}>
          <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
            <div className="w-9 h-9 rounded-xl bg-green-100 border border-green-200 flex items-center justify-center flex-shrink-0">
              <LucideIcons.ShieldCheck size={18} className="text-green-600" />
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold text-green-700 dark:text-green-400">Surat Dukungan Mitra</span>
              {' '}diterima dari{' '}
              <span className="font-medium text-slate-900 dark:text-slate-100">{partner.letterSignatory}</span>
              {' '}pada{' '}
              <span className="font-medium text-slate-900 dark:text-slate-100">{partner.letterDate}</span>
            </p>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
