import type { Metadata } from "next";
import { TextReveal } from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Portfolio — Yogeshwara K" };

export default function PortfolioPage() {
  return (
    <>
      <TextReveal
        as="h1"
        text="Dive into a few projects that represent my most fulfilling work"
        className="mb-8 max-w-3xl px-1 text-3xl font-medium leading-[1.1] tracking-tight sm:text-5xl"
      />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </>
  );
}
