import React, { useState } from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { Mail, Copy, Check, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Workflow Automation',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#15181C] border-t border-[#333942]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-7">
            <div>
              <span className="text-xs font-mono font-medium tracking-widest text-[#FA5428] uppercase mb-2.5 block">
                LET'S CONNECT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Ready to automate your manual work?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#B4BAC2] leading-relaxed">
                Whether you need a custom Make.com workflow, an AI data pipeline, or want to discuss opportunities for an automation developer role, reach out directly.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="p-5 rounded-xl bg-[#1C2128] border border-[#2E3540] space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8B949E] block">
                Direct Email Inquiries
              </span>
              <div className="flex items-center justify-between gap-3 p-3.5 rounded-lg bg-[#14171B] border border-[#2B313B]">
                <div className="flex items-center gap-2.5 truncate">
                  <Mail className="w-4 h-4 text-[#FA5428] shrink-0" />
                  <a
                    href={`mailto:${PORTFOLIO_INFO.email}`}
                    className="text-sm font-mono text-white hover:text-[#FA5428] transition-colors truncate"
                  >
                    {PORTFOLIO_INFO.email}
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded bg-[#252B34] hover:bg-[#FA5428] text-white text-xs font-mono transition-colors shrink-0 flex items-center gap-1.5"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Current Status */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-[#1C2128] border border-[#2E3540] text-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
              <span className="text-[#C9D1D9]">
                {PORTFOLIO_INFO.availability}
              </span>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-[#1C2128] border border-[#333942] rounded-2xl p-6 sm:p-8 shadow-lg">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Message Sent Successfully
                </h3>
                <p className="text-sm text-[#B4BAC2] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. I will review your message regarding <span className="text-[#FA5428] font-mono">{formData.projectType}</span> and reply directly to <span className="text-white">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', projectType: 'Workflow Automation', message: '' });
                  }}
                  className="mt-4 px-4 py-2 text-xs font-mono rounded-lg bg-[#252B34] text-[#B4BAC2] hover:text-white border border-[#333942] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Send a Message
                  </h3>
                  <p className="text-xs text-[#8B949E] mt-0.5">
                    Feel free to describe the workflow friction or role you're looking to fill.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#B4BAC2] mb-1.5">
                      Your Name <span className="text-[#FA5428]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Rivera"
                      className="w-full bg-[#15181C] border border-[#333942] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-[#6E7681] focus:outline-none focus:border-[#FA5428] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#B4BAC2] mb-1.5">
                      Email Address <span className="text-[#FA5428]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full bg-[#15181C] border border-[#333942] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-[#6E7681] focus:outline-none focus:border-[#FA5428] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#B4BAC2] mb-1.5">
                    Discussion Topic
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#15181C] border border-[#333942] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#FA5428] transition-colors"
                  >
                    <option value="Workflow Automation">Workflow Automation (Make.com / Sheets)</option>
                    <option value="AI Integration">AI Integration & Prompt Pipelines</option>
                    <option value="Vibe-Coded Prototype">Vibe-Coded Web Prototyping</option>
                    <option value="Developer Role">Developer Opportunity / Interview</option>
                    <option value="Freelance Project">Freelance Automation Project</option>
                    <option value="Other">General Discussion</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#B4BAC2] mb-1.5">
                    Message <span className="text-[#FA5428]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your workflow challenge, project goals, or opportunity..."
                    className="w-full bg-[#15181C] border border-[#333942] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-[#6E7681] focus:outline-none focus:border-[#FA5428] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-[#FA5428] hover:bg-[#E1441B] rounded-lg transition-colors shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
