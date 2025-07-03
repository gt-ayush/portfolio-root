
import React from 'react';
import { Terminal, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Terminal Style Footer */}
          <div className="bg-gray-900 rounded-lg p-6 max-w-2xl mx-auto border border-green-500/20 mb-8">
            <div className="text-green-400 font-mono text-sm">
              <div className="flex items-center justify-center mb-2">
                <Terminal className="w-4 h-4 mr-2" />
                <span>ayush@portfolio:~$ exit</span>
              </div>
              <div className="text-xs text-gray-400">
                Session terminated. Thanks for visiting!
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 font-mono text-sm mb-4">
            © 2025 Ayush Kumar Gupta — Made in Terminal
          </div>

          {/* Quote */}
          <div className="text-green-400 font-mono text-xs max-w-md mx-auto mb-6">
            "While others consume content, I create systems."
          </div>

          {/* Links */}
          <div className="flex justify-center space-x-6 text-sm">
            <a 
              href="#" 
              className="text-gray-400 hover:text-green-400 transition-colors font-mono"
            >
              Resume
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 transition-colors font-mono"
            >
              Open Source
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-yellow-400 transition-colors font-mono"
            >
              Blog
            </a>
          </div>

          {/* Made with love indicator */}
          <div className="flex items-center justify-center mt-6 text-gray-500 text-xs">
            <span className="mr-2">Built with</span>
            <Heart className="w-3 h-3 text-red-500 fill-current" />
            <span className="ml-2">and lots of coffee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
