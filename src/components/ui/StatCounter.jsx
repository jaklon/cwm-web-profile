import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

function easeOutQuart(t) {
  return 1 - Math.pow(1 - t, 4);
}

export default function StatCounter({
  value,
  suffix = '',
  label,
  duration = 2000,
  className = '',
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value, duration]);

  const formatted =
    value >= 1000 ? display.toLocaleString() : display;

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-gradient-green tabular-nums">
        {formatted}
        <span className="text-xl sm:text-2xl lg:text-3xl">{suffix}</span>
      </div>
      <div className="mt-2 text-sm text-slate-500 dark:text-slate-400 font-medium tracking-wide uppercase">
        {label}
      </div>
    </div>
  );
}
