import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar, Clock, Globe, Mic2, Play, Users,
  CheckCircle2, MonitorPlay, ChevronRight, X, ExternalLink,
} from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import AnimatedSection from '../ui/AnimatedSection';
import { featuredEvents } from '../../data/events';

/* ─── Status badge ─────────────────────────────────────────── */
const STATUS_MAP = {
  upcoming:  { label: 'Akan Datang', cls: 'bg-amber-50 text-amber-700 border-amber-200' },
  live:      { label: '🔴 LIVE',     cls: 'bg-red-50 text-red-700 border-red-200 animate-pulse' },
  completed: { label: 'Selesai',     cls: 'bg-slate-100 text-slate-600 border-slate-200' },
};

/* ─── Detail Modal ──────────────────────────────────────────── */
function EventModal({ event, onClose }) {
  if (!event) return null;
  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-700"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Banner image */}
          <div className="relative w-full h-56 sm:h-72 overflow-hidden rounded-t-2xl bg-slate-200">
            {event.bannerImage && (
              <img
                src={event.bannerImage}
                alt={event.title}
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            )}
            {/* Close btn */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
            >
              <X size={16} />
            </button>
            {/* Status */}
            <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold border ${STATUS_MAP[event.status].cls}`}>
              {STATUS_MAP[event.status].label}
            </span>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-5">
            {/* Meta */}
            <div className="flex flex-wrap gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1"><Calendar size={13} />{event.date}</span>
              <span className="flex items-center gap-1"><Clock size={13} />{event.time}</span>
              <span className="flex items-center gap-1"><Globe size={13} />{event.organizer}</span>
            </div>

            {/* Title */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{event.title}</h3>
              <p className="text-sm text-slate-500 italic">{event.subtitle}</p>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{event.description}</p>

            {/* Speaker */}
            <div className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                {event.speaker.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{event.speaker.name}</p>
                <p className="text-xs text-slate-500">{event.speaker.role}</p>
              </div>
              <Mic2 size={16} className="ml-auto text-slate-400 flex-shrink-0" />
            </div>

            {/* Topic */}
            <div className="p-3.5 rounded-xl bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-1">Topik Paparan</p>
              <p className="text-sm text-slate-800 dark:text-slate-200 font-medium leading-snug">{event.topic}</p>
            </div>

            {/* Highlights */}
            <ul className="space-y-2">
              {event.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 size={15} className="text-green-500 mt-0.5 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            {/* Join info */}
            <div className="flex flex-wrap gap-3 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <MonitorPlay size={13} className="text-blue-500" />
                Zoom ID: <strong className="text-slate-700 dark:text-slate-300">{event.zoom.id}</strong>
                &nbsp;🔒 <strong className="text-slate-700 dark:text-slate-300">{event.zoom.password}</strong>
              </span>
              <a
                href={`https://${event.youtube}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-red-500 hover:text-red-600 font-medium"
              >
                <Play size={12} fill="currentColor" /> {event.youtube}
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Event Card ────────────────────────────────────────────── */
function EventCard({ event, onOpen }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-green-300 dark:hover:border-green-700 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col"
      onClick={() => onOpen(event)}
    >
      {/* Banner thumbnail */}
      <div className="relative h-44 bg-gradient-to-br from-cyan-600 to-blue-700 overflow-hidden flex-shrink-0">
        {event.bannerImage && (
          <img
            src={event.bannerImage}
            alt={event.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-green-500 text-white shadow">
            {event.badge}
          </span>
        </div>

        {/* Status */}
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold border ${STATUS_MAP[event.status].cls}`}>
            {STATUS_MAP[event.status].label}
          </span>
        </div>

        {/* Date/Time overlaid at bottom of banner */}
        <div className="absolute bottom-3 left-3 flex gap-3 text-white/90 text-xs">
          <span className="flex items-center gap-1"><Calendar size={11} />{event.date}</span>
          <span className="flex items-center gap-1"><Clock size={11} />{event.time}</span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-0.5 group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">
          {event.title}
        </h3>
        <p className="text-xs text-slate-500 italic mb-3">{event.subtitle}</p>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-4 flex-1">
          {event.description}
        </p>

        {/* Speaker chip */}
        <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            {event.speaker.initials}
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-slate-900 dark:text-white truncate">{event.speaker.name}</p>
            <p className="text-[10px] text-slate-500 truncate">{event.speaker.role}</p>
          </div>
          <Mic2 size={13} className="ml-auto text-slate-400 flex-shrink-0" />
        </div>

        {/* Organizer & CTA */}
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-xs text-slate-500">
            <Globe size={12} />
            {event.organizer}
          </span>
          <button className="flex items-center gap-1 text-xs font-semibold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors">
            Lihat Detail <ChevronRight size={13} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Section ──────────────────────────────────────────── */
export default function FeaturedEvents() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section id="events" className="relative py-24 lg:py-32 bg-white dark:bg-slate-950 scroll-mt-20 overflow-hidden">

      {/* Subtle bg accents */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-green-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          badge="Acara & Kegiatan"
          title="Acara"
          titleGradient="Unggulan"
          subtitle="PT. CWM aktif berpartisipasi dalam forum riset dan industri nasional sebagai wujud komitmen kami terhadap kolaborasi dan inovasi pengelolaan limbah."
        />

        {/* Stats strip */}
        <AnimatedSection className="mb-10">
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[
              { icon: Users,       value: '100+', label: 'Peserta Peneliti' },
              { icon: Mic2,        value: '1',    label: 'Expert Speaker CWM' },
              { icon: MonitorPlay, value: 'LIVE', label: 'Streaming Nasional' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <Icon size={18} className="text-green-500" />
                <span className="text-lg font-bold text-slate-900 dark:text-white">{value}</span>
                <span className="text-[10px] text-slate-500 text-center leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredEvents.map((event) => (
            <AnimatedSection key={event.id}>
              <EventCard event={event} onOpen={setSelectedEvent} />
            </AnimatedSection>
          ))}
          {/* Placeholder "coming soon" card */}
          <AnimatedSection>
            <div className="rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 h-full min-h-[360px] flex flex-col items-center justify-center gap-3 text-slate-400 dark:text-slate-600 p-8">
              <Calendar size={32} strokeWidth={1.5} />
              <p className="text-sm font-medium text-center">Acara selanjutnya akan segera diumumkan</p>
              <span className="px-3 py-1 rounded-full text-xs bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">Stay tuned</span>
            </div>
          </AnimatedSection>
        </div>

      </div>

      {/* Modal */}
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </section>
  );
}
