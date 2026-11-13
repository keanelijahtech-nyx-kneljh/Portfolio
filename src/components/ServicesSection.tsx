import React from 'react';
import { motion } from 'motion/react';
import { Workflow, Cpu, UserCheck, LayoutGrid } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/portfolioData';

export const ServicesSection: React.FC = () => {
  const renderIcon = (iconName: ServiceItem['iconName']) => {
    switch (iconName) {
      case 'workflow':
        return <Workflow className="w-5 h-5 text-[#FA5428]" aria-hidden="true" />;
      case 'ai':
        return <Cpu className="w-5 h-5 text-[#FA5428]" aria-hidden="true" />;
      case 'leads':
        return <UserCheck className="w-5 h-5 text-[#FA5428]" aria-hidden="true" />;
      case 'app':
      default:
        return <LayoutGrid className="w-5 h-5 text-[#FA5428]" aria-hidden="true" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-24 bg-[#16191E] border-t border-[#242931]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-medium tracking-wider uppercase text-[#FA5428] mb-2">
              Services
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5F3] tracking-tight text-balance">
              Practical Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {SERVICES_DATA.map((service, index) => (
              <article
                key={service.id}
                className="group bg-[#1D2229] border border-[#2F3640] hover:border-[#FA5428]/50 rounded-xl p-5 sm:p-6 shadow-sm shadow-black/25 transition-all duration-200 hover:-translate-y-0.5 flex flex-col"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[#FA5428]/10 border border-[#FA5428]/25 flex items-center justify-center shrink-0">
                    {renderIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono text-[#6B7280] tabular-nums">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-[#F5F5F3] tracking-tight mb-2 group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-[#A1A8B3] leading-relaxed">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
