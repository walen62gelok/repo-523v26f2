"use client";

import { useState } from "react";
import type { PortfolioItem } from "@/content/types";
import { PortfolioCard } from "@/components/blocks";

type FilterKey = "technique" | "length" | "color";

const ALL = "Все";

function uniqueValues(items: PortfolioItem[], key: FilterKey): string[] {
  return [ALL, ...Array.from(new Set(items.map((item) => item[key])))];
}

export function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  const [technique, setTechnique] = useState(ALL);
  const [length, setLength] = useState(ALL);
  const [color, setColor] = useState(ALL);

  const filters: { key: FilterKey; label: string; value: string; set: (v: string) => void }[] = [
    { key: "technique", label: "Техника", value: technique, set: setTechnique },
    { key: "length", label: "Длина", value: length, set: setLength },
    { key: "color", label: "Цвет", value: color, set: setColor },
  ];

  const filtered = items.filter(
    (item) =>
      (technique === ALL || item.technique === technique) &&
      (length === ALL || item.length === length) &&
      (color === ALL || item.color === color),
  );

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        {filters.map((filter) => (
          <div key={filter.key} className="flex flex-col gap-1">
            <span className="text-xs font-medium uppercase tracking-wide text-sage">
              {filter.label}
            </span>
            <div className="flex flex-wrap gap-2" role="group" aria-label={filter.label}>
              {uniqueValues(items, filter.key).map((value) => {
                const active = filter.value === value;
                return (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={active}
                    onClick={() => filter.set(value)}
                    className={`rounded-full border px-3 py-1 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive ${
                      active
                        ? "border-olive bg-olive text-cream"
                        : "border-line bg-white/60 text-ink/80 hover:bg-olive/5"
                    }`}
                  >
                    {value}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-sage" aria-live="polite">
        Найдено работ: {filtered.length}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p className="mt-4 rounded-lg border border-dashed border-line p-8 text-center text-sm text-sage">
          По выбранным фильтрам работ не найдено.
        </p>
      )}
    </div>
  );
}
