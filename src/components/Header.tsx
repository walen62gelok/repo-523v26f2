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

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const raf = requestAnimationFrame(() => setOpen(false));
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-500 ${
        scrolled
          ? "border-line bg-cream/85 backdrop-blur-md"
          : "border-transparent bg-cream/40 backdrop-blur-sm"
      }`}
    >
      <Container className="flex h-18 items-center justify-between gap-4 py-3">
        <Link
          href="/"
          className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive/40"
          aria-label={`${siteConfig.name} — на главную`}
        >
          <Wordmark />
        </Link>

        <nav aria-label="Основная навигация" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`link-underline text-sm transition-colors focus-visible:outline-none ${
                  active ? "text-olive" : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="link-underline text-sm font-medium text-ink"
          >
            {siteConfig.phone}
          </a>
          <ButtonLink href="/zapis" className="px-5 py-2.5">
            Записаться
          </ButtonLink>
        </div>

        <button
          type="button"
          className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-olive/25 text-ink lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive/40"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 block h-px w-5 bg-current transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-px w-5 bg-current transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-5 bg-current transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            className="overflow-hidden border-t border-line bg-cream lg:hidden"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Container className="flex flex-col gap-1 py-5">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className="block rounded-lg px-3 py-2.5 text-[15px] text-ink transition-colors hover:bg-olive/5"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href={siteConfig.phoneHref}
                className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-ink transition-colors hover:bg-olive/5"
              >
                {siteConfig.phone}
              </a>
              <ButtonLink href="/zapis" className="mt-3 w-full">
                Записаться
              </ButtonLink>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
