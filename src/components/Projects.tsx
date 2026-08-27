import React from 'react';
import { Github, Shield, Terminal, Network, Server, Share2, KeyRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/profile';

const icons = [Shield, Network, Terminal, Server, Share2, KeyRound];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <header className="mb-12 max-w-3xl">
          <div className="text-accent font-mono text-sm mb-2">// 04 — THE_LAB</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            ACTIVE <span className="text-primary text-glow-blue">EXPERIMENTS</span>
          </h2>
          <p className="text-muted-foreground mt-4 font-mono text-sm">
            $ ls -la ~/lab/ &nbsp;
            <span className="text-accent">— {projects.length} builds in rotation</span>
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, idx) => {
            const Icon = icons[idx % icons.length];
            const isAccent = idx % 2 === 0;
            return (
              <article
                key={p.title}
                className={`panel corner-brackets p-6 flex flex-col group transition-all hover:translate-y-[-4px] ${
                  isAccent ? 'hover:panel-glow-green' : 'hover:panel-glow-blue'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 border-2 ${
                      isAccent ? 'border-accent text-accent' : 'border-primary text-primary'
                    } flex items-center justify-center`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-right font-mono text-[10px]">
                    <div className="text-muted-foreground">
                      PID:{String(idx + 1).padStart(2, '0')}
                    </div>
                    <div className={isAccent ? 'text-accent' : 'text-primary'}>[ACTIVE]</div>
                  </div>
                </div>

                <h3 className="font-display text-2xl text-foreground mb-2 tracking-wide">
                  {p.title.toUpperCase()}
                </h3>

                <div
                  className={`font-mono text-xs mb-3 ${isAccent ? 'text-accent' : 'text-primary'}`}
                >
                  {p.description}
                </div>

                <div className="font-mono text-xs text-muted-foreground space-y-2 flex-1 mb-5">
                  <p>
                    <span className="text-foreground">// problem: </span>
                    {p.problem}
                  </p>
                  <p>
                    <span className="text-foreground">// role: </span>
                    {p.contribution}
                  </p>
                  <ul className="space-y-1 pt-1">
                    {p.features.map((f) => (
                      <li key={f}>
                        <span className={isAccent ? 'text-accent' : 'text-primary'}>▸</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.techStack.map((t) => (
                    <span
                      key={t}
                      className="border border-border px-2 py-0.5 text-[10px] font-mono text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-none border-border hover:border-accent hover:text-accent font-mono text-xs"
                  >
                    <a href={p.githubUrl} target="_blank" rel="noreferrer">
                      <Github className="w-3.5 h-3.5 mr-2" /> SOURCE
                    </a>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
