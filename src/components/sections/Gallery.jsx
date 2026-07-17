import SectionHeader from '../ui/SectionHeader';
import { StaggerContainer, StaggerItem } from '../ui/AnimatedSection';
import { ZoomIn } from 'lucide-react';
import { useState } from 'react';

// Semua gambar operasional yang tersedia dari compro CWM
const GALLERY_ITEMS = [
  {
    src:      '/images/products/maggot(fix).png',
    alt:      'BSF — Larva Maggot Berkualitas Tinggi',
    label:    'Budidaya BSF',
    category: 'Organik',
    color:    'from-green-500 to-emerald-600',
    badge:    'bg-green-100 text-green-700 border-green-200',
  },
  {
    src:      '/images/products/bsffacility(fix).png',
    alt:      'Fasilitas BSF — Sistem Otomasi Skala Industri',
    label:    'Fasilitas Otomasi BSF',
    category: 'Organik',
    color:    'from-green-500 to-emerald-600',
    badge:    'bg-green-100 text-green-700 border-green-200',
  },
  {
    src:      '/images/products/RDF(fix).png',
    alt:      'RDF/BBJP — Pelet Bahan Bakar Alternatif Berkalori Tinggi',
    label:    'Pelet RDF/BBJP',
    category: 'Bahan Bakar',
    color:    'from-orange-500 to-amber-600',
    badge:    'bg-amber-100 text-amber-700 border-amber-200',
  },
  {
    src:      '/images/products/rdfprocessing(fix).png',
    alt:      'Peralatan Pengolahan RDF — Crusher & Dryer Industri',
    label:    'Lini Produksi RDF',
    category: 'Bahan Bakar',
    color:    'from-orange-500 to-amber-600',
    badge:    'bg-amber-100 text-amber-700 border-amber-200',
  },
  {
    src:      '/images/products/geocellfield(fix).png',
    alt:      'Geocell — Pemasangan di Lapangan untuk Perkuatan Jalan & Pengendalian Erosi',
    label:    'Instalasi Geocell Lapangan',
    category: 'Infrastruktur',
    color:    'from-cyan-500 to-blue-600',
    badge:    'bg-cyan-100 text-cyan-700 border-cyan-200',
  },
  {
    src:      '/images/products/geocellfactory(fix).png',
    alt:      'Pabrik Geocell — Mesin Molding & Penjahitan Ultrasonik',
    label:    'Pabrik Geocell',
    category: 'Infrastruktur',
    color:    'from-cyan-500 to-blue-600',
    badge:    'bg-cyan-100 text-cyan-700 border-cyan-200',
  },
  {
    src:      '/images/products/gassification(fix).png',
    alt:      'Pembangkit Listrik Gasifikasi — Tungku Pirolisis Vertikal',
    label:    'Plant Gasifikasi',
    category: 'Energi',
    color:    'from-violet-500 to-purple-600',
    badge:    'bg-violet-100 text-violet-700 border-violet-200',
  },
  {
    src:      '/images/products/gasification-system-diagram.jpg',
    alt:      'Diagram Sistem Gasifikasi — Alur Proses Lengkap',
    label:    'Diagram Sistem Gasifikasi',
    category: 'Energi',
    color:    'from-violet-500 to-purple-600',
    badge:    'bg-violet-100 text-violet-700 border-violet-200',
  },
];

function GalleryCard({ item }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-2xl group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-slate-100 dark:bg-slate-800">
      {/* Image */}
      <div className="aspect-square overflow-hidden">
        <img
          src={item.src}
          alt={item.alt}
          onLoad={() => setLoaded(true)}
          className={`
            w-full h-full object-cover
            transition-all duration-500 group-hover:scale-110
            ${loaded ? 'opacity-100' : 'opacity-0'}
          `}
        />
        {/* Loading skeleton */}
        {!loaded && (
          <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700 animate-pulse" />
        )}
      </div>

      {/* Gradient overlay — always visible at bottom */}
      <div className={`absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-900/80 to-transparent`} />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Zoom icon */}
      <div className="
        absolute top-3 right-3
        w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30
        flex items-center justify-center text-white
        opacity-0 group-hover:opacity-100 transition-opacity duration-300
      ">
        <ZoomIn size={14} />
      </div>

      {/* Labels */}
      <div className="absolute bottom-3 left-3 right-3">
        <p className="text-white text-xs font-semibold leading-snug drop-shadow-md">
          {item.label}
        </p>
        <span className={`
          inline-flex items-center mt-1
          px-2 py-0.5 rounded-full text-[10px] font-medium border
          ${item.badge} backdrop-blur-sm
        `}>
          {item.category}
        </span>
      </div>

      {/* Top color bar */}
      <div className={`absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r ${item.color} opacity-80`} />
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="relative py-24 lg:py-32 bg-gray-50 dark:bg-slate-950 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Galeri"
          title="Operasional"
          titleGradient="Kami"
          subtitle="Dokumentasi visual fasilitas pengolahan sampah, lini produksi, dan teknologi industri CWM dari kompro resmi perusahaan."
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {GALLERY_ITEMS.map((item, i) => (
            <StaggerItem key={i}>
              <GalleryCard item={item} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Caption note */}
        <p className="mt-10 text-center text-xs text-slate-400 dark:text-slate-500">
          Seluruh dokumentasi diambil dari profil resmi PT. Circular Waste Management
        </p>
      </div>
    </section>
  );
}
