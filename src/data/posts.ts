export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "code"; lang: string; code: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  /** ISO date (YYYY-MM-DD) */
  date: string;
  tags: string[];
  readingMinutes: number;
  blocks: Block[];
};

/*
 * Posts are written from the experience listed on the resume. Review each one and adjust wording so it matches
 * exactly what you built. Newest first.
 */
export const posts: Post[] = [
  {
    slug: "multi-tenant-gst-billing-nestjs-prisma",
    title: "Building a multi-tenant GST billing system with NestJS and Prisma",
    description:
      "How I approached tenant isolation, role-based access, GST maths and SaaS operations when building a multi-tenant billing platform with NestJS, Prisma and PostgreSQL.",
    date: "2026-11-11",
    tags: ["NestJS", "Prisma", "PostgreSQL", "SaaS", "GST"],
    readingMinutes: 5,
    blocks: [
      {
        type: "p",
        text: "I recently built a multi-tenant billing and invoicing platform for the Indian market. Many companies share one system, each with its own invoices, customers and users, and every invoice has to get GST right. This post covers the decisions that mattered most, in the order they bit me.",
      },
      { type: "h2", text: "1. Isolate tenants at the framework level, not in each query" },
      {
        type: "p",
        text: "In a multi-tenant app, the worst bug is one company seeing another company's data. Relying on every developer to remember a filter is fragile, so every query is scoped by a company id and the scoping is enforced by a global tenant guard in NestJS. A new endpoint cannot ship without it.",
      },
      {
        type: "code",
        lang: "ts",
        code: `// Every read is scoped to the caller's company
const invoices = await prisma.invoice.findMany({
  where: { companyId: user.companyId, status: "PAID" },
});`,
      },
      { type: "h2", text: "2. Roles and an audit trail with decorators, guards and interceptors" },
      {
        type: "p",
        text: "The platform has three roles: Super Admin, Admin and User. Permissions are declared with decorators on each route and checked by global guards, so access rules live next to the code they protect. An interceptor writes an audit log entry automatically, which means nobody has to remember to log a change.",
      },
      { type: "h2", text: "3. Never use floating point for money" },
      {
        type: "p",
        text: "GST has two common modes: add-on, where tax is added on top of the price, and inclusive, where the price already contains tax. Floating point numbers will eventually produce a paisa of drift, so all money maths uses Prisma's Decimal type.",
      },
      {
        type: "code",
        lang: "ts",
        code: `import { Prisma } from "@prisma/client";

const total = new Prisma.Decimal("118.00");
const rate = new Prisma.Decimal(18);

// Inclusive mode: work backwards from the total to the base price
const base = total.div(new Prisma.Decimal(1).plus(rate.div(100))); // 100.00
const tax = total.minus(base); // 18.00`,
      },
      {
        type: "p",
        text: "One rule that saved me trouble later: a company's tax mode locks after its first invoice. Changing it afterwards would quietly change the meaning of every old invoice.",
      },
      { type: "h2", text: "4. Treat the SaaS side as a product too" },
      {
        type: "p",
        text: "A Super Admin portal handles the unglamorous parts of running a SaaS. These are the pieces I would build again from day one:",
      },
      {
        type: "ul",
        items: [
          "Tenant provisioning, so onboarding a new company is a form rather than a database script.",
          "A subscription lifecycle with an expiry guard that answers HTTP 402 (Payment Required) once a plan lapses.",
          "A global maintenance mode that you can switch on before risky changes.",
          "Scheduled and on-demand database backups.",
          "Platform analytics across all tenants.",
        ],
      },
      { type: "h2", text: "5. Don't forget the customers without reliable internet" },
      {
        type: "p",
        text: "Many small businesses want to bill even when the connection drops, so I also shipped an offline Windows desktop version of the system using Electron. Sharing the same React front end between the web app and the desktop app kept the extra work small.",
      },
      { type: "h2", text: "Stack" },
      {
        type: "p",
        text: "NestJS and TypeScript on the server, Prisma with PostgreSQL for data, Passport and JWT for authentication, exceljs for exports, React 19 with Vite and Tailwind CSS on the front end, Electron for the desktop app, and Docker Compose to run it all.",
      },
    ],
  },
  {
    slug: "payment-webhooks-refunds-nodejs",
    title: "Payment webhooks and refunds in Node.js: lessons from Razorpay, Stripe and Square",
    description:
      "A practical checklist for handling payment webhooks safely in Node.js: verify signatures on the raw body, make handlers idempotent, process asynchronously and model refunds properly.",
    date: "2026-11-10",
    tags: ["Node.js", "Razorpay", "Stripe", "Square", "Payments"],
    readingMinutes: 5,
    blocks: [
      {
        type: "p",
        text: "I have integrated Razorpay, Stripe and Square into several production apps, including bookings with full and partial refunds. The providers differ, but the lessons that kept the money side reliable are the same across all three.",
      },
      { type: "h2", text: "1. Trust the webhook, not the browser" },
      {
        type: "p",
        text: "After a customer pays, the browser is redirected back to your site. Never mark an order as paid from that redirect. A user can close the tab, lose signal, or fake the request. The provider's webhook is a server-to-server message, and that is the source of truth.",
      },
      { type: "h2", text: "2. Verify the signature on the raw body" },
      {
        type: "p",
        text: "Every provider signs its webhooks. The signature is computed over the exact bytes they sent, so you must verify before parsing JSON, otherwise re-serialising the body will break the check. In Express that means using a raw body parser on the webhook route.",
      },
      {
        type: "code",
        lang: "ts",
        code: `import crypto from "node:crypto";
import express from "express";

app.post("/webhooks/razorpay", express.raw({ type: "application/json" }), (req, res) => {
  const signature = req.header("x-razorpay-signature") ?? "";
  const expected = crypto
    .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET!)
    .update(req.body)
    .digest("hex");

  const valid =
    signature.length === expected.length &&
    crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
  if (!valid) return res.sendStatus(400);

  res.sendStatus(200); // acknowledge quickly, then process the event in the background
});`,
      },
      {
        type: "p",
        text: "Stripe ships a helper for this (stripe.webhooks.constructEvent) and Square signs the notification with an HMAC header you check against your signature key. Whichever provider you use, read its verification guide once and copy the approach exactly.",
      },
      { type: "h2", text: "3. Expect duplicates and out-of-order events" },
      {
        type: "p",
        text: "Providers retry when they do not get a fast 2xx response, so the same event can arrive more than once. Store each event id and ignore ones you have already handled. Do not assume events arrive in order either: look at the object's current state instead of relying on sequence.",
      },
      { type: "h2", text: "4. Acknowledge fast, work later" },
      {
        type: "p",
        text: "Return 200 as soon as the signature is verified and the event is saved, then do the slow work (emails, SMS, inventory) in a background job. A webhook handler that takes ten seconds will be retried and you will process the same payment twice.",
      },
      { type: "h2", text: "5. Model refunds as a state machine" },
      {
        type: "p",
        text: "Refunds look simple until a customer asks for part of their money back. Keep a refunds table linked to the payment, record the amount and status of each attempt (requested, processing, completed, failed), and never let the total refunded exceed what was paid. It also makes support questions easy to answer.",
      },
      { type: "h2", text: "6. Reconcile" },
      {
        type: "p",
        text: "Even with all of the above, run a periodic job that compares your records with the provider's list of payments and refunds. It will catch the rare missed webhook before a customer does.",
      },
      { type: "h2", text: "Quick checklist" },
      {
        type: "ul",
        items: [
          "Mark orders paid from webhooks only.",
          "Verify the signature on the raw body, with a timing-safe comparison.",
          "Store event ids so duplicates are harmless.",
          "Return 2xx immediately and process in a queue.",
          "Track every refund as its own record.",
          "Reconcile with the provider on a schedule.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
