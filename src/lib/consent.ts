"use client";

import { useSyncExternalStore } from "react";

/**
 * Visitor's choice about optional analytics (Google Analytics / Tag Manager / Microsoft Clarity).
 * Stored only in the visitor's own browser. Nothing optional loads until they choose "granted".
 */
export type Consent = "granted" | "denied" | "unset";

const KEY = "analytics-consent";
const listeners = new Set<() => void>();

function read(): Consent {
  try {
    const v = localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : "unset";
  } catch {
    return "unset";
  }
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}

export function setConsent(value: Consent) {
  try {
    if (value === "unset") localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, value);
  } catch {
    /* storage blocked: choice only lasts for this page view */
  }
  listeners.forEach((l) => l());
}

/** "server" is returned while rendering on the server / before hydration, so nothing flashes. */
export function useConsent(): Consent | "server" {
  return useSyncExternalStore(subscribe, read, () => "server" as const);
}
