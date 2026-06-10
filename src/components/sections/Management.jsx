import * as LucideIcons from 'lucide-react';
import { Mic2 } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { StaggerContainer, StaggerItem } from '../ui/AnimatedSection';
import { management, roleColorMap } from '../../data/management';

function MemberCard({ member }) {
  const colors = roleColorMap[member.roleColor] ?? roleColorMap.green;
  const Icon   = LucideIcons[member.icon] ?? LucideIcons.User;

  return (
    <div className={`
      relative flex flex-col h-full
      bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm
      transition-all duration-300 group
      hover:-translate-y-2 hover:shadow-md hover:border-green-300 ${colors.glow}
    `}>
      {/* Gradient top bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${colors.top}`} />

      <div className="flex flex-col flex-1 p-6">

        {/* Avatar */}
        <div className="flex items-center gap-4 mb-5">
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
              {member.photo
                ? <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                : <div className={`w-full h-full bg-gradient-to-br ${colors.top} flex items-center justify-center`}>
                    <span className="text-xl font-bold text-white font-display">
                      {member.initials}
                    </span>
                  </div>
              }
            </div>
            {/* Role icon badge */}
            <div className={`
              absolute -bottom-1 -right-1
              w-6 h-6 rounded-lg border-2 border-white
              bg-gradient-to-br ${colors.top}
              flex items-center justify-center
            `}>
              <Icon size={11} className="text-white" />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-slate-900 leading-tight truncate">
              {member.name}
            </h3>
            <span className={`
              inline-flex items-center gap-1.5 mt-1
              px-2.5 py-0.5 rounded-full text-xs font-semibold border
              ${colors.badge}
            `}>
              <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
              {member.role}
            </span>
            {member.speakerBadge && (
              <div className="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[10px] font-semibold text-blue-700">
                <Mic2 size={10} />
                {member.speakerEvent}
              </div>
            )}
          </div>
        </div>

        {/* Education */}
        <div className="mb-3 pb-3 border-b border-slate-100">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500 mb-1">
            Education
          </p>
          <p className="text-xs text-slate-600 italic leading-relaxed">
            {member.education}
          </p>
        </div>

        {/* Expertise */}
        <div className="mb-4 flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500 mb-1">
            Expertise
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            {member.expertise}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {member.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Management() {
  return (
    <section className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden">

      {/* Background accents */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          badge="Our People"
          title="Leadership"
          titleGradient="Team"
          subtitle="A multidisciplinary team of experts driving innovation at the intersection of engineering, chemistry, and sustainable industry."
        />

        {/* Cards — 3 on top, 2 centered below */}
        <div className="space-y-6">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {management.slice(0, 3).map((member) => (
              <StaggerItem key={member.name} className="flex">
                <MemberCard member={member} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer
            className="grid sm:grid-cols-2 gap-6 lg:w-2/3 lg:mx-auto"
            delayChildren={0.45}
          >
            {management.slice(3).map((member) => (
              <StaggerItem key={member.name} className="flex">
                <MemberCard member={member} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Bottom strip */}
        <div className="mt-16 rounded-2xl bg-white border border-slate-200 shadow-sm p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-sm font-semibold text-slate-900 mb-1">
                Multidisciplinary Excellence
              </p>
              <p className="text-xs text-slate-600 max-w-md">
                Our team combines expertise across nuclear engineering, chemical engineering,
                naval architecture, renewable energy, and international business.
              </p>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end gap-3 flex-shrink-0">
              {['Engineering', 'Chemistry', 'Energy', 'Business', 'R&D'].map((field) => (
                <span
                  key={field}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200"
                >
                  {field}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
