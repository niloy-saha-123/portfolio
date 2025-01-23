'use client';

import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

interface NavItem {
 name: string;
 href: string;
}

const Header: React.FC = () => {
 const [isOpen, setIsOpen] = useState<boolean>(false);
 const { theme, toggleTheme } = useTheme();

 const navItems: NavItem[] = [
   { name: 'Home', href: '#home' },
   { name: 'About', href: '#about' },
   { name: 'Education', href: '#education' },
   { name: 'Experience', href: '#experience' },
   { name: 'Skills', href: '#skills' },
   { name: 'Projects', href: '#projects' },
   { name: 'Contact', href: '#contact' }
 ];

 return (
   <>
     <header className="fixed top-0 left-0 right-0 h-16 bg-[var(--header-bg)] backdrop-blur-sm z-[100]">
       <nav className="h-full border-b border-[var(--border-color)]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
           <div className="flex items-center justify-between h-full">
             <div className="flex-shrink-0">
               <Link 
                 href="/" 
                 className="text-xl font-bold text-[var(--accent)]"
               >
                 NS
               </Link>
             </div>

             <div className="hidden md:flex md:items-center md:space-x-8">
               {navItems.map((item) => (
                 <Link
                   key={item.name}
                   href={item.href}
                   className="relative group text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300"
                 >
                   {item.name}
                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent)] group-hover:w-full transition-all duration-300" />
                 </Link>
               ))}
               
               <button
                 onClick={toggleTheme}
                 className="p-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200"
                 aria-label="Toggle theme"
               >
                 {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
               </button>
             </div>

             <div className="md:hidden flex items-center space-x-4">
               <button
                 onClick={toggleTheme}
                 className="p-2 text-[var(--text-secondary)] hover:text-[var(--accent)]"
                 aria-label="Toggle theme"
               >
                 {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
               </button>
               <button
                 onClick={() => setIsOpen(!isOpen)}
                 className="text-[var(--text-secondary)] hover:text-[var(--accent)]"
                 aria-label="Toggle menu"
               >
                 {isOpen ? <X size={24} /> : <Menu size={24} />}
               </button>
             </div>
           </div>
         </div>
       </nav>
     </header>

     {isOpen && (
       <div className="fixed top-16 left-0 right-0 z-[99] bg-[var(--header-bg)]">
         <div className="py-4 border-t border-[var(--border-color)]">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex flex-col space-y-2">
               {navItems.map((item) => (
                 <Link
                   key={item.name}
                   href={item.href}
                   className="relative group text-[var(--text-secondary)] px-4 py-2 hover:bg-[var(--card-hover)] rounded-lg transition-colors duration-300"
                   onClick={() => setIsOpen(false)}
                 >
                   <span className="relative">
                     {item.name}
                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent)] group-hover:w-full transition-all duration-300" />
                   </span>
                 </Link>
               ))}
             </div>
           </div>
         </div>
       </div>
     )}

     <div className="h-16" />
   </>
 );
};

export default Header;