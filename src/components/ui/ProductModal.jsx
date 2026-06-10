import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

const TABS = ['Ikhtisar', 'Tahapan Proses', 'Spesifikasi'];

const accentMap = {
  green:  { text: 'text-green-600',  bg: 'bg-green-100',  border: 'border-green-200',  connector: 'bg-green-400',  badge: 'bg-green-50 text-green-700'  },
  amber:  { text: 'text-amber-600',  bg: 'bg-amber-100',  border: 'border-amber-200',  connector: 'bg-amber-400',  badge: 'bg-amber-50 text-amber-700'  },
  cyan:   { text: 'text-cyan-600',   bg: 'bg-cyan-100',   border: 'border-cyan-200',   connector: 'bg-cyan-400',   badge: 'bg-cyan-50 text-cyan-700'    },
  violet: { text: 'text-violet-600', bg: 'bg-violet-100', border: 'border-violet-200', connector: 'bg-violet-400', badge: 'bg-violet-50 text-violet-700' },
};

function DynamicIcon({ name, ...props }) {
  const Icon = LucideIcons[name];
  if (!Icon) return null;
  return <Icon {...props} />;
}

function OverviewTab({ product, accent }) {
  return (
    <motion.div
      key="overview"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
        {product.description}
      </p>

      <div>
        <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-600 dark:text-slate-400 mb-4">
          Keunggulan Utama
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {product.highlights.map((h, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl ${accent.bg} border ${accent.border}`}
            >
              <LucideIcons.CheckCircle2 size={16} className={accent.text} />
              <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{h}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${accent.badge} border ${accent.border} text-sm font-semibold`}>
        <LucideIcons.Gauge size={14} />
        Kapasitas: {product.capacity}
      </div>
    </motion.div>
  );
}

function StagesTab({ product, accent }) {
  return (
    <motion.div
      key="stages"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3 }}
    >
      {/* Desktop — horizontal stepper */}
      <div className="hidden md:block">
        <div className="flex items-start gap-0">
          {product.stages.map((stage, i) => (
            <div key={i} className="flex-1 flex flex-col items-center">
              {/* connector line */}
              <div className="flex items-center w-full mb-4">
                <div className={`h-px flex-1 ${i === 0 ? 'opacity-0' : accent.connector}`} />
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.15, duration: 0.4 }}
                  className={`w-12 h-12 rounded-full ${accent.bg} border-2 ${accent.border} flex items-center justify-center flex-shrink-0 z-10`}
                >
                  <DynamicIcon name={stage.icon} size={20} className={accent.text} />
                </motion.div>
                <div className={`h-px flex-1 ${i === product.stages.length - 1 ? 'opacity-0' : accent.connector}`} />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 + 0.2, duration: 0.4 }}
                className="px-2 text-center"
              >
                <div className={`text-xs font-bold ${accent.text} mb-1`}>
                  Tahap {stage.step}
                </div>
                <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  {stage.title}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {stage.desc}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile — vertical stepper */}
      <div className="md:hidden space-y-4">
        {product.stages.map((stage, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.12, duration: 0.4 }}
            className="flex gap-4"
          >
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full ${accent.bg} border ${accent.border} flex items-center justify-center flex-shrink-0`}>
                <DynamicIcon name={stage.icon} size={16} className={accent.text} />
              </div>
              {i < product.stages.length - 1 && (
                <div className={`w-px flex-1 mt-2 ${accent.connector}`} />
              )}
            </div>
            <div className="pb-4">
              <div className={`text-xs font-bold ${accent.text} mb-0.5`}>
                Step {stage.step}
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">
                {stage.title}
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {stage.desc}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function SpecsTab({ product, accent }) {
  return (
    <motion.div
      key="specs"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3 }}
      className="divide-y divide-slate-100 dark:divide-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700"
    >
      {product.specs.map((spec, i) => (
        <div
          key={i}
          className="flex items-center justify-between px-5 py-4 bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 transition-colors"
        >
          <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">{spec.label}</span>
          <span className={`text-sm font-semibold ${accent.text}`}>{spec.value}</span>
        </div>
      ))}
    </motion.div>
  );
}

export default function ProductModal({ product, onClose }) {
  const [activeTab, setActiveTab] = useState(0);
  const accent = accentMap[product.bgAccent] ?? accentMap.green;

  const handleKey = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md" />

        {/* Modal */}
        <motion.div
          key="modal"
          className="relative z-10 w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Gradient top bar */}
          <div className={`h-1 w-full bg-gradient-to-r ${product.color}`} />

          {/* Header */}
          <div className="flex items-start gap-4 px-4 sm:px-6 py-4 sm:py-5 border-b border-slate-200 dark:border-slate-700">
            <div className={`w-12 h-12 rounded-xl ${accent.bg} border ${accent.border} flex items-center justify-center flex-shrink-0`}>
              <DynamicIcon name={product.icon} size={22} className={accent.text} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 leading-tight">
                  {product.title}
                </h3>
                <span className={`text-xs px-2 py-0.5 rounded-full border ${accent.badge} ${accent.border}`}>
                  {product.category}
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">{product.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              aria-label="Tutup modal"
              className="flex-shrink-0 w-10 h-10 min-w-[44px] min-h-[44px] rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
            >
              <LucideIcons.X size={16} />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-slate-200 dark:border-slate-700 px-4 sm:px-6 overflow-x-auto">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`
                  relative py-3 px-4 text-sm font-medium transition-colors
                  ${activeTab === i ? 'text-slate-900 dark:text-slate-100' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}
                `}
              >
                {tab}
                {activeTab === i && (
                  <motion.div
                    layoutId="tab-indicator"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${product.color}`}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-6 bg-white dark:bg-slate-900">
            <AnimatePresence mode="wait">
              {activeTab === 0 && (
                <OverviewTab key="overview" product={product} accent={accent} />
              )}
              {activeTab === 1 && (
                <StagesTab key="stages" product={product} accent={accent} />
              )}
              {activeTab === 2 && (
                <SpecsTab key="specs" product={product} accent={accent} />
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
