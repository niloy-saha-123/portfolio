'use client';

import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface SocialLink {
  name: string;
  icon: React.ComponentType<{ size?: number }>;
  url: string;
}

const roles = ["Software Developer", "Backend Developer", "Data Analyst"];
const speechPhrases = ["Hello!", "I am Niloy", "Nice to meet you"];

const socialLinks: SocialLink[] = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/niloy-saha-123' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/niloysaha24/' },
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/niloy.24.2004/' },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/__niloy__06/' },
  { name: 'X', icon: Twitter, url: 'https://x.com/__niloy__06' },
];

const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const { theme } = useTheme();

  // Character Speech Bubble State
  const [speechIndex, setSpeechIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSpeechIndex((prev) => (prev + 1) % speechPhrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const role = roles[currentRole];
    const updateText = () => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(role.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timeoutId = setTimeout(updateText, isDeleting ? 50 : 100);
    return () => clearTimeout(timeoutId);
  }, [currentRole, displayText, isDeleting]);

  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center relative px-4 sm:px-0"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-8">
        {/* Left: Text Content */}
        <div className="relative z-10 flex-1">
          {/* Intro */}
          <p
            className="font-comic text-3xl font-bold mb-2"
            style={{ color: '#9B5DE5' }}
          >
            Hi, I am
          </p>

          {/* Name with comic text shadow */}
          <h1
            className="font-bangers leading-[0.9] mb-4"
            style={{
              fontSize: 'clamp(4rem, 12vw, 8rem)',
              color: theme === 'dark' ? '#FFF8E7' : '#0D0D0D',
              textShadow: '4px 4px 0 #FF2D7C, 8px 8px 0 #00D4FF, 12px 12px 0 #9B5DE5',
              animation: 'heroGlitch 3s infinite'
            }}
          >
            Niloy Saha
          </h1>

          {/* Typing Animation */}
          <div className="flex items-center mt-4 min-h-[3rem]">
            <span
              className="font-marker text-3xl"
              style={{
                background: 'linear-gradient(90deg, #FF2D7C, #9B5DE5, #00D4FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '200% 100%',
                animation: 'gradientShift 3s ease infinite'
              }}
            >
              {displayText}
            </span>
            <span
              className="inline-block w-1 h-9 ml-1.5 align-middle"
              style={{
                background: '#00D4FF',
                animation: 'cursorBlink 0.7s infinite',
                boxShadow: '0 0 10px #00D4FF, 0 0 20px #00D4FF'
              }}
            />
          </div>

          {/* Description */}
          <p
            className="font-comic text-xl max-w-[520px] mt-6 leading-relaxed"
            style={{ color: theme === 'dark' ? '#FFF8E7' : '#0D0D0D' }}
          >
            Computer Science & Data Analytics student at Dickinson College,
            specializing in full-stack and backend development, systems infrastructure,
            AI/ML, and building production-grade solutions.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-8">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-2xl transition-all duration-300 hover:-translate-y-1 hover:rotate-[10deg]"
                  style={{
                    border: `3px solid ${theme === 'dark' ? '#FFF8E7' : '#0D0D0D'}`,
                    background: theme === 'dark' ? 'transparent' : '#FFF8E7',
                    color: theme === 'dark' ? '#FFF8E7' : '#0D0D0D'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#FF2D7C';
                    e.currentTarget.style.borderColor = '#FF2D7C';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = theme === 'dark' ? 'transparent' : '#FFF8E7';
                    e.currentTarget.style.borderColor = theme === 'dark' ? '#FFF8E7' : '#0D0D0D';
                    e.currentTarget.style.color = theme === 'dark' ? '#FFF8E7' : '#0D0D0D';
                  }}
                  title={social.name}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 font-bangers text-xl text-white transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px]"
            style={{
              background: '#FF2D7C',
              border: '4px solid #0D0D0D',
              boxShadow: '6px 6px 0 #0D0D0D'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '9px 9px 0 #0D0D0D';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '6px 6px 0 #0D0D0D';
            }}
          >
            <span>📄</span>
            <span>Download Resume</span>
          </a>
        </div>

        {/* Right: Character Animation */}
        <div className="relative z-10 flex flex-col items-center flex-shrink-0">
          {/* Comic Speech Bubble */}
          {/* Character Animation & Speech Bubble */}
          <div
            className="relative"
            style={{
              animation: 'bubbleFloat 3s ease-in-out infinite'
            }}
          >
            <div
              className="font-bangers text-4xl tracking-wider px-8 py-4 rounded-3xl relative transition-all duration-300 transform"
              style={{
                background: theme === 'dark' ? '#FFF8E7' : '#ffffff',
                border: `4px solid ${theme === 'dark' ? '#FFF8E7' : '#0D0D0D'}`,
                boxShadow: `6px 6px 0 #FF2D7C`,
                color: '#FF2D7C',
                textShadow: '2px 2px 0 #00D4FF',
                transform: 'rotate(-3deg)',
                minWidth: '200px',
                textAlign: 'center'
              }}
            >
              <span className="animate-fade-in block" key={speechIndex}>
                {speechPhrases[speechIndex]}
              </span>

              {/* Bubble tail */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2"
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: '16px solid transparent',
                  borderRight: '16px solid transparent',
                  borderTop: `16px solid ${theme === 'dark' ? '#FFF8E7' : '#0D0D0D'}`,
                }}
              />
              <div
                className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 z-10"
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: '12px solid transparent',
                  borderRight: '12px solid transparent',
                  borderTop: `12px solid ${theme === 'dark' ? '#FFF8E7' : '#ffffff'}`,
                }}
              />
            </div>
          </div>

          {/* Character Video */}
          <div
            className="relative"
            style={{
              width: 'clamp(220px, 30vw, 420px)',
              height: 'clamp(220px, 30vw, 420px)',
              filter: 'drop-shadow(6px 8px 12px rgba(0,0,0,0.3))',
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
            >
              <source src="/character.webm" type="video/webm" />
              {/* MP4 fallback — white bg won't be transparent but still shows */}
              <source src="/portfolio_video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;