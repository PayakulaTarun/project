import React from 'react';
import { useNavigate } from 'react-router-dom';

const CallToAction: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-32 bg-gradient-to-r from-marvel-purple-600 via-marvel-pink-600 to-marvel-blue-600">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Let's work together to bring your ideas to life with innovative technology solutions
        </p>
        
        <button
          onClick={() => navigate('/contact')}
          className="px-8 py-4 bg-white text-marvel-purple-600 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default CallToAction;