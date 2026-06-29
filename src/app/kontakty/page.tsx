import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Placeholder";
import { PageHero } from "@/components/blocks";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Адрес, часы работы, телефон и соцсети салона Alena Lukina в Саранске.",
};

export default function ContactsPage() {
  return (
    <>
      <PageHero title="Контакты" subtitle="Как нас найти и связаться с салоном." />
      <Container className="grid gap-10 py-12 lg:grid-cols-2">
        <div>
          <dl className="space-y-5 text-sm">
            <div>
              <dt className="text-sage">Адрес</dt>
              <dd className="mt-1 text-base text-ink">
                {siteConfig.city}, {siteConfig.address}
              </dd>
            </div>
            <div>
              <dt className="text-sage">Часы работы</dt>
              <dd className="mt-1 text-base text-ink">{siteConfig.hours}</dd>
            </div>
            <div>
              <dt className="text-sage">Телефон</dt>
              <dd className="mt-1 text-base">
                <a href={siteConfig.phoneHref} className="text-ink hover:underline">
                  {siteConfig.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sage">WhatsApp</dt>
              <dd className="mt-1 text-base">
                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:underline"
                >
                  {siteConfig.whatsapp}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sage">Мы в сети</dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {siteConfig.social.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-line bg-white px-3 py-1 text-sm text-ink/80 hover:bg-olive/5"
                  >
                    {item.label}
                  </a>
                ))}
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/zapis">Записаться</ButtonLink>
            <ButtonLink
              href={siteConfig.mapRouteHref}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Построить маршрут
            </ButtonLink>
          </div>
        </div>

        <div>
          <Placeholder label="Карта · Саранск, Советская ул., 33" ratio="aspect-[4/3]" />
          <p className="mt-2 text-xs text-sage">
            Интерактивная карта будет подключена в рабочей версии (заглушка в демо).
          </p>
        </div>
      </Container>
    </>
  );
}
