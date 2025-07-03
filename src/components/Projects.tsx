
import React from 'react';
import { ExternalLink, Github, Terminal, Shield, Database, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Custom Linux OS',
      description: 'Built from scratch using debootstrap, chroot, and KDE Plasma. Persistent bootable on UEFI/BIOS from USB/SD/external HDD. AppImage support included.',
      icon: Terminal,
      tech: ['Linux', 'KDE Plasma', 'UEFI', 'BIOS'],
      status: 'Production',
      github: '#',
      demo: '#',
      highlight: true
    },
    {
      title: 'DNS Resolver Tool',
      description: 'Terminal-based DNS management and resolution tool. Custom-built for network analysis and ethical hacking research.',
      icon: Globe,
      tech: ['Python', 'DNS', 'Networking', 'Terminal'],
      status: 'Active',
      github: '#',
      demo: '#'
    },
    {
      title: 'Invoice Manager',
      description: 'Terminal-based Python application for managing client billing and invoices. Built as Class 12 project with full CRUD functionality.',
      icon: Database,
      tech: ['Python', 'SQLite', 'Terminal UI', 'CRUD'],
      status: 'Complete',
      github: '#'
    },
    {
      title: 'Ethical Hacking Toolkit',
      description: 'Collection of reconnaissance tools and security testing scripts built using Bash and Python for educational purposes.',
      icon: Shield,
      tech: ['Bash', 'Python', 'Security', 'Recon'],
      status: 'Development',
      github: '#'
    },
    {
      title: 'WordPress eCommerce',
      description: 'Fully functional medication store built in Class 10 using WordPress and custom plugins. Complete with payment integration.',
      icon: Globe,
      tech: ['WordPress', 'PHP', 'MySQL', 'eCommerce'],
      status: 'Live',
      github: '#',
      demo: '#'
    },
    {
      title: 'Secure Messaging App',
      description: 'End-to-end encrypted messaging application with custom protocol implementation. Focus on privacy and security.',
      icon: Shield,
      tech: ['Python', 'Cryptography', 'Networking', 'Security'],
      status: 'Planning',
      future: true
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production': case 'Live': return 'bg-green-500';
      case 'Active': case 'Development': return 'bg-blue-500';
      case 'Complete': return 'bg-yellow-500';
      case 'Planning': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-950 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white font-mono">
          <span className="text-green-400">$</span> ls -la projects/
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.title}
                className={`bg-gray-900 border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  project.highlight 
                    ? 'border-green-500/50 hover:border-green-400' 
                    : project.future
                    ? 'border-purple-500/50 hover:border-purple-400'
                    : 'border-gray-700 hover:border-blue-400'
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <IconComponent className={`w-8 h-8 ${
                      project.highlight ? 'text-green-400' : 
                      project.future ? 'text-purple-400' : 'text-blue-400'
                    }`} />
                    <Badge className={`${getStatusColor(project.status)} text-white font-mono text-xs`}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-xl font-mono">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="outline" 
                        className="text-xs font-mono border-gray-600 text-gray-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {!project.future && (
                    <div className="flex gap-2">
                      {project.github && (
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black flex-1"
                        >
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </Button>
                      )}
                      {project.demo && (
                        <Button 
                          size="sm"
                          className="bg-blue-500 hover:bg-blue-600 text-white flex-1"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Demo
                        </Button>
                      )}
                    </div>
                  )}
                  
                  {project.future && (
                    <div className="text-center text-purple-400 font-mono text-sm">
                      Coming Soon...
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Future Projects Preview */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-purple-400 font-mono">
            Future Builds
          </h3>
          <div className="bg-gray-900 rounded-lg border-2 border-purple-500/30 p-6">
            <div className="text-purple-400 font-mono text-sm mb-4">
              <span>// Upcoming projects in development</span>
            </div>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-3">
                <span className="text-purple-400">•</span>
                <span>Parallel Encrypted Web Browser (Surface + Tor + Alt-Web)</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-purple-400">•</span>
                <span>Advanced Penetration Testing Framework</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-purple-400">•</span>
                <span>Distributed Computing Platform</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
