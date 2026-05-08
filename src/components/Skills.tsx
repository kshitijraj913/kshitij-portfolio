import { SectionHeading } from "./About";

const technical = [
  "Python",
  "C",
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Git & GitHub",
];

const professional = [
  "Problem Solving",
  "Communication",
  "Team Collaboration",
  "Creativity",
  "Adaptability",
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading kicker="// skills" title="My Toolkit" subtitle="Technologies I use to design, build, and ship digital products." />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="glass-card p-8">
            <h3 className="flex items-center gap-2 font-mono text-sm text-primary">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              technical_stack.json
            </h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {technical.map((s) => (
                <span
                  key={s}
                  className="rounded-full glass px-4 py-2 text-sm font-medium transition-all hover:border-primary/50 hover:text-primary hover:scale-105 cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card p-8">
            <h3 className="flex items-center gap-2 font-mono text-sm text-primary">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              soft_skills[]
            </h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {professional.map((s) => (
                <span
                  key={s}
                  className="rounded-full glass px-4 py-2 text-sm transition-all hover:border-primary/50 hover:text-primary hover:scale-105 cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
              <p className="font-mono text-xs text-primary">{">"} mindset.exe</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                "Every project is an opportunity to learn something new and build something meaningful."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
