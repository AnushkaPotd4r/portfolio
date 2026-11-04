export interface PersonalInfo {
  name: string;
  fullName: string;
  firstName: string;
  lastName: string;
  title: string;
  titles: string[];
  education: string;
  branch: string;
  college: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  tagline: string;
  careerObjective: string;
  statusBadge: string;
  photoUrl: string;
  resumeUrl: string;
  cgpa: string;
  graduationYear: string;
  hscYear: string;
  hscPercentage: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: string[];
}

export interface ProjectFeature {
  title: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  fullTitle: string;
  category: string;
  highlightBadge: string;
  status?: string;
  isWorkInProgress?: boolean;
  description: string;
  detailedOverview: string;
  keyFeatures: string[];
  technologies: string[];
  githubUrl: string | null;
  liveDemoUrl?: string | null;
  accentGradient: string;
}

export interface LearningJourneyItem {
  id: string;
  title: string;
  period: string;
  role: string;
  description: string;
  keyHighlights: string[];
  tags: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  date: string;
  type: 'award' | 'certification';
  badge: string;
  description: string;
  skillsOrImpact: string[];
  featured?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  timeline: string;
  score: string;
  scoreLabel: string;
  highlights: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Anushka Potdar',
  fullName: 'Anushka Amol Potdar',
  firstName: 'Anushka',
  lastName: 'Potdar',
  title: 'Aspiring AI/ML Engineer | AI Innovator | Technology Enthusiast',
  titles: [
    'AI/ML Engineer',
    'AI Innovator',
    'Technology Enthusiast',
  ],
  education: 'Third-Year B.Tech Engineering Student',
  branch: 'Artificial Intelligence and Machine Learning',
  college: 'Dr. D. Y. Patil College of Engineering and Technology, Kolhapur',
  location: 'Maharashtra, India',
  email: 'potdaranushka24@gmail.com',
  phone: '+91 8857079659',
  linkedin: 'https://www.linkedin.com/in/anushka-potdar-2476a2357/',
  github: 'https://github.com/AnushkaPotd4r',
  tagline: 'Building Intelligent Solutions. Creating Real-World Impact.',
  careerObjective:
    'To develop intelligent, scalable and impactful AI-powered solutions using Artificial Intelligence, Machine Learning and modern technologies.',
  statusBadge: 'Open for AI/ML Internships',
  photoUrl: '/assets/anushka.jpg',
  resumeUrl: '/assets/resume.pdf',
  cgpa: '8.17/10',
  graduationYear: '2028',
  hscYear: '2024',
  hscPercentage: '63.17%',
};

export const ABOUT_CONTENT = {
  heading: "Behind the Code, There's a Vision.",
  paragraphs: [
    'I am Anushka Potdar, a third-year Artificial Intelligence and Machine Learning engineering student with a strong foundation in Python, Java, Machine Learning and Deep Learning.',
    'I enjoy developing intelligent applications that address real-world challenges. My experience includes building AI-powered agricultural solutions and machine learning-based cybersecurity applications.',
    'I am continuously exploring emerging technologies, improving my technical skills and looking for opportunities to contribute to innovative engineering projects.',
  ],
  pillars: [
    {
      title: 'AIML Engineering Student',
      subtitle: 'Class of 2028 • Dr. D. Y. Patil College of Engineering and Technology',
      description:
        'Building a rigorous technical foundation in algorithmic problem-solving, mathematics for ML, and core computer science.',
    },
    {
      title: 'AI/ML Enthusiast',
      subtitle: 'Neural Networks & Intelligent Systems',
      description:
        'Deeply engaged with modern deep learning pipelines, generative AI models, and next-generation autonomous workflows.',
    },
    {
      title: 'Practical Project Developer',
      subtitle: 'Translating Theory to Real Impact',
      description:
        'Architecting functional real-world applications including KrishiMitra AI (offline multilingual platform) and CyberShieldAI (network intrusion detection).',
    },
    {
      title: 'Continuous Learner',
      subtitle: 'Curiosity-Driven Engineering',
      description:
        'Constantly upskilling across modern frameworks, edge computing, automation, and collaborative developer ecosystems.',
    },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    name: 'Programming Languages',
    description: 'Foundational syntax and computational core',
    skills: ['Python', 'Java', 'SQL'],
  },
  {
    id: 'aiml',
    name: 'AI and Machine Learning',
    description: 'Predictive modeling, deep networks and intelligence architectures',
    skills: [
      'Artificial Intelligence',
      'Machine Learning',
      'Deep Learning',
      'Supervised Learning',
      'Unsupervised Learning',
      'Generative AI',
    ],
  },
  {
    id: 'libraries',
    name: 'Python Libraries',
    description: 'Mathematical, data science and tensor frameworks',
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'TensorFlow'],
  },
  {
    id: 'backend-web',
    name: 'Backend and Web Technologies',
    description: 'API development, web presentation and service layers',
    skills: ['Flask', 'FastAPI', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'database-core',
    name: 'Database and Core Concepts',
    description: 'Relational data management and foundational CS disciplines',
    skills: [
      'MySQL',
      'DBMS',
      'Object-Oriented Programming',
      'Data Structures and Algorithms (Java)',
    ],
  },
  {
    id: 'tools-technologies',
    name: 'Tools and Technologies',
    description: 'Containerization, version control and development toolchains',
    skills: [
      'Docker',
      'Cloud Computing',
      'Git',
      'GitHub',
      'VS Code',
      'Jupyter Notebook',
      'Google Colab',
      'Power BI',
      'n8n Automation',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'krishimitra-ai',
    title: 'KrishiMitra AI',
    fullTitle: 'KrishiMitra AI – Offline Multilingual Intelligent Agriculture Platform',
    category: 'Agricultural AI & Edge Intelligence',
    highlightBadge: 'OFFLINE MULTILINGUAL AI',
    status: 'Featured Innovation',
    isWorkInProgress: false,
    description:
      'KrishiMitra AI is an offline-first multilingual AI-powered agriculture platform designed to provide farmers with intelligent agricultural guidance and food waste management support.',
    detailedOverview:
      'Engineered specifically to solve connectivity limitations in rural agricultural belts, KrishiMitra AI operates directly on low-resource devices without constant internet dependence. It couples localized voice intelligence with vision-based crop diagnosis, localized multilingual text-to-speech, and decentralized edge synchronization.',
    keyFeatures: [
      '16 AI-powered features across six functional layers',
      'Offline AI capabilities',
      'Multilingual voice assistance',
      'Agricultural guidance',
      'Food waste management',
      'Offline-first architecture',
      'Centralized Farmer Brain architecture',
      'Data synchronization and offline caching',
    ],
    technologies: [
      'Python',
      'Generative AI',
      'LLM',
      'Qwen 2.5 (0.5B)',
      'TensorFlow Lite',
      'Vosk',
      'Piper TTS',
      'Tesseract OCR',
      'Gemini API',
      'Firebase Firestore',
      'Room Database',
    ],
    githubUrl: 'https://github.com/AnushkaPotd4r/Krishimitra_AI',
    liveDemoUrl: null,
    accentGradient: 'from-blue-600 via-sky-500 to-indigo-600',
  },
  {
    id: 'cybershield-ai',
    title: 'CyberShieldAI',
    fullTitle: 'CyberShieldAI – ML-Based Network Intrusion Detection System',
    category: 'Cybersecurity & Machine Learning',
    highlightBadge: 'AI-POWERED CYBERSECURITY',
    status: 'WORK IN PROGRESS',
    isWorkInProgress: true,
    description:
      'CyberShieldAI is a machine learning-based cybersecurity system designed to analyze network traffic and identify potentially malicious activity, including DDoS attacks.',
    detailedOverview:
      'CyberShieldAI focuses on rapid classification of real-time network packets to detect anomalous behavioral signatures and distributed denial-of-service attempts. Utilizing the benchmark CIC-IDS-2017 dataset, the system implements rigorous feature engineering, variance thresholding, and ensemble classifiers to distinguish benign communications from malicious intrusions.',
    keyFeatures: [
      'Network traffic analysis',
      'CIC-IDS-2017 dataset',
      'Data preprocessing',
      'Feature analysis',
      'Machine learning classification',
      'BENIGN and DDoS traffic detection',
      'Prediction probability visualization',
      'Trained model integration',
    ],
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Matplotlib',
      'Machine Learning',
      'Joblib',
    ],
    githubUrl: 'https://github.com/AnushkaPotd4r',
    liveDemoUrl: null,
    accentGradient: 'from-blue-700 via-indigo-600 to-sky-500',
  },
];

export const LEARNING_JOURNEY: LearningJourneyItem[] = [
  {
    id: 'ml-intrusion-systems',
    title: 'Machine Learning & Network Security Systems',
    period: 'Current • Active Project Work',
    role: 'CyberShieldAI Architect',
    description:
      'Building and integrating machine learning models for network anomaly detection, feature selection on large-scale telemetry (CIC-IDS-2017), and model serialization.',
    keyHighlights: [
      'Trained classifiers for high-confidence benign vs. DDoS categorization',
      'Optimized feature extraction pipelines using Scikit-learn and Joblib',
      'Visualized classification probability distributions for interpretable telemetry',
    ],
    tags: ['Machine Learning', 'Network Security', 'Python', 'Scikit-learn'],
  },
  {
    id: 'offline-multilingual-ai',
    title: 'Practical AI/ML Project Development: KrishiMitra AI',
    period: '2025 – Present',
    role: 'Core Systems Developer',
    description:
      'Architected end-to-end edge-compatible AI workflows combining compact language models (Qwen 2.5), local speech recognition (Vosk), and offline vision inference.',
    keyHighlights: [
      'Designed a centralized Farmer Brain architecture coordinating 16 distinct sub-capabilities',
      'Integrated on-device speech processing with Piper TTS and Vosk offline models',
      'Constructed dual-tier caching using Room Database and cloud Firestore sync',
    ],
    tags: ['Edge AI', 'Offline Architectures', 'LLM', 'TensorFlow Lite'],
  },
  {
    id: 'backend-apis',
    title: 'Python-Based Services & Backend APIs',
    period: '2024 – 2025',
    role: 'Backend & Integration Engineering',
    description:
      'Working with Flask and FastAPI to package machine learning inference routines into robust RESTful endpoints with validation and error telemetry.',
    keyHighlights: [
      'Structured modular endpoint controllers for prediction pipelines',
      'Integrated middleware for performance tracking and request logging',
      'Employed Dockerized containers for reproducible local environments',
    ],
    tags: ['Flask', 'FastAPI', 'REST APIs', 'Docker'],
  },
  {
    id: 'algorithmic-foundations',
    title: 'Algorithmic Mastery & Data Structures',
    period: '2023 – 2024',
    role: 'Foundational Computer Science',
    description:
      'Mastered Data Structures and Algorithms primarily in Java, sharpening algorithmic efficiency, computational complexity analysis, and problem-solving speed.',
    keyHighlights: [
      'Implemented custom trees, graphs, sorting mechanisms, and dynamic programming algorithms',
      'Relational database querying and normalization with MySQL and DBMS theory',
      'Object-Oriented Design patterns applied across engineering labs',
    ],
    tags: ['Java DSA', 'MySQL', 'DBMS', 'OOP'],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'ieee-techforgood',
    title: '3rd Place – Most Innovative & Creative Project Award',
    event: 'IEEE TechForGood',
    date: '1 December 2025',
    type: 'award',
    badge: '🏆 3rd Place Award Winner',
    description:
      'Awarded 3rd place at the prestigious IEEE TechForGood competition for exceptional technical innovation, creativity, and impactful engineering addressing real-world challenges.',
    skillsOrImpact: [
      'Recognized for exceptional engineering novelty',
      'Evaluated by academic & industry jury panels',
      'Presented practical AI solution targeting social impact',
    ],
    featured: true,
  },
  {
    id: 'azure-fundamentals',
    title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    event: 'Microsoft Certification',
    date: 'Certified',
    type: 'certification',
    badge: 'Microsoft Certified',
    description:
      'Validated foundational understanding of cloud services, Azure architecture, workloads, security, privacy, compliance, and cloud pricing models.',
    skillsOrImpact: [
      'Cloud Architecture & Core Services',
      'Azure Security & Governance',
      'Cloud Scalability & Reliability Principles',
    ],
    featured: false,
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: 'btech-aiml',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Artificial Intelligence and Machine Learning',
    institution: 'Dr. D. Y. Patil College of Engineering and Technology',
    location: 'Kolhapur, Maharashtra, India',
    timeline: '2024 – 2028 (Third-Year Student)',
    score: '8.17 / 10',
    scoreLabel: 'Cumulative CGPA',
    highlights: [
      'Specialized coursework in AI/ML, Deep Learning, and Advanced Data Structures',
      'Hands-on lab work in Python, Java, SQL, and Machine Learning workflows',
      'Active participant in competitive hackathons and technical symposiums',
    ],
  },
  {
    id: 'hsc-12th',
    degree: 'Higher Secondary Education (12th Grade)',
    field: 'Science Stream (Physics, Chemistry, Mathematics)',
    institution: 'Maharashtra State Board',
    location: 'Maharashtra, India',
    timeline: 'Year of Completion: 2024',
    score: '63.17%',
    scoreLabel: 'Final Percentage',
    highlights: [
      'Strong quantitative grounding in higher mathematics and physics',
      'Developed early passion for computer science and logical modeling',
    ],
  },
];

export const FAQ_KNOWLEDGE_BASE = [
  {
    question: 'Who is Anushka Potdar?',
    shortAnswer:
      'Anushka Amol Potdar is an aspiring AI/ML Engineer and third-year B.Tech student in Artificial Intelligence and Machine Learning at Dr. D. Y. Patil College of Engineering and Technology, Kolhapur (CGPA: 8.17/10). She focuses on building intelligent, scalable solutions for real-world impact.',
    category: 'General',
  },
  {
    question: 'What are her technical skills?',
    shortAnswer:
      'Her skills include Python, Java, SQL; Machine Learning, Deep Learning, Generative AI; libraries like Scikit-learn, TensorFlow, NumPy, Pandas, Matplotlib, Seaborn; backends like Flask and FastAPI; MySQL, DBMS, OOP, DSA in Java; and tools like Docker, Git, VS Code, Google Colab, and Power BI.',
    category: 'Skills',
  },
  {
    question: 'What is KrishiMitra AI?',
    shortAnswer:
      'KrishiMitra AI is an offline-first multilingual intelligent agriculture platform featuring 16 AI capabilities across six layers. It provides farmers with crop guidance, voice assistance, and food waste management using Qwen 2.5 LLM, TensorFlow Lite, Vosk speech recognition, and Piper TTS without requiring constant internet.',
    category: 'Projects',
  },
  {
    question: 'What is CyberShieldAI?',
    shortAnswer:
      'CyberShieldAI is a machine learning-based network intrusion detection system (currently Work in Progress). It analyzes real-time network traffic from the CIC-IDS-2017 dataset to classify benign vs. DDoS traffic using Scikit-learn, Pandas, and Joblib model serialization.',
    category: 'Projects',
  },
  {
    question: 'What technologies does she use?',
    shortAnswer:
      'She works primarily with Python, Java, TensorFlow, Scikit-learn, Pandas, NumPy, FastAPI, Flask, Docker, MySQL, Vosk, Piper TTS, and modern cloud/ML tooling.',
    category: 'Technologies',
  },
  {
    question: 'What is her educational background?',
    shortAnswer:
      'She is pursuing her B.Tech in Artificial Intelligence and Machine Learning at Dr. D. Y. Patil College of Engineering and Technology, Kolhapur (Class of 2028) with an 8.17/10 CGPA. She completed her 12th (HSC) in 2024 with 63.17%.',
    category: 'Education',
  },
  {
    question: 'What certifications and awards does she have?',
    shortAnswer:
      'She won 3rd Place – Most Innovative & Creative Project Award at IEEE TechForGood (1 December 2025) and holds the Microsoft Certified: Azure Fundamentals (AZ-900) certification.',
    category: 'Achievements',
  },
  {
    question: 'How can someone contact her?',
    shortAnswer:
      'You can reach Anushka directly via email at potdaranushka24@gmail.com, call +91 8857079659, or connect with her on LinkedIn (anushka-potdar-2476a2357) and GitHub (AnushkaPotd4r).',
    category: 'Contact',
  },
];
