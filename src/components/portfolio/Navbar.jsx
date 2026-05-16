import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Menu from "@/assets/icons/menu.svg";
import X from "@/assets/icons/x.svg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-inter ${
      scrolled ? 'bg-card/80 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold font-mono text-foreground tracking-tight">
          <span className="text-primary">&lt;</span>Dev<span className="text-primary">/&gt;</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300">
              {l.label}
            </a>
          ))}
          <a href="#contact">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 text-sm font-semibold shadow-lg shadow-primary/25">
              Hire Me
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)} >
          <img
            src={mobileOpen ? X : Menu}
            alt={mobileOpen ? "Close menu" : "Open menu"}
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border px-6 pb-6 space-y-4">
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
               className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileOpen(false)}>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-sm font-semibold">
              Hire Me
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
}