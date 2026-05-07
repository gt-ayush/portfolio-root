import React from 'react';
import { Github, Linkedin, Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface/60 backdrop-blur">
      <div className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="font-mono text-xs text-muted-foreground">
            <div className="flex items-center gap-2 text-accent mb-1">
              <Terminal className="w-3.5 h-3.5" /> ayush@portfolio:~$ exit
            </div>
            <div>Session terminated. Connection closed by remote host.</div>
          </div>

          <div className="text-center font-mono text-xs">
            <div className="text-foreground">© 2026 AYUSH KUMAR GUPTA</div>
            <div className="text-muted-foreground mt-1">
              Built in terminal. Powered by chaos.
            </div>
          </div>

          <div className="flex md:justify-end gap-3">
            <a
              href="https://github.com/gt-ayush"
              target="_blank" rel="noreferrer"
              className="w-10 h-10 border border-border hover:border-accent hover:text-accent flex items-center justify-center transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-root/"
              target="_blank" rel="noreferrer"
              className="w-10 h-10 border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
