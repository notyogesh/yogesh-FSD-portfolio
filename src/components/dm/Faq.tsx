import { faq } from "@/data/faq";

const shell = "mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28";

/** Visible FAQ. Native <details> keeps it accessible and crawlable with no JavaScript. */
export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className={shell}>
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-accent-text">Questions</p>
      <h2 id="faq-title" className="mb-10 max-w-3xl font-display text-3xl uppercase leading-[1.05] tracking-tight sm:text-5xl">
        FAQ
      </h2>
      <div className="grid gap-3">
        {faq.map((item) => (
          <details key={item.q} className="group rounded-3xl border border-line bg-card p-6 open:bg-card-hover">
            <summary className="cursor-pointer list-none font-display text-lg marker:hidden">{item.q}</summary>
            <p className="mt-3 leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
