import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Placeholder } from "@/components/ui/Placeholder";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero, RatingBadge } from "@/components/blocks";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "О салоне",
  description: "О салоне Alena Lukina в Саранске: специализация, удобства и атмосфера.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="О салоне"
        subtitle={`«${siteConfig.name}» — салон по наращиванию волос в Саранске.`}
      />
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-neutral-700">
              Салон «{siteConfig.name}» специализируется на наращивании волос:
              капсульные, невидимые и ленточные техники с использованием натуральных
              волос. Помимо наращивания мы предлагаем уход, окрашивание, стрижки и
              причёски — полный цикл работы с вашим образом.
            </p>
            <p className="mt-4 text-neutral-700">
              Мы ценим естественный результат и здоровье волос: подбираем технику
              индивидуально и сопровождаем гостя на всех этапах — от консультации до
              коррекции.
            </p>
            <div className="mt-6">
              <RatingBadge />
            </div>
          </div>
          <Placeholder label="Интерьер салона" ratio="aspect-[4/3]" />
        </div>
      </Section>

      <Section className="bg-neutral-50">
        <SectionHeading title="Удобства" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.amenities.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-neutral-200 bg-white p-5 text-sm font-medium text-neutral-900"
            >
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-neutral-200 bg-neutral-900 p-8 text-center text-white sm:p-12">
          <h2 className="text-2xl font-semibold">Хотите обсудить свой образ?</h2>
          <p className="mx-auto mt-3 max-w-xl text-neutral-300">
            Запишитесь на консультацию — подберём технику и материалы под ваши волосы.
          </p>
          <div className="mt-6 flex justify-center">
            <ButtonLink href="/zapis" variant="secondary">
              Записаться
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
