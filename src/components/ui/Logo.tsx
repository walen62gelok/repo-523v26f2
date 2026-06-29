export function Monogram({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`font-display leading-none tracking-tight ${className}`}
    >
      <span className="font-semibold">L</span>
      <span className="font-semibold italic">A</span>
    </span>
  );
}

export function Wordmark({
  className = "",
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "cream";
}) {
  const color = tone === "cream" ? "text-cream" : "text-ink";
  const sub = tone === "cream" ? "text-cream/55" : "text-sage";
  return (
    <span className={`flex items-center gap-2.5 leading-none ${className}`}>
      <span
        aria-hidden="true"
        className={`font-display text-2xl font-semibold tracking-tight ${color}`}
      >
        L<span className="italic">A</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg italic ${color}`}>hair</span>
        <span
          className={`mt-0.5 text-[9px] font-medium uppercase tracking-[0.28em] ${sub}`}
        >
          Alena Lukina
        </span>
      </span>
    </span>
  );
}
