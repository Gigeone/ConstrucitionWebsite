import type { Variants } from "framer-motion";

// Soft "ease-out-expo" curve — settles gently for a more premium feel.
const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export const slideUpVariants: Variants = {
  hidden: { y: 36, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: easeOutExpo,
      staggerChildren: 0.12,
    },
  },
};

export const zoomInVariants: Variants = {
  hidden: { scale: 0.94, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.65,
      ease: easeOutExpo,
      staggerChildren: 0.1,
    },
  },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easeOutExpo,
      staggerChildren: 0.08,
    },
  },
};
