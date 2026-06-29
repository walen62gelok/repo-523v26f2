import Link from "next/link";
import { Container } from "./ui/Container";
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
    <footer className="mt-16 border-t border-neutral-200 bg-neutral-50">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-semibold text-neutral-900">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-neutral-600">{siteConfig.tagline}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-neutral-900">Контакты</p>
          <address className="mt-3 space-y-1 text-sm not-italic text-neutral-600">
            <p>
              {siteConfig.city}, {siteConfig.address}
            </p>
            <p>{siteConfig.hours}</p>
            <p>
              <a href={siteConfig.phoneHref} className="hover:underline">
                {siteConfig.phone}
              </a>
            </p>
            <p>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                WhatsApp
              </a>
            </p>
          </address>
        </div>

        <nav aria-label="Разделы сайта">
          <p className="text-sm font-semibold text-neutral-900">Разделы</p>
          <ul className="mt-3 space-y-1 text-sm text-neutral-600">
            {sections.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-neutral-900 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold text-neutral-900">Мы в сети</p>
          <ul className="mt-3 space-y-1 text-sm text-neutral-600">
            {siteConfig.social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-900 hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-neutral-200">
        <Container className="flex flex-col gap-1 py-5 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. {siteConfig.legalNote}.
          </p>
          <p>Демонстрационный сайт. Контент и данные — заглушки.</p>
        </Container>
      </div>
    </footer>
  );
}
