'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

const AboutSection: React.FC = () => {
  const { theme } = useTheme();

  const details = [
    { icon: '💼', text: 'Experience: Software Development, Data Analysis' },
    { icon: '📍', text: 'Location: Carlisle, PA' },
    { icon: '📧', text: 'Email: sahan@dickinson.edu' },
  ];

  return (
    <section id="about" className="py-16">
      <h2
        className="font-bangers text-5xl mb-8 relative inline-block"
        style={{ color: theme === 'dark' ? '#FFF8E7' : '#0D0D0D' }}
      >
        About Me
        <span
          className="absolute bottom-0 left-0 w-full h-2.5 -z-10"
          style={{
            background: '#00D4FF',
            transform: 'skewX(-10deg)'
          }}
        />
      </h2>

      <div
        className="rounded-lg p-8 relative transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1"
        style={{
          background: theme === 'dark' ? '#1a1a1a' : '#ffffff',
          border: `4px solid ${theme === 'dark' ? '#FFF8E7' : '#0D0D0D'}`,
          boxShadow: theme === 'dark' ? '8px 8px 0 #FF2D7C' : '8px 8px 0 #0D0D0D',
          transform: 'rotate(-1deg)'
        }}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Text */}
          <div
            className="font-comic text-lg leading-relaxed"
            style={{ color: theme === 'dark' ? '#FFF8E7' : '#0D0D0D' }}
          >
            <p>
              I am a Computer Science and Data Analytics student at Dickinson College with a passion for AI, machine learning, and large language models (LLMs). With experience in full-stack development and data analysis, I combine technical expertise and creative problem-solving to build innovative, impactful solutions.
            </p>
          </div>

          {/* Detail Items */}
          <div className="flex flex-col gap-4">
            {details.map((detail, index) => (
              <div
                key={index}
                className="flex items-center gap-4 px-6 py-4 rounded-lg font-bold text-white"
                style={{
                  background: 'linear-gradient(135deg, #FF2D7C 0%, #9B5DE5 100%)',
                  transform: 'skewX(-5deg)'
                }}
              >
                <span style={{ transform: 'skewX(5deg)' }}>
                  {detail.icon} {detail.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;