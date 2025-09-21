import React from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const goToServices = () => {
    navigate("/services");
  };

  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-marvel-purple-50 via-marvel-pink-50 to-marvel-blue-50 dark:from-gray-900 dark:via-marvel-purple-900 dark:to-marvel-blue-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-marvel-purple-400 to-marvel-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-marvel-blue-400 to-marvel-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-40 left-1/2 w-80 h-80 bg-gradient-to-br from-marvel-pink-400 to-marvel-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          {/*<div className="w-32 h-32 mx-auto mb-6 rounded-full shadow-2xl animate-float overflow-hidden">
            <img src="/logo.jpg" alt="Marvel Technologys" className="w-full h-full object-cover" />
          </div>*/}
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-marvel-purple-600 via-marvel-pink-500 to-marvel-blue-500 bg-clip-text text-transparent mb-12 leading-relaxed pt-24 pb-4">
            Marvel Technologys
          </h1>
          <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-marvel-blue-600 to-marvel-purple-600 bg-clip-text text-transparent font-semibold mb-6">
            Transforming Ideas into Digital Reality
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            We deliver cutting-edge technology solutions that drive business
            growth and digital transformation. Your success is our mission.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={goToServices}
            className="px-8 py-4 bg-gradient-to-r from-marvel-purple-600 to-marvel-pink-600 text-white rounded-full font-semibold hover:from-marvel-purple-700 hover:to-marvel-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            Our Services
          </button>
          <button className="px-8 py-4 border-2 border-marvel-blue-500 text-marvel-blue-600 dark:text-marvel-blue-400 rounded-full font-semibold hover:bg-marvel-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300">
            Watch Demo
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-marvel-purple-600 dark:text-marvel-purple-400 mb-2">
              13+
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Happy Clients
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-marvel-pink-600 dark:text-marvel-pink-400 mb-2">
              19+
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Projects Completed
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-marvel-blue-600 dark:text-marvel-blue-400 mb-2">
              1+
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-marvel-purple-600 dark:text-marvel-purple-400 mb-2">
              99%
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Success Rate
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 hover:bg-gradient-to-r hover:from-marvel-pink-100 hover:to-marvel-blue-100"
          >
            <Linkedin
              size={24}
              className="text-marvel-pink-600 dark:text-marvel-pink-400"
            />
          </a>
          <a
            href="mailto:tarun@example.com"
            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 hover:bg-gradient-to-r hover:from-marvel-blue-100 hover:to-marvel-purple-100"
          >
            <Mail
              size={24}
              className="text-marvel-blue-600 dark:text-marvel-blue-400"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;