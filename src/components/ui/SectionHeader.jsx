import AnimatedSection from './AnimatedSection';

export default function SectionHeader({
  badge,
  title,
  titleGradient,
  subtitle,
  centered = true,
  className = '',
}) {
  return (
    <AnimatedSection className={`mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 mb-4 ${centered ? 'justify-center' : ''}`}>
          <span className="
            px-4 py-1.5 rounded-full text-sm font-semibold
            bg-green-50 text-green-700
            border border-green-200
            tracking-wide uppercase
          ">
            {badge}
          </span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-tight mb-4 text-slate-900">
        {title}{' '}
        {titleGradient && (
          <span className="text-gradient-green">{titleGradient}</span>
        )}
      </h2>

      {subtitle && (
        <p className={`text-slate-600 text-lg leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}

      <div className={`mt-6 flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-green-500" />
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <div className="h-px w-24 bg-gradient-to-r from-green-500 to-cyan-500" />
        <div className="w-2 h-2 rounded-full bg-cyan-500" />
        <div className="h-px w-12 bg-gradient-to-r from-cyan-500 to-transparent" />
      </div>
    </AnimatedSection>
  );
}
