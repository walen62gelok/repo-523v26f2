import Link from "next/link";
import type { Master, PortfolioItem, Review, Service } from "@/content/types";
import { siteConfig } from "@/content/site";
import { formatPrice } from "@/lib/format";
import { Container } from "./ui/Container";
import { Placeholder } from "./ui/Placeholder";
import { Reveal } from "./ui/Reveal";
import { Spotlight } from "./ui/Spotlight";
import { TextReveal } from "./ui/TextReveal";

export function PageHero({
  title,
  subtitle,
  eyebrow,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}) {
  return (
    <div className="relative overflow-hidden border-b border-line bg-olive text-cream">
      {/* фирменный мотив — тонкие концентрические круги, как портрет-виньетка */}
      <div className="pointer-events-none absolute -right-28 -top-28 aspect-square w-[26rem] rounded-full border border-cream/10" />
      <div className="pointer-events-none absolute -right-14 -top-14 aspect-square w-[20rem] rounded-full border border-cream/10" />
      <Container className="relative py-16 sm:py-20">
        <Reveal>
          <p className="mb-4 text-[11px] font-light uppercase tracking-[0.34em] text-cream/55">
            {eyebrow ?? siteConfig.name}
          </p>
          <h1 className="text-4xl font-light leading-[1.05] tracking-[-0.01em] sm:text-6xl">
            <TextReveal text={title} />
          </h1>
          {subtitle ? (
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-cream/75">
              {subtitle}
            </p>
          ) : null}
        </Reveal>
      </Container>
    </div>
  );
}

export function RatingBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-line bg-cream/[0.06] px-3.5 py-1.5 text-sm text-muted ${className}`}
    >
      <span aria-hidden="true" className="text-gold">★</span>
      <span className="font-semibold text-ink">{siteConfig.rating.value}</span>
      <span className="text-muted">· {siteConfig.rating.ratingsCount} оценок</span>
    </span>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Spotlight className="bezel group h-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5">
      <Link
        href={`/uslugi/${service.slug}`}
        className="bezel-core flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
      >
        <div className="overflow-hidden">
          <Placeholder
            label={service.image}
            src={service.src}
            ratio="aspect-[3/2]"
            className="rounded-none transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-xl font-medium text-ink">{service.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
            {service.shortDescription}
          </p>
          <div className="mt-5 flex items-center justify-between border-t border-line/70 pt-4">
            <span className="text-sm font-semibold text-ink">
              от {formatPrice(service.priceFrom)} {service.unit}
            </span>
            <span className="text-sm text-sage transition-colors group-hover:text-gold-soft">
              Подробнее →
            </span>
          </div>
        </div>
      </Link>
    </Spotlight>
  );
}

export function MasterCard({ master }: { master: Master }) {
  return (
    <Spotlight className="bezel group h-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5">
      <div className="bezel-core flex h-full flex-col">
        <div className="overflow-hidden">
          <Placeholder
            label={master.photo}
            src={master.photoSrc}
            ratio="aspect-[4/5]"
            className="rounded-none transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-xl font-medium text-ink">{master.name}</h3>
          <p className="mt-1 text-sm text-gold-soft">{master.specialization}</p>
          <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-sage">
            {master.experience}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">{master.bio}</p>
        </div>
      </div>
    </Spotlight>
  );
}

export function ReviewCard({ review }: { review: Review }) {
  return (
    <Spotlight className="bezel h-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5">
      <figure className="bezel-core relative flex h-full flex-col p-6">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-5 top-2 font-display text-6xl leading-none text-cream/10"
        >
          &rdquo;
        </span>
        <div
          className="text-sm tracking-widest text-gold"
          aria-label={`Оценка ${review.rating} из 5`}
        >
          {"★".repeat(review.rating)}
          <span className="text-line">{"★".repeat(5 - review.rating)}</span>
        </div>
        <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/85">
          {review.text}
        </blockquote>
        <figcaption className="mt-5 border-t border-line/70 pt-4 text-sm text-muted">
          <span className="font-medium text-ink">{review.author}</span>
          {" · "}
          {review.source}
        </figcaption>
      </figure>
    </Spotlight>
  );
}

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <Spotlight className="bezel group transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5">
      <figure className="bezel-core">
        <div className="grid grid-cols-2 gap-px bg-line">
        <div className="relative overflow-hidden">
          <Placeholder
            label={item.before}
            src={item.beforeSrc}
            ratio="aspect-square"
            className="rounded-none transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
          <span className="absolute left-2.5 top-2.5 rounded-full bg-olive-deep/85 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-cream">
            До
          </span>
        </div>
        <div className="relative overflow-hidden">
          <Placeholder
            label={item.after}
            src={item.afterSrc}
            ratio="aspect-square"
            className="rounded-none transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
          <span className="absolute left-2.5 top-2.5 rounded-full bg-olive px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-cream">
            После
          </span>
        </div>
      </div>
      <figcaption className="flex flex-wrap items-center gap-2 p-5 text-xs text-muted">
        <span className="mr-1 font-display text-base font-medium text-ink">
          {item.title}
        </span>
        <span className="rounded-full bg-greige px-2.5 py-1">{item.technique}</span>
        <span className="rounded-full bg-greige px-2.5 py-1">{item.length}</span>
        <span className="rounded-full bg-greige px-2.5 py-1">{item.color}</span>
        </figcaption>
      </figure>
    </Spotlight>
  );
}
