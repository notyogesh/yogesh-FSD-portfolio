"use client";

import { useEffect, useRef, useState } from "react";
import { CheckIcon, CopyIcon } from "./icons";

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // fallback for non-secure contexts / blocked clipboard API
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.cssText = "position:fixed;opacity:0;pointer-events:none";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      ta.remove();
      return ok;
    } catch {
      return false;
    }
  }
}

type Props = {
  value: string;
  /** accessible name, e.g. "Copy email" */
  label: string;
  /** visible text next to the icon (optional) */
  text?: string;
  className?: string;
  icon?: React.ReactNode;
};

export default function CopyButton({ value, label, text, className = "", icon }: Props) {
  const [done, setDone] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  return (
    <button
      type="button"
      aria-label={done ? "Copied to clipboard" : label}
      title={label}
      onClick={async () => {
        if (await copyText(value)) {
          setDone(true);
          window.clearTimeout(timer.current);
          timer.current = window.setTimeout(() => setDone(false), 1800);
        }
      }}
      className={`inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-sm font-medium transition-colors hover:bg-card-hover ${
        done ? "border-accent text-accent" : ""
      } ${className}`}
    >
      {done ? <CheckIcon /> : (icon ?? <CopyIcon />)}
      {text ? <span>{done ? "Copied" : text}</span> : null}
      <span className="sr-only" role="status" aria-live="polite">
        {done ? "Copied to clipboard" : ""}
      </span>
    </button>
  );
}
