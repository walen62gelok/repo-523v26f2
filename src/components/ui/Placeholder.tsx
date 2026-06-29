import { Monogram } from "./Logo";

export function Placeholder({
  label,
  className = "",
  ratio = "aspect-[4/3]",
}: {
  label?: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label ? `Изображение-заглушка: ${label}` : "Изображение-заглушка"}
      className={`group relative flex ${ratio} w-full items-center justify-center overflow-hidden rounded-xl bg-cream-2 ${className}`}
    >
      {/* фирменный мотив: круглая виньетка, как на карточках бренда */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-line/70 bg-greige/50" />
      <div className="relative flex flex-col items-center gap-2.5 text-center">
        <Monogram className="h-9 w-auto text-cream/30" />
        <span className="max-w-[80%] text-[10px] font-light uppercase tracking-[0.26em] text-muted/70">
          {label ?? "Фото"}
        </span>
      </div>
    </div>
  );
}
