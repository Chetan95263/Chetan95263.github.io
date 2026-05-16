import React from 'react';
import { motion } from 'framer-motion';
import Server from "@/assets/icons/server.svg";
import Database from "@/assets/icons/database.svg";
import Globe from "@/assets/icons/globe.svg";
import Shield from "@/assets/icons/shield.svg";

const skills = [
  { icon: Server, label: 'Spring Boot', desc: 'REST APIs, Microservices, Spring Security' },
  { icon: Database, label: 'Databases', desc: 'MySQL, PostgreSQL, MongoDB, Redis' },
  { icon: Globe, label: 'Web & Cloud', desc: 'Docker, AWS, CI/CD Pipelines' },
  { icon: Shield, label: 'Best Practices', desc: 'Clean Code, Design Patterns' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 font-inter">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono font-semibold text-primary uppercase tracking-widest">About Me</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            Crafting Backend Solutions
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I specialize in building scalable Java applications using Spring Boot, with a strong
            focus on microservices architecture, database optimization, and secure API design.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-card rounded-2xl border border-border p-6 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                 <img
    src={s.icon}
    alt={s.label}
    className="w-6 h-6 text-primary"
  />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{s.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}