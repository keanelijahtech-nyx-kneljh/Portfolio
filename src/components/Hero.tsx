import React from 'react';
import { ArrowDown, ArrowUpRight, ArrowRight } from 'lucide-react';
import { PORTFOLIO_INFO, AUTOMATION_PROJECTS } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreProjects }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#1F2328] bg-grid-pattern overflow-hidden">
      {/* Subtle ambient lighting accent */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FA5428]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typographic Powerhouse */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Introductory label */}
            <div className="mb-4">
              <span className="text-xs font-mono font-medium tracking-widest text-[#B4BAC2] uppercase">
                {PORTFOLIO_INFO.heroLabel}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              <span className="block text-white">
                {PORTFOLIO_INFO.headlineWhite}
              </span>
              <span className="block text-[#FA5428]">
                {PORTFOLIO_INFO.headlineOrange}
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#B4BAC2] max-w-xl leading-relaxed mb-8">
              {PORTFOLIO_INFO.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-medium text-white bg-[#FA5428] hover:bg-[#E1441B] rounded-lg transition-all shadow-md shadow-[#FA5428]/20 hover:translate-y-[-1px] group"
              >
                <span>Explore My Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-medium text-white bg-[#282D34] hover:bg-[#333942] border border-[#3A424E] rounded-lg transition-all"
              >
                <span>Let’s Connect</span>
                <ArrowUpRight className="w-4 h-4 text-[#FA5428]" />
              </button>
            </div>

            {/* Credibility Labels */}
            <div className="pt-6 border-t border-[#333942]/60 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#B4BAC2]">
              {PORTFOLIO_INFO.credibilityLabels.map((label) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="text-[#FA5428]">✓</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Restrained, High-Impact Focal Card */}
          <div className="lg:col-span-5 relative mt-2 lg:mt-0">
            <div className="bg-[#15181C] border border-[#333942] rounded-2xl p-7 shadow-xl space-y-6">
              
              {/* Callout Highlight Card */}
              <div className="bg-[#1A1E24] border border-[#333942] rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#FA5428] text-white flex items-center justify-center font-mono font-bold text-lg shrink-0 shadow-md shadow-[#FA5428]/20">
                    {'{ }'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      Built to solve real problems.
                    </h3>
                    <p className="text-sm text-[#B4BAC2] mt-1 leading-relaxed">
                      Practical automation. Thoughtful execution.
                    </p>
                  </div>
                </div>
                {/* Vivid orange accent line */}
                <div className="mt-4 h-[2px] bg-[#FA5428] rounded-full w-full" />
              </div>

              {/* Quiet, Clean Project Highlights */}
              <div className="space-y-2.5">
                <span className="text-xs font-mono uppercase tracking-wider text-[#8B949E] block mb-1">
                  Featured Automations
                </span>
                {AUTOMATION_PROJECTS.map((proj, idx) => (
                  <div
                    key={proj.id}
                    onClick={onExploreProjects}
                    className="p-3.5 rounded-lg bg-[#191D24] border border-[#2B313B] hover:border-[#FA5428]/40 transition-colors flex items-center justify-between cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#FA5428] font-medium">
                        0{idx + 1}
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-[#FA5428] transition-colors">
                          {proj.title}
                        </div>
                        <div className="text-xs text-[#8B949E]">
                          {proj.category}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#6E7681] group-hover:text-[#FA5428] transition-colors" />
                  </div>
                ))}
              </div>

              {/* Bottom Note */}
              <div className="pt-2 border-t border-[#2A303A] flex items-center justify-between text-xs text-[#8B949E]">
                <span>Make.com · Gemini AI · Google Sheets</span>
                <span className="text-emerald-400">● Operational</span>
              </div>

            </div>
          </div>

        </div>

        {/* Sub-hero status bar */}
        <div className="mt-20 pt-8 border-t border-[#333942]/40 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#8B949E]">
          <span className="tracking-widest uppercase">
            ENGINEERED FOR REAL-WORLD IMPACT
          </span>
          <button
            onClick={onExploreProjects}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#FA5428]" />
          </button>
        </div>
      </div>
    </section>
  );
};
