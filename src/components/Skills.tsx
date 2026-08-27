import React from 'react';
import { Cloud, Code2, Cpu, Database, Network, ShieldCheck } from 'lucide-react';
import { skillGroups } from '@/data/profile';

const icons = [Code2, Cpu, Network, ShieldCheck, Cloud, Database];

const Skills = () => {
  const total = skillGroups.reduce((n, g) => n + g.items.length, 0);

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <header className="mb-12 max-w-3xl">
          <div className="text-accent font-mono text-sm mb-2">// 03 — TECH_STACK</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            SKILL <span className="text-accent text-glow-green">TREE</span>
          </h2>
          <p className="text-muted-foreground mt-4 font-mono text-sm">
            $ tree ~/competencies/ &nbsp;
            <span className="text-accent">
              — {skillGroups.length} branches, {total} nodes
            </span>
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((b, gi) => {
            const Icon = icons[gi % icons.length];
            const accent = gi % 2 === 0;
            return (
              <div
                key={b.category}
                className={`panel ${accent ? 'panel-glow-green' : 'panel-glow-blue'} p-6`}
              >
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-border">
                  <div
                    className={`w-10 h-10 border-2 ${
                      accent ? 'border-accent text-accent' : 'border-primary text-primary'
                    } flex items-center justify-center`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-muted-foreground">BRANCH</div>
                    <div
                      className={`font-display text-xl ${accent ? 'text-accent' : 'text-primary'}`}
                    >
                      {b.category.toUpperCase()}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2.5 font-mono text-sm">
                  {b.items.map((n, i) => (
                    <li key={n} className="flex gap-2 text-foreground">
                      <span className="text-muted-foreground text-xs">
                        {i === b.items.length - 1 ? '└─' : '├─'}
                      </span>
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Diagnostic readout */}
        <div className="mt-10 panel p-5 max-w-4xl mx-auto">
          <div className="font-mono text-xs text-muted-foreground mb-3 border-b border-border pb-2">
            ayush@system:~/skills$ neofetch --skills
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <Stat n="30+" label="LINUX_DISTROS" />
            <Stat n={String(total)} label="SKILL_NODES" tone="primary" />
            <Stat n="6" label="SHIPPED_BUILDS" />
            <Stat n="∞" label="TERMINAL_HOURS" tone="primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({
  n,
  label,
  tone = 'accent',
}: { n: string; label: string; tone?: 'accent' | 'primary' }) => (
  <div className="border border-border bg-background p-3">
    <div
      className={`font-display text-3xl ${
        tone === 'accent' ? 'text-accent text-glow-green' : 'text-primary text-glow-blue'
      }`}
    >
      {n}
    </div>
    <div className="text-muted-foreground text-[10px] font-mono mt-1">{label}</div>
  </div>
);

export default Skills;
