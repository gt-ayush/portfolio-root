import React from 'react';
import { Award, Briefcase, ExternalLink, GraduationCap } from 'lucide-react';
import { certifications, education, experience } from '@/data/profile';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <header className="mb-12 max-w-3xl">
          <div className="text-accent font-mono text-sm mb-2">// 05 — RUNTIME_HISTORY</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            WORK, SCHOOL & <span className="text-primary text-glow-blue">CREDENTIALS</span>
          </h2>
          <p className="text-muted-foreground mt-4 font-mono text-sm">
            $ cat ~/records/*.log &nbsp;
            <span className="text-accent">— verified entries only</span>
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-5">
          {/* Experience */}
          <div className="space-y-5">
            <div className="panel panel-glow-green p-6">
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-border">
                <div className="w-10 h-10 border-2 border-accent text-accent flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="font-display text-xl text-accent">EXPERIENCE</div>
              </div>

              {experience.map((e) => (
                <div key={e.company} className="font-mono text-sm">
                  <div className="flex items-baseline justify-between flex-wrap gap-2">
                    <h3 className="font-display text-xl text-foreground">{e.role}</h3>
                    <span className="text-accent text-xs">[ {e.duration} ]</span>
                  </div>
                  <a
                    href={e.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary text-xs mt-1 hover:underline"
                  >
                    {e.company} <ExternalLink className="w-3 h-3" />
                  </a>
                  <ul className="mt-3 space-y-2 text-muted-foreground text-xs leading-relaxed">
                    {e.responsibilities.map((r) => (
                      <li key={r}>
                        <span className="text-accent">▸</span> {r}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="panel panel-glow-blue p-6">
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-border">
                <div className="w-10 h-10 border-2 border-primary text-primary flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="font-display text-xl text-primary">EDUCATION</div>
              </div>

              <ol className="space-y-4 font-mono">
                {education.map((ed) => (
                  <li key={ed.degree} className="border border-border bg-background p-4">
                    <div className="flex items-baseline justify-between flex-wrap gap-2">
                      <h3 className="text-foreground text-sm">{ed.degree}</h3>
                      <span className="text-primary text-xs">[ {ed.year} ]</span>
                    </div>
                    <div className="text-muted-foreground text-xs mt-1">{ed.institution}</div>
                    <div className="text-accent text-xs mt-1">score: {ed.cgpa}</div>
                    {ed.coursework.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {ed.coursework.map((c) => (
                          <span
                            key={c}
                            className="border border-border px-2 py-0.5 text-[10px] text-muted-foreground"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Certifications */}
          <div className="panel p-6">
            <div className="flex items-center gap-3 pb-4 mb-4 border-b border-border">
              <div className="w-10 h-10 border-2 border-accent text-accent flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono text-[10px] text-muted-foreground">
                  {certifications.length} ENTRIES
                </div>
                <div className="font-display text-xl text-accent">CERTIFICATIONS</div>
              </div>
            </div>

            <ul className="font-mono text-sm divide-y divide-border/60">
              {certifications.map((c) => (
                <li key={c.title}>
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start justify-between gap-4 py-3 group hover:text-accent transition-colors"
                  >
                    <div>
                      <div className="text-foreground group-hover:text-accent">{c.title}</div>
                      <div className="text-muted-foreground text-xs mt-0.5">
                        {c.issuer} · {c.year}
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 mt-1 text-muted-foreground group-hover:text-accent shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
