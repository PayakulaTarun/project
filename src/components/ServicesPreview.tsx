import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, Smartphone, TrendingUp, ArrowRight } from 'lucide-react';

const ServicesPreview: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies for optimal performance and user experience.',
      features: ['Responsive Design', 'Modern Frameworks', 'Performance Optimization', 'SEO Ready']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences.',
      features: ['iOS Development', 'Android Development', 'Cross-Platform', 'App Store Optimization']
    },

  ];

  return (
    <section className="py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="p-3 bg-gradient-to-br from-marvel-purple-100 to-marvel-pink-100 dark:from-marvel-purple-900 dark:to-marvel-pink-900 rounded-lg w-fit mb-6">
                <service.icon className="w-8 h-8 text-marvel-purple-600 dark:text-marvel-purple-400" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
              
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                      <div className="w-1.5 h-1.5 bg-marvel-purple-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              

            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/services')}
            className="px-8 py-3 bg-gradient-to-r from-marvel-purple-600 to-marvel-pink-600 text-white rounded-lg font-semibold hover:from-marvel-purple-700 hover:to-marvel-pink-700 transition-all duration-300"
          >
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;