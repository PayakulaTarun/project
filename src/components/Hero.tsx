import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-marvel-purple-50 via-marvel-pink-50 to-marvel-blue-50 dark:from-gray-900 dark:via-marvel-purple-900 dark:to-marvel-blue-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-marvel-purple-400 to-marvel-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-marvel-blue-400 to-marvel-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-gradient-to-br from-marvel-pink-400 to-marvel-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full shadow-2xl animate-float overflow-hidden">
            <img src="/logo.jpg" alt="Marvel Technologys" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-marvel-purple-600 via-marvel-pink-500 to-marvel-blue-500 bg-clip-text text-transparent mb-4 leading-tight">
            Marvel Technologys
          </h1>
          <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-marvel-blue-600 to-marvel-purple-600 bg-clip-text text-transparent font-semibold mb-6">
            Innovative AI & Technology Solutions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            We're a cutting-edge technology company specializing in Artificial Intelligence, 
            Full Stack Development, and innovative solutions that transform businesses and lives.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={scrollToProjects}
            className="px-8 py-4 bg-gradient-to-r from-marvel-purple-600 to-marvel-pink-600 text-white rounded-full font-semibold hover:from-marvel-purple-700 hover:to-marvel-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            View Our Services
          </button>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 border-2 border-marvel-blue-500 bg-gradient-to-r from-marvel-blue-600 to-marvel-purple-600 bg-clip-text text-transparent rounded-full font-semibold hover:bg-gradient-to-r hover:from-marvel-blue-600 hover:to-marvel-purple-600 hover:text-white transform hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 hover:bg-gradient-to-r hover:from-marvel-pink-100 hover:to-marvel-blue-100"
          >
            <Linkedin size={24} className="text-marvel-pink-600 dark:text-marvel-pink-400" />
          </a>
          <a
            href="mailto:tarun@example.com"
            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 hover:bg-gradient-to-r hover:from-marvel-blue-100 hover:to-marvel-purple-100"
          >
            <Mail size={24} className="text-marvel-blue-600 dark:text-marvel-blue-400" />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-marvel-purple-400 dark:text-marvel-purple-600" />
        </div>
      </div>
    </section>
  );
};

export default Hero;