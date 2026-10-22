import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechnologyStrip } from './components/TechnologyStrip';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { VibeCodedSection } from './components/VibeCodedSection';
import { SkillsSection } from './components/SkillsSection';
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
    <div className="min-h-screen bg-[#1F2328] text-[#F5F5F3] flex flex-col font-sans selection:bg-[#FA5428] selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenContact={handleOpenContact}
          onExploreProjects={handleExploreProjects}
        />

        {/* Technology Logo / Tools Strip */}
        <TechnologyStrip />

        {/* About Me Section */}
        <AboutSection />

        {/* Automation Projects (3 Dedicated Make.com Scenarios) */}
        <ProjectsSection
          onSelectProject={setSelectedProject}
          onPreviewImage={handlePreviewImage}
        />

        {/* Separate Vibe-Coded Apps & Websites Section (Google Tasks Kanban) */}
        <VibeCodedSection
          onSelectProject={setSelectedProject}
          onPreviewImage={handlePreviewImage}
        />

        {/* Skills Section */}
        <SkillsSection />

        {/* Contact / Let's Connect Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full-Detail Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onPreviewImage={handlePreviewImage}
      />

      {/* High-Resolution Workflow Image Viewer Modal */}
      <ImageViewerModal
        image={previewImage ? previewImage.image : null}
        title={previewImage ? previewImage.title : null}
        onClose={() => setPreviewImage(null)}
      />
    </div>
  );
}
