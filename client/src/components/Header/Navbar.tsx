'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const navItems = [
    { label: 'Home', to: isHomePage ? '#home' : '/', section: 'home', isPage: true },
    { label: 'About', to: isHomePage ? '#about' : '/#about', section: 'about' },
    { label: 'Projects', to: isHomePage ? '#projects' : '/projects', section: 'projects' },
    { label: 'Blogs', to: isHomePage ? '#blogs' : '/blogs', section: 'blogs', isPage: true },
    { label: 'Contact', to: isHomePage ? '#contact' : '/#contact', section: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md',
        scrolled 
          ? 'md:bg-white/20 md:dark:bg-black/20 md:shadow-md md:py-3' 
          : 'md:bg-transparent md:py-5',
        'py-5' // Added constant padding for mobile
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-indigo-600">
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.section}
              href={item.to}
              className={cn(
                'relative text-gray-800 hover:text-indigo-600 transition-all font-bold text-lg',
                pathname === item.to ? 'text-indigo-600' : '',
                'before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-indigo-600 before:transition-all hover:before:w-full'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-indigo-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 top-0 z-100 bg-white/100 transform transition-transform duration-300 md:hidden flex flex-col',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="container mx-auto flex items-center justify-end px-6 py-5">
          <button className="text-indigo-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col items-center space-y-6 p-8 bg-gray-50 min-h-screen z-20">
          {navItems.map((item) => (
            <Link
              key={item.section}
              href={item.to}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-semibold text-gray-700 hover:text-indigo-600 transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
