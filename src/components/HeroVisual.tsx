"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Placeholder } from "@/components/ui/Placeholder";
import { Monogram } from "@/components/ui/Logo";
import { siteConfig } from "@/content/site";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Арочное фото интерьера: «занавес»-раскрытие при загрузке + зум-параллакс на скролле. */
export function HeroVisual() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1.28]);
  const y = useTransform(scrollYProgress, [0, 1], ["-3%", "6%"]);

  return (
    <div ref={ref} className="relative mx-auto max-w-md">
      <motion.div
        className="overflow-hidden rounded-[999px_999px_1.5rem_1.5rem]"
        initial={reduceMotion ? false : { clipPath: "inset(100% 0 0 0)" }}
        whileInView={reduceMotion ? undefined : { clipPath: "inset(0% 0 0 0)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.1, ease: EASE }}
      >
        <motion.div style={reduceMotion ? undefined : { scale, y }}>
          <Placeholder
            label="Интерьер салона Alena Lukina"
            src="/photos/hero-interior.jpg"
            ratio="aspect-[4/5]"
            className="rounded-none"
          />
        </motion.div>
      </motion.div>

      {/* плавающий золотой бейдж-монограмма */}
      <div className="animate-float absolute -left-4 bottom-10 flex h-24 w-24 flex-col items-center justify-center gap-1 rounded-full bg-olive text-cream shadow-[0_18px_36px_-18px_rgba(61,66,51,0.65)] sm:-left-8">
        <Monogram className="h-8 w-auto text-cream" />
        <span className="text-[8px] uppercase tracking-[0.24em] text-cream/70">
          hair
        </span>
      </div>
      <div className="absolute -right-3 top-8 rounded-2xl border border-line bg-cream/90 px-4 py-3 text-center shadow-sm backdrop-blur sm:-right-6">
        <p className="text-2xl font-semibold text-olive">{siteConfig.rating.value}</p>
        <p className="text-[10px] uppercase tracking-[0.16em] text-olive/60">рейтинг</p>
      </div>
    </div>
  );
}
