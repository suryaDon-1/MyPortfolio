"use client";

import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="#home"
          className="text-xl font-bold tracking-tight text-white"
        >
          Suryansh<span className="text-emerald-400">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative py-1 text-sm text-gray-300 transition-colors duration-300 hover:text-white"
            >
              {link.name}

              {/* Animated underline */}
              <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-emerald-400 transition-all duration-300 ease-out group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="https://wa.me/916230453429"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-400 hover:text-black md:block"
        >
          Let's Talk
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-white md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-black px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="group relative w-fit py-1 text-sm text-gray-300 transition-colors duration-300 hover:text-white"
              >
                {link.name}

                {/* Animated underline */}
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-emerald-400 transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            ))}

            <Link
              href="https://wa.me/916230453429"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 w-fit rounded-full border border-emerald-400 px-5 py-2 text-sm font-medium text-emerald-400 transition-all hover:bg-emerald-400 hover:text-black"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
