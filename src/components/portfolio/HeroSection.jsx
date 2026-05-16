import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import  arrowdown  from '@/assets/icons/arrow-down.svg';
import code from "@/assets/icons/code-xml.svg";
import github from "@/assets/icons/github.svg";
import linkedin from "@/assets/icons/linkedin.svg";
import chetan from "@/assets/images/chetan.jpeg";



const PROFILE_IMG = ""; 

const socials = [
  { icon: linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/chetan-kumar-919668257/' },  
  { icon: github, label: 'GitHub', href: 'https://github.com/Chetan95263' },
  { icon: code, label: 'LeetCode', href: 'https://leetcode.com/u/Chetan95263/' },
];


export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden font-inter pt-20">
      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left – Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="order-2 md:order-1 text-center md:text-left">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono font-medium text-primary">Available for opportunities</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight">
            Hi, I'm a<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Spring Boot
            </span><br />
            Developer
          </h1>

          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed">
            Building robust, scalable backend systems with Java & Spring Boot.
            Passionate about clean architecture, microservices, and RESTful APIs.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 justify-center md:justify-start">
            <a href="#contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base font-semibold shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-0.5">
                Hire Me
              </Button>
            </a>
            <a href="#projects">
              <Button variant="outline" className="rounded-full px-8 py-6 text-base font-semibold border-border hover:border-primary hover:text-primary transition-all duration-300">
                View Projects
              </Button>
            </a>
          </div>

          {/* Socials */}
          <div className="mt-10 flex items-center gap-4 justify-center md:justify-start">
            {socials.map((s) =>
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
            className="group flex items-center justify-center w-11 h-11 rounded-full border border-border bg-card hover:border-primary hover:bg-primary/10 transition-all duration-300"
            title={s.label}>
                <img src={s.icon} alt={s.label} className="w-5 h-5"/>
              </a>
            )}
          </div>
        </motion.div>

        {/* Right – Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center">
          
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 blur-2xl scale-110" />
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-card shadow-2xl shadow-primary/20">
              <img src={chetan} alt="Developer portrait" className="w-full h-full object-cover" />
            </div>
            {/* Floating badge */}
            

            
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2">
        
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <img src={arrowdown} alt="Scroll down" className="w-5 h-5" />
        </a>
      </motion.div>
    </section>);

}