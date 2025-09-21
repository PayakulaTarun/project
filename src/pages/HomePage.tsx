import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesPreview from '../components/ServicesPreview';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Hero />
      <AboutSection />
      <ServicesPreview />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default HomePage;