import React from 'react';
import { User, Code, Briefcase, Award, MapPin, Mail, Phone, Target, Eye, Flag } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: User, label: 'Happy Clients', value: '13+' },
    { icon: Code, label: 'Projects Completed', value: '19+' },
    { icon: Briefcase, label: 'Years Experience', value: '1+' },
    { icon: Award, label: 'Success Rate', value: '99%' }
  ];

  const teamMembers = [
    {
      name: 'Mukul Muturi',
      position: 'CEO & Founder',
      description: 'Visionary leader with extensive experience in technology and business strategy.',
      avatar: '👨💼'
    }
  ];

  const timeline = [
    { year: '2025', title: 'Company Founded', description: 'Started with a vision to transform businesses through technology' },
    { year: '2025-Q2', title: 'First Major Client', description: 'Successfully delivered our first enterprise-level project' },
    { year: '2025-Q3', title: 'Team Expansion', description: 'Growing team of talented professionals across multiple disciplines' },
    { year: '2025-Q4', title: 'Service Portfolio Launch', description: 'Launched comprehensive suite of technology services' },
    { year: '2026', title: 'Innovation Focus', description: 'Planned expansion into AI and emerging technologies' },
    { year: 'Future', title: 'Global Vision', description: 'Aiming to serve clients worldwide with cutting-edge solutions' }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-marvel-purple-600 via-marvel-pink-500 to-marvel-blue-500 bg-clip-text text-transparent mb-6">
            About Marvel Technologys
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transforming businesses through innovative technology solutions since 2025. We are your trusted partner in digital transformation.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-12 mb-32">
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-marvel-purple-600 to-marvel-pink-600 bg-clip-text text-transparent mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Founded in 2025, Marvel Technologys began as a small team of passionate developers with a big vision: to help businesses harness the power of technology to achieve their goals. What started as a web development company is rapidly evolving into a comprehensive technology partner.
              </p>
              <p>
                We specialize in web development, mobile applications, digital marketing, IT consulting, and cloud services. Our growing team of expert professionals is dedicated to delivering innovative solutions that drive real business results.
              </p>
              <p>
                We believe in building long-term partnerships with our clients, understanding their unique challenges, and providing tailored solutions that not only meet their current needs but also position them for future success.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-marvel-purple-100 to-marvel-pink-100 dark:from-marvel-purple-900 dark:to-marvel-pink-900 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our office</h3>
              <p className="text-gray-600 dark:text-gray-300">Modern workspace fostering innovation and collaboration</p>
            </div>
          </div>
        </div>

        {/* Vision, Mission, Goals */}
        <div className="bg-gray-50 dark:bg-gray-800 py-20 -mx-6 px-6 mb-32">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl text-center shadow-lg">
              <Eye className="w-12 h-12 text-marvel-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold bg-gradient-to-r from-marvel-purple-600 to-marvel-pink-600 bg-clip-text text-transparent mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To be the leading technology partner that empowers businesses to thrive in the digital age through innovative, scalable, and sustainable solutions.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl text-center shadow-lg">
              <Target className="w-12 h-12 text-marvel-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold bg-gradient-to-r from-marvel-pink-600 to-marvel-blue-600 bg-clip-text text-transparent mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To deliver exceptional technology solutions that drive business growth, enhance user experiences, and create lasting value for our clients and their customers.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl text-center shadow-lg">
              <Flag className="w-12 h-12 text-marvel-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold bg-gradient-to-r from-marvel-blue-600 to-marvel-purple-600 bg-clip-text text-transparent mb-4">Our Goals</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To continuously innovate, expand our expertise, and build long-term partnerships while maintaining the highest standards of quality and customer satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section - Hidden for now, will be used later when required
        <div className="mb-32">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-marvel-purple-600 via-marvel-pink-500 to-marvel-blue-500 bg-clip-text text-transparent mb-4">Meet Our Team</h3>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Our experienced team of professionals is dedicated to delivering excellence in every project
            </p>
          </div>
          
          <div className="flex justify-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <img src="/founder.jpg" alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{member.name}</h4>
                <p className="text-marvel-purple-600 dark:text-marvel-purple-400 font-medium mb-3">{member.position}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
        */}

        {/* Journey Timeline */}
        <div className="bg-gray-50 dark:bg-gray-800 py-20 -mx-6 px-6 mb-32">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-marvel-purple-600 via-marvel-pink-500 to-marvel-blue-500 bg-clip-text text-transparent mb-4">Our Journey</h3>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Key milestones in our growth and evolution as a technology company
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timeline.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-marvel-purple-50 to-marvel-pink-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl">
                <div className="text-2xl font-bold text-marvel-purple-600 dark:text-marvel-purple-400 mb-2">{item.year}</div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-marvel-purple-100 to-marvel-pink-100 dark:from-marvel-purple-900 dark:to-marvel-pink-900 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-marvel-purple-600 dark:text-marvel-purple-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;