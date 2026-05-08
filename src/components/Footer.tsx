import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 md:flex-row md:justify-between">
        <p className="font-mono text-sm text-muted-foreground">
          Designed & Built by <span className="text-gradient font-semibold">Kshithij Haibate</span>
        </p>
        <div className="flex items-center gap-3">
          <a href="https://github.com/kshitijraj913" target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-9 w-9 place-items-center rounded-full glass text-muted-foreground hover:text-primary hover:neon-glow transition-all">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/kshithij-haibate/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full glass text-muted-foreground hover:text-primary hover:neon-glow transition-all">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="mailto:kshithijhaibate@gmail.com" aria-label="Email" className="grid h-9 w-9 place-items-center rounded-full glass text-muted-foreground hover:text-primary hover:neon-glow transition-all">
            <Mail className="h-4 w-4" />
          </a>
        </div>
        <p className="font-mono text-xs text-muted-foreground">© {new Date().getFullYear()} • All rights reserved</p>
      </div>
    </footer>
  );
}
