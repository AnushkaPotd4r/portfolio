'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Send,
  CheckCircle,
  Copy,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '@/components/ui/Icons';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlowCard } from '@/components/ui/GlowCard';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const [isCopied, setIsCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email.';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please include a short message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Direct, transparent email client dispatch without fake backend claims
    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hello Anushka,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;

    setStatusMessage(
      'Your default email app has been opened with your pre-filled message ready to send.'
    );
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-slate-950/40">
      {/* Background glow effects */}
      <div
        className="absolute bottom-10 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-10 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get in Touch"
          title="Let's Connect"
          subtitle="I'm always interested in connecting with people who share a passion for technology, innovation, and artificial intelligence."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <GlowCard glowColor="cyan" className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono tracking-wider uppercase text-slate-400">
                      Direct Email
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold text-white break-all mt-0.5">
                      {PERSONAL_INFO.email}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Available for internship and engineering inquiries
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/[0.08] transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address to clipboard"
                >
                  {isCopied ? (
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {isCopied && (
                <p className="text-xs text-emerald-400 mt-3 font-mono">
                  ✓ Email copied to clipboard!
                </p>
              )}
            </GlowCard>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              aria-label="Visit Anushka Potdar's LinkedIn profile"
            >
              <GlowCard
                glowColor="blue"
                className="p-6 transition-all group-hover:border-blue-500/40"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                      <LinkedinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono tracking-wider uppercase text-slate-400">
                        Professional Network
                      </span>
                      <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-blue-300 transition-colors mt-0.5">
                        LinkedIn Profile
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Connect with me professionally
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors shrink-0" />
                </div>
              </GlowCard>
            </a>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              aria-label="Visit Anushka Potdar's GitHub profile"
            >
              <GlowCard
                glowColor="purple"
                className="p-6 transition-all group-hover:border-purple-500/40"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono tracking-wider uppercase text-slate-400">
                        Source Code & Repositories
                      </span>
                      <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-purple-300 transition-colors mt-0.5">
                        GitHub Profile
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Explore open-source repositories
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-purple-400 transition-colors shrink-0" />
                </div>
              </GlowCard>
            </a>
          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-7">
            <GlowCard glowColor="purple" className="p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">
                  Send a Direct Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g., Alex Sharma"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? 'border-red-500/60 focus:ring-red-400'
                        : 'border-white/[0.1] focus:border-purple-500/50 focus:ring-purple-400/30'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400 font-medium">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="e.g., alex@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-red-500/60 focus:ring-red-400'
                        : 'border-white/[0.1] focus:border-purple-500/50 focus:ring-purple-400/30'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400 font-medium">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Hello Anushka, I'd like to discuss an opportunity..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all resize-y ${
                      errors.message
                        ? 'border-red-500/60 focus:ring-red-400'
                        : 'border-white/[0.1] focus:border-purple-500/50 focus:ring-purple-400/30'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-400 font-medium">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_28px_rgba(56,189,248,0.5)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message via Email</span>
                  </button>
                </div>

                <div className="rounded-xl p-3 bg-slate-950/60 border border-white/[0.05] text-[11px] text-slate-400 leading-relaxed">
                  <span className="text-purple-300 font-medium">Note:</span>{' '}
                  This form directly formats your inquiry into an email addressed to{' '}
                  <span className="text-cyan-300 font-mono">potdaranushka24@gmail.com</span>, ensuring reliable, private delivery through your email client.
                </div>

                {statusMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-start gap-2"
                  >
                    <Sparkles className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{statusMessage}</span>
                  </motion.div>
                )}
              </form>
            </GlowCard>
          </div>
        </div>
      </div>
    </section>
  );
}
