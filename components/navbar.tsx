'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, resetMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/ministries', label: 'Ministries' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/scrolled shadow-md backdrop-blur-md bg/90' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-18">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-2xl font-bold font-display text-slate-900">The Good News <span className="gradient-text">Collective</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-slate-700 hover:text-amber-500 transition-colors font-medium text-sm">{link.label}</Link>
            ))}
            <Link href="/give" className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors">Give</Link>
          </div>
          <button className="md:hidden text-slate-700" onClick={() => resetMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => resetMobileOpen(false)} className="text-slate-700 hover:text-amber-500 font-medium py-2">{link.label}</Link>
          ))}
          <Link href="/give" className="bg-amber-500 text-white px-5 py-2.5 rounded-full text-center font-semibold">Give</Link>
        </div>
      )}
      </div>
    </nav>
  );
}