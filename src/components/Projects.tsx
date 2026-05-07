import React from 'react';
import { ExternalLink, Github, Shield, Terminal, FileSpreadsheet } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: '01',
    name: 'QUANTUM-SENTINEL',
    tagline: 'PQC scanning engine — Go.',
    description:
      'Network reconnaissance tool that audits TLS endpoints for post-quantum readiness. Identifies vulnerable handshakes and surfaces migration paths to PQC algorithms (Kyber, Dilithium).',
    tech: ['Go', 'PQC', 'TLS', 'Crypto'],
    icon: Shield,
    accent: 'accent' as const,
    status: 'ACTIVE',
    repo: 'https://github.com/gt-ayush',
  },
  {
    id: '02',
    name: 'SHADOW-OS',
    tagline: 'Non-persistent Linux environment.',
    description:
      'Custom live-OS built with debootstrap + KDE Plasma. Boots from USB on UEFI/BIOS. RAM-only mode leaves zero forensic footprint — ideal for ops, recon, and clean rooms.',
    tech: ['Linux', 'Debootstrap', 'KDE', 'UEFI'],
    icon: Terminal,
    accent: 'primary' as const,
    status: 'PROD',
    repo: 'https://github.com/gt-ayush',
  },
  {
    id: '03',
    name: 'RESOURCEFUL LOGIC',
    tagline: 'Python billing — Excel-as-a-DB.',
    description:
      'A pragmatic billing system from when SQLite wasn\'t an option. Treats Excel sheets as a typed datastore via openpyxl. Full CRUD, invoice generation, and reporting — built under constraints.',
    tech: ['Python', 'openpyxl', 'CLI', 'CRUD'],
    icon: FileSpreadsheet,
    accent: 'accent' as const,
    status: 'COMPLETE',
    repo: 'https://github.com/gt-ayush',
  },
];

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
            <span className="text-accent">— three builds currently in rotation</span>
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => {
            const Icon = p.icon;
            const isAccent = p.accent === 'accent';
            return (
              <article
                key={p.id}
                className={`panel corner-brackets p-6 flex flex-col group transition-all hover:translate-y-[-4px] ${
                  isAccent ? 'hover:panel-glow-green' : 'hover:panel-glow-blue'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 border-2 ${isAccent ? 'border-accent text-accent' : 'border-primary text-primary'} flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-right font-mono text-[10px]">
                    <div className="text-muted-foreground">PID:{p.id}</div>
                    <div className={isAccent ? 'text-accent' : 'text-primary'}>
                      [{p.status}]
                    </div>
                  </div>
                </div>

                <h3 className="font-display text-2xl text-foreground mb-1 tracking-wide">
                  {p.name}
                </h3>
                <div className={`font-mono text-xs mb-4 ${isAccent ? 'text-accent' : 'text-primary'}`}>
                  {p.tagline}
                </div>

                <p className="text-muted-foreground font-mono text-sm leading-relaxed flex-1 mb-5">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.map((t) => (
                    <span key={t} className="border border-border px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-4 border-t border-border">
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-none border-border hover:border-accent hover:text-accent font-mono text-xs flex-1"
                  >
                    <a href={p.repo} target="_blank" rel="noreferrer">
                      <Github className="w-3.5 h-3.5 mr-2" /> SOURCE
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-none border-border hover:border-primary hover:text-primary font-mono text-xs flex-1"
                  >
                    <a href={p.repo} target="_blank" rel="noreferrer">
                      <ExternalLink className="w-3.5 h-3.5 mr-2" /> SPEC
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
