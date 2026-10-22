import React from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { ArrowUp, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121417] border-t border-[#2D333B] py-12 text-[#B4BAC2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#242931]">
          
          {/* Brand mark */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded bg-[#FA5428]/15 border border-[#FA5428]/40 flex items-center justify-center text-[#FA5428]">
              <Code2 className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="font-bold text-white text-base tracking-tight font-sans">
                {PORTFOLIO_INFO.name}
              </span>
              <span className="block text-xs font-mono text-[#8B949E]">
                {PORTFOLIO_INFO.role}
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex items-center gap-6 text-xs font-mono">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Automation Projects</a>
            <a href="#vibe-coded" className="hover:text-white transition-colors">Vibe-Coded App</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1B1F26] hover:bg-[#FA5428] text-white text-xs font-mono transition-colors border border-[#2D333B]"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8B949E]">
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Engineered with Make.com, AI integrations & React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
