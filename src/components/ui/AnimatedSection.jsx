import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const directionMap = {
  up:    { hidden: { opacity: 0, y: 40 },  visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: 60 },  visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
  fade:  { hidden: { opacity: 0 },         visible: { opacity: 1 } },
};

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  direction = 'up',
  once = true,
  amount = 0.15,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount });
  const variants = directionMap[direction] ?? directionMap.up;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: variants.hidden,
        visible: {
          ...variants.visible,
          transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* Stagger container — wraps a list of items */
export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.12,
  delayChildren = 0.1,
  once = true,
  amount = 0.1,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: staggerDelay, delayChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* Individual stagger item — use inside StaggerContainer */
export function StaggerItem({
  children,
  className = '',
  direction = 'up',
  duration = 0.5,
}) {
  const variants = directionMap[direction] ?? directionMap.up;

  return (
    <motion.div
      className={className}
      variants={{
        hidden: variants.hidden,
        visible: {
          ...variants.visible,
          transition: { duration, ease: [0.25, 0.1, 0.25, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
