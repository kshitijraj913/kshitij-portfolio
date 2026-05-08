import { Award, Briefcase } from "lucide-react";
import { SectionHeading } from "./About";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading kicker="// credentials" title="Certifications & Experience" />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="glass-card glass-card-hover p-8 group">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 border border-primary/30 text-primary group-hover:neon-glow transition-all">
                <Award className="h-5 w-5" />
              </div>
              <span className="font-mono text-xs text-muted-foreground">CERTIFICATE</span>
            </div>
            <h3 className="mt-5 text-xl font-bold">Generative AI Foundations</h3>
            <p className="mt-1 text-sm text-primary font-medium">upGrad × Microsoft</p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Foundations program covering generative AI concepts, prompt engineering,
              and applying modern AI tooling to real-world workflows.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Generative AI", "Prompt Eng.", "AI Tools"].map((t) => (
                <span key={t} className="rounded-full border border-border px-3 py-1 text-[11px] font-mono text-muted-foreground">{t}</span>
              ))}
            </div>
          </div>

          <div className="glass-card glass-card-hover p-8 group">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 border border-primary/30 text-primary group-hover:neon-glow transition-all">
                <Briefcase className="h-5 w-5" />
              </div>
              <span className="font-mono text-xs text-muted-foreground">INTERNSHIP</span>
            </div>
            <h3 className="mt-5 text-xl font-bold">AI Web Developer Intern</h3>
            <p className="mt-1 text-sm text-primary font-medium">Inamigos Foundation</p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Contributing to AI-driven web projects — building responsive interfaces,
              integrating AI tools, and helping ship practical features.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Web Dev", "AI Integration", "Teamwork"].map((t) => (
                <span key={t} className="rounded-full border border-border px-3 py-1 text-[11px] font-mono text-muted-foreground">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
