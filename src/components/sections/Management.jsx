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
      bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm
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
              w-6 h-6 rounded-lg border-2 border-white dark:border-slate-900
              bg-gradient-to-br ${colors.top}
              flex items-center justify-center
            `}>
              <Icon size={11} className="text-white" />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 leading-tight truncate">
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
        <div className="mb-3 pb-3 border-b border-slate-100 dark:border-slate-800">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">
            Pendidikan
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400 italic leading-relaxed">
            {member.education}
          </p>
        </div>

        {/* Expertise */}
        <div className="mb-4 flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">
            Keahlian
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed line-clamp-3">
            {member.expertise}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {member.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
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
    <section className="relative py-24 lg:py-32 bg-gray-50 dark:bg-slate-950 overflow-hidden">

      {/* Background accents */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          badge="Tim Kami"
          title="Manajemen"
          titleGradient="Inti"
          subtitle="Tim multidisiplin yang menggerakkan inovasi di persimpangan teknik, kimia, dan industri berkelanjutan."
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
        <div className="mt-16 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">
                Keunggulan Multidisiplin
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md">
                Tim kami menggabungkan keahlian dari teknik nuklir, teknik kimia, arsitektur kapal, energi terbarukan, dan bisnis internasional.
              </p>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end gap-3 flex-shrink-0">
              {['Teknik', 'Kimia', 'Energi', 'Bisnis', 'R&D'].map((field) => (
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
