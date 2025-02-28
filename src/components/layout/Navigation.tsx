"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import Image from "next/image";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const routes = [
    { href: "/live-scores", label: "Live", icon: "/icons/live.svg" },
    { href: "/standings", label: "Table", icon: "/icons/table.svg" },
    { href: "/fixtures", label: "Matches", icon: "/icons/calendar.svg" },
    { href: "/news", label: "News", icon: "/icons/news.svg" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <header 
        className={`sticky top-0 z-40 hidden md:block transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-md dark:bg-gray-900/95" 
            : "bg-white dark:bg-gray-900"
        }`}
      >
        <nav className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-2"
            >
              <Image
                src="/logo.svg"
                alt="LigiKuu"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <div className="flex items-baseline">
                <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                  Ligi
                </span>
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  Kuu
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="flex items-center space-x-1">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${pathname === route.href
                      ? "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                      : "text-gray-600 hover:bg-gray-50 hover:text-green-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-green-400"
                    }`}
                >
                  <Image
                    src={route.icon}
                    alt={route.label}
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <span>{route.label}</span>
                </Link>
              ))}
              <div className="pl-2 border-l border-gray-200 dark:border-gray-700">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 safe-area-bottom">
        <div className="flex items-center justify-around h-16">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors duration-200
                ${pathname === route.href
                  ? "text-green-600 dark:text-green-400"
                  : "text-gray-600 dark:text-gray-400"
                }`}
            >
              <Image
                src={route.icon}
                alt={route.label}
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-xs font-medium">{route.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <header className="sticky top-0 z-40 md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between h-14 px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="LigiKuu"
              width={28}
              height={28}
              className="w-7 h-7"
            />
            <span className="font-semibold text-gray-900 dark:text-white">
              LigiKuu
            </span>
          </Link>
          <ThemeToggle />
        </div>
      </header>
    </>
  );
}
