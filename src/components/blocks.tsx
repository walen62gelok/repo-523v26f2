import Link from "next/link";
import type { Master, PortfolioItem, Review, Service } from "@/content/types";
import { siteConfig } from "@/content/site";
import { formatPrice } from "@/lib/format";
import { Container } from "./ui/Container";
import { Placeholder } from "./ui/Placeholder";
import { Reveal } from "./ui/Reveal";

export function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="border-b border-neutral-200 bg-neutral-50">
      <Container className="py-12 sm:py-16">
        <Reveal>
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-3 max-w-2xl text-neutral-600">{subtitle}</p>
          ) : null}
        </Reveal>
      </Container>
    </div>
  );
}

export function RatingBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-3 py-1 text-sm text-neutral-700 ${className}`}
    >
      <span aria-hidden="true">★</span>
      <span className="font-semibold text-neutral-900">
        {siteConfig.rating.value}
      </span>
      <span className="text-neutral-500">
        · {siteConfig.rating.ratingsCount} оценок
      </span>
    </span>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/uslugi/${service.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
    >
      <Placeholder label={service.image} ratio="aspect-[3/2]" className="rounded-none border-0 border-b border-dashed" />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-neutral-900">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm text-neutral-600">
          {service.shortDescription}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-medium text-neutral-900">
            от {formatPrice(service.priceFrom)} {service.unit}
          </span>
          <span className="text-sm text-neutral-500 transition-colors group-hover:text-neutral-900">
            Подробнее →
          </span>
        </div>
      </div>
    </Link>
  );
}

export function MasterCard({ master }: { master: Master }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white">
      <Placeholder label={master.photo} ratio="aspect-[4/5]" className="rounded-none border-0 border-b border-dashed" />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-neutral-900">{master.name}</h3>
        <p className="mt-1 text-sm text-neutral-600">{master.specialization}</p>
        <p className="mt-2 text-xs uppercase tracking-wide text-neutral-400">
          {master.experience}
        </p>
        <p className="mt-3 text-sm text-neutral-600">{master.bio}</p>
      </div>
    </div>
  );
}

export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-5">
      <div
        className="text-sm text-amber-500"
        aria-label={`Оценка ${review.rating} из 5`}
      >
        {"★".repeat(review.rating)}
        <span className="text-neutral-300">{"★".repeat(5 - review.rating)}</span>
      </div>
      <blockquote className="mt-3 flex-1 text-sm text-neutral-700">
        {review.text}
      </blockquote>
      <figcaption className="mt-4 text-sm text-neutral-500">
        <span className="font-medium text-neutral-900">{review.author}</span>
        {" · "}
        {review.source}
      </figcaption>
    </figure>
  );
}

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <figure className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
      <div className="grid grid-cols-2">
        <div className="relative border-r border-dashed border-neutral-300">
          <Placeholder label={item.before} ratio="aspect-square" className="rounded-none border-0" />
          <span className="absolute left-2 top-2 rounded bg-neutral-900/80 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-white">
            До
          </span>
        </div>
        <div className="relative">
          <Placeholder label={item.after} ratio="aspect-square" className="rounded-none border-0" />
          <span className="absolute left-2 top-2 rounded bg-neutral-900/80 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-white">
            После
          </span>
        </div>
      </div>
      <figcaption className="flex flex-wrap items-center gap-2 p-4 text-xs text-neutral-500">
        <span className="font-medium text-neutral-900">{item.title}</span>
        <span className="rounded-full bg-neutral-100 px-2 py-0.5">{item.technique}</span>
        <span className="rounded-full bg-neutral-100 px-2 py-0.5">{item.length}</span>
        <span className="rounded-full bg-neutral-100 px-2 py-0.5">{item.color}</span>
      </figcaption>
    </figure>
  );
}
