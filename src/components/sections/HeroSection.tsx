'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Facebook, Instagram, Twitter, Download } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

const roles = [
  "Frontend Developer",
  "Full Stack Developer",
  "Data Analyst"
];

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/niloy-saha-123',
    color: 'hover:text-gray-700 dark:hover:text-gray-400'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/niloysaha24/',
    color: 'hover:text-blue-600 dark:hover:text-blue-400'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://www.facebook.com/niloy.24.2004/',
    color: 'hover:text-blue-700 dark:hover:text-blue-600'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/__niloy__06/',
    color: 'hover:text-pink-600 dark:hover:text-pink-500'
  },
  {
    name: 'X',
    icon: Twitter,
    url: 'https://x.com/__niloy__06',
    color: 'hover:text-gray-800 dark:hover:text-sky-400'
  }
];

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsVisible(true);
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
    <section className={`relative min-h-screen overflow-hidden ${theme === 'dark' ? 'bg-[#0B1121]' : 'bg-gray-50'} flex items-center transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center px-6">
          <div
            className={`space-y-2 transform transition-all duration-1000 ${
              isVisible ? 'translate-x-2 opacity-100' : '-translate-x-full opacity-0'
            }`}
          >
            <div className="space-y-1">
              <h2 className={`text-5xl ${theme === 'dark' ? 'text-blue-500' : 'text-blue-600'} leading-snug transition-colors duration-300`}>Hi, I am</h2>
              <h1 className={`text-8xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} tracking-tight leading-tight transition-colors duration-300`}>Niloy Saha</h1>
              <div className="h-20 flex items-center">
                <div className="text-4xl font-medium">
                  <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>I am a </span>
                  <span className={`${theme === 'dark' ? 'text-blue-500' : 'text-blue-600'} transition-colors duration-300`}>
                    {displayText}
                    <span className="animate-blink">|</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex space-x-6 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} transition-all duration-300 transform hover:-translate-y-1 ${social.color}`}
                >
                  <social.icon size={36} />
                </a>
              ))}
            </div>

            <div className="pt-6">
              <a
                href="/resume.pdf"
                download="Niloy_Saha_Resume.pdf"
                className={`inline-flex items-center space-x-2 px-5 py-3 ${
                  theme === 'dark' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'
                } text-white rounded-lg transition-colors duration-300`}
              >
                <span>Resume</span>
                <Download size={22} />
              </a>
            </div>
          </div>

          <div
            className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-2 opacity-100' : 'translate-x-full opacity-0'
            }`}
          >
            <div className="relative w-[480px] h-[480px] mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 animate-pulse" />
              <div className={`absolute inset-6 rounded-full ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } shadow-lg overflow-hidden transition-colors duration-300`}>
                <Image
                  src="/images/Subject.png"
                  alt="Niloy Saha"
                  fill
                  className="object-cover object-top rounded-full p-1"
                  priority
                />
              </div>
              <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-blue-500/10 to-purple-500/10 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;