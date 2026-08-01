// Shared Framer Motion variants for premium, purposeful motion.
export const EASE = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 42 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.1, ease: EASE } },
};

export const stagger = (delayChildren = 0.05, staggerChildren = 0.09) => ({
  hidden: {},
  show: {
    transition: { delayChildren, staggerChildren },
  },
});

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: EASE } },
};

// Masked line reveal (used inside overflow-hidden wrappers)
export const lineReveal = {
  hidden: { y: "115%" },
  show: (i = 0) => ({
    y: "0%",
    transition: { duration: 1, ease: EASE, delay: 0.15 + i * 0.12 },
  }),
};

export const viewportOnce = { once: true, margin: "-80px" };
