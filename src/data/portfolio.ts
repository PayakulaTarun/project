import { Project, SkillCategory, TimelineEvent } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Custom Software Development',
    description: 'End-to-end custom software solutions tailored to your business needs, from web applications to enterprise systems with modern technologies.',
    techStack: ['React', 'Node.js', 'Python', 'Java', '.NET'],
    githubUrl: '#',
    demoUrl: '#',
    featured: true
  },
  {
    id: '2',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android with intuitive user experiences and robust functionality.',
    techStack: ['Flutter', 'React Native', 'Swift', 'Kotlin'],
    githubUrl: '#',
    demoUrl: '#',
    featured: true
  },
  {
    id: '3',
    title: 'Web Development & Design',
    description: 'Responsive websites and web applications with modern UI/UX design, optimized for performance and user engagement.',
    techStack: ['React', 'Angular', 'Vue.js', 'HTML5', 'CSS3'],
    githubUrl: '#',
    demoUrl: '#',
    featured: true
  },
  {
    id: '4',
    title: 'AI & Machine Learning Solutions',
    description: 'Intelligent automation, predictive analytics, and AI-powered solutions to transform your business operations and decision-making.',
    techStack: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
    githubUrl: '#',
    demoUrl: '#',
    featured: true
  },
  {
    id: '5',
    title: 'Cloud Services & DevOps',
    description: 'Cloud migration, infrastructure management, CI/CD pipelines, and DevOps solutions for scalable and reliable applications.',
    techStack: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Jenkins'],
    githubUrl: '#',
    demoUrl: '#',
    featured: true
  },
  {
    id: '6',
    title: 'Database Design & Management',
    description: 'Database architecture, optimization, and management services ensuring data integrity, security, and high performance.',
    techStack: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
    githubUrl: '#',
    demoUrl: '#',
    featured: true
  },
  {
    id: '7',
    title: 'E-commerce Solutions',
    description: 'Complete e-commerce platforms with payment integration, inventory management, and customer relationship management systems.',
    techStack: ['Shopify', 'WooCommerce', 'Magento', 'React'],
    githubUrl: '#',
    demoUrl: '#',
    featured: true
  },
  {
    id: '8',
    title: 'IT Consulting & Support',
    description: 'Strategic IT consulting, system integration, technical support, and digital transformation guidance for businesses.',
    techStack: ['System Analysis', 'Architecture', 'Integration'],
    githubUrl: '#',
    demoUrl: '#',
    featured: true
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', level: 85, icon: 'code' },
      { name: 'TypeScript', level: 75, icon: 'code' },
      { name: 'Python', level: 80, icon: 'code' },
      { name: 'Java', level: 70, icon: 'coffee' },
      { name: 'C/C++', level: 65, icon: 'terminal' }
    ]
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 85, icon: 'component' },
      { name: 'Angular', level: 60, icon: 'component' },
      { name: 'Tailwind CSS', level: 90, icon: 'palette' },
      { name: 'Flutter', level: 70, icon: 'smartphone' }
    ]
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Node.js', level: 80, icon: 'server' },
      { name: 'MongoDB', level: 75, icon: 'database' },
      { name: 'Firebase', level: 85, icon: 'database' },
      { name: 'Express.js', level: 80, icon: 'server' }
    ]
  },
  {
    title: 'AI/ML & Tools',
    skills: [
      { name: 'TensorFlow', level: 65, icon: 'brain' },
      { name: 'Scikit-learn', level: 70, icon: 'brain' },
      { name: 'REST APIs', level: 85, icon: 'zap' },
      { name: 'Postman', level: 80, icon: 'zap' }
    ]
  }
];

export const timeline: TimelineEvent[] = [
  {
    year: '2023',
    title: 'Marvel Technologys Founded',
    description: 'Established Marvel Technologys with a vision to revolutionize business through AI and innovative technology solutions.',
    icon: 'rocket'
  },
  {
    year: '2024',
    title: 'AI Innovation Breakthrough',
    description: 'Launched our first suite of AI-powered solutions including advanced sentiment analysis and computer vision platforms.',
    icon: 'brain'
  },
  {
    year: '2024-Q4',
    title: 'Enterprise Expansion',
    description: 'Expanded into enterprise solutions with our flagship AI Tutor Platform and Smart Transportation systems.',
    icon: 'building'
  },
  {
    year: '2025-Present',
    title: 'Technology Leadership',
    description: 'Leading the industry with comprehensive full-stack solutions, mobile platforms, and next-generation AI implementations.',
    icon: 'code'
  },
  {
    year: 'Future',
    title: 'Global Innovation',
    description: 'Pioneering quantum computing integration, advanced data science solutions, and scalable AI products impacting millions worldwide.',
    icon: 'target'
  }
];