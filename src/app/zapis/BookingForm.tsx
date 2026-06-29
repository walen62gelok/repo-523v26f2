"use client";

import { useId, useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { masters, services } from "@/content/site";

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const ids = {
    service: useId(),
    master: useId(),
    date: useId(),
    time: useId(),
    name: useId(),
    phone: useId(),
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-xl border border-line bg-cream-2 p-8 text-center"
      >
        <p className="text-lg font-semibold text-ink">Заявка принята (демо)</p>
        <p className="mt-2 text-sm text-muted">
          Это демонстрационная форма — данные никуда не отправляются. В рабочей версии
          здесь будет подключена система записи.
        </p>
        <Button
          type="button"
          variant="secondary"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Заполнить ещё раз
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor={ids.service} className="text-sm font-medium text-ink">
            Услуга
          </label>
          <select id={ids.service} name="service" className="select" defaultValue="">
            <option value="" disabled>
              Выберите услугу
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor={ids.master} className="text-sm font-medium text-ink">
            Мастер
          </label>
          <select id={ids.master} name="master" className="select" defaultValue="">
            <option value="">Любой мастер</option>
            {masters.map((master) => (
              <option key={master.slug} value={master.slug}>
                {master.name} — {master.specialization}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor={ids.date} className="text-sm font-medium text-ink">
            Дата
          </label>
          <input id={ids.date} name="date" type="date" className="input" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor={ids.time} className="text-sm font-medium text-ink">
            Время
          </label>
          <input id={ids.time} name="time" type="time" className="input" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor={ids.name} className="text-sm font-medium text-ink">
            Имя
          </label>
          <input
            id={ids.name}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Как к вам обращаться"
            className="input"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor={ids.phone} className="text-sm font-medium text-ink">
            Телефон
          </label>
          <input
            id={ids.phone}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+7 (___) ___-__-__"
            className="input"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit">Отправить заявку</Button>
        <p className="text-xs text-sage">
          Демо-форма: отправка ничего не пересылает.
        </p>
      </div>
    </form>
  );
}
