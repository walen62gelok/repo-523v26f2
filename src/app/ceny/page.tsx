import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/blocks";
import { formatPrice } from "@/lib/format";
import { getServicesByCategory, serviceCategories } from "@/content/site";

export const metadata: Metadata = {
  title: "Цены",
  description: "Прайс-лист салона Alena Lukina по категориям услуг. Цены ориентировочные.",
};

export default function PricesPage() {
  return (
    <>
      <PageHero
        title="Прайс-лист"
        subtitle="Ориентировочные цены по категориям. Итоговая стоимость определяется на консультации."
      />
      <Section>
        <div className="space-y-10">
          {serviceCategories.map((category) => {
            const items = getServicesByCategory(category.slug);
            if (items.length === 0) return null;
            return (
              <div key={category.slug}>
                <h2 className="text-xl font-semibold text-ink">
                  {category.title}
                </h2>
                <div className="mt-4 overflow-hidden rounded-xl border border-line">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-cream-2 text-sage">
                      <tr>
                        <th scope="col" className="px-4 py-3 font-medium">
                          Услуга
                        </th>
                        <th scope="col" className="px-4 py-3 font-medium">
                          Длительность
                        </th>
                        <th scope="col" className="px-4 py-3 text-right font-medium">
                          Цена
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line">
                      {items.map((service) => (
                        <tr key={service.slug}>
                          <td className="px-4 py-3">
                            <Link
                              href={`/uslugi/${service.slug}`}
                              className="font-medium text-ink hover:underline"
                            >
                              {service.title}
                            </Link>
                          </td>
                          <td className="px-4 py-3 text-muted">
                            {service.duration}
                          </td>
                          <td className="px-4 py-3 text-right text-ink">
                            от {formatPrice(service.priceFrom)} {service.unit}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-8 rounded-lg border border-line bg-cream-2 p-4 text-sm text-muted">
          Цены ориентировочные и зависят от длины, объёма волос и выбранных материалов.
          Финальная стоимость рассчитывается на консультации с мастером.
        </p>
      </Section>
    </>
  );
}
