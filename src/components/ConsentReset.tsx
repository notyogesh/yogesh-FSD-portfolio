"use client";

import { setConsent, useConsent } from "@/lib/consent";

const label = { granted: "Allowed", denied: "Declined", unset: "Not chosen yet", server: "…" } as const;

/** Lets visitors review or change their analytics choice at any time. */
export default function ConsentReset() {
  const consent = useConsent();
  return (
    <div className="flex flex-wrap items-center gap-3">
      <p className="text-sm">
        Your current choice: <strong>{label[consent]}</strong>
      </p>
      <button
        type="button"
        onClick={() => setConsent("unset")}
        className="rounded-full border border-line px-4 py-2 text-sm font-medium transition-colors hover:bg-card-hover"
      >
        Reset my choice
      </button>
    </div>
  );
}
