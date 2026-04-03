// src/app/page.tsx
import React from 'react';
import Navbar from '@/components/sections/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import IntroOverlay from '@/components/sections/IntroOverlay';

const HomePage = () => {
  return (
    <main className="relative">
      {/* <IntroOverlay /> */}
      <Navbar />
      <HeroSection />
      {/* <ExperienceSection /> */}
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;
