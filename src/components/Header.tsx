import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#journey', label: 'Journey' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleDownloadResume = () => {
    // In a real implementation, this would download the actual resume
    alert('Resume download would start here!');
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-marvel-purple-200 dark:border-marvel-purple-700">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-marvel-purple-600 via-marvel-pink-500 to-marvel-blue-500 bg-clip-text text-transparent">
            Marvel Technologys
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-marvel-purple-600 dark:hover:text-marvel-purple-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Theme Toggle & Resume Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleDownloadResume}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-marvel-purple-600 to-marvel-pink-600 text-white rounded-lg hover:from-marvel-purple-700 hover:to-marvel-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Download size={16} />
              <span>Resume</span>
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-marvel-purple-100 dark:bg-marvel-purple-800 text-marvel-purple-800 dark:text-marvel-purple-200 hover:bg-marvel-purple-200 dark:hover:bg-marvel-purple-700 transition-colors"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-800 dark:text-gray-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4 border-t border-gray-200 dark:border-gray-700">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-gray-600 dark:text-gray-300 hover:text-marvel-purple-600 dark:hover:text-marvel-purple-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center space-x-4 pt-4">
              <button
                onClick={handleDownloadResume}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-marvel-purple-600 to-marvel-pink-600 text-white rounded-lg hover:from-marvel-purple-700 hover:to-marvel-pink-700 transition-all duration-300"
              >
                <Download size={16} />
                <span>Resume</span>
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-marvel-purple-100 dark:bg-marvel-purple-800 text-marvel-purple-800 dark:text-marvel-purple-200 hover:bg-marvel-purple-200 dark:hover:bg-marvel-purple-700 transition-colors"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;