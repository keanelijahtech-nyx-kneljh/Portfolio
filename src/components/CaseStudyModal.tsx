import React, { useState } from 'react';
import { Project } from '../data/portfolioData';
import { X, ArrowUpRight, CheckCircle2, AlertTriangle, Lightbulb, Compass, GitBranch, Cpu, Eye, Clock } from 'lucide-react';

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
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'challenges' | 'roadmap'>('overview');

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div
        className="bg-[#181C22] border border-[#333942] rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Header */}
        <div className="px-6 py-4 bg-[#14171C] border-b border-[#333942] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-semibold text-[#FA5428] uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-[#6E7681] text-xs font-mono">/</span>
            <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase ${
              project.status === 'Completed'
                ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
            }`}>
              {project.status}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#8B949E] hover:text-white hover:bg-[#252A32] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Main Title & Subtitle */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="mt-1 text-sm font-mono text-[#FA5428]">
              {project.subtitle}
            </p>
          </div>

          {/* Interactive Scenario / Image Spotlight */}
          <div className="bg-[#101317] border border-[#2F353F] rounded-xl overflow-hidden group">
            <div className="px-4 py-2.5 bg-[#171B20] border-b border-[#2A303A] flex items-center justify-between text-xs font-mono text-[#8B949E]">
              <span>Workflow Scenario Artifact</span>
              <button
                onClick={() => onPreviewImage(project.image, project.title)}
                className="inline-flex items-center gap-1.5 text-xs text-[#FA5428] hover:underline"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Full-Resolution Image</span>
              </button>
            </div>
            <div
              onClick={() => onPreviewImage(project.image, project.title)}
              className="p-4 sm:p-6 flex items-center justify-center cursor-pointer bg-[#0D0F12]"
            >
              <img
                src={project.image}
                alt={project.imageAlt}
                className="max-h-[300px] w-auto max-w-full object-contain rounded-lg shadow-lg group-hover:scale-[1.01] transition-transform"
              />
            </div>
            {project.imageCaption && (
              <div className="px-4 py-2 bg-[#14171B] border-t border-[#2A303A] text-[11px] font-mono text-[#8B949E]">
                {project.imageCaption}
              </div>
            )}
          </div>

          {/* Tab Navigation for Detailed Sections */}
          <div className="flex items-center gap-2 border-b border-[#30363E] pb-2 overflow-x-auto text-xs font-mono">
            {[
              { id: 'overview', label: '1. Problem & Solution' },
              { id: 'architecture', label: '2. Architecture & Pipeline' },
              { id: 'challenges', label: '3. Engineering Lessons' },
              { id: 'roadmap', label: '4. Outcomes & Future Scope' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'bg-[#FA5428] text-white font-semibold'
                    : 'text-[#B4BAC2] hover:text-white hover:bg-[#22272E]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-xl bg-[#15181C] border border-[#2D333D]">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-[#FA5428]" />
                    <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
                      The Operational Problem
                    </h4>
                  </div>
                  <p className="text-sm text-[#C9D1D9] leading-relaxed">
                    {project.problemSolved}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#15181C] border border-[#2D333D]">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
                      The Engineered Solution
                    </h4>
                  </div>
                  <p className="text-sm text-[#C9D1D9] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Kean's Role & Contribution */}
              <div className="p-5 rounded-xl bg-[#15181C] border border-[#2D333D]">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FA5428] mb-2">
                  My Role & Contribution
                </h4>
                <p className="text-sm text-[#C9D1D9] leading-relaxed">
                  {project.role}
                </p>
              </div>

              {/* Technologies Applied */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#8B949E] mb-3">
                  Technologies Deployed in this Project
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map(tool => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded bg-[#20252D] text-white border border-[#363E4A] text-xs font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Architecture */}
          {activeTab === 'architecture' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-5 rounded-xl bg-[#15181C] border border-[#2D333D]">
                <div className="flex items-center gap-2 mb-2">
                  <GitBranch className="w-4 h-4 text-[#FA5428]" />
                  <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
                    Architecture & Trigger Logic
                  </h4>
                </div>
                <p className="text-sm text-[#C9D1D9] leading-relaxed mb-3">
                  {project.caseStudyDetails.architectureSummary}
                </p>
                <div className="text-xs font-mono text-[#8B949E] pt-2 border-t border-[#2A303A] flex items-center justify-between">
                  <span>Trigger Type:</span>
                  <span className="text-white font-semibold">{project.caseStudyDetails.triggerType}</span>
                </div>
              </div>

              {/* Execution Flow Steps */}
              <div className="p-5 rounded-xl bg-[#15181C] border border-[#2D333D]">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FA5428] mb-3">
                  Data Flow & Sequence
                </h4>
                <ol className="space-y-2.5 text-xs sm:text-sm text-[#C9D1D9]">
                  {project.caseStudyDetails.dataFlow.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#242A33] border border-[#3A4250] text-[#FA5428] font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Tested Functionality Note */}
              <div className="p-4 rounded-xl bg-[#1B1F26] border border-[#2F3642] text-xs font-mono text-[#B4BAC2] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Verified Status: </span>
                  {project.caseStudyDetails.testedFunctionality}
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Challenges */}
          {activeTab === 'challenges' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-5 rounded-xl bg-[#15181C] border border-[#2D333D]">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-4 h-4 text-[#FA5428]" />
                  <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
                    Engineering Challenges & Solutions
                  </h4>
                </div>
                <div className="space-y-3">
                  {project.challenges.map((challenge, idx) => (
                    <div key={idx} className="p-3.5 rounded-lg bg-[#1B2028] border border-[#2D3440] text-xs sm:text-sm text-[#C9D1D9]">
                      <div className="font-mono text-[#FA5428] text-xs font-semibold mb-1">
                        Challenge #{idx + 1}
                      </div>
                      <p>{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Roadmap */}
          {activeTab === 'roadmap' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Verified Outcomes */}
              <div className="p-5 rounded-xl bg-[#15181C] border border-[#2D333D]">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-3">
                  Verified Real-World Outcomes
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#C9D1D9]">
                  {project.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono">✓</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Future Improvements */}
              <div className="p-5 rounded-xl bg-[#15181C] border border-[#2D333D]">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FA5428] mb-3">
                  Planned Improvements & Next Steps
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#C9D1D9]">
                  {project.futureImprovements.map((imp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#FA5428] font-mono">→</span>
                      <span>{imp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 py-4 bg-[#14171C] border-t border-[#333942] flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-[#8B949E] font-mono">
            {project.caseStudyDetails.notes || 'Documented by Kean Elijah Janaban'}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onPreviewImage(project.image, project.title)}
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono text-[#B4BAC2] hover:text-white bg-[#22272F] border border-[#333942]"
            >
              Zoom Diagram
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg text-xs font-medium text-white bg-[#FA5428] hover:bg-[#E1441B]"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
