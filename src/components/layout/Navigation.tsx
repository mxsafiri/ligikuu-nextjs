"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import Image from "next/image";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Navigation routes
  const routes = [
    { href: "/", label: "Live Scores", icon: "" },
    { href: "/standings", label: "Standings", icon: "" },
    { href: "/fixtures", label: "Fixtures", icon: "" },
    { href: "/news", label: "News", icon: "" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md dark:bg-gray-900/95" 
          : "bg-white dark:bg-gray-900 border-b dark:border-gray-800"
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2 text-xl font-bold transition-transform duration-300 hover:scale-105">
              <span className="text-green-600 dark:text-green-500">Ligi</span>
              <span>Kuu</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium transition-colors duration-200
                  ${pathname === route.href
                    ? "text-green-600 dark:text-green-500"
                    : "text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-500"
                  }`}
              >
                <span className="text-lg">{route.icon}</span>
                <span>{route.label}</span>
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-500 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="space-y-2 pb-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-colors duration-200 rounded-lg
                  ${pathname === route.href
                    ? "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-500"
                    : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                  }`}
              >
                <span className="text-lg">{route.icon}</span>
                <span>{route.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
