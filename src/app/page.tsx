'use client';

import { useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';

const bursts = ['POW!', 'BAM!', 'ZAP!', 'BOOM!', 'THWIP!', 'CRACK!'];

export default function Home() {
  // Click burst effect
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const burst = document.createElement('div');
      burst.className = 'burst';
      burst.textContent = bursts[Math.floor(Math.random() * bursts.length)];
      burst.style.left = e.clientX + 'px';
      burst.style.top = e.clientY + 'px';
      document.body.appendChild(burst);
      setTimeout(() => burst.remove(), 500);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Scroll indicator visibility
  useEffect(() => {
    const indicator = document.getElementById('scrollIndicator');
    const handleScroll = () => {
      if (indicator) {
        indicator.style.opacity = window.scrollY > 100 ? '0' : '1';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Action lines overlay */}
      <div className="action-lines" id="actionLines" />

      {/* Glitch overlay */}
      <div className="glitch-overlay" id="glitchOverlay" />

      {/* Main content */}
      <div className="flex min-h-screen flex-col">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>

      {/* Scroll indicator */}
      <div
        id="scrollIndicator"
        className="scroll-indicator transition-opacity duration-300"
      >
        ↓ SCROLL ↓
      </div>
    </>
  );
}