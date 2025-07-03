
import React from 'react';
import { Code, Monitor, Server, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white font-mono">
          <span className="text-green-400">$</span> whoami
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-green-400 mb-6">
                <Code className="w-8 h-8" />
                <Monitor className="w-8 h-8" />
                <Server className="w-8 h-8" />
                <Shield className="w-8 h-8" />
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                While most kids in my village were learning basic HTML, I was mastering Unity and Godot in Class 6. 
                By Class 7, I had discovered Linux—with no internet to guide me, just broken USBs and endless experimentation.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I downloaded over <span className="text-green-400 font-mono">30GB of ISOs</span> on village internet that crawled at dial-up speeds. 
                Every crash was a lesson. Every fix was a victory. I learned debugging by breaking and rebuilding live systems.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                While others binged Netflix, I studied <span className="text-blue-400 font-mono">bash</span>, 
                <span className="text-blue-400 font-mono"> DNS</span>, and <span className="text-blue-400 font-mono">cryptography</span>. 
                I built an invoice manager, engineered a DNS resolver, and created a persistent Linux OS that boots from anything.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Scored <span className="text-green-400 font-mono">99/100</span> in ICSE Computer Applications. 
                Learned SQL in hours, Python in 6 days. Started ethical hacking by finding real vulnerabilities—but never exploiting them.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-green-500/20">
              <div className="bg-black rounded p-4 font-mono text-green-400 text-sm">
                <div className="flex items-center mb-2">
                  <span className="text-blue-400">aarav@village</span>
                  <span className="text-white">:</span>
                  <span className="text-yellow-400">~</span>
                  <span className="text-white">$ </span>
                  <span className="animate-pulse">|</span>
                </div>
                <div className="space-y-1 text-xs">
                  <div>• Custom Linux OS built from scratch</div>
                  <div>• UEFI/BIOS bootable from any device</div>
                  <div>• Python mastery in 6 days</div>
                  <div>• Ethical hacking & vulnerability research</div>
                  <div>• DNS systems & network security</div>
                  <div>• Self-taught with zero guidance</div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <div className="text-2xl font-bold text-white mb-2">From Village to Top 1%</div>
                <div className="text-green-400 font-mono text-sm">No privilege. No high-end systems.</div>
                <div className="text-green-400 font-mono text-sm">Just focus, obsession, and hunger to build.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
