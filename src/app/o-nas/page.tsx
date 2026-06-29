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
            <p className="text-ink/80">
              Салон «{siteConfig.name}» специализируется на наращивании волос:
              капсульные, невидимые и ленточные техники с использованием натуральных
              волос. Помимо наращивания мы предлагаем уход, окрашивание, стрижки и
              причёски — полный цикл работы с вашим образом.
            </p>
            <p className="mt-4 text-ink/80">
              Мы ценим естественный результат и здоровье волос: подбираем технику
              индивидуально и сопровождаем гостя на всех этапах — от консультации до
              коррекции.
            </p>
            <div className="mt-6">
              <RatingBadge />
            </div>
          </div>
          <Placeholder
            label="Интерьер салона Alena Lukina"
            src="/photos/interior-green.jpg"
            ratio="aspect-[4/3]"
          />
        </div>
      </Section>

      <Section className="bg-cream-2">
        <SectionHeading title="Удобства" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.amenities.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-line bg-cream/[0.05] p-5 text-sm font-medium text-ink"
            >
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="relative overflow-hidden rounded-3xl bg-olive p-8 text-center text-cream sm:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
          <h2 className="relative text-3xl font-medium sm:text-4xl">
            Хотите обсудить свой образ?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-cream/75">
            Запишитесь на консультацию — подберём технику и материалы под ваши волосы.
          </p>
          <div className="relative mt-8 flex justify-center">
            <ButtonLink href="/zapis" variant="gold">
              Записаться
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
