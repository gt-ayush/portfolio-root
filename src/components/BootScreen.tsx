import React, { useEffect, useState } from 'react';

const lines = [
  'BIOS v2.6.alpha — POST ... OK',
  'detecting cpu ......... ARCH-LNX / kernel 6.x',
  'mounting /dev/portfolio  [ OK ]',
  'loading modules: systems security backend  [ OK ]',
  'resolving node://gt-ayush via DNSSEC  [ OK ]',
  'starting ssh.service — chaos.learner  [ OK ]',
];

const BootScreen = ({ onDone }: { onDone: () => void }) => {
  const [shown, setShown] = useState<string[]>([]);
  const [pct, setPct] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      if (i < lines.length) {
        setShown((s) => [...s, lines[i]]);
        i++;
      } else clearInterval(t);
    }, 190);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setPct((p) => {
        const next = p + Math.random() * 14 + 5;
        if (next >= 100) {
          clearInterval(t);
          setTimeout(() => setLeaving(true), 240);
          setTimeout(onDone, 900);
          return 100;
        }
        return next;
      });
    }, 130);
    return () => clearInterval(t);
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex items-center justify-center transition-opacity duration-500 ${
        leaving ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden={leaving}
    >
      <div className="absolute inset-0 scanline pointer-events-none" />
      <div className="w-full max-w-lg px-6 relative">
        <div className="font-display text-3xl md:text-4xl text-foreground mb-1 glitch">
          AYUSH KUMAR <span className="text-primary text-glow-blue">GUPTA</span>
        </div>
        <div className="font-mono text-xs text-accent mb-6 flicker">
          initializing system environment...
        </div>

        <div className="panel p-4 font-mono text-[11px] leading-relaxed h-40 overflow-hidden mb-4">
          {shown.map((l, i) => (
            <div key={i} className="text-accent animate-fade-in">
              <span className="text-muted-foreground">[{(i * 0.19).toFixed(2)}]</span> {l}
            </div>
          ))}
          <span className="text-primary">root@gt-ayush</span>
          <span className="text-foreground">:~# </span>
          <span className="cursor-blink text-foreground">█</span>
        </div>

        <div className="h-2 border border-border bg-surface relative overflow-hidden">
          <div
            className="h-full bg-accent transition-[width] duration-150"
            style={{ width: `${Math.min(pct, 100)}%` }}
          />
          <div className="absolute inset-0 sweep" />
        </div>
        <div className="flex justify-between font-mono text-[10px] text-muted-foreground mt-2">
          <span>LOADING KERNEL MODULES</span>
          <span className="text-accent">{Math.floor(Math.min(pct, 100))}%</span>
        </div>
      </div>
    </div>
  );
};

export default BootScreen;
