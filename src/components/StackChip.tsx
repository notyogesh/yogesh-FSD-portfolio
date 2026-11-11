import type { CSSProperties } from "react";
import { logos } from "@/data/logos";
import type { StackItem } from "@/data/stack";

/** Brand colours that would vanish on the dark/light card fall back to the text colour. */
function brandColor(hex?: string) {
  if (!hex) return "var(--fg)";
  const n = parseInt(hex.slice(1), 16);
  const lum = (0.2126 * ((n >> 16) & 255) + 0.7152 * ((n >> 8) & 255) + 0.0722 * (n & 255)) / 255;
  return lum < 0.22 ? "var(--fg)" : hex;
}

export default function StackChip({ item, featured = false }: { item: StackItem; featured?: boolean }) {
  const logo = item.logo ? logos[item.logo] : undefined;
  const brand = brandColor(logo?.hex ?? item.color);

  return (
    <li
      style={{ "--brand": brand } as CSSProperties}
      className={[
        "group/chip flex cursor-default select-none items-center gap-2 rounded-full border py-1.5 pl-2.5 pr-3.5 text-sm",
        "transition-all duration-300 ease-out will-change-transform",
        "hover:-translate-y-1 hover:border-(--brand)",
        "hover:bg-[color-mix(in_srgb,var(--brand)_12%,transparent)]",
        "hover:shadow-[0_10px_24px_-10px_color-mix(in_srgb,var(--brand)_70%,transparent)]",
        featured ? "border-fg bg-fg font-medium text-bg hover:text-fg" : "border-line",
      ].join(" ")}
    >
      <span
        aria-hidden
        className={[
          "grid size-5 shrink-0 place-items-center transition-all duration-300 group-hover/chip:scale-125 group-hover/chip:-rotate-6",
          featured ? "text-bg group-hover/chip:text-(--brand)" : "text-muted group-hover/chip:text-(--brand)",
        ].join(" ")}
      >
        {logo ? (
          <svg viewBox="0 0 24 24" className="size-full fill-current">
            <path d={logo.path} />
          </svg>
        ) : (
          <span className="font-mono text-[10px] font-semibold leading-none">{item.mono}</span>
        )}
      </span>
      <span>{item.name}</span>
    </li>
  );
}
