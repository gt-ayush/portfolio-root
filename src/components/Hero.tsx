
import React, { useEffect, useState } from 'react';
import { Download, ExternalLink, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Self-Taught Systems Engineer. Linux Specialist. Problem Solver.';
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      {/* Terminal Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
      
      {/* Circuit Lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <path d="M0,500 Q250,300 500,500 T1000,500" stroke="rgb(34,197,94)" strokeWidth="1" fill="none" opacity="0.3"/>
          <path d="M0,300 Q250,100 500,300 T1000,300" stroke="rgb(59,130,246)" strokeWidth="1" fill="none" opacity="0.2"/>
          <path d="M0,700 Q250,500 500,700 T1000,700" stroke="rgb(34,197,94)" strokeWidth="1" fill="none" opacity="0.2"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <Terminal className="w-16 h-16 mx-auto mb-4 text-green-400" />
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 font-mono tracking-tight">
            Ayush Kumar Gupta
          </h1>
          <div className="text-2xl md:text-3xl text-green-400 font-mono mb-6 h-16 flex items-center justify-center">
            <span>{text}</span>
            <span className="animate-pulse ml-1">|</span>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed">
            From village constraints to building operating systems—proving that passion and persistence 
            can overcome any limitation.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToProjects}
            className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-3 text-lg border-2 border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Explore My Work
          </Button>
          <Button 
            variant="outline"
            className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-black px-8 py-3 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </div>

        <div className="mt-12 text-green-400 font-mono animate-bounce">
          <div className="text-2xl">↓</div>
          <div className="text-sm">discover my journey</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
