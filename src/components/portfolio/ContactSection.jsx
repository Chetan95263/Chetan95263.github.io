import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import send from "@/assets/icons/send.svg";
import mail from "@/assets/icons/mail.svg";
import loader from "@/assets/icons/loader-circle.svg";
import code from "@/assets/icons/code-xml.svg";
import check from "@/assets/icons/circle-check.svg";
import github from "@/assets/icons/github.svg";
import linkedin from "@/assets/icons/linkedin.svg";

import { toast } from "sonner";

const socials = [
  { icon: linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/chetan-kumar-919668257/' },  
  { icon: github, label: 'GitHub', href: 'https://github.com/Chetan95263' },
  { icon: code, label: 'LeetCode', href: 'https://leetcode.com/u/Chetan95263/' },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSent(true);
      toast.success("Message ready to send!");

      const subject = encodeURIComponent(`Portfolio Contact: ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      );

      window.location.href = `mailto:ck95263@gmail.com?subject=${subject}&body=${body}`;

      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setSent(false), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 font-inter">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono font-semibold text-primary uppercase tracking-widest">
            Get in Touch
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            Let's Work Together
          </h2>

          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-card rounded-2xl border border-border p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <img src={mail} alt="mail" className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">Email me at</p>
                  <p className="font-semibold text-foreground text-sm">
                    ck95263@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-foreground mb-4">
                Find me online
              </p>

              <div className="space-y-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-3 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
                      <img  src={s.icon} alt={s.label} className="w-4 h-4" />
                    </div>

                    <span className="text-sm font-medium text-foreground">
                      {s.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl border border-border p-8 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button type="submit" disabled={sending} className="w-full gap-2">
                {sending ? (
                  <>
                    <img  src={loader}  alt="loading"   className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : sent ? (
                  <>
                    <img src={check} alt="success" className="w-4 h-4" />
                    Sent!
                  </>
                ) : (
                  <>
                    <img src={send} alt="send" className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}