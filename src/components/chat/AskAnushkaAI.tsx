'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bot,
  X,
  Send,
  Sparkles,
  MessageCircle,
  HelpCircle,
  ArrowRight,
  ExternalLink,
  ChevronDown,
} from 'lucide-react';
import { FAQ_KNOWLEDGE_BASE, PERSONAL_INFO } from '@/data/portfolioData';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  suggestions?: string[];
  links?: { label: string; href: string }[];
}

export function AskAnushkaAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: `Hello! I'm Ask Anushka AI, an interactive assistant built to help recruiters and engineers explore Anushka's background, AI/ML projects, technical skills, and achievements. How can I help you today?`,
      suggestions: [
        'Who is Anushka Potdar?',
        'What are her technical skills?',
        'What is KrishiMitra AI?',
        'What is CyberShieldAI?',
        'What is her educational background?',
        'What certifications does she have?',
        'How can someone contact her?',
      ],
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const findAnswer = (query: string): { text: string; links?: { label: string; href: string }[] } => {
    const q = query.toLowerCase().trim();

    // 1. Who is Anushka
    if (q.includes('who') || q.includes('about') || q.includes('profile') || q.includes('anushka')) {
      return {
        text: `${PERSONAL_INFO.fullName} is an aspiring AI/ML Engineer and third-year B.Tech student in Artificial Intelligence and Machine Learning at Dr. D. Y. Patil College of Engineering and Technology, Kolhapur (CGPA: ${PERSONAL_INFO.cgpa}). She is passionate about architecting intelligent edge solutions, deep learning models, and real-world technology that makes a difference.`,
        links: [
          { label: 'View About Section', href: '#about' },
          { label: 'View Resume', href: '#resume' },
        ],
      };
    }

    // 2. Technical Skills
    if (
      q.includes('skill') ||
      q.includes('technolog') ||
      q.includes('stack') ||
      q.includes('python') ||
      q.includes('java') ||
      q.includes('language') ||
      q.includes('framework')
    ) {
      return {
        text: `Anushka's verified technical skills include:\n• Languages: Python, Java, SQL\n• AI & ML: Machine Learning, Deep Learning, Supervised & Unsupervised Learning, Generative AI\n• Python Libraries: NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, TensorFlow\n• Backend & Web: Flask, FastAPI, HTML, CSS, JavaScript\n• Database & Core: MySQL, DBMS, Object-Oriented Programming, DSA (Java)\n• Tooling: Docker, Git, GitHub, VS Code, Google Colab, Power BI, n8n Automation.`,
        links: [{ label: 'Explore Skills Dashboard', href: '#skills' }],
      };
    }

    // 3. KrishiMitra AI
    if (q.includes('krishi') || q.includes('mitra') || q.includes('agri') || q.includes('farm')) {
      return {
        text: `KrishiMitra AI is an offline-first multilingual AI-powered agriculture platform featuring 16 AI capabilities across six layers. Built specifically for low-connectivity environments, it integrates Qwen 2.5 (0.5B) LLM, Vosk offline voice recognition, Piper TTS for regional spoken output, Tesseract OCR for crop diagnosis, and dual caching via Room Database and Firebase Firestore.`,
        links: [
          { label: 'View KrishiMitra Card', href: '#projects' },
          { label: 'GitHub Repository', href: 'https://github.com/AnushkaPotd4r/Krishimitra_AI' },
        ],
      };
    }

    // 4. CyberShieldAI
    if (
      q.includes('cybershield') ||
      q.includes('cyber') ||
      q.includes('shield') ||
      q.includes('intrusion') ||
      q.includes('ddos') ||
      q.includes('security')
    ) {
      return {
        text: `CyberShieldAI is a machine learning-based network intrusion detection system (currently Work in Progress). It analyzes packet telemetry from the benchmark CIC-IDS-2017 dataset to classify benign traffic vs. malicious DDoS attacks using Scikit-learn, NumPy, Pandas, Matplotlib, and Joblib serialized models with prediction probability visualizers.`,
        links: [{ label: 'View CyberShieldAI Card', href: '#projects' }],
      };
    }

    // 5. Education
    if (
      q.includes('education') ||
      q.includes('college') ||
      q.includes('study') ||
      q.includes('cgpa') ||
      q.includes('degree') ||
      q.includes('dypcet') ||
      q.includes('school') ||
      q.includes('12th')
    ) {
      return {
        text: `Anushka is currently in her Third Year pursuing a Bachelor of Technology (B.Tech) in Artificial Intelligence and Machine Learning at Dr. D. Y. Patil College of Engineering and Technology, Kolhapur (Class of 2028), maintaining a stellar CGPA of 8.17/10. She completed her Higher Secondary Education (12th Grade) in 2024 with 63.17%.`,
        links: [{ label: 'View Education Section', href: '#education' }],
      };
    }

    // 6. Certifications & Awards
    if (
      q.includes('certif') ||
      q.includes('award') ||
      q.includes('ieee') ||
      q.includes('azure') ||
      q.includes('achievement') ||
      q.includes('win')
    ) {
      return {
        text: `Key Milestones & Recognition:\n🏆 3rd Place – Most Innovative & Creative Project Award at IEEE TechForGood (1 December 2025)\n☁️ Microsoft Certified: Azure Fundamentals (AZ-900) - validating cloud architecture, workloads, security, and governance principles.`,
        links: [{ label: 'View Achievements Section', href: '#achievements' }],
      };
    }

    // 7. Contact
    if (
      q.includes('contact') ||
      q.includes('email') ||
      q.includes('phone') ||
      q.includes('call') ||
      q.includes('reach') ||
      q.includes('hire') ||
      q.includes('intern')
    ) {
      return {
        text: `You can reach Anushka directly through:\n• Email: potdaranushka24@gmail.com\n• Phone: +91 8857079659\n• LinkedIn: linkedin.com/in/anushka-potdar-2476a2357/\n• GitHub: github.com/AnushkaPotd4r\n\nShe is actively open for AI/ML engineering internship opportunities!`,
        links: [{ label: 'Go to Contact Form', href: '#contact' }],
      };
    }

    // 8. Resume
    if (q.includes('resume') || q.includes('cv') || q.includes('download')) {
      return {
        text: `Anushka's verified academic resume (UpdatedResume(1).pdf) is available for direct download and live preview in the Resume section.`,
        links: [{ label: 'Download Resume', href: PERSONAL_INFO.resumeUrl }],
      };
    }

    // Default Fallback
    return {
      text: `I can help you explore Anushka's profile! Try asking about her projects (KrishiMitra AI or CyberShieldAI), her technical skills (Python, ML, Deep Learning), her education at DYPCET, her IEEE TechForGood award, or how to contact her.`,
      links: [
        { label: 'View Projects', href: '#projects' },
        { label: 'Contact Anushka', href: '#contact' },
      ],
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputText('');

    // Instant simulated intelligence reply
    setTimeout(() => {
      const response = findAnswer(query);
      const aiReply: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: response.text,
        links: response.links,
      };
      setMessages((prev) => [...prev, aiReply]);
    }, 250);
  };

  return (
    <aside aria-label="AI Portfolio Assistant" className="fixed bottom-6 right-6 z-40">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white shadow-[0_10px_25px_rgba(37,99,235,0.35)] hover:shadow-[0_14px_30px_rgba(37,99,235,0.45)] cursor-pointer"
          aria-label="Open Ask Anushka AI assistant"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
          </span>
          <Bot className="w-5 h-5 text-white" />
          <span className="text-xs sm:text-sm font-bold tracking-tight">Ask Anushka AI</span>
        </motion.button>
      )}

      {/* Chat Window Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-[92vw] sm:w-[400px] h-[520px] max-h-[85vh] rounded-3xl bg-white border border-blue-200/90 shadow-[0_20px_60px_rgba(37,99,235,0.2)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold leading-tight">Ask Anushka AI</h3>
                  <div className="flex items-center gap-1.5 text-[11px] text-blue-100">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Recruiter Assistant • Online</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Prompts Carousel Bar */}
            <div className="p-2.5 bg-blue-50/60 border-b border-blue-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-wider pl-1 shrink-0">
                Quick:
              </span>
              {[
                'Who is Anushka?',
                'Skills',
                'KrishiMitra AI',
                'CyberShieldAI',
                'Education',
                'Contact',
              ].map((pill) => (
                <button
                  key={pill}
                  onClick={() => handleSendMessage(pill)}
                  className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white hover:bg-blue-100/80 text-slate-700 hover:text-[#2563EB] border border-blue-100 shadow-2xs whitespace-nowrap transition-colors cursor-pointer shrink-0"
                >
                  {pill}
                </button>
              ))}
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 text-xs sm:text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#2563EB] text-white rounded-br-xs shadow-xs'
                        : 'bg-white text-slate-800 border border-slate-200/80 rounded-bl-xs shadow-2xs whitespace-pre-line'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* Suggestion Chips */}
                  {msg.suggestions && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {msg.suggestions.map((sug, i) => (
                        <button
                          key={i}
                          onClick={() => handleSendMessage(sug)}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white hover:bg-blue-50 text-[#2563EB] border border-blue-200 shadow-2xs transition-colors text-left cursor-pointer"
                        >
                          {sug}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Deep Links */}
                  {msg.links && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {msg.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.href}
                          onClick={() => {
                            if (link.href.startsWith('#')) {
                              const el = document.getElementById(link.href.substring(1));
                              if (el) {
                                el.scrollIntoView({ behavior: 'smooth' });
                              }
                            }
                          }}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-[#2563EB] hover:text-[#1D4ED8] bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-md border border-blue-200 transition-colors"
                        >
                          <span>{link.label}</span>
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about skills, projects, contact..."
                className="flex-1 px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 text-[#14213D] placeholder:text-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="p-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-40 text-white transition-colors cursor-pointer shrink-0"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
}
