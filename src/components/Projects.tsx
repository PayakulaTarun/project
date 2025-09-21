import React from 'react';
import { ExternalLink, Github, ArrowRight, Globe, Smartphone, TrendingUp, Settings, Cloud, CheckCircle } from 'lucide-react';
import { projects } from '../data/portfolio';

const Projects: React.FC = () => {
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

    {
      icon: Settings,
      title: 'IT Consulting',
      description: 'Strategic IT consulting services to optimize your technology infrastructure and processes.',
      features: ['Technology Strategy', 'System Architecture', 'Process Optimization', 'Digital Transformation']
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Secure and scalable cloud solutions for modern businesses with 24/7 support.',
      features: ['Cloud Migration', 'Infrastructure Management', 'Security & Compliance', 'Cost Optimization']
    },
    {
      icon: Settings,
      title: 'Enterprise Software Solutions',
      description: 'Comprehensive enterprise-grade software development including ERP systems and CRM platforms.',
      features: ['ERP Systems', 'CRM Platforms', 'Business Automation', 'Scalable Architecture']
    },
    {
      icon: Settings,
      title: 'AI & Machine Learning Solutions',
      description: 'Advanced AI solutions including natural language processing and computer vision systems.',
      features: ['NLP Solutions', 'Computer Vision', 'Predictive Analytics', 'Intelligent Automation']
    },
    {
      icon: Settings,
      title: 'Database Design & Management',
      description: 'Database architecture and optimization services ensuring data integrity and high performance.',
      features: ['Database Architecture', 'Performance Optimization', 'Data Security', 'Backup Solutions']
    },
    {
      icon: Globe,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration and inventory management systems.',
      features: ['Payment Integration', 'Inventory Management', 'Customer Management', 'Analytics Dashboard']
    },

  ];

  const processSteps = [
    { number: '1', title: 'Discovery & Planning', description: 'We analyze your requirements and create a comprehensive project plan' },
    { number: '2', title: 'Design & Architecture', description: 'Our team designs the solution architecture and user experience' },
    { number: '3', title: 'Development & Testing', description: 'Agile development with continuous testing and quality assurance' },
    { number: '4', title: 'Deployment & Support', description: 'Seamless deployment with ongoing maintenance and support' }
  ];

  const whyChooseUs = [
    { title: 'Expert Team', description: 'Our team consists of experienced professionals with deep expertise in their respective fields.' },
    { title: 'Proven Track Record', description: 'With 50+ successful projects and 1+ years of experience, we deliver results.' },
    { title: 'Latest Technologies', description: 'We stay updated with the latest trends and technologies to provide cutting-edge solutions.' },
    { title: '24/7 Support', description: 'Our dedicated support team is available round-the-clock to assist you.' }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-marvel-purple-600 via-marvel-pink-500 to-marvel-blue-500 bg-clip-text text-transparent mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation journey.
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            From web development to cloud services, we provide end-to-end solutions tailored to your specific business needs.
          </p>
        </div>

        {/* What We Offer */}
        <div className="mb-32">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-marvel-purple-600 to-marvel-pink-600 bg-clip-text text-transparent text-center mb-12">What We Offer</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="p-3 bg-gradient-to-br from-marvel-purple-100 to-marvel-pink-100 dark:from-marvel-purple-900 dark:to-marvel-pink-900 rounded-lg w-fit mb-6">
                  <service.icon className="w-8 h-8 text-marvel-purple-600 dark:text-marvel-purple-400" />
                </div>
                
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{service.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h5 className="font-medium text-gray-900 dark:text-white mb-3">Key Features:</h5>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                        <CheckCircle className="w-4 h-4 text-marvel-purple-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                

              </div>
            ))}
          </div>
        </div>

        {/* Our Process */}
        <div className="mb-32 bg-gray-50 dark:bg-gray-800 py-20 -mx-6 px-6">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-marvel-purple-600 via-marvel-pink-500 to-marvel-blue-500 bg-clip-text text-transparent text-center mb-12">Our Process</h3>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12">We follow a proven methodology to ensure project success and client satisfaction</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-marvel-purple-600 to-marvel-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.number}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{step.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-marvel-purple-600 to-marvel-pink-600 bg-clip-text text-transparent mb-8">Why Choose Us?</h3>
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-marvel-purple-100 to-marvel-pink-100 dark:from-marvel-purple-900 dark:to-marvel-pink-900 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Why choose us</h4>
              <p className="text-gray-600 dark:text-gray-300">Experience excellence in every project</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-marvel-purple-600 via-marvel-pink-600 to-marvel-blue-600 rounded-2xl p-12 text-center text-white mt-20">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-xl mb-8 opacity-90">Let's discuss how our services can help transform your business and drive growth.</p>
          <button className="px-8 py-4 bg-white text-marvel-purple-600 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;