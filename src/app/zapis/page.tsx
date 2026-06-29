import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/blocks";
import { siteConfig } from "@/content/site";
import { BookingForm } from "./BookingForm";

export const metadata: Metadata = {
  title: "Онлайн-запись",
  description: "Запись в салон Alena Lukina. Демонстрационная форма.",
};

export default function BookingPage() {
  return (
    <>
      <PageHero
        title="Онлайн-запись"
        subtitle="Заполните форму — мы свяжемся для подтверждения. Это демонстрационная форма."
      />
      <Container className="grid gap-10 py-12 lg:grid-cols-[1.4fr_0.6fr]">
        <BookingForm />
        <aside className="h-fit rounded-xl border border-line bg-cream-2 p-6 text-sm text-muted">
          <p className="font-medium text-ink">Предпочитаете позвонить?</p>
          <p className="mt-2">
            <a href={siteConfig.phoneHref} className="text-ink hover:underline">
              {siteConfig.phone}
            </a>
          </p>
          <p className="mt-1">
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:underline"
            >
              Написать в WhatsApp
            </a>
          </p>
          <p className="mt-4">{siteConfig.hours}</p>
          <p className="mt-1">
            {siteConfig.city}, {siteConfig.address}
          </p>
        </aside>
      </Container>
    </>
  );
}
