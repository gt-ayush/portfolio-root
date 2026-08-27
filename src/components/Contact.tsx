import React, { useState } from 'react';
import { BarChart3, Code, Github, Linkedin, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[portfolio] Message from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} <${formData.email}>`);
    window.location.href = `mailto:guptaayush12347@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <header className="mb-12 max-w-3xl">
          <div className="text-accent font-mono text-sm mb-2">// 06 — UPLINK</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            OPEN A <span className="text-accent text-glow-green">CHANNEL</span>
          </h2>
          <p className="text-muted-foreground mt-4 font-mono text-sm">
            $ nc -lvp 22 &nbsp;<span className="text-accent">— listening for inbound connections</span>
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Channels */}
          <div className="space-y-4">
            <a
              href="https://github.com/gt-ayush"
              target="_blank" rel="noreferrer"
              className="panel p-5 flex items-center gap-4 group hover:panel-glow-green transition-all"
            >
              <div className="w-12 h-12 border-2 border-accent text-accent flex items-center justify-center group-hover:scale-105 transition-transform">
                <Github className="w-6 h-6" />
              </div>
              <div className="flex-1 font-mono">
                <div className="text-[10px] text-muted-foreground">CH:01 / SOURCE</div>
                <div className="text-foreground">github.com/gt-ayush</div>
              </div>
              <span className="text-accent">→</span>
            </a>

            <a
              href="https://www.linkedin.com/in/ayush-kumar-gupta-root"
              target="_blank" rel="noreferrer"
              className="panel p-5 flex items-center gap-4 group hover:panel-glow-blue transition-all"
            >
              <div className="w-12 h-12 border-2 border-primary text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                <Linkedin className="w-6 h-6" />
              </div>
              <div className="flex-1 font-mono">
                <div className="text-[10px] text-muted-foreground">CH:02 / NETWORK</div>
                <div className="text-foreground break-all">linkedin.com/in/ayush-kumar-gupta-root</div>
              </div>
              <span className="text-primary">→</span>
            </a>

            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://leetcode.com/u/Fpn18p5UsM/"
                target="_blank" rel="noreferrer"
                className="panel p-5 flex items-center gap-3 group hover:panel-glow-green transition-all"
              >
                <Code className="w-5 h-5 text-accent" />
                <div className="font-mono">
                  <div className="text-[10px] text-muted-foreground">CH:05</div>
                  <div className="text-foreground text-sm">LeetCode</div>
                </div>
              </a>
              <a
                href="https://www.kaggle.com/gt0ayush"
                target="_blank" rel="noreferrer"
                className="panel p-5 flex items-center gap-3 group hover:panel-glow-blue transition-all"
              >
                <BarChart3 className="w-5 h-5 text-primary" />
                <div className="font-mono">
                  <div className="text-[10px] text-muted-foreground">CH:06</div>
                  <div className="text-foreground text-sm">Kaggle</div>
                </div>
              </a>
            </div>

            <a
              href="mailto:guptaayush12347@gmail.com"
              className="panel p-5 flex items-center gap-4 group hover:panel-glow-green transition-all"
            >
              <div className="w-12 h-12 border-2 border-accent text-accent flex items-center justify-center group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1 font-mono">
                <div className="text-[10px] text-muted-foreground">CH:03 / PRIMARY</div>
                <div className="text-foreground break-all">guptaayush12347@gmail.com</div>
              </div>
              <span className="text-accent">→</span>
            </a>

            <a
              href="mailto:Gt-ayush@outlook.com"
              className="panel p-5 flex items-center gap-4 group hover:panel-glow-blue transition-all"
            >
              <div className="w-12 h-12 border-2 border-primary text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1 font-mono">
                <div className="text-[10px] text-muted-foreground">CH:04 / SECONDARY</div>
                <div className="text-foreground break-all">Gt-ayush@outlook.com</div>
              </div>
              <span className="text-primary">→</span>
            </a>

            <div className="panel p-5">
              <div className="font-mono text-xs text-muted-foreground border-b border-border pb-2 mb-3">
                ./status --availability
              </div>
              <div className="font-mono text-sm space-y-2">
                <div className="flex items-center gap-2 text-accent">
                  <span className="w-2 h-2 bg-accent led-pulse" /> Status: Open to work
                </div>
                <div className="text-muted-foreground">• Security & systems engineering roles</div>
                <div className="text-muted-foreground">• Startup collaborations</div>
                <div className="text-muted-foreground">• Open source contributions welcome</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="panel corner-brackets p-6 md:p-8 space-y-5">
            <div className="font-mono text-xs text-muted-foreground border-b border-border pb-2">
              transmit.sh — compose payload
            </div>

            <div>
              <label className="block text-[10px] font-mono text-muted-foreground mb-1.5">
                &gt; HANDLE
              </label>
              <Input
                type="text" name="name" value={formData.name} onChange={handleChange}
                className="rounded-none bg-background border-border focus-visible:border-accent focus-visible:ring-0 font-mono"
                placeholder="your_name" required
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono text-muted-foreground mb-1.5">
                &gt; RETURN_ADDR
              </label>
              <Input
                type="email" name="email" value={formData.email} onChange={handleChange}
                className="rounded-none bg-background border-border focus-visible:border-accent focus-visible:ring-0 font-mono"
                placeholder="you@domain.tld" required
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono text-muted-foreground mb-1.5">
                &gt; PAYLOAD
              </label>
              <Textarea
                name="message" value={formData.message} onChange={handleChange}
                className="rounded-none bg-background border-border focus-visible:border-accent focus-visible:ring-0 font-mono min-h-[140px]"
                placeholder="Describe the project, role, or system..." required
              />
            </div>

            <Button
              type="submit"
              className="w-full rounded-none border-2 border-accent bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-[0_0_24px_hsl(var(--accent)/0.6)] font-mono font-bold py-6 tracking-wider"
            >
              <Send className="w-4 h-4 mr-2" />
              TRANSMIT
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
