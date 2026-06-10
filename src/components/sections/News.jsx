import { Mic2, Globe, CheckCircle2, MessageSquare, Video, Lock, Calendar, Clock } from 'lucide-react';
import { compareByDepth, motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import AnimatedSection from '../ui/AnimatedSection';
import { news } from '../../data/news';

const TAG_COLOR_MAP = {
  blue:   'bg-blue-100 text-blue-700 border-blue-200',
  green:  'bg-green-100 text-green-700 border-green-200',
  cyan:   'bg-cyan-100 text-cyan-700 border-cyan-200',
  violet: 'bg-violet-100 text-violet-700 border-violet-200',
  amber:  'bg-amber-100 text-amber-700 border-amber-200',
};

function ImageArea({ src, title }) {
  if (src) {
    return (
      <img
        src={src}
        alt={title}
        className="w-full h-full object-cover"
      />
    );
  }
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 min-h-[200px]">
      <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/30 flex items-center justify-center mb-3">
        <Mic2 size={32} className="text-white" />
      </div>
      <p className="text-xs font-semibold text-white/80 uppercase tracking-widest">Acara Pembicara</p>
    </div>
  );
}

function FeaturedCard({ item }) {
  const tagClass = TAG_COLOR_MAP[item.tagColor] ?? TAG_COLOR_MAP.blue;
  const initials = item.speaker
    .replace(/^(Drs\.|Mr\.|Ms\.|Dr\.)\s*/i, '')
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="
        flex flex-col lg:flex-row rounded-2xl overflow-hidden
        bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 border-l-4 border-l-blue-500
        shadow-md hover:shadow-lg transition-all duration-300
      "
    >
      {/* Image / placeholder */}
      <div className="aspect-video lg:aspect-auto lg:w-80 flex-shrink-0 overflow-hidden">
        <ImageArea src={item.image} title={item.title} />
      </div>

      {/* Content */}
      <div className="flex-1 p-4 sm:p-7 lg:p-8 flex flex-col gap-4 min-w-0">

        {/* Tag + date + time */}
        <div className="flex flex-wrap items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide border ${tagClass}`}>
            {item.tag}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <Calendar size={12} />
            {item.date}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <Clock size={12} />
            {item.time}
          </span>
        </div>

        {/* Title + subtitle */}
        <div>
          <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-slate-100 leading-tight mb-1">
            {item.title}
          </h3>
          <p className="text-sm italic text-slate-600 dark:text-slate-400">{item.subtitle}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{item.description}</p>

        {/* Speaker info */}
        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-sm">
            <span className="text-xs font-bold text-white">{initials}</span>
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-none mb-0.5">{item.speaker}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{item.speakerRole}</p>
          </div>
        </div>

        {/* Topic */}
        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-50 border border-blue-200">
          <MessageSquare size={15} className="text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-0.5">
              Topik Paparan:
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{item.topic}</p>
          </div>
        </div>

        {/* Organizer */}
        <div className="flex items-center gap-2">
          <Globe size={14} className="text-slate-400 flex-shrink-0" />
          <span className="text-xs text-slate-500 dark:text-slate-400">Diselenggarakan oleh</span>
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{item.organizer}</span>
        </div>

        {/* Highlights */}
        <ul className="space-y-2">
          {item.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5">
              <CheckCircle2 size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{h}</span>
            </li>
          ))}
        </ul>

        {/* Bottom info bar */}
        <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-slate-100 dark:border-slate-800 mt-auto">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Video size={13} className="text-blue-500" />
            <span className="font-mono">Zoom ID: {item.zoomId}</span>
            <Lock size={11} className="text-slate-400 ml-1" />
            <span className="font-mono">{item.zoomPassword}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Globe size={13} className="text-red-500" />
            <span className="font-mono">{item.youtubeChannel}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function News() {
  const featured = news.filter((item) => item.featured);
  const rest = news.filter((item) => !item.featured);

  return (
    <section className="relative py-24 lg:py-32 bg-gray-50 dark:bg-slate-950 overflow-hidden">

      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          badge="Prestasi & Berita"
          title="Terkini"
          titleGradient="Pencapaian"
          subtitle="Pencapaian, kehadiran di forum nasional, dan perkembangan terkini PT. Circular Waste Management."
        />

        {/* Featured items */}
        <AnimatedSection direction="up" className="space-y-6 mb-8">
          {featured.map((item) => (
            <FeaturedCard key={item.id} item={item} />
          ))}

          {/* Non-featured items would go here when added */}
          {rest.map((item) => (
            <FeaturedCard key={item.id} item={item} />
          ))}
        </AnimatedSection>

        {/* Empty state — future news placeholder */}
        <AnimatedSection direction="up" delay={0.15}>
          <div className="
            flex flex-col items-center justify-center gap-2
            px-6 py-12 rounded-2xl
            bg-slate-50 dark:bg-slate-900 border-2 border-dashed border-slate-200 dark:border-slate-700
            text-center
          ">
            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-1">
              <Clock size={18} className="text-slate-400" />
            </div>
            <p className="text-sm font-medium text-slate-400 dark:text-slate-500">
              Lebih banyak pencapaian dan berita segera hadir...
            </p>
            <p className="text-xs text-slate-300 dark:text-slate-600">
              Ikuti kegiatan dan pencapaian kami di sini
            </p>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
