import React from 'react';
import { timeline } from '../data/portfolio';

const Journey: React.FC = () => {
  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: string } = {
      rocket: '🚀',
      brain: '🧠',
      building: '🏢',
      code: '💻',
      target: '🎯'
    };
    return iconMap[iconName] || '📅';
  };

  return (
    <section id="journey" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From innovative startup to technology leader - our evolution in the tech industry
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-marvel-purple-500 via-marvel-pink-500 to-marvel-blue-500 rounded-full" />
            
            {timeline.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-16 md:ml-0`}>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-marvel-purple-100 dark:border-marvel-purple-800 hover:border-marvel-pink-300 dark:hover:border-marvel-pink-600">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{getIcon(event.icon)}</span>
                      <div className="text-lg font-bold bg-gradient-to-r from-marvel-purple-600 to-marvel-pink-600 bg-clip-text text-transparent">
                        {event.year}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-marvel-purple-500 via-marvel-pink-500 to-marvel-blue-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg" />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-marvel-purple-600 via-marvel-pink-600 to-marvel-blue-600 text-white p-8 rounded-xl max-w-2xl mx-auto shadow-2xl">
            <h3 className="text-2xl font-semibold mb-4">Next Chapter</h3>
            <p className="text-lg leading-relaxed">
              "The future belongs to those who innovate, adapt, and transform. Marvel Technologies is leading the charge in creating tomorrow's solutions today."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;