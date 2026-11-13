import React from 'react';
import { motion } from 'motion/react';
import { Workflow, Database, Sparkles, Code2 } from 'lucide-react';
import { TECH_CATEGORIES } from '../data/portfolioData';

const CategoryIcon: React.FC<{ categoryId: string }> = ({ categoryId }) => {
  const iconClass = 'w-4 h-4 text-[#FA5428] shrink-0';
  switch (categoryId) {
    case 'automation-integration':
      return <Workflow className={iconClass} aria-hidden="true" />;
    case 'crm-business':
      return <Database className={iconClass} aria-hidden="true" />;
    case 'ai-platforms':
      return <Sparkles className={iconClass} aria-hidden="true" />;
    case 'development':
    default:
      return <Code2 className={iconClass} aria-hidden="true" />;
  }
};

export const ToolsSection: React.FC = () => {
  return (
    <section id="tools" className="py-16 lg:py-20 bg-[#14171A] border-t border-[#242931]">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-medium tracking-wider uppercase text-[#FA5428] mb-2">
                Tools &amp; Technologies
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5F3] tracking-tight">
                Core Stack
              </h2>
            </div>

            <p className="text-xs text-[#9CA3AF]">
              <span className="text-[#F5F5F3] font-medium">Hands-on</span> · Used in builds &nbsp;/&nbsp;{' '}
              <span className="text-[#F5F5F3] font-medium">Familiar</span> · Practiced &nbsp;/&nbsp;{' '}
              <span className="text-[#F5F5F3] font-medium">Exploring</span> · Learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {TECH_CATEGORIES.map((category) => (
              <div key={category.id} className="space-y-3">
                <div className="flex items-center gap-2.5 pb-2.5 border-b border-[#262C34]">
                  <CategoryIcon categoryId={category.id} />
                  <h3 className="text-sm font-semibold text-[#F5F5F3] tracking-tight">
                    {category.title}
                  </h3>
                </div>

                <ul className="divide-y divide-[#20252C]">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="py-2 flex items-center justify-between gap-4 text-sm"
                    >
                      <span className="text-[#D1D5DB]">{item.name}</span>
                      <span
                        className={`text-xs ${
                          item.level === 'Hands-on'
                            ? 'text-emerald-400/90'
                            : item.level === 'Familiar'
                            ? 'text-[#9CA3AF]'
                            : 'text-amber-300/90'
                        }`}
                      >
                        {item.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
