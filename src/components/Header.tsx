"use client";
import React, { useState } from "react";
import { links } from "@/utils/data"; // Import links dari data.ts
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gradient-to-r from-gray-900 via-indigo-700 to-blue-500 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold hover:text-yellow-400 transition-all duration-300">
          <Link href={links[0].link}>{links[0].title}</Link> {/* Link ke Portofolio */}
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            {links.slice(1).map((item) => ( // Mulai dari item ke-2 (Home)
              <li key={item.id}>
                <Link
                  href={item.link}
                  className="hover:text-yellow-400 transition-all duration-300"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible when menu is open) */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-700 text-white py-4 px-6">
          <ul className="space-y-4">
            {links.slice(1).map((item) => ( // Mulai dari item ke-2 (Home)
              <li key={item.id}>
                <a
                  href={item.link}
                  className="block hover:text-yellow-400 transition-all duration-300"
                  onClick={toggleMenu}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
