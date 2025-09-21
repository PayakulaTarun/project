import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Marvel Technology Solutions transformed our digital presence completely. Their expertise and dedication are unmatched.",
      author: "Sarah Johnson",
      company: "TechCorp Solutions"
    },
    {
      quote: "Outstanding service and quality. The team delivered beyond our expectations on time and within budget.",
      author: "Michael Chen",
      company: "InnovateLab"
    },
    {
      quote: "Professional, reliable, and innovative. Marvel Technology Solutions is our go-to partner for all tech needs.",
      author: "Emily Rodriguez",
      company: "GrowthPartners"
    }
  ];

  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;