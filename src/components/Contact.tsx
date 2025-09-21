import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  MessageCircle,
} from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-marvel-purple-600 via-marvel-pink-500 to-marvel-blue-500 bg-clip-text text-transparent mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? Get in touch with our team of experts. We'd love to hear about your ideas and help bring them to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-32">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-marvel-purple-50 to-marvel-pink-50 dark:from-gray-800 dark:to-marvel-purple-900 p-8 rounded-xl border border-marvel-purple-200 dark:border-marvel-purple-700">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-marvel-purple-600 to-marvel-pink-600 bg-clip-text text-transparent mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-marvel-purple-300 dark:border-marvel-purple-600 rounded-lg focus:ring-2 focus:ring-marvel-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-marvel-purple-300 dark:border-marvel-purple-600 rounded-lg focus:ring-2 focus:ring-marvel-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-marvel-purple-300 dark:border-marvel-purple-600 rounded-lg focus:ring-2 focus:ring-marvel-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-marvel-purple-300 dark:border-marvel-purple-600 rounded-lg focus:ring-2 focus:ring-marvel-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Tell us about your project or question..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-marvel-purple-600 via-marvel-pink-600 to-marvel-blue-600 text-white rounded-lg hover:from-marvel-purple-700 hover:via-marvel-pink-700 hover:to-marvel-blue-700 transform hover:scale-[1.02] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-marvel-purple-600 to-marvel-pink-600 bg-clip-text text-transparent mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We're here to help you transform your ideas into reality. Contact us today to discuss your project requirements.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-marvel-blue-100 to-marvel-purple-100 dark:from-marvel-blue-900 dark:to-marvel-purple-900 rounded-lg">
                  <MapPin
                    size={24}
                    className="text-marvel-blue-600 dark:text-marvel-blue-400"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Office Address
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Yalamanchili Square, Gunadala, Vijayawada, Andhra Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-br from-marvel-pink-100 to-marvel-blue-100 dark:from-marvel-pink-900 dark:to-marvel-blue-900 rounded-lg">
                  <Phone
                    size={24}
                    className="text-marvel-pink-600 dark:text-marvel-pink-400"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Phone Number
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    +91 9666777499
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-br from-marvel-purple-100 to-marvel-pink-100 dark:from-marvel-purple-900 dark:to-marvel-pink-900 rounded-lg">
                  <Mail
                    size={24}
                    className="text-marvel-purple-600 dark:text-marvel-purple-400"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Email Address
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    info@marveltechnologys.in
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-marvel-blue-100 to-marvel-purple-100 dark:from-marvel-blue-900 dark:to-marvel-purple-900 rounded-lg">
                  <MessageCircle
                    size={24}
                    className="text-marvel-blue-600 dark:text-marvel-blue-400"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Business Hours
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-marvel-pink-100 dark:bg-marvel-pink-800 rounded-lg hover:bg-marvel-pink-200 dark:hover:bg-marvel-pink-700 transition-colors"
                >
                  <Linkedin
                    size={24}
                    className="text-marvel-pink-600 dark:text-marvel-pink-300"
                  />
                </a>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-marvel-blue-100 dark:bg-marvel-blue-800 rounded-lg hover:bg-marvel-blue-200 dark:hover:bg-marvel-blue-700 transition-colors"
                >
                  <MessageCircle
                    size={24}
                    className="text-marvel-blue-600 dark:text-marvel-blue-300"
                  />
                </a>
              </div>
            </div>

            {/* Find Us Section */}
            <div className="mt-8 p-6 bg-gradient-to-br from-marvel-purple-100 to-marvel-pink-100 dark:from-marvel-purple-900 dark:to-marvel-pink-900 rounded-xl">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Find Us</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Visit our office in Vijayawada, Andhra Pradesh</p>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-8 text-center">
                <div className="text-4xl mb-2">🗺️</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Interactive Map Integration</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">Google Maps or other map service can be integrated here</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-marvel-purple-600 via-marvel-pink-600 to-marvel-blue-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Let's Work Together</h3>
          <p className="text-xl mb-8 opacity-90">
            Ready to transform your business with innovative technology solutions? Contact us today and let's create something amazing together.
          </p>
          <button className="px-8 py-4 bg-white text-marvel-purple-600 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
