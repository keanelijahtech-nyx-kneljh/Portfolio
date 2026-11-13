import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-24 bg-[#181B20] border-t border-[#242931]">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
        >
          {/* Left Column: Biography */}
          <div className="lg:col-span-7">
            <p className="text-xs font-medium tracking-wider uppercase text-[#FA5428] mb-2">
              About
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5F3] tracking-tight leading-snug mb-6 text-balance">
              {PORTFOLIO_INFO.aboutHeading}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#A1A8B3] leading-relaxed">
              {PORTFOLIO_INFO.aboutParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right Column: Clean Hairline Credentials List */}
          <div className="lg:col-span-5">
            <dl className="divide-y divide-[#262C34] border-y border-[#262C34]">
              {PORTFOLIO_INFO.credentials.map((item) => (
                <div key={item.label} className="py-3.5 flex items-baseline justify-between gap-4">
                  <dt className="text-xs font-medium text-[#9CA3AF] shrink-0">
                    {item.label}
                  </dt>
                  <dd className="text-sm font-medium text-[#F5F5F3] text-right">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
