'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

interface SkillCategory {
  title: string;
  skills: string[];
  color: string;
  dotColor: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL', 'C', 'HTML/CSS'],
    color: '#FF2D7C',
    dotColor: '#FF2D7C'
  },
  {
    title: 'Frameworks',
    skills: ['React', 'Next.js', 'Vue.js', 'Node.js', 'Express.js', 'Fastify', 'Spring Boot', 'Django', 'FastAPI', 'REST API'],
    color: '#00D4FF',
    dotColor: '#00D4FF'
  },
  {
    title: 'Data & ML',
    skills: ['PyTorch', 'NumPy', 'Pandas', 'Matplotlib', 'Machine Learning'],
    color: '#9B5DE5',
    dotColor: '#9B5DE5'
  },
  {
    title: 'Tools & Databases',
    skills: ['AWS', 'Docker', 'Git', 'CI/CD', 'Redis', 'MySQL', 'PostgreSQL', 'MongoDB', 'Supabase', 'Bash', 'WebSockets', 'MCP'],
    color: '#FFE66D',
    dotColor: '#c99700'
  },
  {
    title: 'Testing',
    skills: ['Cypress', 'Selenium', 'JUnit5', 'Pytest'],
    color: '#00D4FF',
    dotColor: '#00D4FF'
  }
];

const rotations = ['1deg', '-1deg', '0.5deg', '-0.5deg', '1.5deg', '-1.5deg'];

const SkillsSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="skills" className="py-16">
      <h2
        className="font-bangers text-5xl mb-8 relative inline-block"
        style={{ color: theme === 'dark' ? '#FFF8E7' : '#0D0D0D' }}
      >
        Skills & Technologies
        <span
          className="absolute bottom-0 left-0 w-full h-2.5 -z-10"
          style={{
            background: '#00D4FF',
            transform: 'skewX(-10deg)'
          }}
        />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="p-6 rounded-lg relative transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1"
            style={{
              background: theme === 'dark' ? '#1a1a1a' : '#ffffff',
              border: `4px solid ${theme === 'dark' ? '#FFF8E7' : '#0D0D0D'}`,
              boxShadow: theme === 'dark' ? '8px 8px 0 #FF2D7C' : '8px 8px 0 #0D0D0D',
              transform: `rotate(${rotations[index]})`
            }}
          >
            {/* Decorative dots */}
            <div
              className="absolute top-2.5 right-2.5 w-[30px] h-[30px]"
              style={{
                background: `radial-gradient(circle, ${category.dotColor} 30%, transparent 30%),
                            radial-gradient(circle, ${category.dotColor} 30%, transparent 30%)`,
                backgroundSize: '10px 10px',
                backgroundPosition: '0 0, 5px 5px'
              }}
            />

            {/* Category Title */}
            <h3
              className="font-bangers text-2xl mb-4 flex items-center gap-2"
              style={{ color: theme === 'dark' ? '#FFF8E7' : '#0D0D0D' }}
            >
              <span
                className="w-4 h-4 rounded-full"
                style={{ background: category.dotColor }}
              />
              {category.title}
            </h3>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-110 hover:rotate-[5deg] hover:text-white"
                  style={{
                    color: category.color,
                    border: `2px solid ${category.color}`,
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = category.color;
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = category.color;
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;