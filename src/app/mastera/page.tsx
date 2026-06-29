import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { MasterCard, PageHero } from "@/components/blocks";
import { masters } from "@/content/site";

export const metadata: Metadata = {
  title: "Мастера",
  description: "Команда мастеров салона Alena Lukina: наращивание, окрашивание, уход и причёски.",
};

export default function MastersPage() {
  return (
    <>
      <PageHero
        title="Наши мастера"
        subtitle="Команда специалистов салона. Данные мастеров — демонстрационные."
      />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {masters.map((master) => (
            <MasterCard key={master.slug} master={master} />
          ))}
        </div>
      </Section>
    </>
  );
}
