"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Главная", href: "#hero" },
  { name: "Проекты", href: "#projects" },
  { name: "Контакты", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      
      // Если мы на главной странице, просто скроллим
      if (pathname === "/") {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        // Если мы на другой странице, переходим на главную с якорем
        window.location.href = `/${href}`;
      }
      
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo - слева */}
          <Link
            href="/"
            className="flex items-center gap-3 md:gap-4 hover:opacity-80 transition-opacity group"
          >
            <div className="relative w-14 h-14 md:w-16 md:h-16 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Haze Logo"
                fill
                className="object-contain dark:invert dark:brightness-0 dark:contrast-200 transition-transform group-hover:scale-105"
                sizes="(max-width: 768px) 56px, 64px"
                priority
              />
            </div>
            <span className="text-3xl md:text-4xl font-bold text-black dark:text-white tracking-tight">
              Haze
            </span>
          </Link>

          {/* Desktop Navigation - справа */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative px-5 py-2.5 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-accent transition-colors rounded-lg group"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-3/4" />
              </a>
            ))}
            <div className="h-5 w-px bg-gray-300 dark:bg-gray-700 mx-2" />
            <Link
              href="/projects"
              className="relative px-5 py-2.5 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-accent transition-colors rounded-lg group"
            >
              <span className="relative z-10">Все проекты</span>
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-3/4" />
            </Link>
          </div>

          {/* Mobile Menu Button - справа */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-gray-200 dark:border-gray-800">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-accent hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Link
              href="/projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-accent hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              Все проекты
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

