import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Placeholder } from "@/components/ui/Placeholder";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
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
          <Reveal direction="left" className="relative">
            {/* фирменный мотив — концентрические кольца за коллажем */}
            <div className="pointer-events-none absolute -right-8 -top-10 aspect-square w-44 rounded-full border border-line/60 sm:w-56" />
            <div className="pointer-events-none absolute -bottom-8 -left-6 aspect-square w-28 rounded-full border border-line/50" />

            <div className="relative flex gap-3 sm:gap-4">
              <div className="w-[58%] self-end overflow-hidden rounded-[1.75rem] shadow-[0_30px_60px_-30px_rgba(20,24,16,0.6)]">
                <Placeholder
                  label="Интерьер салона Alena Lukina"
                  src="/photos/interior-green.jpg"
                  ratio="aspect-[3/4]"
                  className="rounded-none transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
                />
              </div>
              <div className="flex w-[42%] flex-col gap-3 sm:gap-4">
                <div className="overflow-hidden rounded-[1.25rem] shadow-[0_22px_44px_-24px_rgba(20,24,16,0.55)]">
                  <Placeholder
                    label="Рабочее место мастера"
                    src="/photos/interior-chairs.jpg"
                    ratio="aspect-square"
                    className="rounded-none transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
                  />
                </div>
                <div className="overflow-hidden rounded-[1.25rem] shadow-[0_22px_44px_-24px_rgba(20,24,16,0.55)]">
                  <Placeholder
                    label="Тёплый свет в салоне"
                    src="/photos/interior-lights.jpg"
                    ratio="aspect-[4/5]"
                    className="rounded-none transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
                  />
                </div>
              </div>
            </div>

            {/* плавающая подпись-бейдж */}
            <div className="absolute -bottom-4 left-6 rounded-full border border-line bg-olive/90 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-cream backdrop-blur sm:left-1/3">
              Саранск · Советская, 33
            </div>
          </Reveal>
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
