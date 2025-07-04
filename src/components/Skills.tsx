import React from 'react';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skills = {
    advanced: [
      { name: 'Shell Scripting', level: 90, category: 'Shell' },
      { name: 'OS Development', level: 85, category: 'Systems' },
      { name: 'SQL Database', level: 80, category: 'Database' },
      { name: 'Linux System Administration', level: 70, category: 'Systems' }
    ],
    intermediate: [
      { name: 'Network Security', level: 65, category: 'Security' },
      { name: 'Linux (Terminal Tools)', level: 60, category: 'OS' },
      { name: 'Python', level: 60, category: 'Language' },
      { name: 'DNS Management', level: 60, category: 'Network' },
      { name: 'DevOps Tools', level: 55, category: 'Infrastructure' },
      { name: 'Java', level: 40, category: 'Language' }
    ],
    basic: [
      { name: 'WordPress', level: 30, category: 'CMS' },
      { name: 'Cyber Security', level: 15, category: 'Security' }
    ]
  };

  const SkillBar = ({ skill, index }: { skill: any; index: number }) => (
    <div className="mb-6" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-3">
          <span className="text-white font-mono text-lg">{skill.name}</span>
          <span className="text-green-400 text-xs bg-green-400/10 px-2 py-1 rounded font-mono">
            {skill.category}
          </span>
        </div>
        <span className="text-green-400 font-mono text-sm">{skill.level}%</span>
      </div>
      <Progress 
        value={skill.level} 
        className="h-2 bg-gray-800 border border-gray-700"
      />
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-black relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white font-mono">
          <span className="text-green-400">$</span> cat skills.txt
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Advanced Skills */}
          <div className="bg-gray-900 rounded-lg p-6 border-2 border-green-500/30">
            <h3 className="text-2xl font-bold text-green-400 mb-6 font-mono flex items-center">
              <span className="mr-3">●</span> Advanced
            </h3>
            {skills.advanced.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          {/* Intermediate Skills */}
          <div className="bg-gray-900 rounded-lg p-6 border-2 border-blue-500/30">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 font-mono flex items-center">
              <span className="mr-3">●</span> Intermediate
            </h3>
            {skills.intermediate.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          {/* Basic Skills */}
          <div className="bg-gray-900 rounded-lg p-6 border-2 border-yellow-500/30">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6 font-mono flex items-center">
              <span className="mr-3">●</span> Basic
            </h3>
            {skills.basic.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Terminal Stats */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-black rounded-lg border-2 border-green-500/30 p-6">
            <div className="text-green-400 font-mono text-sm mb-4">
              <span className="text-blue-400">ayush@system</span>
              <span className="text-white">:</span>
              <span className="text-yellow-400">~/skills</span>
              <span className="text-white">$ </span>
              <span>neofetch --skills</span>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-400 font-mono">30+</div>
                <div className="text-gray-400 text-sm">Linux Distros Tested</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 font-mono">99</div>
                <div className="text-gray-400 text-sm">ICSE Comp Score</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 font-mono">6</div>
                <div className="text-gray-400 text-sm">Days to Learn Python</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-400 font-mono">∞</div>
                <div className="text-gray-400 text-sm">Hours Debugging</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
