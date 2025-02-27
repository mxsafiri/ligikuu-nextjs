"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Navigation routes
  const routes = [
    { href: "/", label: "Live Scores", icon: "⚽" },
    { href: "/standings", label: "Standings", icon: "🏆" },
    { href: "/fixtures", label: "Fixtures", icon: "📅" },
    { href: "/news", label: "News", icon: "📰" },
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
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 overflow-hidden">
              <Image 
                src="/logo.png" 
                alt="LigiKuu Logo" 
                width={32} 
                height={32}
                className="object-contain transition-transform group-hover:scale-110"
                onError={(e) => {
                  // Fallback if image fails to load - text logo
                  const target = e.currentTarget;
                  target.onerror = null; // Prevent infinite loop
                  target.width = 32;
                  target.height = 32;
                  target.style.display = 'none';
                }}
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-400 dark:from-green-400 dark:to-green-300 bg-clip-text text-transparent">
              LigiKuu
            </span>
          </Link>
        </motion.div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          {routes.map((route, index) => (
            <motion.div
              key={route.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={route.href}
                className={`relative text-sm font-medium transition-colors px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 ${
                  pathname === route.href
                    ? "text-green-600 dark:text-green-400"
                    : "text-gray-700 hover:text-green-600 dark:text-gray-200 dark:hover:text-green-400"
                }`}
              >
                <span className="hidden sm:inline mr-1">{route.icon}</span>
                {route.label}
                {pathname === route.href && (
                  <motion.span 
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-green-500 dark:bg-green-400"
                    layoutId="navbar-indicator"
                  />
                )}
              </Link>
            </motion.div>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-2 inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-green-400"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Toggle menu</span>
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 90 },
                closed: { rotate: 0 }
              }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t dark:border-gray-800"
          >
            <div className="space-y-1 px-4 py-3">
              {routes.map((route, index) => (
                <motion.div
                  key={route.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={route.href}
                    className={`flex items-center px-3 py-3 text-base font-medium rounded-md ${
                      pathname === route.href
                        ? "bg-green-50 text-green-600 dark:bg-gray-800 dark:text-green-400"
                        : "text-gray-700 hover:bg-gray-50 hover:text-green-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-green-400"
                    }`}
                  >
                    <span className="mr-3 text-xl">{route.icon}</span>
                    {route.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
