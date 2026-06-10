import { ShieldCheck, FileText, Hash, Building2, CheckCircle2, Calendar, Briefcase } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import AnimatedSection from '../ui/AnimatedSection';
import { StaggerContainer, StaggerItem } from '../ui/AnimatedSection';
import { company } from '../../data/company';

const KBLI_COLORS = [
  'border-l-green-500 bg-green-50 text-green-700',
  'border-l-cyan-500 bg-cyan-50 text-cyan-700',
  'border-l-emerald-500 bg-emerald-50 text-emerald-700',
  'border-l-teal-500 bg-teal-50 text-teal-700',
  'border-l-blue-500 bg-blue-50 text-blue-700',
];

const MAIN_BADGES = [
  {
    label: 'NIB',
    value: company.legal.nib,
    desc:  'Nomor Induk Berusaha',
    icon:  Hash,
    color: 'from-green-500 to-emerald-600',
    glow:  'hover:shadow-glow-green',
  },
  {
    label: 'NPWP',
    value: company.legal.npwp,
    desc:  'Nomor Pokok Wajib Pajak',
    icon:  FileText,
    color: 'from-cyan-500 to-blue-600',
    glow:  'hover:shadow-glow-cyan',
  },
  {
    label: 'PKP',
    value: 'Certified',
    desc:  company.legal.pkp,
    icon:  ShieldCheck,
    color: 'from-violet-500 to-purple-600',
    glow:  'hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]',
  },
];

export default function Legality() {
  return (
    <section className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden">

      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          badge="Compliance"
          title="Legal &"
          titleGradient="Compliance"
          subtitle="Fully registered and legally compliant under Indonesian business law, with all required certifications and operational permits."
        />

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">

          {/* Left — incorporation details */}
          <AnimatedSection direction="left">
            <div className="h-full rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
              {/* Card header */}
              <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-200 bg-green-50">
                <div className="w-9 h-9 rounded-xl bg-green-100 border border-green-200 flex items-center justify-center">
                  <Building2 size={16} className="text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Company Incorporation</p>
                  <p className="text-xs text-slate-500">Official registration details</p>
                </div>
              </div>

              <div className="p-6 space-y-5">
                {/* Notary */}
                <div className="flex items-start gap-3">
                  <FileText size={15} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">
                      Notary Deed
                    </p>
                    <p className="text-sm text-slate-700 leading-relaxed font-mono">
                      {company.legal.notary}
                    </p>
                  </div>
                </div>

                <div className="h-px bg-slate-100" />

                {/* AHU */}
                <div className="flex items-start gap-3">
                  <ShieldCheck size={15} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">
                      AHU Number
                    </p>
                    <p className="text-sm text-slate-700 font-mono tracking-wide">
                      {company.legal.ahu}
                    </p>
                  </div>
                </div>

                <div className="h-px bg-slate-100" />

                {/* NIB + NPWP row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-xl bg-green-50 border border-green-200">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-green-700 mb-1">NIB</p>
                    <p className="text-xs text-slate-700 font-mono">{company.legal.nib}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-cyan-50 border border-cyan-200">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-700 mb-1">NPWP</p>
                    <p className="text-xs text-slate-700 font-mono">{company.legal.npwp}</p>
                  </div>
                </div>

                <div className="h-px bg-slate-100" />

                {/* PKP + Founded row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-green-600 flex-shrink-0" />
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wide">PKP Status</p>
                      <p className="text-xs text-slate-700">{company.legal.pkp}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-cyan-600 flex-shrink-0" />
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wide">Founded</p>
                      <p className="text-xs text-slate-700">27 Februari 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — KBLI codes */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="h-full rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
              {/* Card header */}
              <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-200 bg-cyan-50">
                <div className="w-9 h-9 rounded-xl bg-cyan-100 border border-cyan-200 flex items-center justify-center">
                  <Briefcase size={16} className="text-cyan-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Business Classification</p>
                  <p className="text-xs text-slate-500">KBLI codes — licensed activities</p>
                </div>
              </div>

              <div className="p-6">
                <StaggerContainer className="space-y-3" staggerDelay={0.08}>
                  {company.legal.kbli.map((item, i) => (
                    <StaggerItem key={item.code}>
                      <div className={`
                        flex items-start gap-4 p-4 rounded-xl
                        border-l-4 ${KBLI_COLORS[i % KBLI_COLORS.length]}
                        border border-slate-100
                      `}>
                        <div className="flex-shrink-0">
                          <span className={`
                            text-xs font-bold font-mono px-2 py-1 rounded-md
                            bg-slate-100 border border-slate-200
                            ${KBLI_COLORS[i % KBLI_COLORS.length].split(' ')[2]}
                          `}>
                            {item.code}
                          </span>
                        </div>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {item.name}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-green-600" />
                  <p className="text-xs text-slate-500">
                    All KBLI codes registered under OSS — Online Single Submission
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Large verification badges */}
        <AnimatedSection delay={0.2}>
          <div className="grid sm:grid-cols-3 gap-5">
            {MAIN_BADGES.map(({ label, value, desc, icon: Icon, color, glow }) => (
              <div
                key={label}
                className={`
                  relative flex items-center gap-4 p-5 rounded-2xl
                  bg-white border border-slate-200 shadow-sm
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${glow}
                `}
              >
                <div className={`
                  w-14 h-14 rounded-2xl bg-gradient-to-br ${color}
                  flex items-center justify-center flex-shrink-0
                  shadow-lg
                `}>
                  <Icon size={24} className="text-white" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="text-base font-bold text-slate-900">{label}</p>
                    <CheckCircle2 size={13} className="text-green-600" />
                  </div>
                  <p className="text-xs font-mono text-slate-600 truncate mb-0.5">{value}</p>
                  <p className="text-[10px] text-slate-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
