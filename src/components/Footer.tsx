import React from 'react';
import { Github, Linkedin, Terminal, Code, BarChart3 } from 'lucide-react';
import { personal } from '@/data/profile';

const links = [
  { href: personal.socials.github, label: 'GitHub', Icon: Github, tone: 'accent' },
  { href: personal.socials.linkedin, label: 'LinkedIn', Icon: Linkedin, tone: 'primary' },
  { href: personal.socials.leetcode, label: 'LeetCode', Icon: Code, tone: 'accent' },
  { href: personal.socials.kaggle, label: 'Kaggle', Icon: BarChart3, tone: 'primary' },
];

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
            <div className="text-foreground">© 2026 {personal.name.toUpperCase()}</div>
            <div className="text-muted-foreground mt-1">
              {personal.location} · Built in terminal.
            </div>
          </div>

          <div className="flex md:justify-end gap-3">
            {links.map(({ href, label, Icon, tone }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className={`w-10 h-10 border border-border flex items-center justify-center transition-colors ${
                  tone === 'accent'
                    ? 'hover:border-accent hover:text-accent'
                    : 'hover:border-primary hover:text-primary'
                }`}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
