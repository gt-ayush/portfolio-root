import React, { useState } from 'react';
import {
  Github,
  Shield,
  Terminal,
  Network,
  Server,
  Share2,
  KeyRound,
  X,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { projects } from '@/data/profile';

const icons = [Shield, Network, Terminal, Server, Share2, KeyRound];

type Project = (typeof projects)[number];

const Projects = () => {
  const [selected, setSelected] = useState<{ project: Project; idx: number } | null>(null);

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
            <span className="text-muted-foreground"> &nbsp;·&nbsp; click a node to inspect</span>
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, idx) => {
            const Icon = icons[idx % icons.length];
            const isAccent = idx % 2 === 0;
            return (
              <article
                key={p.title}
                onClick={() => setSelected({ project: p, idx })}
                className={`panel corner-brackets p-6 flex flex-col group transition-all hover:translate-y-[-4px] cursor-pointer ${
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
                  <div
                    className={`font-mono text-[10px] tracking-widest ${
                      isAccent ? 'text-accent' : 'text-primary'
                    } group-hover:text-glow-blue`}
                  >
                    $ cat ~/lab/{p.title.split(' ')[0].toLowerCase()}/README.md → OPEN_INSPECTOR
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="rounded-none border-2 border-border bg-card p-0 max-w-2xl gap-0 [&>button]:hidden">
          {selected && (
            <ProjectDetail project={selected.project} idx={selected.idx} close={() => setSelected(null)} />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

const ProjectDetail = ({
  project: p,
  idx,
  close,
}: {
  project: Project;
  idx: number;
  close: () => void;
}) => {
  const Icon = icons[idx % icons.length];
  const isAccent = idx % 2 === 0;
  const color = isAccent ? 'text-accent' : 'text-primary';

  return (
    <div className="corner-brackets">
      {/* header bar */}
      <div className="flex items-center justify-between border-b border-border px-5 py-3 bg-background/60">
        <div className="flex items-center gap-3 font-mono text-xs">
          <Icon className={`w-4 h-4 ${color}`} />
          <span className="text-muted-foreground">
            ~/lab/PID:{String(idx + 1).padStart(2, '0')}
          </span>
          <span className={color}>[INSPECTING]</span>
        </div>
        <button
          onClick={close}
          aria-label="Close project details"
          className="text-muted-foreground hover:text-accent transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="p-6 max-h-[70vh] overflow-y-auto">
        <DialogTitle className="font-display text-3xl text-foreground tracking-wide mb-1">
          {p.title.toUpperCase()}
        </DialogTitle>
        <p className={`font-mono text-sm mb-6 ${color}`}>{p.description}</p>

        <div className="space-y-5 font-mono text-sm">
          <div>
            <div className="text-foreground text-xs tracking-widest mb-1">// PROBLEM</div>
            <p className="text-muted-foreground border-l-2 border-border pl-3">{p.problem}</p>
          </div>

          <div>
            <div className="text-foreground text-xs tracking-widest mb-1">// MY_ROLE</div>
            <p className="text-muted-foreground border-l-2 border-border pl-3">{p.contribution}</p>
          </div>

          <div>
            <div className="text-foreground text-xs tracking-widest mb-2">// FEATURES</div>
            <ul className="space-y-1.5">
              {p.features.map((f) => (
                <li key={f} className="text-muted-foreground">
                  <span className={color}>▸</span> {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-foreground text-xs tracking-widest mb-2">// TECH_STACK</div>
            <div className="flex flex-wrap gap-1.5">
              {p.techStack.map((t) => (
                <span
                  key={t}
                  className="border border-border px-2 py-0.5 text-[10px] font-mono text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-5 border-t border-border">
          <Button
            asChild
            variant="outline"
            className="rounded-none border-border hover:border-accent hover:text-accent font-mono text-xs flex-1"
          >
            <a href={p.githubUrl} target="_blank" rel="noreferrer">
              <Github className="w-3.5 h-3.5 mr-2" /> VIEW_SOURCE
            </a>
          </Button>
          <Button
            variant="outline"
            onClick={close}
            className="rounded-none border-border hover:border-primary hover:text-primary font-mono text-xs flex-1"
          >
            <ExternalLink className="w-3.5 h-3.5 mr-2" /> EXIT_INSPECTOR
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
