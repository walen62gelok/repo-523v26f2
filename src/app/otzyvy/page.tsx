import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero, RatingBadge, ReviewCard } from "@/components/blocks";
import { reviews, siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Отзывы",
  description: "Отзывы гостей салона Alena Lukina. Рейтинг 4.8 на картах и справочниках.",
};

export default function ReviewsPage() {
  const { satisfaction } = siteConfig;
  const badges = [
    { label: "Персонал", value: satisfaction.staff },
    { label: "Компетентность", value: satisfaction.competence },
    { label: "Атмосфера", value: satisfaction.atmosphere },
  ];

  return (
    <>
      <PageHero
        title="Отзывы гостей"
        subtitle="Отзывы основаны на реальных оценках салона на картах и в справочниках."
      />
      <Section>
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <RatingBadge />
          {badges.map((badge) => (
            <span
              key={badge.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-cream/[0.05] px-3 py-1 text-sm text-ink/80"
            >
              {badge.label}
              <span className="font-semibold text-ink">{badge.value}%</span>
            </span>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="#" variant="secondary">
            Оставить отзыв на Яндекс.Картах
          </ButtonLink>
          <ButtonLink href="#" variant="secondary">
            Оставить отзыв в 2ГИС
          </ButtonLink>
        </div>
        <p className="mt-3 text-xs text-sage">
          Кнопки отзывов — внешние заглушки в демо-версии.
        </p>
      </Section>
    </>
  );
}
