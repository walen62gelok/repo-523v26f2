"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "./ui/Button";
import { Container } from "./ui/Container";
import { Wordmark } from "./ui/Logo";
import { siteConfig } from "@/content/site";

const navItems = [
  { href: "/uslugi", label: "Услуги" },
  { href: "/ceny", label: "Цены" },
  { href: "/portfolio", label: "Портфолио" },
  { href: "/mastera", label: "Мастера" },
  { href: "/otzyvy", label: "Отзывы" },
  { href: "/o-nas", label: "О салоне" },
  { href: "/kontakty", label: "Контакты" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const raf = requestAnimationFrame(() => setOpen(false));
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setAtTop(y <= 8);
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 140);
        last = y;
      }
    };
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
      className={`sticky top-0 z-40 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        hidden && !open
          ? "-translate-y-full opacity-0"
          : "translate-y-0 opacity-100"
      } ${
        atTop || open
          ? "border-b border-transparent bg-transparent"
          : "border-b border-line/60 bg-olive-deep/80 backdrop-blur-md"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive/40"
          aria-label={`${siteConfig.name} — на главную`}
        >
          <Wordmark />
        </Link>

        <div className="flex items-center gap-3">
          <ButtonLink href="/zapis" className="hidden px-5 py-2.5 sm:inline-flex">
            Записаться
          </ButtonLink>
          <button
            type="button"
            className="btn-glow group inline-flex items-center gap-2.5 rounded-full border border-cream/25 px-4 py-2.5 text-sm tracking-wide text-ink transition-colors duration-300 hover:border-cream/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label="Открыть меню"
            onClick={() => setOpen(true)}
          >
            <span className="flex flex-col gap-[5px]">
              <span className="block h-px w-5 bg-current transition-transform duration-300 group-hover:translate-y-[1px]" />
              <span className="block h-px w-5 bg-current transition-transform duration-300 group-hover:-translate-y-[1px]" />
            </span>
            Меню
          </button>
        </div>
      </Container>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="site-menu"
            className="fixed inset-0 z-50 flex flex-col bg-olive-deep"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <div className="pointer-events-none absolute inset-0 opacity-[0.5]">
              <div className="absolute -right-24 top-1/3 h-[42rem] w-[42rem] rounded-full border border-cream/[0.06]" />
              <div className="absolute -right-10 top-1/3 h-[28rem] w-[28rem] rounded-full border border-cream/[0.05]" />
            </div>

            <Container className="flex h-16 items-center justify-between gap-4">
              <Wordmark />
              <button
                type="button"
                className="btn-glow inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-ink transition-colors duration-300 hover:border-cream/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
                aria-label="Закрыть меню"
                onClick={() => setOpen(false)}
              >
                <span className="relative block h-4 w-4">
                  <span className="absolute left-0 top-1/2 block h-px w-4 -translate-y-1/2 rotate-45 bg-current" />
                  <span className="absolute left-0 top-1/2 block h-px w-4 -translate-y-1/2 -rotate-45 bg-current" />
                </span>
              </button>
            </Container>

            <Container className="relative flex flex-1 flex-col justify-center py-10">
              <nav aria-label="Основная навигация" className="flex flex-col gap-1">
                {navItems.map((item, i) => {
                  const active = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.12 + i * 0.06, duration: 0.6, ease }}
                    >
                      <Link
                        href={item.href}
                        className={`group inline-flex items-baseline gap-4 py-2 font-light leading-tight tracking-tight transition-colors duration-300 text-[clamp(2rem,7vw,3.75rem)] ${
                          active ? "text-gold-soft" : "text-ink hover:text-gold-soft"
                        }`}
                      >
                        <span className="text-xs font-normal tracking-[0.3em] text-sage tabular-nums">
                          0{i + 1}
                        </span>
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                className="mt-12 flex flex-col gap-5 border-t border-line/50 pt-8 sm:flex-row sm:items-end sm:justify-between"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + navItems.length * 0.06, duration: 0.6, ease }}
              >
                <div className="flex flex-col gap-2">
                  <a
                    href={siteConfig.phoneHref}
                    className="link-underline text-lg font-medium text-ink"
                  >
                    {siteConfig.phone}
                  </a>
                  <span className="text-sm text-muted">
                    {siteConfig.city}, {siteConfig.address} · {siteConfig.hours}
                  </span>
                  <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
                    {siteConfig.social.slice(0, 3).map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        className="link-underline text-xs uppercase tracking-[0.18em] text-sage hover:text-ink"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
                <ButtonLink href="/zapis" className="self-start sm:self-auto">
                  Записаться онлайн
                </ButtonLink>
              </motion.div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
