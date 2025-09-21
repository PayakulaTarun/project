import React, { useState } from 'react';
import { ExternalLink, Github, Star, TrendingUp, Users, Clock } from 'lucide-react';

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Website',
      description: 'Modern e-commerce solution with advanced features and seamless checkout experience.',
      techStack: ['React', 'Node.js', 'MongoDB', '+1 more'],
      image: '🛒'
    },
    {
      id: 2,
      title: 'Healthcare Mobile App',
      category: 'Mobile App',
      description: 'Patient management and telemedicine mobile application with real-time features.',
      techStack: ['React Native', 'Firebase', 'WebRTC', '+1 more'],
      image: '🏥'
    },
    {
      id: 3,
      title: 'Enterprise CRM System',
      category: 'Enterprise',
      description: 'Comprehensive customer relationship management system for large enterprises.',
      techStack: ['Angular', 'Spring Boot', 'PostgreSQL', '+1 more'],
      image: '🏢'
    },
    {
      id: 4,
      title: 'Educational Platform',
      category: 'Website',
      description: 'Interactive learning management system with video streaming and assessment tools.',
      techStack: ['Vue.js', 'Laravel', 'MySQL', '+1 more'],
      image: '📚'
    },

    {
      id: 6,
      title: 'Supply Chain Management',
      category: 'Enterprise',
      description: 'End-to-end supply chain visibility and management system for manufacturing companies.',
      techStack: ['React', 'Java', 'Oracle', '+1 more'],
      image: '🚚'
    }
  ];

  const filters = ['All Projects', 'Websites', 'Mobile Apps', 'Enterprise Solutions'];

  const caseStudies = [
    {
      title: 'E-Commerce Platform Success',
      description: 'How we helped a retail company increase their online sales by 300% through a custom e-commerce solution with advanced analytics and personalization.',
      metrics: [
        { value: '300%', label: 'Sales Increase' },
        { value: '50%', label: 'Faster Loading' },
        { value: '95%', label: 'User Satisfaction' }
      ]
    },
    {
      title: 'Healthcare App Impact',
      description: 'Developed a telemedicine mobile app that served 10,000+ patients in the first year, improving healthcare accessibility in remote areas.',
      metrics: [
        { value: '10k+', label: 'Patients Served' },
        { value: '24/7', label: 'Availability' },
        { value: '4.8★', label: 'App Rating' }
      ]
    }
  ];

  const getFilteredProjects = () => {
    if (activeFilter === 'All Projects') return projects;
    if (activeFilter === 'Websites') return projects.filter(p => p.category === 'Website');
    if (activeFilter === 'Mobile Apps') return projects.filter(p => p.category === 'Mobile App');
    if (activeFilter === 'Enterprise Solutions') return projects.filter(p => p.category === 'Enterprise');
    return projects;
  };

  const filteredProjects = getFilteredProjects();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-marvel-purple-600 via-marvel-pink-500 to-marvel-blue-500 bg-clip-text text-transparent mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our successful projects and see how we've helped businesses achieve their goals through innovative technology solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Filter by category:</h3>
          <div className="flex flex-wrap gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-marvel-purple-600 to-marvel-pink-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Count */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-marvel-purple-600 to-marvel-pink-600 bg-clip-text text-transparent">
            {activeFilter}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{filteredProjects.length} projects found</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 text-center">{project.image}</div>
              <div className="mb-2">
                <span className="px-3 py-1 bg-marvel-purple-100 dark:bg-marvel-purple-900 text-marvel-purple-600 dark:text-marvel-purple-300 text-sm rounded-full">
                  {project.category}
                </span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="bg-gray-50 dark:bg-gray-800 py-20 -mx-6 px-6 mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-marvel-purple-600 via-marvel-pink-500 to-marvel-blue-500 bg-clip-text text-transparent mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Case studies showcasing how our solutions have transformed businesses and delivered measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-marvel-purple-50 to-marvel-pink-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl">
                <div className="mb-4">
                  <span className="text-sm text-marvel-purple-600 dark:text-marvel-purple-400 font-medium">
                    Case study {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{study.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{study.description}</p>
                
                <div className="grid grid-cols-3 gap-4">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-marvel-purple-600 dark:text-marvel-purple-400 mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-marvel-purple-600 via-marvel-pink-600 to-marvel-blue-600 rounded-2xl p-12 text-center text-white mt-20">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Success Story?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's work together to turn your ideas into a successful project that drives real results.
          </p>
          <button className="px-8 py-4 bg-white text-marvel-purple-600 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;