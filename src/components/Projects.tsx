import { Car, BookOpen, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./About";

const projects = [
  {
    Icon: Car,
    title: "Smart Parking System",
    desc: "Concept system that detects free parking slots in real-time using sensors and a clean dashboard, helping drivers save time in busy areas.",
    tags: ["IoT Concept", "Python", "UI Design"],
  },
  {
    Icon: BookOpen,
    title: "Library Management System",
    desc: "Full-featured system to manage books, members, and borrow records with a clean interface and clear data flow.",
    tags: ["Python", "DB", "CRUD"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading kicker="// projects" title="Featured Projects" subtitle="A selection of things I've built and explored along the way." />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ Icon, title, desc, tags }, i) => (
            <article
              key={title}
              className="group relative glass-card glass-card-hover p-7 overflow-hidden"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div
                className="absolute -top-24 -right-24 h-48 w-48 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity"
                style={{ background: "var(--gradient-coral)" }}
              />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 border border-primary/30 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:neon-glow transition-all">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                </div>

                <h3 className="mt-6 text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed min-h-[72px]">
                  {desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span key={t} className="rounded-full border border-border px-3 py-1 text-[11px] font-mono text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                  <span className="font-mono text-xs text-muted-foreground">in_progress</span>
                  <span className="grid h-9 w-9 place-items-center rounded-full glass text-primary transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
