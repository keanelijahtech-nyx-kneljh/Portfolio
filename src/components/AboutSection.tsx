import React from 'react';
import { Workflow, Cpu, Layers } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-24 bg-[#1B1F24] border-b border-[#333942]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-medium tracking-widest text-[#FA5428] uppercase mb-2.5 block">
            ABOUT MY WORK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {PORTFOLIO_INFO.aboutHeading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#B4BAC2] leading-relaxed">
            {PORTFOLIO_INFO.aboutIntro}
          </p>
        </div>

        {/* 3 Core Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Workflow Automation */}
          <div className="bg-[#15181C] border border-[#333942] rounded-xl p-6 sm:p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-lg bg-[#FA5428]/10 border border-[#FA5428]/25 flex items-center justify-center text-[#FA5428] mb-5">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2.5 tracking-tight">
                Workflow Automation
              </h3>
              <p className="text-sm text-[#B4BAC2] leading-relaxed">
                Connecting applications and automating repetitive processes. Designing resilient scenarios in Make.com and Google Apps Script that eliminate manual data entry, event tracking, and handoff delays.
              </p>
            </div>
          </div>

          {/* Card 2: AI Integration */}
          <div className="bg-[#15181C] border border-[#333942] rounded-xl p-6 sm:p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-lg bg-[#FA5428]/10 border border-[#FA5428]/25 flex items-center justify-center text-[#FA5428] mb-5">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2.5 tracking-tight">
                AI Integration
              </h3>
              <p className="text-sm text-[#B4BAC2] leading-relaxed">
                Using AI to support data processing, classification, and decision-making where appropriate. Crafting structured prompts that transform unstructured inquiries into clean, deterministic data for downstream logic.
              </p>
            </div>
          </div>

          {/* Card 3: Application Prototyping */}
          <div className="bg-[#15181C] border border-[#333942] rounded-xl p-6 sm:p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-lg bg-[#FA5428]/10 border border-[#FA5428]/25 flex items-center justify-center text-[#FA5428] mb-5">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2.5 tracking-tight">
                Application Prototyping
              </h3>
              <p className="text-sm text-[#B4BAC2] leading-relaxed">
                Building useful web applications and interfaces with modern development tools. Creating functional prototypes like task boards that pair backend automations with intuitive, responsive user experiences.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
