"use client";

import { useState } from "react";
import Link from "next/link";
import { ButtonLink } from "./ui/Button";
import { Container } from "./ui/Container";
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

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex flex-col leading-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
          aria-label={`${siteConfig.name} — на главную`}
        >
          <span className="text-lg font-semibold tracking-tight text-neutral-900">
            {siteConfig.name}
          </span>
          <span className="text-[11px] uppercase tracking-widest text-neutral-500">
            наращивание волос
          </span>
        </Link>

        <nav
          aria-label="Основная навигация"
          className="hidden items-center gap-5 lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="text-sm font-medium text-neutral-900 hover:underline"
          >
            {siteConfig.phone}
          </a>
          <ButtonLink href="/zapis">Записаться</ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-300 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true">{open ? "✕" : "☰"}</span>
        </button>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-neutral-200 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.phoneHref}
              className="rounded-md px-2 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
            >
              {siteConfig.phone}
            </a>
            <ButtonLink href="/zapis" className="mt-2" onClick={() => setOpen(false)}>
              Записаться
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
