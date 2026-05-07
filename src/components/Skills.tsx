import React from 'react';
import { Code2, Cpu, ShieldCheck } from 'lucide-react';

const tree = [
  {
    branch: 'SYSTEMS',
    icon: Cpu,
    color: 'accent' as const,
    nodes: [
      { name: 'Arch Linux', level: 'EXPERT' },
      { name: 'Kernel Config', level: 'EXPERT' },
      { name: 'Debootstrap / Live-OS', level: 'EXPERT' },
      { name: 'UEFI / BIOS Boot', level: 'ADV' },
      { name: 'systemd', level: 'ADV' },
      { name: 'Shell Scripting', level: 'EXPERT' },
    ],
  },
  {
    branch: 'SECURITY',
    icon: ShieldCheck,
    color: 'primary' as const,
    nodes: [
      { name: 'PQC (Kyber / Dilithium)', level: 'ADV' },
      { name: 'DNSSEC', level: 'ADV' },
      { name: 'Nmap / Recon', level: 'ADV' },
      { name: 'TLS / Crypto Protocols', level: 'INT' },
      { name: 'Network Security', level: 'INT' },
      { name: 'Penetration Testing', level: 'INT' },
    ],
  },
  {
    branch: 'CODE',
    icon: Code2,
    color: 'accent' as const,
    nodes: [
      { name: 'Python', level: 'ADV' },
      { name: 'C', level: 'ADV' },
      { name: 'Go', level: 'INT' },
      { name: 'Bash / Zsh', level: 'EXPERT' },
      { name: 'SQL', level: 'ADV' },
      { name: 'Java', level: 'INT' },
    ],
  },
];

const levelMap: Record<string, { w: string; tone: string }> = {
  EXPERT: { w: 'w-full', tone: 'bg-accent' },
  ADV: { w: 'w-4/5', tone: 'bg-primary' },
  INT: { w: 'w-3/5', tone: 'bg-muted-foreground' },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <header className="mb-12 max-w-3xl">
          <div className="text-accent font-mono text-sm mb-2">// 03 — TECH_STACK</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            SKILL <span className="text-accent text-glow-green">TREE</span>
          </h2>
          <p className="text-muted-foreground mt-4 font-mono text-sm">
            $ tree ~/competencies/ &nbsp;<span className="text-accent">— 3 branches, 18 nodes</span>
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-5">
          {tree.map((b) => {
            const Icon = b.icon;
            const accent = b.color === 'accent';
            return (
              <div key={b.branch} className={`panel ${accent ? 'panel-glow-green' : 'panel-glow-blue'} p-6`}>
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-border">
                  <div className={`w-10 h-10 border-2 ${accent ? 'border-accent text-accent' : 'border-primary text-primary'} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-muted-foreground">BRANCH</div>
                    <div className={`font-display text-xl ${accent ? 'text-accent' : 'text-primary'}`}>
                      {b.branch}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 font-mono text-sm">
                  {b.nodes.map((n, i) => {
                    const meta = levelMap[n.level];
                    return (
                      <li key={n.name}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-foreground flex items-center gap-2">
                            <span className="text-muted-foreground text-xs">
                              {i === b.nodes.length - 1 ? '└─' : '├─'}
                            </span>
                            {n.name}
                          </span>
                          <span className="text-[10px] text-muted-foreground">{n.level}</span>
                        </div>
                        <div className="ml-5 h-1 bg-background border border-border">
                          <div className={`h-full ${meta.tone} ${meta.w}`} />
                        </div>
                      </li>
                    );
                  })}
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
            <Stat n="99" label="ICSE_SCORE" tone="primary" />
            <Stat n="12h" label="C_MASTERY" />
            <Stat n="∞" label="TERMINAL_HOURS" tone="primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ n, label, tone = 'accent' }: { n: string; label: string; tone?: 'accent' | 'primary' }) => (
  <div className="border border-border bg-background p-3">
    <div className={`font-display text-3xl ${tone === 'accent' ? 'text-accent text-glow-green' : 'text-primary text-glow-blue'}`}>
      {n}
    </div>
    <div className="text-muted-foreground text-[10px] font-mono mt-1">{label}</div>
  </div>
);

export default Skills;
