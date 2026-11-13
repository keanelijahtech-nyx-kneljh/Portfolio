import React from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#14171A] border-t border-[#242931] py-10 text-[#9CA3AF]">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-[#20252C]">
          <div>
            <span className="font-semibold text-[#F5F5F3] text-sm tracking-tight">
              {PORTFOLIO_INFO.fullName}
            </span>
            <span className="block text-xs text-[#9CA3AF] mt-0.5">
              {PORTFOLIO_INFO.role}
            </span>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-6 text-xs">
            <a href="#home" className="hover:text-[#F5F5F3] transition-colors">Home</a>
            <a href="#services" className="hover:text-[#F5F5F3] transition-colors">Services</a>
            <a href="#projects" className="hover:text-[#F5F5F3] transition-colors">Projects</a>
            <a href="#about" className="hover:text-[#F5F5F3] transition-colors">About</a>
            <a href="#contact" className="hover:text-[#F5F5F3] transition-colors">Contact</a>
          </nav>

          <button
            type="button"
            onClick={scrollToTop}
            className="text-xs text-[#9CA3AF] hover:text-[#F5F5F3] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA5428] rounded"
          >
            Back to top ↑
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#6B7280]">
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_INFO.fullName} ({PORTFOLIO_INFO.brandName}).
          </div>
          <div>
            Iloilo City, Philippines
          </div>
        </div>
      </div>
    </footer>
  );
};
