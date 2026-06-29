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
      className={`flex ${ratio} w-full items-center justify-center overflow-hidden rounded-lg border border-dashed border-neutral-300 bg-neutral-100 ${className}`}
    >
      <span className="px-3 text-center text-xs font-medium uppercase tracking-wide text-neutral-400">
        {label ?? "Фото"}
      </span>
    </div>
  );
}
