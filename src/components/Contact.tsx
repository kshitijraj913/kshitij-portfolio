import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./About";

const channels = [
  { Icon: Mail, label: "Email", value: "kshithijhaibate@gmail.com", href: "mailto:kshithijhaibate@gmail.com" },
  { Icon: Github, label: "GitHub", value: "kshitijraj913", href: "https://github.com/kshitijraj913" },
  { Icon: Linkedin, label: "LinkedIn", value: "kshithij-haibate", href: "https://www.linkedin.com/in/kshithij-haibate/" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading kicker="// contact" title="Let's Build Together" subtitle="Open to internships, collaborations, and curious conversations." />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {channels.map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group relative glass-card glass-card-hover p-6 overflow-hidden"
            >
              <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity" style={{ background: "var(--gradient-coral)" }} />
              <div className="relative flex items-start justify-between">
                <div>
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 border border-primary/30 text-primary group-hover:neon-glow transition-all">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 font-mono text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
                  <p className="mt-1 font-medium break-all group-hover:text-primary transition-colors">{value}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:rotate-45 group-hover:text-primary" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center glass-card p-10">
          <p className="font-mono text-xs text-primary">{">"} ready_to_collaborate.sh</p>
          <h3 className="mt-3 text-2xl md:text-3xl font-bold">Have a project in mind?</h3>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Drop me a message — I'd love to hear what you're building.
          </p>
          <a
            href="mailto:kshithijhaibate@gmail.com"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:neon-glow"
          >
            <Mail className="h-4 w-4" />
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
}
