import { Code2, Brain, GraduationCap, Rocket } from "lucide-react";

export function SectionHeading({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{kicker}</p>
      <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-muted-foreground leading-relaxed">{subtitle}</p>}
    </div>
  );
}

const cards = [
  {
    Icon: Code2,
    title: "Web Development",
    desc: "Crafting clean, responsive interfaces with React, modern CSS, and a focus on user experience.",
  },
  {
    Icon: Brain,
    title: "AI & Automation",
    desc: "Exploring AI tools and automation to build smarter workflows and solve real problems.",
  },
  {
    Icon: GraduationCap,
    title: "Learning Mindset",
    desc: "Continuously leveling up — every commit, project, and bug is a chance to grow.",
  },
  {
    Icon: Rocket,
    title: "Practical Builds",
    desc: "Focused on shipping real projects that solve everyday problems with thoughtful design.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <SectionHeading
            kicker="// about"
            title="Building, Learning, Creating."
            subtitle="I'm a student developer with a deep passion for web development and an ever-growing curiosity about AI. I love translating ideas into clean, working products — one project at a time."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {cards.map(({ Icon, title, desc }, i) => (
              <div
                key={title}
                className="glass-card glass-card-hover p-6 group"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 border border-primary/30 text-primary group-hover:neon-glow transition-all">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-semibold text-lg">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
