import React from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenContact,
  onExploreProjects,
}) => {
  return (
    <section id="home" className="pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-28 bg-[#14171A]">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-[#9CA3AF] mb-4">
            {PORTFOLIO_INFO.fullName} · {PORTFOLIO_INFO.role}
          </p>

          <h1 className="text-3xl sm:text-5xl font-bold text-[#F5F5F3] leading-[1.15] tracking-tight text-balance mb-6">
            {PORTFOLIO_INFO.headline}
          </h1>

          <p className="text-base sm:text-lg text-[#A1A8B3] leading-relaxed max-w-2xl mb-9">
            {PORTFOLIO_INFO.bio}
          </p>

          <div className="flex flex-wrap items-center gap-3.5 mb-12">
            <button
              type="button"
              onClick={onExploreProjects}
              className="px-6 py-3 text-sm font-semibold text-white bg-[#FA5428] hover:bg-[#E1441B] rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#14171A]"
            >
              View My Projects
            </button>

            <button
              type="button"
              onClick={onOpenContact}
              className="px-6 py-3 text-sm font-medium text-[#F5F5F3] hover:text-white bg-transparent hover:bg-[#1A1E23] border border-[#2A3038] rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA5428]"
            >
              Contact Me
            </button>
          </div>

          <p className="pt-6 border-t border-[#242931] text-sm text-[#9CA3AF]">
            {PORTFOLIO_INFO.credibilityLine}
          </p>
        </div>
      </div>
    </section>
  );
};
