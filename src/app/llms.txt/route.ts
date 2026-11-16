import { contact } from "@/data/contact";
import { faq } from "@/data/faq";
import { SITE, absoluteUrl } from "@/lib/site";

/** llms.txt: a plain-text summary of the site for AI assistants and answer engines (https://llmstxt.org). */
export function GET() {
  const body = `# ${SITE.name} — ${SITE.jobTitle}

> ${SITE.description}

## About
- Based in Chennai, India. Works with clients in India, the US, Singapore, Saudi Arabia and the UAE.
- Languages: English and Tamil.
- Current employer: ${SITE.employer.name} (${SITE.employer.url}).

## Services
${SITE.services.map((s) => `- ${s}`).join("\n")}

## Pages
- [Home / portfolio](${absoluteUrl("/")}): campaign case studies, results, tools and experience
- [Privacy](${absoluteUrl("/privacy")}): how analytics and cookies are handled

## FAQ
${faq.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}

## Contact
- Email: ${contact.email}
- LinkedIn: ${contact.linkedin}
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
