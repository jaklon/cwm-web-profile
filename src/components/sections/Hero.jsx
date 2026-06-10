import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Recycle, Zap } from 'lucide-react';
import StatCounter from '../ui/StatCounter';
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

// 4 product images untuk mosaic grid kanan
const PRODUCT_IMAGES = [
  { src: '/images/products/bsf-maggot-closeup.jpg',       alt: 'BSF — Budidaya Maggot',            label: 'BSF Organik'   },
  { src: '/images/products/rdf-briquette-product.jpg',    alt: 'RDF/BBJP — Briket Bahan Bakar',    label: 'RDF/BBJP'      },
  { src: '/images/products/geocell-field-installation.jpg', alt: 'Geocell — Infrastruktur Jalan', label: 'Geocell'       },
  { src: '/images/products/gasification-plant-render.jpg', alt: 'Gasifikasi — Pembangkit Listrik', label: 'Gasifikasi'   },
];

function scrollTo(href) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" />

      {/* Noise texture */}
      <div className="noise-overlay absolute inset-0 pointer-events-none" />

      {/* Aurora blobs */}
      <div className="aurora-blob w-[200px] h-[200px] sm:w-[600px] sm:h-[600px] bg-green-400/20 -top-32 -left-32"
           style={{ animationDelay: '0s' }} />
      <div className="aurora-blob w-[180px] h-[180px] sm:w-[500px] sm:h-[500px] bg-cyan-400/15 top-1/2 -right-48"
           style={{ animationDelay: '3s' }} />
      <div className="aurora-blob w-[160px] h-[160px] sm:w-[400px] sm:h-[400px] bg-emerald-400/15 bottom-0 left-1/3"
           style={{ animationDelay: '6s' }} />

      {/* Floating particles */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none">
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
      </div>

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
                Inovasi Terdepan dalam Pengolahan Sampah
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-display leading-[1.1] mb-6 text-slate-900 dark:text-slate-100"
            >
              Mengubah Sampah Menjadi{' '}
              <span className="text-gradient-green block sm:inline">
                Nilai &amp; Energi Bersih
              </span>
            </motion.h1>

            {/* Mission */}
            <motion.p
              variants={itemVariants}
              className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 max-w-lg"
            >
              {company.mission}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row flex-wrap gap-3"
            >
              <button
                onClick={() => scrollTo('#services')}
                className="btn-primary"
              >
                Jelajahi Solusi
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="btn-outline"
              >
                Hubungi Kami
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              {[
                { label: 'Bersertifikat NIB', dot: 'bg-green-500' },
                { label: 'Terdaftar PKP', dot: 'bg-cyan-500' },
                { label: 'Berdiri 2023', dot: 'bg-emerald-500' },
              ].map(({ label, dot }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                  {label}
                </div>
              ))}
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Didukung oleh INTEC Berlin
              </div>
            </motion.div>
          </motion.div>

          {/* Right — product image mosaic + stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-4"
          >
            {/* 2x2 product image mosaic */}
            <div className="grid grid-cols-2 gap-3 rounded-2xl overflow-hidden">
              {PRODUCT_IMAGES.map((img, i) => (
                <motion.div
                  key={img.alt}
                  className="relative overflow-hidden rounded-xl group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-32 sm:h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay label */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="
                    absolute bottom-2 left-2 right-2
                    text-[10px] font-semibold text-white
                    bg-black/40 backdrop-blur-sm rounded-md px-2 py-1
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    text-center
                  ">
                    {img.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Compact stats card */}
            <div className="relative glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <Zap size={14} className="text-green-600" />
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-widest">
                  Sekilas Perusahaan
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

              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-green-100 flex items-center justify-center">
                  <Recycle size={13} className="text-green-600" />
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Solusi ekonomi sirkular untuk{' '}
                  <span className="text-green-600 font-medium">masa depan yang lebih bersih & berkelanjutan</span>
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#about')}
        aria-label="Gulir ke Tentang"
        className="
          absolute bottom-8 left-1/2 -translate-x-1/2 z-10
          flex flex-col items-center gap-2 text-slate-500 dark:text-slate-400
          hover:text-green-600 transition-colors duration-300
        "
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Gulir</span>
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
