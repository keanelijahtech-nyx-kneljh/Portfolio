import React, { useState } from 'react';
import { VIBE_CODED_PROJECT, Project } from '../data/portfolioData';
import { InteractiveKanban } from './InteractiveKanban';
import { ArrowUpRight, Sparkles, Layout, Eye } from 'lucide-react';

interface VibeCodedSectionProps {
  onSelectProject: (project: Project) => void;
  onPreviewImage: (image: string, title: string) => void;
}

export const VibeCodedSection: React.FC<VibeCodedSectionProps> = ({
  onSelectProject,
  onPreviewImage,
}) => {
  const [viewMode, setViewMode] = useState<'screenshot' | 'interactive'>('screenshot');

  return (
    <section id="vibe-coded" className="py-20 lg:py-24 bg-[#16191D] border-t border-[#333942]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-medium tracking-widest text-[#FA5428] uppercase mb-2.5 block">
            APPLICATION PROTOTYPING
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Vibe-Coded Apps & Websites
          </h2>
          <p className="mt-3 text-base text-[#B4BAC2] leading-relaxed">
            Exploring practical applications through rapid prototyping, thoughtful interface design, and integrations with everyday productivity tools.
          </p>
        </div>

        {/* Featured Showcase Card */}
        <div className="bg-[#1C2128] border border-[#333942] rounded-2xl overflow-hidden shadow-xl">
          
          {/* Card Top Header */}
          <div className="px-6 py-4 bg-[#16191E] border-b border-[#333942] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-medium text-[#FA5428] uppercase">
                {VIBE_CODED_PROJECT.category}
              </span>
              <span className="text-[#6E7681] text-xs">·</span>
              <span className="text-xs font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded font-medium">
                {VIBE_CODED_PROJECT.status}
              </span>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 p-1 bg-[#121418] border border-[#30363D] rounded-lg">
              <button
                onClick={() => setViewMode('screenshot')}
                className={`px-3 py-1 text-xs font-mono rounded transition-colors flex items-center gap-1.5 ${
                  viewMode === 'screenshot'
                    ? 'bg-[#FA5428] text-white font-medium shadow-sm'
                    : 'text-[#B4BAC2] hover:text-white'
                }`}
              >
                <Layout className="w-3.5 h-3.5" />
                <span>Screenshot</span>
              </button>
              <button
                onClick={() => setViewMode('interactive')}
                className={`px-3 py-1 text-xs font-mono rounded transition-colors flex items-center gap-1.5 ${
                  viewMode === 'interactive'
                    ? 'bg-[#FA5428] text-white font-medium shadow-sm'
                    : 'text-[#B4BAC2] hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Sandbox</span>
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10 space-y-8">
            
            {/* Title & Overview Grid */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="max-w-2xl">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2.5">
                  {VIBE_CODED_PROJECT.title}
                </h3>
                <p className="text-sm sm:text-base text-[#B4BAC2] leading-relaxed">
                  {VIBE_CODED_PROJECT.shortDescription}
                </p>
              </div>

              <div className="shrink-0">
                <button
                  onClick={() => onSelectProject(VIBE_CODED_PROJECT)}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium text-white bg-[#FA5428] hover:bg-[#E1441B] rounded-lg transition-colors shadow-sm"
                >
                  <span>View Project Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Visual Viewport */}
            <div className="w-full">
              {viewMode === 'screenshot' ? (
                <div
                  onClick={() => onPreviewImage(VIBE_CODED_PROJECT.image, VIBE_CODED_PROJECT.title)}
                  className="bg-[#121417] border border-[#333942] rounded-xl p-4 sm:p-6 cursor-pointer group flex items-center justify-center"
                >
                  <img
                    src={VIBE_CODED_PROJECT.image}
                    alt={VIBE_CODED_PROJECT.imageAlt}
                    className="w-full h-auto max-h-[560px] object-contain rounded-lg border border-[#2D333B] transition-transform duration-200 group-hover:scale-[1.005]"
                  />
                </div>
              ) : (
                <InteractiveKanban />
              )}
            </div>

            {/* Stack Tags */}
            <div className="pt-4 border-t border-[#333942] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#8B949E]">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-white">Technologies:</span>
                {VIBE_CODED_PROJECT.tools.slice(0, 4).map(tool => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded bg-[#15181C] border border-[#2F353F] text-[#D2D9E1]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <span className="text-xs text-[#8B949E]">
                Planned sync: Google Tasks & Google Calendar APIs
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
