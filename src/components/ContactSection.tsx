import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { Mail, Copy, Check, Send, Linkedin, AlertCircle, ExternalLink } from 'lucide-react';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedBody, setCopiedBody] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Workflow Automation',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'preparing' | 'handed_off' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setErrorMessage('Could not copy automatically. Please copy the email address manually.');
    }
  };

  const buildMailtoHref = () => {
    const subject = `[Portfolio Inquiry] ${formData.projectType} — ${formData.name.trim()}`;
    const body = [
      `Name: ${formData.name.trim()}`,
      `Reply Email: ${formData.email.trim()}`,
      `Topic: ${formData.projectType}`,
      '',
      'Message:',
      formData.message.trim()
    ].join('\n');

    return `mailto:${PORTFOLIO_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleCopyFormattedInquiry = async () => {
    const formatted = `To: ${PORTFOLIO_INFO.email}\nSubject: [Portfolio Inquiry] ${formData.projectType} — ${formData.name.trim()}\nReply-To: ${formData.email.trim()}\n\n${formData.message.trim()}`;
    try {
      await navigator.clipboard.writeText(formatted);
      setCopiedBody(true);
      setTimeout(() => setCopiedBody(false), 2000);
    } catch {
      setErrorMessage('Clipboard access was blocked by your browser.');
    }
  };

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (!formData.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }
    const emailTrimmed = formData.email.trim();
    if (!emailTrimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (formData.message.trim().length < 10) {
      nextErrors.message = 'Please include a brief description (at least 10 characters).';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validate()) return;

    setStatus('preparing');
    try {
      const mailtoUrl = buildMailtoHref();
      window.location.href = mailtoUrl;
      setTimeout(() => {
        setStatus('handed_off');
      }, 250);
    } catch {
      setStatus('error');
      setErrorMessage('Unable to launch your email client automatically. Please use the email address or copy your message below.');
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#181B20] border-t border-[#242931]">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start"
        >
          {/* Left Column: Direct Links */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-medium tracking-wider uppercase text-[#FA5428] mb-2">
                Contact
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5F3] tracking-tight leading-snug text-balance">
                Let&apos;s Build Something Useful.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#A1A8B3] leading-relaxed">
                Have a repetitive process or workflow that could be improved? I&apos;d be happy to discuss practical automation solutions and opportunities.
              </p>
            </div>

            <div className="divide-y divide-[#262C34] border-y border-[#262C34]">
              {/* Email */}
              <div className="py-3.5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="w-4 h-4 text-[#FA5428] shrink-0" aria-hidden="true" />
                  <a
                    href={`mailto:${PORTFOLIO_INFO.email}`}
                    className="text-sm text-[#F5F5F3] hover:text-[#FA5428] transition-colors truncate"
                  >
                    {PORTFOLIO_INFO.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-xs text-[#9CA3AF] hover:text-[#F5F5F3] transition-colors shrink-0 inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA5428] rounded px-1.5 py-1"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={PORTFOLIO_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 flex items-center justify-between gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA5428] rounded"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Linkedin className="w-4 h-4 text-[#FA5428] shrink-0" aria-hidden="true" />
                  <span className="text-sm text-[#F5F5F3] group-hover:text-[#FA5428] transition-colors truncate">
                    LinkedIn · in/kneljh-tech
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#6E7681] group-hover:text-[#FA5428] shrink-0" aria-hidden="true" />
              </a>
            </div>

            <p className="text-xs text-[#9CA3AF]">
              {PORTFOLIO_INFO.availability}
            </p>
          </div>

          {/* Right Column: Minimal Mailto-Backed Form */}
          <div className="lg:col-span-7 bg-[#14171A] border border-[#262C34] rounded-xl p-6 sm:p-8">
            {status === 'handed_off' ? (
              <div className="py-4 space-y-5">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#F5F5F3]">
                    Email Draft Prepared
                  </h3>
                  <p className="text-sm text-[#A1A8B3] leading-relaxed">
                    Your default email client was opened with a draft addressed to{' '}
                    <strong className="text-[#F5F5F3] font-medium">{PORTFOLIO_INFO.email}</strong>. Send the draft inside your email app to complete your message.
                  </p>
                  <p className="text-xs text-[#9CA3AF]">
                    If your email app did not launch, you can reopen the draft or copy the message below.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={buildMailtoHref()}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-[#FA5428] hover:bg-[#E1441B] rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    <span>Open Email App</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyFormattedInquiry}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#D1D5DB] hover:text-white bg-[#1A1E23] border border-[#2A3038] rounded-lg transition-colors"
                  >
                    {copiedBody ? <Check className="w-4 h-4 text-emerald-400" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
                    <span>{copiedBody ? 'Message Copied' : 'Copy Message'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="px-3 py-2 text-xs text-[#9CA3AF] hover:text-[#F5F5F3]"
                  >
                    Edit Form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#F5F5F3]">
                    Send an Inquiry
                  </h3>
                  <p className="text-xs text-[#9CA3AF] mt-1">
                    Prepares an email draft addressed to {PORTFOLIO_INFO.email} in your email client.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-xs text-red-300 flex items-start gap-2" role="alert">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-[#D1D5DB] mb-1.5">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="Your name"
                      className="w-full bg-[#181B20] border border-[#2A3038] rounded-lg px-3.5 py-2.5 text-sm text-[#F5F5F3] placeholder-[#6B7280] focus:outline-none focus:border-[#FA5428] transition-colors"
                      aria-invalid={Boolean(errors.name)}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-[#D1D5DB] mb-1.5">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="you@company.com"
                      className="w-full bg-[#181B20] border border-[#2A3038] rounded-lg px-3.5 py-2.5 text-sm text-[#F5F5F3] placeholder-[#6B7280] focus:outline-none focus:border-[#FA5428] transition-colors"
                      aria-invalid={Boolean(errors.email)}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-topic" className="block text-xs font-medium text-[#D1D5DB] mb-1.5">
                    Topic
                  </label>
                  <select
                    id="contact-topic"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#181B20] border border-[#2A3038] rounded-lg px-3.5 py-2.5 text-sm text-[#F5F5F3] focus:outline-none focus:border-[#FA5428] transition-colors"
                  >
                    <option value="Workflow Automation">Workflow Automation</option>
                    <option value="AI Integration">AI Integration</option>
                    <option value="CRM & Lead Management">CRM &amp; Lead Management</option>
                    <option value="Lightweight Application Development">Lightweight Application Development</option>
                    <option value="Remote / Entry-Level Role">Remote / Entry-Level Role</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-[#D1D5DB] mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Briefly describe the workflow, project, or opportunity..."
                    className="w-full bg-[#181B20] border border-[#2A3038] rounded-lg px-3.5 py-2.5 text-sm text-[#F5F5F3] placeholder-[#6B7280] focus:outline-none focus:border-[#FA5428] transition-colors resize-none"
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'preparing'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#FA5428] hover:bg-[#E1441B] disabled:opacity-60 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span>{status === 'preparing' ? 'Preparing Email Draft...' : 'Prepare Email Draft'}</span>
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
