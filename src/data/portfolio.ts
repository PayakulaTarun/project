import { Project, SkillCategory, TimelineEvent } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Enterprise Software Solutions',
    description: 'Comprehensive enterprise-grade software development including ERP systems, CRM platforms, and business process automation tools designed for scalability and performance.',
    techStack: ['React', 'Node.js', 'Python', 'Java', '.NET', 'Microservices'],
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
    description: 'Advanced AI solutions including natural language processing, computer vision, predictive analytics, and intelligent automation systems for business transformation.',
    techStack: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Azure AI', 'AWS ML'],
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
    title: 'Digital Transformation Consulting',
    description: 'Strategic IT consulting, digital transformation roadmaps, system modernization, and technology advisory services to accelerate business growth.',
    techStack: ['Strategy', 'Architecture', 'Cloud Migration', 'Process Optimization'],
    githubUrl: '#',
    demoUrl: '#',
    featured: true
  },
  {
    id: '9',
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive cybersecurity services including security audits, penetration testing, compliance management, and threat detection systems.',
    techStack: ['Security Frameworks', 'Penetration Testing', 'Compliance', 'Monitoring'],
    githubUrl: '#',
    demoUrl: '#',
    featured: true
  },
  {
    id: '10',
    title: 'Data Analytics & Business Intelligence',
    description: 'Advanced data analytics platforms, business intelligence dashboards, and data visualization solutions for informed decision-making.',
    techStack: ['Power BI', 'Tableau', 'Python', 'SQL', 'Apache Spark'],
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
    year: '2025',
    title: 'Company Founded',
    description: 'Marvel Technologys was founded with a mission to transform businesses through innovative technology solutions.',
    icon: 'rocket'
  },
  {
    year: '2025-Q2',
    title: 'First Major Client',
    description: 'Successfully delivered our first enterprise-level project and established core service offerings.',
    icon: 'trophy'
  },
  {
    year: '2025-Q3',
    title: 'Team Expansion',
    description: 'Growing team of talented professionals across web development, mobile apps, and digital marketing.',
    icon: 'building'
  },
  {
    year: '2025-Q4',
    title: 'Service Portfolio Launch',
    description: 'Launched comprehensive suite of technology services including AI solutions and cloud services.',
    icon: 'star'
  },
  {
    year: '2026',
    title: 'Innovation Focus',
    description: 'Planned expansion into advanced AI technologies and emerging tech solutions.',
    icon: 'brain'
  },
  {
    year: 'Future',
    title: 'Global Vision',
    description: 'Aiming to serve clients worldwide with cutting-edge technology solutions and digital transformation services.',
    icon: 'globe'
  }
];