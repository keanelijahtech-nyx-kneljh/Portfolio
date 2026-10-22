import React, { useState } from 'react';
import { AUTOMATION_PROJECTS, Project } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  onPreviewImage: (image: string, title: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onPreviewImage
}) => {
  const [filter, setFilter] = useState<'All' | 'Completed' | 'In Progress'>('All');

  const filteredProjects = filter === 'All'
    ? AUTOMATION_PROJECTS
    : AUTOMATION_PROJECTS.filter(p => p.status === filter);

  return (
    <section id="projects" className="py-20 lg:py-24 bg-[#1F2328] bg-grid-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono font-medium tracking-widest text-[#FA5428] uppercase mb-2.5 block">
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Automation Projects
            </h2>
            <p className="mt-3 text-base text-[#B4BAC2] max-w-xl leading-relaxed">
              Practical workflows designed to solve real operational problems. Tested scenarios with verified routing logic.
            </p>
          </div>

          {/* Filter Segmented Control */}
          <div className="flex items-center gap-1.5 p-1 bg-[#15181C] border border-[#333942] rounded-lg shrink-0">
            {(['All', 'Completed', 'In Progress'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  filter === tab
                    ? 'bg-[#FA5428] text-white font-semibold shadow-sm'
                    : 'text-[#B4BAC2] hover:text-white'
                }`}
              >
                {tab === 'All' ? 'All (3)' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards */}
        <div className="space-y-10">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-[#15181C] border border-[#333942] hover:border-[#FA5428]/50 rounded-xl overflow-hidden shadow-lg transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                
                {/* Visual Area (Actual Screenshot) */}
                <div
                  onClick={() => onSelectProject(project)}
                  className="lg:col-span-6 bg-[#111317] border-b lg:border-b-0 lg:border-r border-[#333942] p-4 sm:p-6 flex items-center justify-center cursor-pointer group"
                >
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    referrerPolicy="no-referrer"
                    className="max-h-[300px] w-auto max-w-full object-contain rounded-lg border border-[#2D333B] transition-transform duration-200 group-hover:scale-[1.01]"
                  />
                </div>

                {/* Brief Content Area */}
                <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  {/* Category & Status */}
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="text-xs font-mono font-medium text-[#FA5428] uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-[#6E7681] text-xs">·</span>
                    <span className={`text-xs font-mono px-2 py-0.5 rounded font-medium ${
                      project.status === 'Completed'
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : 'bg-amber-500/10 text-amber-300'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => onSelectProject(project)}
                    className="text-2xl font-bold text-white tracking-tight mb-3 hover:text-[#FA5428] transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  {/* Concise Description */}
                  <p className="text-sm sm:text-base text-[#B4BAC2] leading-relaxed mb-6">
                    {project.shortDescription}
                  </p>

                  {/* Relevant Technologies */}
                  <div className="mb-7">
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map(tool => (
                        <span
                          key={tool}
                          className="text-xs font-mono px-2.5 py-1 rounded bg-[#1C2027] text-[#D2D9E1] border border-[#2F3540]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Single Clear Action */}
                  <div>
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium text-white bg-[#FA5428] hover:bg-[#E1441B] rounded-lg transition-colors shadow-sm"
                    >
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
