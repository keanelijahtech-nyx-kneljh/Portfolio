import React from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { Workflow, Cpu, Database, Code } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Automation & Integration':
        return <Workflow className="w-5 h-5 text-[#FA5428]" />;
      case 'AI Integration':
        return <Cpu className="w-5 h-5 text-[#FA5428]" />;
      case 'Productivity & Data':
        return <Database className="w-5 h-5 text-[#FA5428]" />;
      case 'Application Development':
      default:
        return <Code className="w-5 h-5 text-[#FA5428]" />;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-24 bg-[#1B1F24] border-t border-[#333942]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-medium tracking-widest text-[#FA5428] uppercase mb-2.5 block">
            TECHNICAL REPERTOIRE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Skills & Technical Stack
          </h2>
          <p className="mt-3 text-base text-[#B4BAC2] leading-relaxed">
            A focused toolkit centered around business process automation, prompt engineering for deterministic extraction, and rapid web prototyping.
          </p>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILLS_DATA.map((cat) => (
            <div
              key={cat.category}
              className="bg-[#15181C] border border-[#333942] rounded-xl p-6 sm:p-7 shadow-sm"
            >
              {/* Header with icon and title */}
              <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-[#2A303A]">
                <div className="w-10 h-10 rounded-lg bg-[#FA5428]/10 border border-[#FA5428]/25 flex items-center justify-center shrink-0">
                  {getCategoryIcon(cat.category)}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {cat.category}
                </h3>
              </div>

              {/* Skills list items */}
              <div className="space-y-3.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-lg bg-[#191D24] border border-[#2B313B]"
                  >
                    <div className="font-semibold text-sm text-white mb-1">
                      {skill.name}
                    </div>
                    <p className="text-xs sm:text-sm text-[#B4BAC2] leading-relaxed">
                      {skill.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
