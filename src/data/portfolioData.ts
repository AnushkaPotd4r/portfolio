export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  education: string;
  branch: string;
  college: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  tagline: string;
  statusBadge: string;
  photoUrl: string;
  resumeUrl: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  status: 'established' | 'exploring';
  badgeColor: 'blue' | 'purple' | 'cyan' | 'emerald';
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  liveDemoUrl?: string | null;
  githubUrl?: string | null;
  featuredTag?: string;
  accentColor: string;
}

export interface LearningTopic {
  id: string;
  title: string;
  description: string;
  badge: string;
  focusAreas: string[];
  gradient: string;
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
  { label: 'Learning', href: '#learning' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Anushka Potdar',
  firstName: 'Anushka',
  lastName: 'Potdar',
  title: 'Aspiring AI/ML Engineer',
  education: 'Third-Year B.Tech Engineering Student',
  branch: 'Artificial Intelligence and Machine Learning',
  college: 'Dr. D. Y. Patil College of Engineering and Technology',
  location: 'Kolhapur, Maharashtra, India',
  email: 'potdaranushka24@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anushka-potdar-2476a2357/',
  github: 'https://github.com/AnushkaPotd4r',
  tagline:
    'I\'m a third-year AIML engineering student passionate about programming, problem-solving, and exploring intelligent technologies to develop innovative solutions.',
  statusBadge: 'Exploring the Future of AI',
  photoUrl: '/images/anushka.jpg',
  resumeUrl: '/Anushka_Resume.pdf',
};

export const ABOUT_CONTENT = {
  heading: 'About Me',
  paragraphs: [
    "I'm Anushka Potdar, a third-year Artificial Intelligence and Machine Learning engineering student at Dr. D. Y. Patil College of Engineering and Technology, Kolhapur.",
    'I have learned Data Structures and Algorithms in Java and Python, along with SQL. I enjoy solving programming problems, strengthening my technical foundation, and exploring new technologies.',
    'Currently, I am learning and exploring Deep Learning, Generative AI, and Agentic AI to understand how intelligent systems can solve real-world problems.',
    'My goal is to become a skilled AI/ML Engineer, gain industry experience, and contribute to innovative technology solutions.',
  ],
  academicPillars: [
    {
      label: 'Institution',
      value: 'Dr. D. Y. Patil College of Eng. & Tech',
      detail: 'Kolhapur, Maharashtra',
    },
    {
      label: 'Specialization',
      value: 'B.Tech in Artificial Intelligence & Machine Learning',
      detail: 'Third Year (Class of 2026)',
    },
    {
      label: 'Core Focus',
      value: 'DSA (Java & Python), SQL & System Problem Solving',
      detail: 'Algorithmic foundation',
    },
    {
      label: 'Forward Direction',
      value: 'Deep Learning, Generative AI & Agentic Workflows',
      detail: 'Real-world intelligent systems',
    },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    name: 'Programming',
    status: 'established',
    badgeColor: 'blue',
    skills: ['Java', 'Python', 'C'],
  },
  {
    id: 'problem-solving',
    name: 'Problem Solving',
    status: 'established',
    badgeColor: 'cyan',
    skills: ['Data Structures and Algorithms', 'Logical Thinking'],
  },
  {
    id: 'database',
    name: 'Database',
    status: 'established',
    badgeColor: 'purple',
    skills: ['SQL'],
  },
  {
    id: 'web-dev',
    name: 'Web Development',
    status: 'established',
    badgeColor: 'blue',
    skills: ['HTML', 'CSS'],
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    status: 'established',
    badgeColor: 'cyan',
    skills: ['Power BI', 'Microsoft Excel'],
  },
  {
    id: 'currently-exploring',
    name: 'Currently Exploring',
    status: 'exploring',
    badgeColor: 'purple',
    skills: ['Deep Learning', 'Generative AI', 'Agentic AI'],
  },
];

// STRICT REQUIREMENT: Exactly Two Projects
export const PROJECTS: Project[] = [
  {
    id: 'realtime-connect',
    title: 'Realtime Connect',
    category: 'Real-Time Communication & Collaboration Platform',
    description:
      'A real-time communication and collaboration platform designed to support interactive communication and collaboration through modern web technologies.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'Socket.IO',
      'MongoDB',
      'WebRTC',
      'JWT Authentication',
    ],
    liveDemoUrl: 'https://realtime-connect-opal.vercel.app/',
    githubUrl: null, // Editable configuration value; not invented
    featuredTag: 'WebRTC & Socket.IO Platform',
    accentColor: 'from-blue-500/20 via-cyan-500/20 to-purple-500/20',
  },
  {
    id: 'krishimitra-ai',
    title: 'KrishiMitra AI',
    category: 'AI-Powered Agricultural Assistance Platform',
    description:
      'KrishiMitra AI is an intelligent agricultural assistance platform designed to help farmers with crop planning, agricultural guidance, soil health insights, freshness assessment, and multilingual assistance.',
    techStack: [
      'Python',
      'Artificial Intelligence',
      'Machine Learning',
      'Computer Vision',
      'Soil Health Telemetry',
      'Multilingual NLP',
      'Crop Analytics',
    ],
    liveDemoUrl: null, // Explicitly no fake live demo
    githubUrl: 'https://github.com/AnushkaPotd4r/Krishimitra_AI',
    featuredTag: 'AgriTech AI System',
    accentColor: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
  },
];

export const LEARNING_TOPICS: LearningTopic[] = [
  {
    id: 'deep-learning',
    title: 'Deep Learning',
    badge: 'Neural Architectures',
    description:
      'Exploring neural networks and deep learning techniques for intelligent applications.',
    focusAreas: [
      'Artificial Neural Networks (ANN)',
      'Convolutional Networks for Vision',
      'Optimization & Gradient Descent',
      'Feature Representation & Embeddings',
    ],
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'generative-ai',
    title: 'Generative AI',
    badge: 'Foundational Models',
    description:
      'Learning how generative models and large language models can support creative and intelligent applications.',
    focusAreas: [
      'Large Language Models (LLMs)',
      'Prompt Architecture & In-Context Learning',
      'Multimodal Reasoning',
      'Retrieval-Augmented Generation (RAG)',
    ],
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI',
    badge: 'Autonomous Systems',
    description:
      'Exploring AI agents, tool usage, and autonomous workflows for solving multi-step problems.',
    focusAreas: [
      'Autonomous Agent Architectures',
      'Tool Calling & Function Execution',
      'Multi-Agent Collaboration',
      'Task Decomposition & Planning',
    ],
    gradient: 'from-cyan-500 to-blue-600',
  },
];
