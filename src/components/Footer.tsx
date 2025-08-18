import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-marvel-purple-900 via-marvel-pink-900 to-marvel-blue-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-marvel-pink-200 bg-clip-text text-transparent">
              Innovate. Transform. Excel.
            </h3>
            <p className="text-marvel-purple-200 max-w-2xl mx-auto">
              "At Marvel Technologies, we don't just build solutions – we craft the future. 
              Every innovation, every breakthrough, and every success story starts with a vision to transform the world through technology."
            </p>
          </div>

          <div className="border-t border-marvel-purple-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-marvel-purple-300">
                © 2025 Marvel Technologies. All rights reserved.
              </div>
              <div className="flex items-center space-x-2 text-marvel-purple-300">
                <span>Made with</span>
                <Heart size={16} className="text-marvel-pink-400 fill-current" />
                <span>and cutting-edge innovation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;