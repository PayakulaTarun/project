import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lightbulb, Users, Clock } from 'lucide-react';

const AboutSection: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Lightbulb,
      title: 'Innovative Solutions',
      description: 'Cutting-edge technology solutions tailored to your business needs'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to delivering excellence'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support to ensure your success'
    }
  ];

  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Marvel Technologys
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We are a leading technology solutions provider specializing in web development, 
              mobile applications, digital marketing, and IT consulting. With over a decade of 
              experience, we help businesses leverage technology to achieve their goals.
            </p>
            
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-2 bg-marvel-purple-100 dark:bg-marvel-purple-900 rounded-lg">
                    <feature.icon className="w-6 h-6 text-marvel-purple-600 dark:text-marvel-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate('/about')}
              className="px-6 py-3 bg-gradient-to-r from-marvel-purple-600 to-marvel-pink-600 text-white rounded-lg font-semibold hover:from-marvel-purple-700 hover:to-marvel-pink-700 transition-all duration-300"
            >
              Learn More About Us
            </button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-marvel-purple-100 to-marvel-pink-100 dark:from-marvel-purple-900 dark:to-marvel-pink-900 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Team working</h3>
              <p className="text-gray-600 dark:text-gray-300">Collaborative approach to deliver exceptional results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;