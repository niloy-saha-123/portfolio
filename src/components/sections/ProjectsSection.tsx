'use client';

import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  github?: string;
  link?: string;
  burstText: string;
  burstColor: string;
}

const projects: Project[] = [
  {
    title: 'TripSmith',
    subtitle: 'AI Group Travel Planning Platform',
    description: 'Real-time agentic group travel planner with AI-powered itinerary generation based on budget and preferences. Concurrency-safe FastAPI with Supabase auth/state, integrating a Dedalus MCP agent.',
    technologies: ['FastAPI', 'Python', 'PostgreSQL', 'Supabase', 'Dedalus MCP'],
    github: 'https://github.com/HackPrinceton2025/TravelProject',
    link: 'https://travel-project-dun-seven.vercel.app/',
    burstText: 'POW!',
    burstColor: '#FFE66D'
  },
  {
    title: 'Veritas',
    subtitle: 'AI-Powered Codebase Review & Doc Verification',
    description: 'Documentation verification system that flags code-doc mismatches on PRs using embeddings and LLM analysis. Token-efficient prompt engineering reduces API cost by ~88%.',
    technologies: ['FastAPI', 'Python', 'React', 'Google Gemini', 'Sentence Transformers'],
    github: 'https://github.com/niloy-saha-123/veritas',
    link: 'https://veritas-alpha.vercel.app/',
    burstText: 'ZAP!',
    burstColor: '#00D4FF'
  },
  {
    title: 'FyndMate',
    subtitle: 'Developer Matching App',
    description: 'Supabase + Fastify backend mobile app handling matching, authentication, chat system and fast feed generation. Redis caching, rate limiting, and privacy-safe location handling.',
    technologies: ['Fastify', 'Node.js', 'TypeScript', 'React Native', 'Expo', 'Supabase', 'Redis', 'PostgreSQL'],
    github: 'https://github.com/niloy-saha-123/FyndMate',
    burstText: 'BAM!',
    burstColor: '#FF2D7C'
  },
  {
    title: 'Rental',
    subtitle: 'Full-Stack Peer-to-Peer Rental Marketplace',
    description: 'Architecting a type-safe web application for equipment rental marketplace with Next.js, tRPC, Prisma, and PostgreSQL. Features secure authentication and real-time updates.',
    technologies: ['Next.js', 'React', 'TypeScript', 'tRPC', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com/niloy-saha-123/Rental',
    burstText: 'WHAM!',
    burstColor: '#9B5DE5'
  },
  {
    title: 'WatchNext',
    subtitle: 'Full-Stack Media Tracker',
    description: 'Decoupled full-stack application for tracking watched movies and TV shows. Integrates TMDB API for comprehensive media metadata.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/niloy-saha-123/WatchNext',
    burstText: 'BOOM!',
    burstColor: '#FFE66D'
  },
  {
    title: 'StudyBuddy',
    subtitle: 'AI-Powered Learning Platform',
    description: 'AI platform transforming lecture content into structured study materials. Features live transcription and 98% accuracy rate. 50+ active users.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AI APIs', 'Clerk'],
    github: 'https://github.com/niloy-saha-123/StudyBuddy',
    link: 'https://studybuddy-e7ys.onrender.com/',
    burstText: 'KAPOW!',
    burstColor: '#00D4FF'
  }
];

const ProjectsSection: React.FC = () => {
  const { theme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-16">
      <h2
        className="font-bangers text-5xl mb-8 relative inline-block"
        style={{ color: theme === 'dark' ? '#FFF8E7' : '#0D0D0D' }}
      >
        Projects
        <span
          className="absolute bottom-0 left-0 w-full h-2.5 -z-10"
          style={{
            background: '#00D4FF',
            transform: 'skewX(-10deg)'
          }}
        />
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 sm:p-8 rounded-lg relative overflow-hidden transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1"
            style={{
              background: theme === 'dark' ? '#1a1a1a' : '#ffffff',
              border: `4px solid ${theme === 'dark' ? '#FFF8E7' : '#0D0D0D'}`,
              boxShadow: theme === 'dark' ? '8px 8px 0 #FF2D7C' : '8px 8px 0 #0D0D0D'
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Decorative dots */}
            <div
              className="absolute top-2.5 right-2.5 w-[30px] h-[30px]"
              style={{
                background: `radial-gradient(circle, #FF2D7C 30%, transparent 30%),
                            radial-gradient(circle, #FF2D7C 30%, transparent 30%)`,
                backgroundSize: '10px 10px',
                backgroundPosition: '0 0, 5px 5px'
              }}
            />

            {/* Burst Text on Hover */}
            <span
              className="absolute -top-5 -right-5 font-bangers text-2xl transition-all duration-300 pointer-events-none"
              style={{
                color: project.burstColor,
                textShadow: '2px 2px 0 #0D0D0D',
                transform: `rotate(15deg) scale(${hoveredIndex === index ? 1.2 : 0})`,
                opacity: hoveredIndex === index ? 1 : 0
              }}
            >
              {project.burstText}
            </span>



            {/* Project Title */}
            <h3
              className="font-bangers text-3xl mb-1"
              style={{ color: theme === 'dark' ? '#FFF8E7' : '#0D0D0D' }}
            >
              {project.title}
            </h3>

            {/* Subtitle */}
            <p
              className="font-comic font-bold mb-4"
              style={{ color: '#FF2D7C' }}
            >
              {project.subtitle}
            </p>

            {/* Description */}
            <p
              className="font-comic leading-relaxed mb-4"
              style={{ color: theme === 'dark' ? '#FFF8E7' : '#0D0D0D' }}
            >
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 text-sm rounded"
                  style={{
                    background: theme === 'dark' ? '#FFF8E7' : '#0D0D0D',
                    color: theme === 'dark' ? '#0D0D0D' : '#ffffff'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold transition-transform duration-200 hover:translate-x-1"
                  style={{ color: '#FF2D7C' }}
                >
                  <Github size={16} />
                  View Code
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold transition-transform duration-200 hover:translate-x-1"
                  style={{ color: '#FF2D7C' }}
                >
                  <ExternalLink size={16} />
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;