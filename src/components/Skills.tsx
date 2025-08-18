import React from 'react';
import { skillCategories } from '../data/portfolio';

const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    // Simple icon mapping - in a real app, you'd use proper icon components
    const iconMap: { [key: string]: string } = {
      code: '💻',
      coffee: '☕',
      terminal: '⌨️',
      component: '⚛️',
      palette: '🎨',
      smartphone: '📱',
      server: '🖥️',
      database: '🗄️',
      brain: '🧠',
      'git-branch': '🔀',
      zap: '⚡'
    };
    return iconMap[iconName] || '🔧';
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our comprehensive technology stack for delivering world-class solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gradient-to-br from-white to-marvel-purple-50 dark:from-gray-800 dark:to-marvel-purple-900 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-marvel-purple-100 dark:border-marvel-purple-800"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{getIcon(skill.icon)}</span>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-marvel-purple-500 via-marvel-pink-500 to-marvel-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-marvel-purple-50 via-marvel-pink-50 to-marvel-blue-50 dark:from-gray-800 dark:via-marvel-purple-900 dark:to-marvel-blue-900 p-8 rounded-xl max-w-4xl mx-auto border border-marvel-purple-200 dark:border-marvel-purple-700">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Emerging Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Data Science', 'Quantum Computing', 'Advanced AI/ML', 'Cloud Computing', 'DevOps'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white dark:bg-gray-800 text-marvel-purple-700 dark:text-marvel-purple-300 rounded-full border border-marvel-purple-200 dark:border-marvel-purple-600 font-medium hover:bg-gradient-to-r hover:from-marvel-purple-100 hover:to-marvel-pink-100 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;