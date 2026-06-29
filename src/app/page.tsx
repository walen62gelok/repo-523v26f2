import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Placeholder";
import { Monogram } from "@/components/ui/Logo";
import { Reveal, Stagger, RevealItem } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { Marquee } from "@/components/ui/Marquee";
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
    title: "Опыт мастеров",
    text: "Команда специалистов с опытом 6–10+ лет в наращивании и колористике.",
  },
  {
    title: "Комфорт салона",
    text: siteConfig.amenities.join(" · "),
  },
  {
    title: "Естественный результат",
    text: "Работаем так, чтобы наращивание выглядело как ваши собственные густые волосы.",
  },
];

const stats = [
  { value: 4.8, decimals: 1, label: "рейтинг салона", suffix: "" },
  { value: siteConfig.rating.ratingsCount, decimals: 0, label: "оценок гостей", suffix: "" },
  { value: siteConfig.rating.reviewsCount, decimals: 0, label: "отзывов", suffix: "" },
  { value: siteConfig.satisfaction.atmosphere, decimals: 0, label: "довольны атмосферой", suffix: "%" },
];

export default function HomePage() {
  const featured = getFeaturedServices().slice(0, 4);

  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden">
        <Container className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal direction="up">
              <p className="eyebrow">
                {siteConfig.city} · {siteConfig.address}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 text-[2.6rem] font-light leading-[1.05] tracking-[-0.01em] text-ink sm:text-6xl lg:text-[4rem]">
                Волосы, которые
                <br />
                выглядят{" "}
                <span className="font-semibold text-olive">как ваши</span>
                <br className="hidden sm:block" />
                <span className="font-semibold text-olive"> собственные</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
                Салон «{siteConfig.name}» в Саранске: капсульное и невидимое
                наращивание, уход, окрашивание и причёски. Естественный результат
                и забота о здоровье волос.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <ButtonLink href="/zapis">Записаться онлайн</ButtonLink>
                <ButtonLink href="/portfolio" variant="secondary">
                  Смотреть работы
                </ButtonLink>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <RatingBadge />
                <a
                  href={siteConfig.phoneHref}
                  className="link-underline text-sm font-medium text-ink"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} direction="left">
            <div className="relative mx-auto max-w-md">
              {/* арочное главное фото — отсылка к зеркалам в интерьере */}
              <Placeholder
                label="Интерьер салона"
                ratio="aspect-[4/5]"
                className="rounded-[999px_999px_1.5rem_1.5rem]"
              />
              {/* плавающий золотой бейдж-монограмма */}
              <div className="animate-float absolute -left-4 bottom-10 flex h-24 w-24 flex-col items-center justify-center gap-1 rounded-full bg-olive text-cream shadow-[0_18px_36px_-18px_rgba(61,66,51,0.65)] sm:-left-8">
                <Monogram className="h-8 w-auto text-cream" />
                <span className="text-[8px] uppercase tracking-[0.24em] text-cream/70">
                  hair
                </span>
              </div>
              <div className="absolute -right-3 top-8 rounded-2xl border border-line bg-cream/90 px-4 py-3 text-center shadow-sm backdrop-blur sm:-right-6">
                <p className="text-2xl font-semibold text-olive">
                  {siteConfig.rating.value}
                </p>
                <p className="text-[10px] uppercase tracking-[0.16em] text-sage">
                  рейтинг
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 2. Бегущая строка-направления */}
      <Marquee
        items={["Наращивание", "Кератин", "Окрашивание", "Уход", "Причёски", "Колористика"]}
      />

      {/* 3. Статистика */}
      <section className="py-14 sm:py-16">
        <Container>
          <Stagger className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <RevealItem key={stat.label} className="text-center">
                <p className="text-4xl font-light text-olive sm:text-5xl">
                  <Counter to={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-[11px] font-light uppercase tracking-[0.24em] text-muted">
                  {stat.label}
                </p>
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* 4. Преимущества */}
      <Section>
        <SectionHeading
          eyebrow="Почему мы"
          title="Сделано с заботой о ваших волосах"
          subtitle="Главное направление салона — наращивание волос, но мы закрываем полный цикл ухода за вашим образом."
        />
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => (
            <RevealItem
              key={item.title}
              className="rounded-2xl border border-line bg-white/55 p-7 transition-colors hover:bg-white"
            >
              <h3 className="font-display text-xl font-medium text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </RevealItem>
          ))}
        </Stagger>
      </Section>

      {/* 5. Топ-услуги */}
      <section className="bg-cream-2 py-16 sm:py-24">
        <Container>
          <Reveal>
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <SectionHeading eyebrow="Услуги" title="Популярные процедуры" />
              <ButtonLink href="/uslugi" variant="secondary" className="shrink-0">
                Все услуги
              </ButtonLink>
            </div>
          </Reveal>
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((service) => (
              <RevealItem key={service.slug} className="h-full">
                <ServiceCard service={service} />
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* 6. До/после */}
      <Section>
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Работы" title="До / после" />
            <ButtonLink href="/portfolio" variant="secondary" className="shrink-0">
              Всё портфолио
            </ButtonLink>
          </div>
        </Reveal>
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.slice(0, 3).map((item) => (
            <RevealItem key={item.id}>
              <PortfolioCard item={item} />
            </RevealItem>
          ))}
        </Stagger>
      </Section>

      {/* 7. Мастера */}
      <section className="bg-cream-2 py-16 sm:py-24">
        <Container>
          <Reveal>
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <SectionHeading eyebrow="Команда" title="Наши мастера" />
              <ButtonLink href="/mastera" variant="secondary" className="shrink-0">
                Все мастера
              </ButtonLink>
            </div>
          </Reveal>
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {masters.map((master) => (
              <RevealItem key={master.slug} className="h-full">
                <MasterCard master={master} />
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* 8. Отзывы */}
      <Section>
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionHeading eyebrow="Отзывы" title="Что говорят гости" />
              <RatingBadge />
            </div>
            <ButtonLink href="/otzyvy" variant="secondary" className="shrink-0">
              Все отзывы
            </ButtonLink>
          </div>
        </Reveal>
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 3).map((review) => (
            <RevealItem key={review.id}>
              <ReviewCard review={review} />
            </RevealItem>
          ))}
        </Stagger>
      </Section>

      {/* 9. CTA + адрес */}
      <Section>
        <div className="relative grid items-center gap-8 overflow-hidden rounded-3xl bg-olive p-8 text-cream sm:p-14 lg:grid-cols-2">
          <div className="pointer-events-none absolute -right-24 -top-24 aspect-square w-96 rounded-full border border-cream/10" />
          <div className="pointer-events-none absolute -right-8 -top-8 aspect-square w-72 rounded-full border border-cream/10" />
          <div className="relative">
            <p className="text-[11px] font-light uppercase tracking-[0.34em] text-cream/55">
              Запись
            </p>
            <h2 className="mt-3 text-3xl font-medium leading-tight sm:text-4xl">
              Запишитесь на консультацию
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-cream/75">
              Подберём технику наращивания и рассчитаем стоимость под ваши волосы.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/zapis" variant="gold">
                Записаться
              </ButtonLink>
              <Link
                href="/kontakty"
                className="link-underline inline-flex items-center text-sm font-medium text-cream"
              >
                Как добраться →
              </Link>
            </div>
          </div>
          <div className="relative rounded-2xl border border-cream/15 bg-cream/5 p-7 text-sm text-cream/80 backdrop-blur">
            <p className="font-display text-xl text-cream">{siteConfig.name}</p>
            <p className="mt-3">
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
