"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect } from "react";
import { setConsent, useConsent } from "@/lib/consent";

/*
 * Optional analytics. Each one is OFF unless its ID is set in the hosting environment (see .env.example), and
 * even then it only loads AFTER the visitor accepts the banner. IDs are checked against the official formats
 * so a typo can never inject odd code into the page.
 */
const pick = (value: string | undefined, pattern: RegExp) => (value && pattern.test(value) ? value : undefined);

const GTM_ID = pick(process.env.NEXT_PUBLIC_GTM_ID, /^GTM-[A-Z0-9]{4,12}$/);
const GA_ID = pick(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, /^G-[A-Z0-9]{6,14}$/);
const CLARITY_ID = pick(process.env.NEXT_PUBLIC_CLARITY_ID, /^[a-z0-9]{6,14}$/);

const enabled = Boolean(GTM_ID || GA_ID || CLARITY_ID);

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Sends clicks on elements marked data-track="name" (optional data-track-label) to the analytics tools. */
function useClickTracking(active: boolean) {
  useEffect(() => {
    if (!active) return;
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>("[data-track]");
      if (!el) return;
      const name = el.dataset.track!;
      const label = el.dataset.trackLabel ?? "";
      window.dataLayer?.push({ event: "cta_click", cta: name, label });
      if (!GTM_ID) window.gtag?.("event", name, { label });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [active]);
}

export default function Tracking() {
  const consent = useConsent();
  useClickTracking(consent === "granted");

  if (!enabled) return null;

  return (
    <>
      {consent === "granted" ? (
        <>
          {GTM_ID ? (
            <Script id="gtm" strategy="lazyOnload">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
            </Script>
          ) : null}

          {/* Direct Google Analytics only when Tag Manager is not used (avoids counting every visit twice). */}
          {!GTM_ID && GA_ID ? (
            <>
              <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
              <Script id="ga4" strategy="lazyOnload">
                {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
              </Script>
            </>
          ) : null}

          {CLARITY_ID ? (
            <Script id="clarity" strategy="lazyOnload">
              {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`}
            </Script>
          ) : null}
        </>
      ) : null}

      {consent === "unset" ? (
        <section
          aria-label="Analytics cookies"
          className="fixed inset-x-3 bottom-3 z-[60] rounded-2xl border border-line bg-card p-4 shadow-2xl sm:left-auto sm:right-4 sm:max-w-md"
        >
          <p className="text-sm">
            May I use analytics cookies (Google Analytics and Microsoft Clarity) to see how this site is used? Nothing
            is loaded unless you agree.{" "}
            <Link href="/privacy" className="underline underline-offset-4">
              Privacy policy
            </Link>
          </p>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={() => setConsent("granted")}
              className="rounded-full bg-linear-to-br from-accent-deep to-accent px-4 py-2 text-sm font-medium text-white"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={() => setConsent("denied")}
              className="rounded-full border border-line px-4 py-2 text-sm font-medium transition-colors hover:bg-card-hover"
            >
              Decline
            </button>
          </div>
        </section>
      ) : null}
    </>
  );
}
