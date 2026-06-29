import type { ReactNode } from "react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <Container>
        <Reveal>{children}</Reveal>
      </Container>
    </section>
  );
}

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = "left",
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`mb-10 ${align === "center" ? "mx-auto max-w-2xl text-center" : ""}`}>
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2 className="text-3xl font-medium leading-[1.05] text-ink sm:text-[2.6rem]">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 max-w-2xl text-[15px] leading-relaxed text-muted ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
