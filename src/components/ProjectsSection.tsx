import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FEATURED_PROJECTS, Project } from '../data/portfolioData';
import { InteractiveKanban } from './InteractiveKanban';
import { ArrowRight, Eye, Layout, Sparkles } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  onPreviewImage: (image: string, title: string) => void;
}

type FilterTab = 'All Projects' | 'Automation' | 'Applications';

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onPreviewImage
}) => {
  const [filter, setFilter] = useState<FilterTab>('All Projects');
  const [kanbanMode, setKanbanMode] = useState<'screenshot' | 'interactive'>('screenshot');

  const filteredProjects = filter === 'All Projects'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter((p) => p.filterGroup === filter);

  const filterTabs: { label: FilterTab; count: number }[] = [
    { label: 'All Projects', count: FEATURED_PROJECTS.length },
    { label: 'Automation', count: FEATURED_PROJECTS.filter((p) => p.filterGroup === 'Automation').length },
    { label: 'Applications', count: FEATURED_PROJECTS.filter((p) => p.filterGroup === 'Applications').length },
  ];

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#14171A] border-t border-[#242931]">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Section Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-medium tracking-wider uppercase text-[#FA5428] mb-2">
              Selected Work
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5F3] tracking-tight text-balance">
              Projects &amp; Automation Systems
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="inline-flex items-center gap-1 p-1 bg-[#1A1E23] border border-[#2A3038] rounded-lg self-start md:self-auto"
          >
            {filterTabs.map((tab) => (
              <button
                key={tab.label}
                type="button"
                role="tab"
                aria-selected={filter === tab.label}
                onClick={() => setFilter(tab.label)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA5428] ${
                  filter === tab.label
                    ? 'bg-[#FA5428] text-white'
                    : 'text-[#9CA3AF] hover:text-[#F5F5F3]'
                }`}
              >
                {tab.label} <span className="opacity-75 tabular-nums">({tab.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Clean Project Rows */}
        <div className="space-y-8">
          {filteredProjects.map((project) => {
            const isInteractiveActive = project.hasInteractiveDemo && kanbanMode === 'interactive';

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#181B20] border border-[#262C34] hover:border-[#37404C] rounded-xl overflow-hidden transition-colors"
              >
                <div className={isInteractiveActive ? 'flex flex-col' : 'grid grid-cols-1 lg:grid-cols-12 items-stretch'}>

                  {/* Thumbnail / Interactive Area */}
                  <div className={isInteractiveActive ? 'bg-[#121518] border-b border-[#262C34] p-4 sm:p-6' : 'lg:col-span-6 bg-[#121518] border-b lg:border-b-0 lg:border-r border-[#262C34] p-4 sm:p-5 flex flex-col justify-center'}>
                    {project.hasInteractiveDemo && (
                      <div className="flex items-center justify-between gap-3 mb-3.5 pb-3 border-b border-[#242931]">
                        <span className="text-xs text-[#9CA3AF]">
                          {kanbanMode === 'interactive' ? 'Interactive Prototype' : 'Interface Preview'}
                        </span>
                        <div className="flex items-center gap-1 p-0.5 bg-[#181B20] border border-[#2A3038] rounded-md">
                          <button
                            type="button"
                            onClick={() => setKanbanMode('screenshot')}
                            className={`px-2.5 py-1 text-xs font-medium rounded transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                              kanbanMode === 'screenshot'
                                ? 'bg-[#FA5428] text-white'
                                : 'text-[#9CA3AF] hover:text-[#F5F5F3]'
                            }`}
                          >
                            <Layout className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>Screenshot</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setKanbanMode('interactive')}
                            className={`px-2.5 py-1 text-xs font-medium rounded transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                              kanbanMode === 'interactive'
                                ? 'bg-[#FA5428] text-white'
                                : 'text-[#9CA3AF] hover:text-[#F5F5F3]'
                            }`}
                          >
                            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>Live Demo</span>
                          </button>
                        </div>
                      </div>
                    )}

                    {isInteractiveActive ? (
                      <InteractiveKanban />
                    ) : (
                      <button
                        type="button"
                        onClick={() => onPreviewImage(project.image, project.title)}
                        className="relative w-full flex items-center justify-center group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA5428] rounded-lg overflow-hidden"
                        aria-label={`Inspect ${project.title} screenshot`}
                      >
                        <img
                          src={project.image}
                          alt={project.imageAlt}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          className="max-h-[270px] w-auto max-w-full object-contain rounded-md transition-transform duration-200 group-hover:scale-[1.01]"
                        />
                        <span className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded bg-[#14171A]/90 border border-[#2A3038] text-xs text-[#F5F5F3] opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5 text-[#FA5428]" aria-hidden="true" />
                          <span>Zoom</span>
                        </span>
                      </button>
                    )}
                  </div>

                  {/* Minimalist Project Summary */}
                  <div className={isInteractiveActive ? 'p-6 sm:p-8 flex flex-col justify-between gap-6 md:flex-row md:items-end' : 'lg:col-span-6 p-6 sm:p-8 flex flex-col justify-center'}>
                    <div className={isInteractiveActive ? 'max-w-2xl' : ''}>
                      <p className="text-xs font-medium text-[#9CA3AF] mb-2">
                        <span className="text-[#FA5428]">{project.category}</span>
                        <span aria-hidden="true"> · </span>
                        <span>{project.status}</span>
                      </p>

                      <h3 className="text-xl sm:text-2xl font-semibold text-[#F5F5F3] tracking-tight mb-3">
                        <button
                          type="button"
                          onClick={() => onSelectProject(project)}
                          className="text-left hover:text-[#FA5428] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA5428] rounded"
                        >
                          {project.title}
                        </button>
                      </h3>

                      <p className="text-sm sm:text-base text-[#A1A8B3] leading-relaxed mb-6">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 shrink-0">
                      <button
                        type="button"
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#FA5428] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA5428] rounded"
                      >
                        <span>View Case Study</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </button>

                      {project.hasInteractiveDemo && (
                        <button
                          type="button"
                          onClick={() => setKanbanMode(kanbanMode === 'screenshot' ? 'interactive' : 'screenshot')}
                          className="text-sm font-medium text-[#9CA3AF] hover:text-[#F5F5F3] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA5428] rounded"
                        >
                          {kanbanMode === 'screenshot' ? 'Try Interactive Demo' : 'Show Screenshot'}
                        </button>
                      )}
                    </div>
                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
