"use client";

import { Fragment } from "react";

export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div
      className="group relative flex overflow-hidden border-y border-olive/15 py-5"
      aria-hidden="true"
    >
      <div className="flex shrink-0 animate-[marquee_46s_linear_infinite] items-center gap-0 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {row.map((item, i) => (
          <Fragment key={i}>
            <span className="whitespace-nowrap px-7 text-sm font-light uppercase tracking-[0.32em] text-olive/65 sm:text-base">
              {item}
            </span>
            <span className="h-1 w-1 shrink-0 rounded-full bg-gold/70" />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
