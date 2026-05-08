import { useEffect, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";

const roles = ["Web Developer", "Python Developer", "AI Explorer"];

export function Hero() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = deleting ? 50 : 110;
    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1400);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % roles.length);
        return;
      }
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIdx]);

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-32 pb-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Available for internships & collabs</span>
            </div>

            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Hello, I'm
              <br />
              <span className="text-gradient neon-text">Kshithij Haibate</span>
            </h1>

            <div className="mt-6 flex items-center gap-2 font-mono text-lg md:text-2xl text-muted-foreground">
              <span className="text-primary">{">"}</span>
              <span className="text-foreground">{text}</span>
              <span className="inline-block h-6 w-[3px] bg-primary animate-blink" />
            </div>

            <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground">
              Hello! I'm Kshithij, an aspiring web developer and Python learner passionate
              about building useful and creative digital projects. I enjoy learning modern
              technologies and improving my skills through hands-on projects and internships.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:neon-glow"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/50"
              >
                <Download className="h-4 w-4" />
                Get in Touch
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <span className="font-mono text-xs text-muted-foreground">// connect</span>
              <div className="h-px flex-1 max-w-16 bg-border" />
              {[
                { Icon: Github, href: "https://github.com/kshitijraj913", label: "GitHub" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/kshithij-haibate/", label: "LinkedIn" },
                { Icon: Mail, href: "mailto:kshithijhaibate@gmail.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full glass text-muted-foreground transition-all hover:scale-110 hover:text-primary hover:neon-glow"
                >
                  <Icon className="h-4.5 w-4.5" size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Visual orb */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square animate-float">
              <div className="absolute inset-8 rounded-full" style={{ background: "var(--gradient-coral)", filter: "blur(60px)", opacity: 0.5 }} />
              <div className="absolute inset-0 rounded-full glass grid place-items-center overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div className="absolute inset-6 rounded-full border border-primary/30 animate-[spin_20s_linear_infinite]">
                  <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-primary neon-glow" />
                </div>
                <div className="absolute inset-14 rounded-full border border-primary/20 animate-[spin_15s_linear_infinite_reverse]">
                  <span className="absolute top-1/2 -right-1 h-2 w-2 -translate-y-1/2 rounded-full bg-primary neon-glow" />
                </div>
                <div className="relative z-10 text-center">
                  <div className="font-mono text-7xl font-bold text-gradient neon-text">KH</div>
                  <div className="mt-2 font-mono text-xs text-muted-foreground">// AI · DEV · CREATE</div>
                </div>
              </div>
            </div>
            {/* Floating badges */}
            <div className="absolute top-8 -left-6 glass rounded-2xl px-4 py-3 animate-float" style={{ animationDelay: "1s" }}>
              <div className="font-mono text-[10px] text-muted-foreground">{"<status/>"}</div>
              <div className="text-sm font-semibold flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" /> Building
              </div>
            </div>
            <div className="absolute bottom-12 -right-4 glass rounded-2xl px-4 py-3 animate-float" style={{ animationDelay: "2s" }}>
              <div className="font-mono text-[10px] text-muted-foreground">{"// stack"}</div>
              <div className="text-sm font-semibold text-primary">React · Python · AI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
