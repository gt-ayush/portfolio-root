import React, { useEffect, useRef, useState } from 'react';
import { Activity, ChevronDown, Cpu, HardDrive, Network, Power, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personal } from '@/data/profile';

const terminalSnippets = [
  '[ OK ] Mounted /dev/portfolio on /mnt/ayush',
  '[ OK ] Started ssh.service — chaos.learner@gt-ayush',
  '[ OK ] System ready. Welcome, operator.',
  '[INFO] Loading kernel module: shadow_os_factory.ko',
  '[INFO] quantum_sentinel daemon started pid=4821',
  '[INFO] DNS resolver listening on 127.0.0.1:53',
  '[INFO] kotman orchestrator: 7 containers running',
  '[ OK ] time_based_encryption key rotation complete',
  '[WARN] anomaly detected in socket stream 0x7f3a',
  '[ OK ] reverse engineering toolkit initialized',
  '[INFO] scanning subnet 192.168.1.0/24 ...',
  '[ OK ] handshake with post-quantum cipher suite',
  '[INFO] android manifest parsed via apktool',
  '[ OK ] UEFI boot entry verified',
  '[WARN] privilege escalation vector mitigated',
  '[INFO] shadow_web backend: django 5.1 stable',
  '[ OK ] mesh network backend synchronized',
  '[INFO] VPS health check: 99.9% uptime',
  '[ OK ] docker image built in 12.4s',
  '[INFO] threat intelligence feed updated',
  '[ OK ] bash payload delivered to target sandbox',
  '[INFO] pqc lattice signature verified',
  '[WARN] brute-force attempt blocked: iptables drop',
  '[ OK ] SSL/TLS certificate chain validated',
  '[INFO] binary analysis: 14 functions decompiled',
  '[ OK ] wireless adapter switched to monitor mode',
  '[INFO] ansible playbook finished: 0 failures',
  '[ OK ] postgresql replica in sync',
  '[INFO] kaggle notebook kernel executed',
  '[ OK ] leetcode daily challenge accepted',
];

const Hero = () => {
  const [text, setText] = useState('');
  const [boot, setBoot] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const fullText = '> Building Systems from the BIOS up.';

  const bootLines = [
    '[ OK ] Reached target Local File Systems.',
    '[ OK ] Started Kernel Module Loader.',
    '[ OK ] Mounted /dev/portfolio on /mnt/ayush.',
    '[ OK ] Started ssh.service — chaos.learner@gt-ayush.',
    '[ OK ] System ready. Welcome, operator.',
  ];

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      if (i < fullText.length) { setText(fullText.slice(0, i + 1)); i++; }
      else clearInterval(t);
    }, 55);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    // Seed the initial boot sequence
    let i = 0;
    const seed = setInterval(() => {
      if (i < bootLines.length) {
        setBoot((b) => [...b, bootLines[i]]);
        i++;
      } else {
        clearInterval(seed);
      }
    }, 350);
    return () => clearInterval(seed);
  }, []);

  useEffect(() => {
    // Continuous random terminal stream
    const stream = setInterval(() => {
      const next = terminalSnippets[Math.floor(Math.random() * terminalSnippets.length)];
      setBoot((b) => {
        const updated = [...b, next];
        return updated.length > 28 ? updated.slice(updated.length - 28) : updated;
      });
    }, 140);
    return () => clearInterval(stream);
  }, []);

  useEffect(() => {
    // Auto-scroll to latest line
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [boot]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="min-h-screen pt-20 pb-12 relative overflow-hidden">
      {/* Top status bar */}
      <div className="absolute top-0 left-0 right-0 border-b border-border bg-surface/80 backdrop-blur z-20">
        <div className="container mx-auto px-6 py-2 flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-accent">
              <span className="w-2 h-2 bg-accent led-pulse" /> SYS:ONLINE
            </span>
            <span className="text-muted-foreground hidden sm:inline">node://gt-ayush</span>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="hidden md:inline">uptime: ∞</span>
            <span>v2.6.alpha</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          {/* LEFT — Hero */}
          <div className="lg:col-span-7 panel corner-brackets p-8 md:p-12 scanline">
            <div className="flex items-center gap-3 mb-6 text-accent font-mono text-sm">
              <Terminal className="w-4 h-4" />
              <span>/usr/bin/ayush --identify</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] text-foreground mb-4">
              AYUSH KUMAR
              <br />
              <span className="text-primary text-glow-blue">GUPTA</span>
              <span className="text-accent cursor-blink ml-2">_</span>
            </h1>

            <div className="text-accent font-mono text-lg md:text-xl mb-3 min-h-[2rem]">
              {text}
            </div>

            <div className="font-mono text-xs md:text-sm text-primary mb-6">
              {personal.headline} &nbsp;<span className="text-muted-foreground">· {personal.location}</span>
            </div>

            <p className="text-muted-foreground text-base md:text-lg max-w-xl mb-8 leading-relaxed">
              {personal.intro}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => scrollTo('skills')}
                className="rounded-none border-2 border-accent bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-[0_0_24px_hsl(var(--accent)/0.6)] font-mono font-bold px-6 py-6 text-base tracking-wider"
              >
                <Activity className="w-4 h-4 mr-2" />
                VIEW THE SKILL TREE
              </Button>
              <Button
                onClick={() => scrollTo('projects')}
                variant="outline"
                className="rounded-none border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono px-6 py-6 text-base tracking-wider"
              >
                <Power className="w-4 h-4 mr-2" />
                ENTER THE LAB
              </Button>
            </div>
          </div>

          {/* RIGHT — Status Dashboard */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="panel p-4 flex-1">
              <div className="flex items-center justify-between border-b border-border pb-2 mb-3">
                <span className="font-mono text-xs text-muted-foreground">SYSTEM_STATUS.dash</span>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 bg-destructive" />
                  <span className="w-2.5 h-2.5 bg-primary" />
                  <span className="w-2.5 h-2.5 bg-accent" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <Metric icon={<Cpu className="w-4 h-4" />} label="CPU" value="ARCH-LNX" sub="kernel 6.x" />
                <Metric icon={<HardDrive className="w-4 h-4" />} label="DISK" value="30+ ISOs" sub="distros tested" />
                <Metric icon={<Network className="w-4 h-4" />} label="NET" value="DNSSEC" sub="resolver active" />
                <Metric icon={<Activity className="w-4 h-4" />} label="OPS" value="BUILD" sub="mode: ship" />
              </div>

              {/* Boot log */}
              <div className="bg-background border border-border p-3 font-mono text-[11px] leading-relaxed h-44 overflow-hidden">
                <div className="text-muted-foreground mb-1">$ dmesg | tail</div>
                {boot.map((line, i) => (
                  <div key={i} className="text-accent">{line}</div>
                ))}
                <div className="text-foreground">
                  <span className="text-primary">root@gt-ayush</span>:~#{' '}
                  <span className="cursor-blink">█</span>
                </div>
              </div>
            </div>

            <div className="panel p-4 flex items-center justify-between">
              <div className="font-mono text-xs">
                <div className="text-muted-foreground">PERSONA</div>
                <div className="text-accent text-glow-green">THE_CHAOS_LEARNER</div>
              </div>
              <div className="font-mono text-xs text-right">
                <div className="text-muted-foreground">MODE</div>
                <div className="text-primary text-glow-blue">HIGH_EXECUTION</div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollTo('about')}
          className="mt-10 mx-auto flex flex-col items-center gap-1 text-muted-foreground hover:text-accent font-mono text-xs transition-colors"
        >
          <span>// scroll to journey</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

const Metric = ({
  icon, label, value, sub,
}: { icon: React.ReactNode; label: string; value: string; sub: string }) => (
  <div className="border border-border bg-background p-3">
    <div className="flex items-center justify-between text-muted-foreground text-[10px] font-mono mb-1">
      <span className="flex items-center gap-1.5">{icon}{label}</span>
      <span className="w-1.5 h-1.5 bg-accent led-pulse" />
    </div>
    <div className="text-foreground font-mono text-sm font-bold">{value}</div>
    <div className="text-muted-foreground text-[10px] font-mono">{sub}</div>
  </div>
);

export default Hero;
