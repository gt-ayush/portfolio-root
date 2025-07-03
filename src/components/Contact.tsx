
import React, { useState } from 'react';
import { Github, Linkedin, Mail, Send, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white font-mono">
          <span className="text-green-400">$</span> ./connect.sh
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-mono">
                Let's Build Something
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Looking for a developer who doesn't just code, but creates? 
                Someone who learned Python in 6 days and built an OS without guidance? 
                Let's connect.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <a 
                href="https://github.com/gt-ayush" 
                className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-green-500 transition-all duration-300 group"
              >
                <Github className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-white font-mono">GitHub</div>
                  <div className="text-gray-400 text-sm">github.com/gt-ayush</div>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/ayush-root/" 
                className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
              >
                <Linkedin className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-white font-mono">LinkedIn</div>
                  <div className="text-gray-400 text-sm">Professional Network</div>
                </div>
              </a>

              <a 
                href="mailto:guptaayush12347@gmail.com" 
                className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-yellow-500 transition-all duration-300 group"
              >
                <Mail className="w-6 h-6 text-yellow-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-white font-mono">Primary Email</div>
                  <div className="text-gray-400 text-sm">guptaayush12347@gmail.com</div>
                </div>
              </a>

              <a 
                href="mailto:Gt-ayush@outlook.com" 
                className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-yellow-500 transition-all duration-300 group"
              >
                <Mail className="w-6 h-6 text-yellow-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-white font-mono">Secondary Email</div>
                  <div className="text-gray-400 text-sm">Gt-ayush@outlook.com</div>
                </div>
              </a>
            </div>

            {/* Terminal Status */}
            <div className="bg-black rounded-lg p-4 border border-green-500/20">
              <div className="text-green-400 font-mono text-sm">
                <div className="flex items-center mb-2">
                  <Terminal className="w-4 h-4 mr-2" />
                  <span>Status: Available for opportunities</span>
                </div>
                <div className="text-xs text-gray-400 space-y-1">
                  <div>• Open to work</div>
                  <div>• Interested in ethical hacking roles</div>
                  <div>• Available for startup collaborations</div>
                  <div>• Open source contributions welcome</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-800 border-2 border-blue-500/30">
            <CardHeader>
              <CardTitle className="text-white font-mono text-xl">
                Send Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-mono text-gray-300 mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-900 border-gray-600 text-white font-mono focus:border-blue-500"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono text-gray-300 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-900 border-gray-600 text-white font-mono focus:border-blue-500"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-gray-900 border-gray-600 text-white font-mono focus:border-blue-500 min-h-[120px]"
                    placeholder="Let's discuss your project..."
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-mono font-bold py-3"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
