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
      className={`group relative flex ${ratio} w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-greige via-cream-2 to-greige ${className}`}
    >
      {/* мягкое световое пятно — намёк на тёплый свет интерьера */}
      <div className="pointer-events-none absolute -right-1/4 -top-1/4 h-2/3 w-2/3 rounded-full bg-gold/15 blur-2xl" />
      <div className="relative flex flex-col items-center gap-2 text-center">
        <span
          aria-hidden="true"
          className="font-display text-2xl tracking-tight text-olive/35"
        >
          L<span className="italic">A</span>
        </span>
        <span className="max-w-[80%] text-[11px] font-medium uppercase tracking-[0.18em] text-muted/70">
          {label ?? "Фото"}
        </span>
      </div>
    </div>
  );
}
