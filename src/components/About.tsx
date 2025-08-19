import React from 'react';
import { GraduationCap, Code, Rocket, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Marvel Technologys
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A cutting-edge technology company on a mission to create impactful AI-driven solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-br from-marvel-purple-100 to-marvel-pink-100 dark:from-marvel-purple-900 dark:to-marvel-pink-900 rounded-lg">
                <GraduationCap size={24} className="text-marvel-purple-600 dark:text-marvel-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  AI & Technology Innovation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Leading the way in artificial intelligence research and development, creating cutting-edge solutions for tomorrow's challenges.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-br from-marvel-pink-100 to-marvel-blue-100 dark:from-marvel-pink-900 dark:to-marvel-blue-900 rounded-lg">
                <Code size={24} className="text-marvel-pink-600 dark:text-marvel-pink-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Full Stack Development
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Expert in modern web technologies, from React frontends to Node.js backends, delivering scalable enterprise solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-br from-marvel-blue-100 to-marvel-purple-100 dark:from-marvel-blue-900 dark:to-marvel-purple-900 rounded-lg">
                <Rocket size={24} className="text-marvel-blue-600 dark:text-marvel-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Innovation Leadership
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Pioneering breakthrough technologies in AI and EdTech, revolutionizing how businesses operate and people learn.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-br from-marvel-purple-100 to-marvel-blue-100 dark:from-marvel-purple-900 dark:to-marvel-blue-900 rounded-lg">
                <BookOpen size={24} className="text-marvel-purple-600 dark:text-marvel-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Research & Development
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Constantly pushing boundaries in AI/ML, Data Science, and emerging technologies to deliver next-generation solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Company Highlights
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Solutions Delivered</span>
                <span className="font-bold text-marvel-purple-600 dark:text-marvel-purple-400">25+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Technologies Mastered</span>
                <span className="font-bold text-marvel-pink-600 dark:text-marvel-pink-400">37+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">AI/ML Projects</span>
                <span className="font-bold text-marvel-blue-600 dark:text-marvel-blue-400">19+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Happy Clients</span>
                <span className="font-bold bg-gradient-to-r from-marvel-purple-600 to-marvel-pink-600 bg-clip-text text-transparent">87+</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Our Core Values
              </h4>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <div>• Innovation through cutting-edge technology</div>
                <div>• Excellence in every solution we deliver</div>
                <div>• Transforming businesses with AI-driven insights</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;