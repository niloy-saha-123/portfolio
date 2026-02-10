'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

interface NavItem {
  name: string;
  href: string;
}

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[100] px-4 sm:px-8 flex justify-between items-center transition-all duration-300"
        style={{
          height: scrolled ? '5rem' : '4rem',
          background: theme === 'dark'
            ? `linear-gradient(180deg, #0D0D0D 0%, #0D0D0D ${scrolled ? '60%' : '0%'}, transparent 100%)`
            : `linear-gradient(180deg, #FFF8E7 0%, #FFF8E7 ${scrolled ? '60%' : '0%'}, transparent 100%)`,
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-bangers text-4xl tracking-wider"
          style={{
            color: '#FF2D7C',
            textShadow: '3px 3px 0 #00D4FF, 6px 6px 0 #0D0D0D'
          }}
        >
          NILOY
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 list-none">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="font-bangers text-xl relative transition-transform duration-200 hover:scale-110 hover:-rotate-2 hover:text-[#FF2D7C] group"
                  style={{ color: theme === 'dark' ? '#FFF8E7' : '#0D0D0D' }}
                >
                  {item.name}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-[3px] bg-[#00D4FF] transition-all duration-300 group-hover:w-full"
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-2xl transition-transform duration-300 hover:rotate-180"
            style={{
              background: theme === 'dark' ? '#FFF8E7' : '#0D0D0D',
              boxShadow: '4px 4px 0 ' + (theme === 'dark' ? '#FF2D7C' : '#0D0D0D')
            }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </nav>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
            style={{
              background: theme === 'dark' ? '#FFF8E7' : '#0D0D0D'
            }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2"
            style={{ color: theme === 'dark' ? '#FFF8E7' : '#0D0D0D' }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="fixed top-16 left-0 right-0 z-[99] py-4"
          style={{
            background: theme === 'dark' ? '#0D0D0D' : '#FFF8E7',
            borderTop: `3px solid ${theme === 'dark' ? '#FFF8E7' : '#0D0D0D'}`
          }}
        >
          <div className="max-w-7xl mx-auto px-8">
            <ul className="flex flex-col gap-2 list-none">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="font-bangers text-2xl block py-3 px-4 rounded-lg transition-colors"
                    style={{
                      color: theme === 'dark' ? '#FFF8E7' : '#0D0D0D'
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;