import React, { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { ToolsSection } from './components/ToolsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ImageViewerModal } from './components/ImageViewerModal';
import { Project } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [previewImage, setPreviewImage] = useState<{ image: string; title: string } | null>(null);

  const handleOpenContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreProjects = () => {
    const projectsElement = document.getElementById('projects');
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePreviewImage = (image: string, title: string) => {
    setPreviewImage({ image, title });
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#14171A] text-[#F5F5F3] flex flex-col font-sans selection:bg-[#FA5428] selection:text-white">
        <Navbar />

        <main className="flex-1">
          <Hero
            onOpenContact={handleOpenContact}
            onExploreProjects={handleExploreProjects}
          />

          <ServicesSection />

          <ProjectsSection
            onSelectProject={setSelectedProject}
            onPreviewImage={handlePreviewImage}
          />

          <AboutSection />

          <ToolsSection />

          <ContactSection />
        </main>

        <Footer />

        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onPreviewImage={handlePreviewImage}
        />

        <ImageViewerModal
          image={previewImage ? previewImage.image : null}
          title={previewImage ? previewImage.title : null}
          onClose={() => setPreviewImage(null)}
        />
      </div>
    </MotionConfig>
  );
}
