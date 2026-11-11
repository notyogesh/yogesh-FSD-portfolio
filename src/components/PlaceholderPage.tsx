import { FadeUp, TextReveal } from "./Reveal";

export default function PlaceholderPage({
  title,
  intro,
  blocks = 3,
}: {
  title: string;
  intro: string;
  blocks?: number;
}) {
  return (
    <>
      <TextReveal
        as="h1"
        text={title}
        className="mb-4 px-1 text-4xl font-medium leading-[1.1] tracking-tight sm:text-6xl"
      />
      <FadeUp delay={0.2} className="mb-8 max-w-2xl px-1 text-muted">
        <p>{intro}</p>
      </FadeUp>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {Array.from({ length: blocks }).map((_, i) => (
          <FadeUp key={i} delay={i * 0.08}>
            <div className="grid min-h-[220px] place-items-center rounded-2xl bg-card text-sm text-muted">
              Content placeholder
            </div>
          </FadeUp>
        ))}
      </div>
    </>
  );
}
