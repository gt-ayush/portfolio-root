
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
                From a remote village where technology was scarce, I discovered my passion for systems programming 
                in Class 6. While peers played games, I was mastering <span className="text-green-400 font-mono">Unity</span> and 
                <span className="text-green-400 font-mono"> Godot</span>, building worlds from code.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Linux became my playground in Class 7. With no broadband, no mentors, and definitely no Stack Overflow, 
                I downloaded <span className="text-green-400 font-mono">30+ distribution ISOs</span> over painfully slow village internet. 
                Every kernel panic taught me patience. Every successful boot was a victory.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I don't just use technology—I build it. From crafting a persistent Linux OS that boots from any device 
                to engineering DNS resolvers and diving deep into <span className="text-blue-400 font-mono">cryptographic protocols</span>. 
                My approach: understand the fundamentals, then innovate.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Academic excellence followed naturally: <span className="text-green-400 font-mono">99/100</span> in ICSE Computer Applications. 
                But my real education happened in the terminal—mastering <span className="text-blue-400 font-mono">bash</span>, 
                <span className="text-blue-400 font-mono"> SQL</span>, and <span className="text-blue-400 font-mono">Python</span> through 
                relentless experimentation and a hunger to understand how things really work.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-green-500/20">
              <div className="bg-black rounded p-4 font-mono text-green-400 text-sm">
                <div className="flex items-center mb-2">
                  <span className="text-blue-400">ayush@system</span>
                  <span className="text-white">:</span>
                  <span className="text-yellow-400">~/achievements</span>
                  <span className="text-white">$ </span>
                  <span className="animate-pulse">|</span>
                </div>
                <div className="space-y-1 text-xs">
                  <div>• Built custom Linux OS from scratch</div>
                  <div>• Persistent UEFI/BIOS multi-boot system</div>
                  <div>• Advanced DNS management & security tools</div>
                  <div>• Ethical penetration testing research</div>
                  <div>• Database-driven invoice management system</div>
                  <div>• Self-taught with zero formal guidance</div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <div className="text-2xl font-bold text-white mb-2">From Zero Resources to Top Performance</div>
                <div className="text-green-400 font-mono text-sm">No privilege. No mentors. No shortcuts.</div>
                <div className="text-green-400 font-mono text-sm">Just curiosity, persistence, and terminal mastery.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
