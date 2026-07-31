'use client';

import { useState } from 'react';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 transition"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <span className="text-2xl">✕</span>
        ) : (
          <span className="text-2xl">☰</span>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[var(--background)] border-b border-zinc-200 dark:border-white/10 shadow-lg z-50">
          <div className="flex flex-col items-center gap-6 py-8 text-sm uppercase tracking-widest">
            <a href="#about" onClick={toggleMenu} className="hover:opacity-70 transition">About</a>
            <a href="#projects" onClick={toggleMenu} className="hover:opacity-70 transition">Projects</a>
            <a href="#experience" onClick={toggleMenu} className="hover:opacity-70 transition">Experience</a>
            <a href="#contact" onClick={toggleMenu} className="hover:opacity-70 transition">Contact</a>
          </div>
        </div>
      )}
    </div>
  );
}