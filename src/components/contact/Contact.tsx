'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Send,
  CheckCircle,
  Copy,
  ExternalLink,
  MessageSquare,
  Sparkles,
  MapPin,
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '@/components/ui/Icons';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }>({});

  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [isPhoneCopied, setIsPhoneCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setIsEmailCopied(true);
      setTimeout(() => setIsEmailCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.phone);
      setIsPhoneCopied(true);
      setTimeout(() => setIsPhoneCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  const validate = () => {
    const newErrors: { name?: string; email?: string; subject?: string; message?: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please include a message.';
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
    const encodedSubject = encodeURIComponent(
      `[Portfolio] ${formData.subject} - from ${formData.name}`
    );
    const encodedBody = encodeURIComponent(
      `Hello Anushka,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n`
    );

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodedSubject}&body=${encodedBody}`;

    window.location.href = mailtoUrl;

    setStatusMessage(
      'Your default email app has been opened with your pre-filled message ready to send directly.'
    );
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-white">
      {/* Subtle blueprint grid */}
      <div className="absolute inset-0 bg-ai-grid opacity-50 pointer-events-none" />

      {/* Ambient background soft light */}
      <div
        className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-[160px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Get in Touch"
          title="Let's Build Something Intelligent Together."
          subtitle="Have an opportunity, an innovative idea or a project in mind? I'd love to connect and collaborate."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="rounded-2xl p-6 bg-[#F4F8FF] border border-blue-100/80 shadow-2xs hover:border-blue-300 transition-all">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-[#2563EB] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-400">
                      Professional Email
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="block text-sm sm:text-base font-bold text-[#14213D] hover:text-[#2563EB] break-all mt-0.5 transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Open for AI/ML engineering internships
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white hover:bg-blue-50 text-slate-600 hover:text-[#2563EB] border border-slate-200 transition-colors shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {isEmailCopied ? (
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {isEmailCopied && (
                <p className="text-xs text-emerald-600 mt-2 font-mono font-medium">
                  ✓ Email copied to clipboard!
                </p>
              )}
            </div>

            {/* Phone Card */}
            <div className="rounded-2xl p-6 bg-[#F4F8FF] border border-blue-100/80 shadow-2xs hover:border-blue-300 transition-all">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-[#2563EB] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-400">
                      Direct Phone
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="block text-sm sm:text-base font-bold text-[#14213D] hover:text-[#2563EB] mt-0.5 transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Direct phone &amp; WhatsApp communication
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-white hover:bg-blue-50 text-slate-600 hover:text-[#2563EB] border border-slate-200 transition-colors shrink-0 cursor-pointer"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number"
                >
                  {isPhoneCopied ? (
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {isPhoneCopied && (
                <p className="text-xs text-emerald-600 mt-2 font-mono font-medium">
                  ✓ Phone copied to clipboard!
                </p>
              )}
            </div>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl p-6 bg-[#F4F8FF] border border-blue-100/80 shadow-2xs hover:border-blue-300 transition-all group"
              aria-label="Visit Anushka Potdar's LinkedIn profile"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-[#2563EB] shrink-0">
                    <LinkedinIcon className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-400">
                      Professional Network
                    </span>
                    <h4 className="text-base font-bold text-[#14213D] group-hover:text-[#2563EB] transition-colors mt-0.5">
                      LinkedIn Profile
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Connect with me professionally
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#2563EB] transition-colors shrink-0" />
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl p-6 bg-[#F4F8FF] border border-blue-100/80 shadow-2xs hover:border-blue-300 transition-all group"
              aria-label="Visit Anushka Potdar's GitHub profile"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-[#14213D] shrink-0">
                    <GithubIcon className="w-5 h-5 text-slate-800" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-400">
                      Source Code &amp; Repositories
                    </span>
                    <h4 className="text-base font-bold text-[#14213D] group-hover:text-[#2563EB] transition-colors mt-0.5">
                      GitHub Profile
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Explore projects &amp; commit activity
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#2563EB] transition-colors shrink-0" />
              </div>
            </a>
          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-6 sm:p-8 bg-white border border-blue-200/90 shadow-[0_8px_30px_rgba(37,99,235,0.06)]">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-[#2563EB]" />
                <h3 className="text-lg font-bold text-[#14213D]">
                  Send a Direct Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-[#14213D] placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-slate-200 focus:border-[#2563EB] focus:ring-blue-100'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500 font-medium">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-[#14213D] placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-slate-200 focus:border-[#2563EB] focus:ring-blue-100'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500 font-medium">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="e.g. AI/ML Internship Opportunity / Collaboration"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-[#14213D] placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.subject
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-slate-200 focus:border-[#2563EB] focus:ring-blue-100'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-500 font-medium">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5"
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
                    placeholder="Hello Anushka, I reviewed your portfolio and would like to discuss..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-[#14213D] placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all resize-y ${
                      errors.message
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-slate-200 focus:border-[#2563EB] focus:ring-blue-100'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500 font-medium">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#1E40AF] shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>

                {/* Direct Transmission Note */}
                <div className="rounded-xl p-3 bg-blue-50/70 border border-blue-100 text-[11px] text-slate-600 leading-relaxed">
                  <span className="font-semibold text-[#2563EB]">Transparent Delivery:</span>{' '}
                  This form directly formats your inquiry into an email addressed to{' '}
                  <span className="font-mono font-semibold text-[#14213D]">{PERSONAL_INFO.email}</span>, ensuring private, reliable delivery through your email client.
                </div>

                {statusMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-2"
                  >
                    <Sparkles className="w-4 h-4 shrink-0 text-emerald-600 mt-0.5" />
                    <span>{statusMessage}</span>
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
