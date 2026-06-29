"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/** Тонкая «нить» слева, рисующаяся по мере скролла страницы. */
export function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  if (reduceMotion) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-30 hidden h-screen w-[2px] sm:block"
    >
      <div className="absolute inset-0 bg-cream/10" />
      <motion.div
        style={{ scaleY }}
        className="absolute inset-0 origin-top bg-gradient-to-b from-gold-soft via-gold to-gold-soft shadow-[0_0_12px_0_var(--gold-soft)]"
      />
    </div>
  );
}
