'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Насловна' },
  { href: '/video', label: 'Видео' },
  { href: '/audio', label: 'Аудио' },
  { href: '/propovedi', label: 'Проповеди' },
  { href: '/kontakt', label: 'Контакт' },
];

export default function Header() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const currentY = window.scrollY;
    setShowNav(currentY < lastScrollY || currentY < 10);
    setLastScrollY(currentY);

    if (isOpen && currentY > lastScrollY) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOpen]);

  return (
    <header
      className="relative h-[90vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/header.jpg')" }}
    >
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300
          ${showNav ? 'translate-y-0' : '-translate-y-full'}
          bg-gradient-to-r from-[#1c3c3c] to-[#2a2d4e] text-white shadow-md`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <img src="/logo1.png" alt="Logo" className="h-20" />

          {/* Hamburger dugme za mobilni */}
          <button
            className="md:hidden focus:outline-none ml-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Navigacioni linkovi */}
          <div
            className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-6
              absolute md:static top-full left-2 right-2 max-w-xs
              bg-[#1c3c3c] md:bg-transparent px-6 py-4 md:p-0 rounded-md shadow-lg
              transition-max-height duration-300 overflow-hidden md:overflow-visible
              ${
                isOpen
                  ? 'max-h-96 pointer-events-auto block'
                  : 'max-h-0 pointer-events-none hidden md:block md:max-h-full md:pointer-events-auto md:overflow-visible'
              }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block md:inline hover:underline"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[#168c83b5] to-[#3d3f9dc9]">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
          Свима нам је потребан <span className="font-extrabold">Исус</span>
        </h1>
      </div>
    </header>
  );
}
