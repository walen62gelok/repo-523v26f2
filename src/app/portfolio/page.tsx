import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/blocks";
import { portfolio } from "@/content/site";
import { PortfolioGrid } from "./PortfolioGrid";

export const metadata: Metadata = {
  title: "Портфолио",
  description: "Работы салона Alena Lukina «до / после»: наращивание волос разными техниками.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Портфолио «до / после»"
        subtitle="Примеры работ салона. Отфильтруйте по технике, длине и цвету волос."
      />
      <Section>
        <PortfolioGrid items={portfolio} />
      </Section>
    </>
  );
}
