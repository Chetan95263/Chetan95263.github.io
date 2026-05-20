import React from 'react';
import { motion } from 'framer-motion';
import arrowupright from '@/assets/icons/arrow-up-right.svg';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: 'E-Commerce Microservices',
    description: 'A full-featured e-commerce backend built with Spring Boot microservices architecture. Includes product catalog, user authentication, order management, and payment processing with Stripe integration.',
    tags: ['Spring Boot', 'Microservices', 'Docker', 'PostgreSQL' , 'DTO'],
    github: 'https://github.com/Chetan95263/ecom-application',
    gradient: 'from-primary/10 to-accent/10',
  },
  {
    title: 'MCQ Platform API',
    description: 'An advanced, scalable MCQ (Multiple Choice Questions) platform API built with Spring Boot. Features JWT-based authentication & authorization, Spring Security for endpoint protection, DAO pattern for clean data access, and a fully relational MySQL schema. Supports role-based access (Admin/Student), question & category management, timed quiz sessions, result tracking, and comprehensive JUnit test coverage for all service and controller layers.',
    tags: ['Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'JUnit', 'DAO', 'REST API' , 'JPA'],
    github: 'https://github.com/Chetan95263/mcq-platform-api',
    gradient: 'from-accent/10 to-primary/10',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 font-inter">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono font-semibold text-primary uppercase tracking-widest">Portfolio</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            Featured Projects
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Explore my recent Spring Boot projects — built with best practices and production-grade standards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${p.gradient}`} />

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {p.title}
                  </h3>
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                     className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-secondary/50 hover:bg-primary hover:border-primary hover:text-primary-foreground text-muted-foreground transition-all duration-300">
                    <img src={arrowupright} alt="up-right" className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-secondary/80 text-secondary-foreground font-mono text-xs px-3 py-1 rounded-full">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <a href={p.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="rounded-full gap-2 border-border hover:border-primary hover:text-primary transition-all duration-300">
                    <span>→</span> View on GitHub
                    
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}