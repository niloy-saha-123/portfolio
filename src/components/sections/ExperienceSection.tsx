'use client';

import React, { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  color: string;
  burst: string;
}

const experiences: Experience[] = [
  {
    title: "Web Development Intern",
    company: "FarmData2 (Open Source)",
    location: "Carlisle, PA",
    period: "May 2025 – Jul. 2025",
    description: [
      "Engineered a new \"Passes\" feature across backend logic and Vue.js components, collaborating with maintainers and end users to reduce data entry time by 15% for over 5,000 active farmers.",
      "Built modular, reusable Vue.js components and a scalable navigation hub improving usability across mobile and desktop clients.",
      "Enhanced reliability by creating a Docker-based CI/CD pipeline with automated testing, enabling faster iteration and production deployments."
    ],
    color: '#FF2D7C',
    burst: 'POW!'
  },
  {
    title: "Software Development Intern",
    company: "Development Initiative for Social Awareness (DISA)",
    location: "Dhaka, Bangladesh",
    period: "Jul. 2024 – Aug. 2024",
    description: [
      "Designed REST APIs and implemented Java/Spring Boot backend services for a web platform serving 50,000+ accounts, developing transactional workflows with precise calculation logic and data validation.",
      "Optimized database performance by indexing high-traffic MySQL tables and restructuring queries, reducing latency from 1.8s to 0.35s and improving user experience under heavy load.",
      "Collaborated with cross-functional teams in an agile environment to ship features, validate requirements, and refine user-facing functionality."
    ],
    color: '#00D4FF',
    burst: 'ZAP!'
  },
  {
    title: "Student Researcher",
    company: "84 Lumber",
    location: "Carlisle, PA",
    period: "Nov. 2023 – Mar. 2024",
    description: [
      "Built an NLP pipeline translating legacy C Basic code into Python/Java, successfully updating 30% of the codebase.",
      "Added unit tests and documented edge cases to strengthen correctness and long-term maintainability."
    ],
    color: '#9B5DE5',
    burst: 'BAM!'
  }
];

const rotations = ['1.5deg', '-1deg', '0.8deg'];

const ExperienceSection: React.FC = () => {
  const { theme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-16">
      <h2
        className="font-bangers text-5xl mb-8 relative inline-block"
        style={{ color: theme === 'dark' ? '#FFF8E7' : '#0D0D0D' }}
      >
        Work Experience
        <span
          className="absolute bottom-0 left-0 w-full h-2.5 -z-10"
          style={{
            background: '#9B5DE5',
            transform: 'skewX(-10deg)'
          }}
        />
      </h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-4 sm:p-8 rounded-lg relative overflow-hidden transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1"
            style={{
              background: theme === 'dark' ? '#1a1a1a' : '#ffffff',
              border: `4px solid ${theme === 'dark' ? '#FFF8E7' : '#0D0D0D'}`,
              boxShadow: `8px 8px 0 ${exp.color}`,
              transform: `rotate(${rotations[index]})`
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Colored accent bar on left */}
            <div
              className="absolute left-0 top-0 bottom-0 w-2"
              style={{ background: exp.color }}
            />

            {/* Decorative dots */}
            <div
              className="absolute top-2.5 right-2.5 w-[30px] h-[30px]"
              style={{
                background: `radial-gradient(circle, ${exp.color} 30%, transparent 30%),
                            radial-gradient(circle, ${exp.color} 30%, transparent 30%)`,
                backgroundSize: '10px 10px',
                backgroundPosition: '0 0, 5px 5px'
              }}
            />

            {/* Burst Text on Hover */}
            <span
              className="absolute top-4 right-16 font-bangers text-3xl transition-all duration-300 pointer-events-none"
              style={{
                color: exp.color,
                textShadow: '2px 2px 0 #0D0D0D',
                transform: `rotate(15deg) scale(${hoveredIndex === index ? 1.2 : 0})`,
                opacity: hoveredIndex === index ? 1 : 0
              }}
            >
              {exp.burst}
            </span>

            <div className="pl-4">
              {/* Header row */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3
                    className="font-bangers text-3xl mb-1"
                    style={{ color: theme === 'dark' ? '#FFF8E7' : '#0D0D0D' }}
                  >
                    {exp.title}
                  </h3>
                  <p
                    className="font-comic font-bold text-xl"
                    style={{ color: exp.color }}
                  >
                    {exp.company}
                  </p>
                </div>

                {/* Period badge */}
                <div
                  className="px-4 py-2 font-bangers text-lg text-white rounded"
                  style={{
                    background: exp.color,
                    transform: 'skewX(-5deg)'
                  }}
                >
                  <span style={{ transform: 'skewX(5deg)', display: 'inline-block' }}>
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Location */}
              <p
                className="font-comic text-sm mb-4 flex items-center gap-2"
                style={{ color: theme === 'dark' ? '#aaa' : '#666' }}
              >
                📍 {exp.location}
              </p>

              {/* Description bullets */}
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 font-comic"
                    style={{ color: theme === 'dark' ? '#FFF8E7' : '#0D0D0D' }}
                  >
                    <span
                      className="text-lg mt-0.5"
                      style={{ color: exp.color }}
                    >
                      ⚡
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;