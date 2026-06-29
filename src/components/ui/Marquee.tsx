"use client";

import { Fragment } from "react";

export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div
      className="group relative flex overflow-hidden border-y border-olive/15 py-5"
      aria-hidden="true"
    >
      <div className="flex shrink-0 animate-[marquee_38s_linear_infinite] items-center gap-0 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {row.map((item, i) => (
          <Fragment key={i}>
            <span className="px-8 font-display text-2xl italic text-olive/70 sm:text-3xl">
              {item}
            </span>
            <span className="text-gold">✦</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
