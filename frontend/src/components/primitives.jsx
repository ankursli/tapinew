import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

// Section eyebrow / overline
export const Overline = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.28em] font-semibold text-saffron ${className}`}
  >
    <span className="h-px w-6 bg-saffron/50" />
    {children}
  </span>
);

// Scroll reveal wrapper
export const Reveal = ({ children, className = "", delay = 0, y = 42 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={viewportOnce}
    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerGroup = ({ children, className = "" }) => (
  <motion.div
    variants={stagger(0.06, 0.1)}
    initial="hidden"
    whileInView="show"
    viewport={viewportOnce}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className = "" }) => (
  <motion.div variants={fadeUp} className={className}>
    {children}
  </motion.div>
);

// Animated number counter
export const Counter = ({ value, suffix = "", duration = 1800 }) => {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(Math.floor(eased * value));
            if (p < 1) requestAnimationFrame(tick);
            else setDisplay(value);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration, started]);

  return (
    <span ref={ref}>
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
};

// Small decorative diya / flame divider
export const DiyaDivider = ({ className = "" }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <span className="h-px w-16 bg-gradient-to-r from-transparent to-saffron/40" />
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-saffron">
      <path
        d="M12 2c1.6 2.4 3 3.9 3 6a3 3 0 11-6 0c0-2.1 1.4-3.6 3-6z"
        fill="currentColor"
      />
      <path
        d="M4 15c2 2 5 3 8 3s6-1 8-3c-1 3-4 5-8 5s-7-2-8-5z"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
    <span className="h-px w-16 bg-gradient-to-l from-transparent to-saffron/40" />
  </div>
);
