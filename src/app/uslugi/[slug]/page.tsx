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
          <nav className="mb-6 text-sm text-neutral-500" aria-label="Хлебные крошки">
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

          <p className="text-neutral-700">{service.description}</p>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <Placeholder label="Фото 1" ratio="aspect-square" />
            <Placeholder label="Фото 2" ratio="aspect-square" />
            <Placeholder label="Фото 3" ratio="aspect-square" />
          </div>

          <section className="mt-10" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-xl font-semibold text-neutral-900">
              Частые вопросы
            </h2>
            <dl className="mt-4 divide-y divide-neutral-200 border-y border-neutral-200">
              {service.faq.map((item) => (
                <div key={item.question} className="py-4">
                  <dt className="font-medium text-neutral-900">{item.question}</dt>
                  <dd className="mt-1 text-sm text-neutral-600">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        <aside className="h-fit rounded-xl border border-neutral-200 bg-neutral-50 p-6 lg:sticky lg:top-20">
          <p className="text-sm text-neutral-500">Стоимость</p>
          <p className="mt-1 text-2xl font-semibold text-neutral-900">
            от {formatPrice(service.priceFrom)} {service.unit}
          </p>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-neutral-500">Длительность</dt>
              <dd className="text-neutral-900">{service.duration}</dd>
            </div>
            {category ? (
              <div className="flex justify-between gap-4">
                <dt className="text-neutral-500">Категория</dt>
                <dd className="text-neutral-900">{category.title}</dd>
              </div>
            ) : null}
          </dl>
          <ButtonLink href="/zapis" className="mt-6 w-full">
            Записаться
          </ButtonLink>
          <p className="mt-3 text-xs text-neutral-500">
            Цена ориентировочная. Точную стоимость рассчитаем на консультации.
          </p>
        </aside>
      </Container>
    </>
  );
}
