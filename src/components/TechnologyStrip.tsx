import React from 'react';
import { TECHNOLOGIES } from '../data/portfolioData';

export const TechnologyStrip: React.FC = () => {
  return (
    <section className="border-y border-[#333942]/70 bg-[#16191D] py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 justify-between">
          
          {/* Heading label */}
          <div className="shrink-0">
            <span className="text-xs font-mono font-medium tracking-widest text-[#FA5428] uppercase block">
              THE TOOLS BEHIND THE WORK
            </span>
          </div>

          {/* Tools items */}
          <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {TECHNOLOGIES.map((tech) => (
              <div
                key={tech.name}
                className="group flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#1F2328] border border-[#2F353F] hover:border-[#FA5428]/50 transition-all shrink-0 cursor-default"
                title={`${tech.name} — ${tech.note}`}
              >
                {/* Tech logo mark */}
                <div className="w-5 h-5 rounded flex items-center justify-center text-xs font-mono font-bold text-[#FA5428] bg-[#FA5428]/10">
                  {tech.name[0]}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-medium text-white group-hover:text-[#FA5428] transition-colors whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
