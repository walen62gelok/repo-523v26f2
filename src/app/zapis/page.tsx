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
        <aside className="h-fit rounded-xl border border-neutral-200 bg-neutral-50 p-6 text-sm text-neutral-600">
          <p className="font-medium text-neutral-900">Предпочитаете позвонить?</p>
          <p className="mt-2">
            <a href={siteConfig.phoneHref} className="text-neutral-900 hover:underline">
              {siteConfig.phone}
            </a>
          </p>
          <p className="mt-1">
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 hover:underline"
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
