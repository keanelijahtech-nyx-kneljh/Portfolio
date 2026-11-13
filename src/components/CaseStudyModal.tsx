import React, { useState, useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { InteractiveKanban } from './InteractiveKanban';
import {
  X,
  Eye,
  AlertTriangle,
  CheckCircle2,
  GitBranch,
  Layers,
  Sparkles,
  Layout,
  ListChecks,
  UserCheck,
  TrendingUp
} from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onPreviewImage: (image: string, title: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onPreviewImage
}) => {
  const [demoView, setDemoView] = useState<'screenshot' | 'interactive'>('screenshot');

  useEffect(() => {
    if (!project) return;
    setDemoView('screenshot');
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="bg-[#181C22] border border-[#333942] rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-6 py-4 bg-[#14171C] border-b border-[#333942] flex items-center justify-between gap-4 shrink-0">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="text-[#FA5428] font-medium">{project.category}</span>
            <span aria-hidden="true" className="text-[#6E7681]">·</span>
            <span className={project.status === 'Completed' ? 'text-emerald-400' : 'text-amber-300'}>
              {project.status}
            </span>
            <span aria-hidden="true" className="text-[#6E7681]">·</span>
            <span className="text-[#8B949E]">{project.projectTypeNote}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#8B949E] hover:text-white hover:bg-[#252A32] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA5428]"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-7">

          {/* Title Header */}
          <div>
            <h2 id="case-study-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="mt-1.5 text-sm text-[#B4BAC2]">
              {project.subtitle}
            </p>
          </div>

          {/* 01. Project Overview */}
          <section className="space-y-2.5">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FA5428]">
              01. Project Overview
            </h3>
            <p className="text-sm sm:text-base text-[#D2D9E1] leading-relaxed">
              {project.caseStudyDetails.overview}
            </p>
          </section>

          {/* 02. The Problem & 03. The Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <section className="p-5 rounded-xl bg-[#15181C] border border-[#2D333D] space-y-2.5">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#FA5428]" aria-hidden="true" />
                <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
                  02. The Problem
                </h3>
              </div>
              <p className="text-sm text-[#C9D1D9] leading-relaxed">
                {project.problemSolved}
              </p>
            </section>

            <section className="p-5 rounded-xl bg-[#15181C] border border-[#2D333D] space-y-2.5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
                  03. The Solution
                </h3>
              </div>
              <p className="text-sm text-[#C9D1D9] leading-relaxed">
                {project.solution}
              </p>
            </section>
          </div>

          {/* 04. How It Works */}
          <section className="p-5 rounded-xl bg-[#15181C] border border-[#2D333D] space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-[#FA5428]" aria-hidden="true" />
                <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
                  04. How It Works
                </h3>
              </div>
              <span className="text-xs font-mono text-[#8B949E]">
                Trigger: <strong className="text-[#F5F5F3] font-medium">{project.caseStudyDetails.triggerType}</strong>
              </span>
            </div>

            <p className="text-sm text-[#C9D1D9] leading-relaxed">
              {project.caseStudyDetails.architectureSummary}
            </p>

            <ol className="space-y-2.5 pt-2 border-t border-[#262B33]">
              {project.caseStudyDetails.dataFlow.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#D2D9E1]">
                  <span className="w-5 h-5 rounded-full bg-[#222730] border border-[#353D49] text-[#FA5428] font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 tabular-nums">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            {/* Challenges & Planned Next Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-[#262B33]">
              <div>
                <h4 className="text-xs font-mono font-semibold text-[#8B949E] uppercase mb-2">
                  Implementation Notes &amp; Challenges
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-[#B4BAC2]">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#FA5428] font-mono">·</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-mono font-semibold text-[#8B949E] uppercase mb-2">
                  Planned Improvements
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-[#B4BAC2]">
                  {project.futureImprovements.map((imp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#FA5428] font-mono">→</span>
                      <span>{imp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 05. Key Features & 06. Tools and Technologies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <section className="p-5 rounded-xl bg-[#15181C] border border-[#2D333D] space-y-3">
              <div className="flex items-center gap-2">
                <ListChecks className="w-4 h-4 text-[#FA5428]" aria-hidden="true" />
                <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
                  05. Key Features
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-[#D2D9E1]">
                {project.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FA5428] mt-2 shrink-0" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="p-5 rounded-xl bg-[#15181C] border border-[#2D333D] space-y-3">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#FA5428]" aria-hidden="true" />
                <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
                  06. Tools and Technologies
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded bg-[#20252D] text-white border border-[#363E4A] text-xs font-mono"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div className="pt-2 border-t border-[#262B33] space-y-1.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#8B949E] block">
                  Modules &amp; Components
                </span>
                <ul className="space-y-1 text-xs text-[#B4BAC2] font-mono">
                  {project.workflowNodes.map((node, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#FA5428]">›</span>
                      <span>{node}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* 07. My Contribution & 08. Outcome and Practical Value */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <section className="p-5 rounded-xl bg-[#15181C] border border-[#2D333D] space-y-2.5">
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-[#FA5428]" aria-hidden="true" />
                <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
                  07. My Contribution
                </h3>
              </div>
              <p className="text-sm text-[#C9D1D9] leading-relaxed">
                {project.role}
              </p>
            </section>

            <section className="p-5 rounded-xl bg-[#15181C] border border-[#2D333D] space-y-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
                  08. Outcome and Practical Value
                </h3>
              </div>
              <p className="text-sm text-[#C9D1D9] leading-relaxed">
                {project.caseStudyDetails.outcomeValue}
              </p>
              <div className="p-3 rounded-lg bg-[#1A1E25] border border-[#2B313C] text-xs font-mono text-[#B4BAC2]">
                <strong className="text-white">Testing &amp; Scope:</strong> {project.caseStudyDetails.testedFunctionality}
              </div>
            </section>
          </div>

          {/* 09. Screenshots or Demo */}
          <section className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FA5428]">
                09. Screenshots or Demo
              </h3>

              <div className="flex items-center gap-2">
                {project.hasInteractiveDemo && (
                  <div className="flex items-center gap-1 p-1 bg-[#121418] border border-[#30363D] rounded-lg">
                    <button
                      type="button"
                      onClick={() => setDemoView('screenshot')}
                      className={`px-2.5 py-1 text-xs font-mono rounded flex items-center gap-1.5 ${
                        demoView === 'screenshot' ? 'bg-[#FA5428] text-white' : 'text-[#B4BAC2] hover:text-white'
                      }`}
                    >
                      <Layout className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Screenshot</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setDemoView('interactive')}
                      className={`px-2.5 py-1 text-xs font-mono rounded flex items-center gap-1.5 ${
                        demoView === 'interactive' ? 'bg-[#FA5428] text-white' : 'text-[#B4BAC2] hover:text-white'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Interactive Demo</span>
                    </button>
                  </div>
                )}

                {demoView === 'screenshot' && (
                  <button
                    type="button"
                    onClick={() => onPreviewImage(project.image, project.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FA5428] hover:underline"
                  >
                    <Eye className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Open Full-Resolution View</span>
                  </button>
                )}
              </div>
            </div>

            {project.hasInteractiveDemo && demoView === 'interactive' ? (
              <InteractiveKanban />
            ) : (
              <div className="bg-[#101317] border border-[#2F353F] rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => onPreviewImage(project.image, project.title)}
                  className="w-full p-4 sm:p-6 flex items-center justify-center cursor-pointer bg-[#0D0F12] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA5428]"
                  aria-label={`Expand ${project.title} screenshot`}
                >
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="max-h-[340px] w-auto max-w-full object-contain rounded-lg border border-[#2A303A] group-hover:scale-[1.01] transition-transform"
                  />
                </button>
                <div className="px-4 py-2.5 bg-[#14171B] border-t border-[#2A303A] text-xs font-mono text-[#8B949E]">
                  {project.imageCaption}
                </div>
              </div>
            )}
          </section>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#14171C] border-t border-[#333942] flex items-center justify-between gap-3 shrink-0">
          <span className="text-xs text-[#8B949E] font-mono">
            {project.projectTypeNote}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-medium text-white bg-[#FA5428] hover:bg-[#E1441B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
