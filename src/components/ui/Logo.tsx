/* Фирменная монограмма «LA» — тонкие линии, перекрытие L и A, как в оригинале.
   Рисуется в currentColor, поэтому цвет задаётся через text-* родителя. */
export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="28 8 70 102"
      role="img"
      aria-label="LA"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={4.4}
      strokeLinecap="butt"
      strokeLinejoin="miter"
    >
      {/* L — вертикаль с длинной общей нижней перекладиной */}
      <path d="M35 14 V86 H84" />
      {/* A — левая диагональ к вершине */}
      <path d="M50 86 L66 26" />
      {/* A — правая диагональ, уходит ниже базовой линии */}
      <path d="M66 26 L88 104" />
    </svg>
  );
}

export function Wordmark({
  className = "",
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "cream";
}) {
  const mark = tone === "cream" ? "text-cream" : "text-ink";
  const script = tone === "cream" ? "text-cream" : "text-ink";
  const sub = tone === "cream" ? "text-cream/55" : "text-sage";
  return (
    <span className={`flex items-center gap-3 leading-none ${className}`}>
      <Monogram className={`h-9 w-auto ${mark}`} />
      <span className="flex flex-col leading-none">
        <span className={`font-script text-[1.45rem] leading-none ${script}`}>
          hair
        </span>
        <span
          className={`mt-1 text-[9px] font-light uppercase tracking-[0.3em] ${sub}`}
        >
          Alena Lukina
        </span>
      </span>
    </span>
  );
}
