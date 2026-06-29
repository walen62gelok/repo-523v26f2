import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import {
  MasterCard,
  PortfolioCard,
  RatingBadge,
  ReviewCard,
  ServiceCard,
} from "@/components/blocks";
import {
  getFeaturedServices,
  masters,
  portfolio,
  reviews,
  siteConfig,
} from "@/content/site";

const advantages = [
  {
    title: "Натуральные волосы",
    text: "Премиальные славянские и натуральные волосы с подбором оттенка под ваш цвет.",
  },
  {
    title: "Невидимые техники",
    text: "Капсульное и невидимое наращивание — места крепления незаметны в причёске.",
  },
  {
    title: "Уход и восстановление",
    text: "Кератин, ботокс и уход за волосами для здоровья после наращивания.",
  },
  {
    title: "Рейтинг 4.8 ★",
    text: `${siteConfig.rating.ratingsCount} оценок и ${siteConfig.rating.reviewsCount} отзывов гостей салона.`,
  },
  {
    title: "Опыт мастеров",
    text: "Команда специалистов с опытом 6–10+ лет в наращивании и колористике.",
  },
  {
    title: "Комфорт салона",
    text: siteConfig.amenities.join(" · "),
  },
];

export default function HomePage() {
  const featured = getFeaturedServices().slice(0, 4);

  return (
    <>
      {/* 1. Hero */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <Container className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
              {siteConfig.city} · {siteConfig.address}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
              Наращивание волос, которое выглядит как ваши собственные
            </h1>
            <p className="mt-4 max-w-xl text-lg text-neutral-600">
              Салон «{siteConfig.name}» в Саранске: капсульное и невидимое
              наращивание, уход, окрашивание и причёски. Естественный результат и
              забота о здоровье волос.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink href="/zapis">Записаться</ButtonLink>
              <a
                href={siteConfig.phoneHref}
                className="text-sm font-medium text-neutral-900 hover:underline"
              >
                {siteConfig.phone}
              </a>
              <RatingBadge />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Placeholder label="Главное фото салона" ratio="aspect-[4/3]" />
          </Reveal>
        </Container>
      </section>

      {/* 2. Преимущества */}
      <Section>
        <SectionHeading
          title="Почему выбирают нас"
          subtitle="Главное направление салона — наращивание волос, но мы закрываем полный цикл ухода за вашим образом."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-neutral-200 bg-white p-6"
            >
              <h3 className="text-base font-semibold text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. Топ-услуги */}
      <Section className="bg-neutral-50">
        <div className="mb-8 flex items-end justify-between gap-4">
          <SectionHeading title="Популярные услуги" />
          <ButtonLink href="/uslugi" variant="secondary" className="shrink-0">
            Все услуги
          </ButtonLink>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      {/* 4. До/после */}
      <Section>
        <div className="mb-8 flex items-end justify-between gap-4">
          <SectionHeading title="Работы «до / после»" />
          <ButtonLink href="/portfolio" variant="secondary" className="shrink-0">
            Всё портфолио
          </ButtonLink>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.slice(0, 3).map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </Section>

      {/* 5. Мастера */}
      <Section className="bg-neutral-50">
        <div className="mb-8 flex items-end justify-between gap-4">
          <SectionHeading title="Наши мастера" />
          <ButtonLink href="/mastera" variant="secondary" className="shrink-0">
            Все мастера
          </ButtonLink>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {masters.map((master) => (
            <MasterCard key={master.slug} master={master} />
          ))}
        </div>
      </Section>

      {/* 6. Отзывы */}
      <Section>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionHeading title="Отзывы гостей" />
            <RatingBadge />
          </div>
          <ButtonLink href="/otzyvy" variant="secondary" className="shrink-0">
            Все отзывы
          </ButtonLink>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 3).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </Section>

      {/* 7. Атмосфера салона */}
      <Section className="bg-neutral-50">
        <SectionHeading
          title="Атмосфера салона"
          subtitle="Уютное пространство, зона для фотосессий, кофе и угощения для гостей."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {["Интерьер", "Рабочее место", "Зона ожидания", "Фотозона"].map((label) => (
            <Placeholder key={label} label={label} ratio="aspect-square" />
          ))}
        </div>
      </Section>

      {/* 8. CTA + адрес */}
      <Section>
        <div className="grid items-center gap-8 rounded-2xl border border-neutral-200 bg-neutral-900 p-8 text-white sm:p-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Запишитесь на консультацию
            </h2>
            <p className="mt-3 text-neutral-300">
              Подберём технику наращивания и рассчитаем стоимость под ваши волосы.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <ButtonLink href="/zapis" variant="secondary">
                Записаться
              </ButtonLink>
              <Link
                href="/kontakty"
                className="inline-flex items-center text-sm font-medium text-white hover:underline"
              >
                Как добраться →
              </Link>
            </div>
          </div>
          <div className="rounded-xl bg-white/5 p-6 text-sm text-neutral-200">
            <p className="font-medium text-white">{siteConfig.name}</p>
            <p className="mt-2">
              {siteConfig.city}, {siteConfig.address}
            </p>
            <p className="mt-1">{siteConfig.hours}</p>
            <p className="mt-1">{siteConfig.phone}</p>
          </div>
        </div>
      </Section>
    </>
  );
}
