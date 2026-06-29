import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { PageHero, ServiceCard } from "@/components/blocks";
import { getServicesByCategory, serviceCategories } from "@/content/site";

export const metadata: Metadata = {
  title: "Услуги",
  description: "Наращивание волос, уход, окрашивание, стрижки и причёски в салоне Alena Lukina.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Услуги"
        subtitle="Полный спектр услуг салона — от наращивания волос до ухода, окрашивания и причёсок."
      />
      {serviceCategories.map((category) => {
        const items = getServicesByCategory(category.slug);
        if (items.length === 0) return null;
        return (
          <Section key={category.slug}>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight text-ink">
                {category.title}
              </h2>
              <p className="mt-2 max-w-2xl text-muted">{category.description}</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </Section>
        );
      })}
    </>
  );
}
