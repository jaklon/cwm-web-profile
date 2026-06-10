import { Eye, Target, Leaf, Lightbulb, Shield, Users, CheckCircle, Lock } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import AnimatedSection from '../ui/AnimatedSection';
import { StaggerContainer, StaggerItem } from '../ui/AnimatedSection';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import { company } from '../../data/company';

const VALUE_ICONS = { Leaf, Lightbulb, Shield, Users };

const LEGAL_BADGES = [
  { label: 'NIB',  value: company.legal.nib,  icon: CheckCircle },
  { label: 'NPWP', value: company.legal.npwp, icon: Lock },
  { label: 'AHU',  value: company.legal.ahu.split('.')[0] + '…', icon: CheckCircle },
  { label: 'PKP',  value: 'Certified 2025', icon: CheckCircle },
];

export default function About() {
  return (
    <section className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden">

      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          badge="Who We Are"
          title="About"
          titleGradient="PT. CWM"
          subtitle="A pioneering industrial waste technology company committed to transforming environmental challenges into sustainable opportunities."
        />

        {/* Vision & Mission cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          {/* Vision */}
          <AnimatedSection direction="left" delay={0.1}>
            <div className="relative h-full rounded-2xl p-8 bg-white border border-slate-200 border-l-4 border-l-green-500 shadow-sm hover:shadow-md hover:border-green-300 transition-all duration-300 group overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-green-100 border border-green-200 flex items-center justify-center">
                    <Eye size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-green-600">Our Vision</p>
                    <p className="text-xs text-slate-500">Where we're headed</p>
                  </div>
                </div>

                <p className="text-slate-700 text-base leading-relaxed font-medium">
                  {company.vision}
                </p>

                <div className="mt-6 h-px bg-gradient-to-r from-green-400/40 to-transparent" />
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-slate-500">Circular Economy Leader</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Mission */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative h-full rounded-2xl p-8 bg-white border border-slate-200 border-l-4 border-l-cyan-500 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all duration-300 group overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-cyan-100 border border-cyan-200 flex items-center justify-center">
                    <Target size={20} className="text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-cyan-600">Our Mission</p>
                    <p className="text-xs text-slate-500">What drives us</p>
                  </div>
                </div>

                <p className="text-slate-700 text-base leading-relaxed font-medium">
                  {company.mission}
                </p>

                <div className="mt-6 h-px bg-gradient-to-r from-cyan-400/40 to-transparent" />
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="text-xs text-slate-500">Innovation-Driven Impact</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Company overview image */}
        <AnimatedSection className="mb-16">
          <ImagePlaceholder
            src={null}
            label="About — Company Overview / Office"
            aspectRatio="16/9"
            className="shadow-lg"
          />
        </AnimatedSection>

        {/* Core Values */}
        <AnimatedSection className="mb-6">
          <h3 className="text-center text-xl font-bold font-display text-slate-900 mb-2">
            Core <span className="text-gradient-green">Values</span>
          </h3>
          <p className="text-center text-sm text-slate-500 mb-10">
            The principles that guide every decision we make
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
                  relative h-full p-6 rounded-2xl bg-white border border-slate-200 shadow-sm
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
                  <h4 className="text-base font-bold text-slate-900 mb-2">{val.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{val.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Legal credentials strip */}
        <AnimatedSection>
          <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6">
            <div className="flex items-center gap-2 mb-5">
              <Lock size={14} className="text-green-600" />
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-600">
                Legal Credentials
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
                    <div className="text-xs text-slate-600 font-mono truncate">{value}</div>
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
