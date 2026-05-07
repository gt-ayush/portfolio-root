import React from 'react';
import { AlertTriangle, GitBranch, Rocket, Zap } from 'lucide-react';

const timeline = [
  {
    year: '4TH GRADE',
    title: 'BRICKED FIRST OS',
    body: 'Tried to flash a Linux distro with Rufus. Wrote to the wrong device. Killed the system. Did not stop.',
    icon: AlertTriangle,
    color: 'text-destructive',
  },
  {
    year: 'CLASS 7',
    title: 'DOWNLOADED 30+ ISOS',
    body: 'On painfully slow village internet. No mentor, no Stack Overflow. Every kernel panic was a lesson.',
    icon: GitBranch,
    color: 'text-primary',
  },
  {
    year: '12 HOURS',
    title: 'MASTERED C',
    body: 'Pointers, memory, structs — drilled in a single sitting. Learning agility as a survival trait.',
    icon: Zap,
    color: 'text-accent',
  },
  {
    year: 'NOW',
    title: 'BUILDING SYSTEMS',
    body: 'Custom Linux OS. PQC scanners. DNS resolvers. Shipping high-execution builds from the BIOS up.',
    icon: Rocket,
    color: 'text-accent',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <header className="mb-12 max-w-3xl">
          <div className="text-accent font-mono text-sm mb-2">// 02 — THE_JOURNEY</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            FROM BRICKED OS<br />
            <span className="text-primary text-glow-blue">TO PRODUCTION KERNEL</span>
          </h2>
          <p className="text-muted-foreground mt-4 font-mono text-sm md:text-base leading-relaxed">
            A village kid with no broadband, no mentors, no privilege. Just a terminal,
            curiosity, and a refusal to give up after every crash. This is the log of how
            <span className="text-foreground"> learning agility</span> beats access.
          </p>
        </header>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Timeline */}
          <ol className="lg:col-span-8 space-y-4">
            {timeline.map((t, i) => (
              <li key={t.title} className="panel p-5 md:p-6 flex gap-5 hover:panel-glow-green transition-all">
                <div className="hidden sm:flex flex-col items-center">
                  <div className={`w-10 h-10 border-2 border-current ${t.color} flex items-center justify-center`}>
                    <t.icon className="w-5 h-5" />
                  </div>
                  {i !== timeline.length - 1 && (
                    <div className="flex-1 w-px bg-border mt-2 min-h-[24px]" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between flex-wrap gap-2">
                    <h3 className="font-display text-xl md:text-2xl text-foreground">{t.title}</h3>
                    <span className={`font-mono text-xs ${t.color}`}>[ {t.year} ]</span>
                  </div>
                  <p className="text-muted-foreground font-mono text-sm mt-2 leading-relaxed">{t.body}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Side terminal */}
          <aside className="lg:col-span-4 space-y-4">
            <div className="panel p-5">
              <div className="font-mono text-xs text-muted-foreground border-b border-border pb-2 mb-3">
                ./identity --verbose
              </div>
              <dl className="font-mono text-sm space-y-3">
                <Row k="alias" v="gt-ayush" />
                <Row k="role" v="systems_engineer" />
                <Row k="origin" v="rural_india" />
                <Row k="trait" v="learning_agility" highlight />
                <Row k="ICSE_score" v="99 / 100" />
                <Row k="primary_shell" v="bash + zsh" />
                <Row k="weapon" v="terminal" />
              </dl>
            </div>

            <div className="panel panel-glow-green p-5 scanline">
              <div className="font-mono text-xs text-accent mb-2">// MOTTO</div>
              <p className="font-display text-lg text-foreground leading-snug">
                "While others consume content,<br />
                <span className="text-accent text-glow-green">I create systems.</span>"
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

const Row = ({ k, v, highlight }: { k: string; v: string; highlight?: boolean }) => (
  <div className="flex justify-between gap-4 border-b border-border/60 pb-2">
    <dt className="text-muted-foreground">{k}</dt>
    <dd className={highlight ? 'text-accent text-glow-green' : 'text-foreground'}>{v}</dd>
  </div>
);

export default About;
