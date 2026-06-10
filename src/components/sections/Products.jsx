import { ArrowRight, CheckCircle2, Gauge } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import { StaggerContainer, StaggerItem } from '../ui/AnimatedSection';
import { products } from '../../data/products';

const accentMap = {
  green:  {
    dot:      'bg-green-500',
    badge:    'bg-green-50 text-green-700 border-green-200',
    icon:     'bg-green-100 border-green-200 text-green-600',
    check:    'text-green-600',
    top:      'from-green-500 to-emerald-500',
    glow:     'hover:shadow-glow-green',
    capacity: 'bg-green-50 text-green-700 border-green-200',
  },
  amber:  {
    dot:      'bg-amber-500',
    badge:    'bg-amber-50 text-amber-700 border-amber-200',
    icon:     'bg-amber-100 border-amber-200 text-amber-600',
    check:    'text-amber-600',
    top:      'from-orange-500 to-amber-500',
    glow:     'hover:shadow-glow-amber',
    capacity: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  cyan:   {
    dot:      'bg-cyan-500',
    badge:    'bg-cyan-50 text-cyan-700 border-cyan-200',
    icon:     'bg-cyan-100 border-cyan-200 text-cyan-600',
    check:    'text-cyan-600',
    top:      'from-cyan-500 to-blue-500',
    glow:     'hover:shadow-glow-cyan',
    capacity: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  },
  violet: {
    dot:      'bg-violet-500',
    badge:    'bg-violet-50 text-violet-700 border-violet-200',
    icon:     'bg-violet-100 border-violet-200 text-violet-600',
    check:    'text-violet-600',
    top:      'from-violet-500 to-purple-500',
    glow:     'hover:shadow-glow-violet',
    capacity: 'bg-violet-50 text-violet-700 border-violet-200',
  },
};

function ProductCard({ product, onSelect }) {
  const accent = accentMap[product.bgAccent] ?? accentMap.green;
  const Icon   = LucideIcons[product.icon] ?? LucideIcons.Package;

  return (
    <div
      className={`
        relative flex flex-col h-full
        bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm
        transition-all duration-300 cursor-pointer group
        hover:-translate-y-2 hover:shadow-xl hover:border-green-300 ${accent.glow}
      `}
      onClick={() => onSelect(product)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onSelect(product)}
      aria-label={`Lihat detail ${product.title}`}
    >
      {/* Product image */}
      <div className="h-44 overflow-hidden">
        <ImagePlaceholder
          src={product.productImage}
          label={`${product.title} — Foto Fasilitas`}
          aspectRatio="16/9"
          className="rounded-none h-44"
        />
      </div>

      {/* Gradient top bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${accent.top}`} />

      <div className="flex flex-col flex-1 p-6">
        {/* Category badge + icon row */}
        <div className="flex items-start justify-between mb-5">
          <span className={`
            inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border
            ${accent.badge}
          `}>
            <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
            {product.category}
          </span>

          <div className={`
            w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0
            ${accent.icon}
            group-hover:scale-110 transition-transform duration-300
          `}>
            <Icon size={22} />
          </div>
        </div>

        {/* Title & subtitle */}
        <h3 className="text-lg font-bold font-display text-slate-900 dark:text-slate-100 mb-1 leading-tight">
          {product.title}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">{product.subtitle}</p>

        {/* Capacity badge */}
        <div className={`
          inline-flex items-center gap-1.5 self-start
          px-3 py-1 rounded-full text-xs font-semibold border mb-5
          ${accent.capacity}
        `}>
          <Gauge size={11} />
          {product.capacity}
        </div>

        {/* Highlights */}
        <ul className="space-y-2 flex-1 mb-6">
          {product.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
              <CheckCircle2 size={14} className={`flex-shrink-0 ${accent.check}`} />
              {h}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          className={`
            w-full flex items-center justify-center gap-2
            py-2.5 rounded-xl text-sm font-semibold
            bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700
            hover:bg-gradient-to-r ${accent.top}
            hover:border-transparent hover:text-white
            text-slate-600 dark:text-slate-400 transition-all duration-300
          `}
          onClick={(e) => { e.stopPropagation(); onSelect(product); }}
        >
          Lihat Detail
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

export default function Products({ onSelectProduct }) {
  return (
    <section className="relative py-24 lg:py-32 bg-white dark:bg-slate-900 overflow-hidden">

      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-green-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          badge="Solusi Kami"
          title="Pengolahan Sampah"
          titleGradient="Industri"
          subtitle="Empat lini produk terdepan yang dirancang untuk mengubah setiap aliran sampah menjadi sumber daya bernilai atau energi bersih."
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <StaggerItem key={product.id} className="flex">
              <ProductCard product={product} onSelect={onSelectProduct} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom note */}
        <div className="mt-14 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Seluruh produk sepenuhnya otomatis, modular, dan dirancang untuk penerapan skala industri.
          </p>
          <div className="mt-4 flex items-center justify-center gap-6 flex-wrap">
            {['Zero Air Limbah', 'Otomasi Penuh', 'Desain Modular', 'Memenuhi SNI'].map((tag) => (
              <span key={tag} className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                <CheckCircle2 size={12} className="text-green-600" />
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
