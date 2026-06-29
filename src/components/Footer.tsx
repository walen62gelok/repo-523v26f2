import Link from "next/link";
import { Container } from "./ui/Container";
import { Wordmark } from "./ui/Logo";
import { siteConfig } from "@/content/site";

const sections = [
  { href: "/uslugi", label: "Услуги" },
  { href: "/ceny", label: "Цены" },
  { href: "/portfolio", label: "Портфолио" },
  { href: "/mastera", label: "Мастера" },
  { href: "/otzyvy", label: "Отзывы" },
  { href: "/o-nas", label: "О салоне" },
  { href: "/zapis", label: "Онлайн-запись" },
  { href: "/kontakty", label: "Контакты" },
];

export function Footer() {
  return (
    <footer className="relative mt-8 overflow-hidden bg-olive-deep text-cream/80">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <Container className="relative grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Wordmark tone="cream" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
            {siteConfig.tagline}. {siteConfig.city}.
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cream/50">
            Контакты
          </p>
          <address className="mt-4 space-y-2 text-sm not-italic text-cream/70">
            <p>
              {siteConfig.city}, {siteConfig.address}
            </p>
            <p>{siteConfig.hours}</p>
            <p>
              <a href={siteConfig.phoneHref} className="link-underline hover:text-cream">
                {siteConfig.phone}
              </a>
            </p>
            <p>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline hover:text-cream"
              >
                WhatsApp
              </a>
            </p>
          </address>
        </div>

        <nav aria-label="Разделы сайта">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cream/50">
            Разделы
          </p>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            {sections.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cream/50">
            Мы в сети
          </p>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            {siteConfig.social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline hover:text-cream"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="relative border-t border-cream/10">
        <Container className="flex flex-col gap-1 py-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. {siteConfig.legalNote}.
          </p>
          <p>Демонстрационный сайт. Контент и данные — заглушки.</p>
        </Container>
      </div>
    </footer>
  );
}
