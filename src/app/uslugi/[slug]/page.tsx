import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Placeholder";
import { PageHero } from "@/components/blocks";
import { formatPrice } from "@/lib/format";
import { getCategoryBySlug, getServiceBySlug, services } from "@/content/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Услуга не найдена" };
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const category = getCategoryBySlug(service.category);

  return (
    <>
      <PageHero title={service.title} subtitle={service.shortDescription} />
      <Container className="grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <nav className="mb-6 text-sm text-sage" aria-label="Хлебные крошки">
            <Link href="/uslugi" className="hover:underline">
              Услуги
            </Link>
            {category ? (
              <>
                <span aria-hidden="true"> / </span>
                <span>{category.title}</span>
              </>
            ) : null}
          </nav>

          <p className="text-ink/80">{service.description}</p>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <Placeholder
              label={service.title}
              src={service.src ?? "/photos/interior-arch.jpg"}
              ratio="aspect-square"
            />
            <Placeholder
              label="Интерьер салона"
              src="/photos/interior-chairs.jpg"
              ratio="aspect-square"
            />
            <Placeholder
              label="Интерьер салона"
              src="/photos/interior-warm.jpg"
              ratio="aspect-square"
            />
          </div>

          <section className="mt-10" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-xl font-semibold text-ink">
              Частые вопросы
            </h2>
            <dl className="mt-4 divide-y divide-line border-y border-line">
              {service.faq.map((item) => (
                <div key={item.question} className="py-4">
                  <dt className="font-medium text-ink">{item.question}</dt>
                  <dd className="mt-1 text-sm text-muted">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        <aside className="h-fit rounded-xl border border-line bg-cream-2 p-6 lg:sticky lg:top-20">
          <p className="text-sm text-sage">Стоимость</p>
          <p className="mt-1 text-2xl font-semibold text-ink">
            от {formatPrice(service.priceFrom)} {service.unit}
          </p>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-sage">Длительность</dt>
              <dd className="text-ink">{service.duration}</dd>
            </div>
            {category ? (
              <div className="flex justify-between gap-4">
                <dt className="text-sage">Категория</dt>
                <dd className="text-ink">{category.title}</dd>
              </div>
            ) : null}
          </dl>
          <ButtonLink href="/zapis" className="mt-6 w-full">
            Записаться
          </ButtonLink>
          <p className="mt-3 text-xs text-sage">
            Цена ориентировочная. Точную стоимость рассчитаем на консультации.
          </p>
        </aside>
      </Container>
    </>
  );
}
