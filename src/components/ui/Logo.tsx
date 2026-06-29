/* Фирменная монограмма «LA» — тонкие линии, перекрытие L и A, как в оригинале.
   Рисуется в currentColor, поэтому цвет задаётся через text-* родителя. */
export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 132 150"
      role="img"
      aria-label="LA"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={3.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* L */}
      <path d="M30 24 V113 H72" />
      {/* A — две диагонали от вершины */}
      <path d="M50 122 L88 30 L114 122" />
      {/* низкая перекладина A */}
      <path d="M63 98 H101" />
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
