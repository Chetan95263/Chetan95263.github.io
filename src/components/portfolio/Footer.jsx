import React from 'react';
import githubIcon from "@/assets/icons/github.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import leetcodeIcon from "@/assets/icons/code-xml.svg";

const socials = [
  { icon: githubIcon, href: 'https://github.com/Chetan95263' },
  { icon: linkedinIcon, href: 'https://linkedin.com/in/yourusername' },
  { icon: leetcodeIcon, href: 'https://leetcode.com/yourusername' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 font-inter">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          Built with React
        </p>
        <div className="flex items-center gap-3">
          {socials.map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
               className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary text-muted-foreground transition-all duration-300">
              <img src={s.icon} alt="social" className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}