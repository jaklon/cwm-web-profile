import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Recycle, Zap } from 'lucide-react';
import StatCounter from '../ui/StatCounter';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import { company } from '../../data/company';

const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  size:    4 + (i % 5) * 2,
  top:     `${8 + (i * 31) % 80}%`,
  left:    `${5 + (i * 37) % 88}%`,
  color:   i % 3 === 0 ? '#22d3ee' : i % 3 === 1 ? '#4ade80' : '#86efac',
  opacity: 0.12 + (i % 4) * 0.06,
  duration: 4 + (i % 5) * 1.2,
  delay:   (i % 6) * 0.5,
  driftY:  [-8, -22, -8][i % 3],
  driftX:  [-6, 6, -3, 8, -5][i % 5],
}));

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden:   { opacity: 0, y: 30 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

function scrollTo(href) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-cyan-50">

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" />

      {/* Noise texture */}
      <div className="noise-overlay absolute inset-0 pointer-events-none" />

      {/* Aurora blobs */}
      <div className="aurora-blob w-[600px] h-[600px] bg-green-400/20 -top-32 -left-32"
           style={{ animationDelay: '0s' }} />
      <div className="aurora-blob w-[500px] h-[500px] bg-cyan-400/15 top-1/2 -right-48"
           style={{ animationDelay: '3s' }} />
      <div className="aurora-blob w-[400px] h-[400px] bg-emerald-400/15 bottom-0 left-1/3"
           style={{ animationDelay: '6s' }} />

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            width:   p.size,
            height:  p.size,
            top:     p.top,
            left:    p.left,
            backgroundColor: p.color,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, p.driftY, 0],
            x: [0, p.driftX, 0],
          }}
          transition={{
            duration: p.duration,
            delay:    p.delay,
            repeat:   Infinity,
            ease:     'easeInOut',
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="
                inline-flex items-center gap-2
                px-4 py-2 rounded-full text-sm font-semibold
                bg-green-50 border border-green-200 text-green-700
              ">
                <Recycle size={14} className="animate-spin-slow" />
                Advance in Waste Processing Innovation
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-[1.1] mb-6 text-slate-900"
            >
              Transforming Waste Into{' '}
              <span className="text-gradient-green block sm:inline">
                Value &amp; Clean Energy
              </span>
            </motion.h1>

            {/* Mission */}
            <motion.p
              variants={itemVariants}
              className="text-slate-600 text-lg leading-relaxed mb-8 max-w-lg"
            >
              {company.mission}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollTo('#services')}
                className="btn-primary"
              >
                Explore Solutions
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="btn-outline"
              >
                Get in Touch
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              {[
                { label: 'NIB Certified', dot: 'bg-green-500' },
                { label: 'PKP Registered', dot: 'bg-cyan-500' },
                { label: 'Est. 2023', dot: 'bg-emerald-500' },
              ].map(({ label, dot }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-slate-600">
                  <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                  {label}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — image + stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-4"
          >
            {/* Hero image placeholder */}
            <ImagePlaceholder
              src={null}
              label="Hero — Facility / Team Photo"
              aspectRatio="4/3"
              className="shadow-xl"
            />

            {/* Compact stats card */}
            <div className="relative glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <Zap size={14} className="text-green-600" />
                <span className="text-xs font-semibold text-slate-600 uppercase tracking-widest">
                  Company at a Glance
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {company.stats.map((stat) => (
                  <StatCounter
                    key={stat.label}
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    duration={2200}
                  />
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-green-100 flex items-center justify-center">
                  <Recycle size={13} className="text-green-600" />
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Circular economy solutions for a{' '}
                  <span className="text-green-600 font-medium">cleaner, sustainable future</span>
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#about')}
        aria-label="Scroll to About"
        className="
          absolute bottom-8 left-1/2 -translate-x-1/2 z-10
          flex flex-col items-center gap-2 text-slate-500
          hover:text-green-600 transition-colors duration-300
        "
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={22} />
        </motion.div>
      </motion.button>
    </section>
  );
}
