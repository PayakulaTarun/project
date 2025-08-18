import { Project, SkillCategory, TimelineEvent } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Enterprise AI Tutor Platform (Sahayak)',
    description: 'Revolutionary intelligent tutoring platform delivering personalized learning experiences through advanced AI algorithms and machine learning.',
    techStack: ['React', 'Node.js', 'MongoDB', 'AI/ML', 'Firebase'],
    githubUrl: '#',
    demoUrl: '#',
    featured: true
  },
  {
    id: '2',
    title: 'Smart Transportation AI Solution',
    description: 'Enterprise-grade AI-powered complaint management and optimization system with intelligent routing, predictive analytics, and automated resolution.',
    techStack: ['Python', 'TensorFlow', 'React', 'Flask', 'MongoDB'],
    githubUrl: '#',
    demoUrl: '#',
    featured: true
  },
  {
    id: '3',
    title: 'Agricultural AI Vision Platform',
    description: 'Advanced computer vision platform leveraging deep learning models for precision agriculture, disease detection, and crop optimization.',
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'React', 'Flask'],
    githubUrl: '#',
    demoUrl: '#',
    featured: true
  },
  {
    id: '4',
    title: 'Enterprise AI Chatbot Platform',
    description: 'Sophisticated conversational AI platform with advanced NLP capabilities, multi-language support, and enterprise-grade customer service automation.',
    techStack: ['React', 'Node.js', 'NLP APIs', 'Socket.io'],
    githubUrl: '#',
    demoUrl: '#',
    featured: true
  },
  {
    id: '5',
    title: 'Advanced Sentiment Analytics Suite',
    description: 'Real-time sentiment analysis platform with advanced emotional intelligence, brand monitoring, and predictive market insights.',
    techStack: ['React', 'Python', 'Scikit-learn', 'REST APIs'],
    githubUrl: '#',
    demoUrl: '#',
    featured: true
  },
  {
    id: '6',
    title: 'Enterprise Learning Management System',
    description: 'Comprehensive learning platform with adaptive assessments, real-time analytics, gamification, and enterprise-grade user management.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    githubUrl: '#',
    demoUrl: '#',
    featured: true
  },
  {
    id: '7',
    title: 'Marvel Mobile Solutions Suite',
    description: 'Cross-platform mobile application suite delivering AI-driven business solutions, EdTech innovations, and enterprise mobility.',
    techStack: ['Flutter', 'Node.js', 'MongoDB', 'Firebase'],
    githubUrl: '#',
    demoUrl: '#',
    featured: true
  },
  {
    id: '8',
    title: 'Marvel Technologies Corporate Platform',
    description: 'Modern corporate website showcasing our innovative solutions, expertise, and company journey with cutting-edge design and user experience.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
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
      { name: 'Git/GitHub', level: 85, icon: 'git-branch' },
      { name: 'Postman', level: 80, icon: 'zap' }
    ]
  }
];

export const timeline: TimelineEvent[] = [
  {
    year: '2023',
    title: 'Marvel Technologies Founded',
    description: 'Established Marvel Technologies with a vision to revolutionize business through AI and innovative technology solutions.',
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