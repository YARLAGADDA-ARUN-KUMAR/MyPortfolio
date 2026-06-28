import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send, Check, Terminal } from "lucide-react";
import cn from "../../lib/utils";

// ============================================
// CONTACT SECTION — Mission Control
// Terminal-style header
// Glowing form with pulse effects
// Success animation
// ============================================

const fadeInUp = {
  initial: { opacity: 0, y: 40, filter: "blur(6px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-20 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header — Terminal Style */}
        <motion.div className="mb-20" {...fadeInUp}>
          <div className="flex items-center gap-3 mb-4">
            <Terminal size={18} className="text-primary/60" />
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-primary/50">
              Mission Control
            </span>
          </div>
          <h2 className="section-heading text-left">
            Let's <span className="text-primary text-glow">Connect</span>
          </h2>
          <p className="section-subheading text-left mt-4">
            Have a project in mind, looking for a developer, or just want to say hi?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-stretch">
          {/* Contact Details Column */}
          <motion.div
            className="md:col-span-5 flex flex-col justify-between space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-6">
              <h3 className="text-xl font-display font-bold text-left">Contact Info</h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-left">
                You can reach me directly through email or phone. I'm currently based in
                Andhra Pradesh, India, and open to remote roles.
              </p>
            </div>

            <div className="space-y-3">
              {/* Email */}
              <a
                href="mailto:arunkumaryarlagadda01@gmail.com"
                className="group flex items-center gap-4 p-4 rounded-xl border border-border/30 bg-card/15 hover:bg-card/30 hover:border-primary/30 transition-all duration-500"
                data-cursor-hover
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Mail size={18} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-mono tracking-wider text-muted-foreground/50 uppercase">Email</p>
                  <p className="text-sm font-medium text-foreground break-all">
                    arunkumaryarlagadda01@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+916304518854"
                className="group flex items-center gap-4 p-4 rounded-xl border border-border/30 bg-card/15 hover:bg-card/30 hover:border-primary/30 transition-all duration-500"
                data-cursor-hover
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Phone size={18} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-mono tracking-wider text-muted-foreground/50 uppercase">Phone</p>
                  <p className="text-sm font-medium text-foreground">+91 6304518854</p>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/YARLAGADDA-ARUN-KUMAR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-border/30 bg-card/15 hover:border-primary/30 hover:text-primary transition-all duration-300 text-sm font-medium text-muted-foreground"
                data-cursor-hover
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/arun-kumar-yarlagadda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-border/30 bg-card/15 hover:border-primary/30 hover:text-primary transition-all duration-300 text-sm font-medium text-muted-foreground"
                data-cursor-hover
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="p-8 rounded-2xl border border-border/30 bg-card/15 backdrop-blur-xs relative overflow-hidden h-full flex flex-col justify-center">
              {/* Subtle glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary/5 blur-3xl" />

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono tracking-wider text-muted-foreground/60 mb-2 text-left uppercase"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border/30 bg-background/50 focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary/40 transition-all duration-300 text-sm text-foreground placeholder:text-muted-foreground/30"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono tracking-wider text-muted-foreground/60 mb-2 text-left uppercase"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border/30 bg-background/50 focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary/40 transition-all duration-300 text-sm text-foreground placeholder:text-muted-foreground/30"
                    placeholder="name@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono tracking-wider text-muted-foreground/60 mb-2 text-left uppercase"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-border/30 bg-background/50 focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary/40 transition-all duration-300 text-sm text-foreground resize-none placeholder:text-muted-foreground/30"
                    placeholder="Write your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className={cn(
                    "w-full py-3.5 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-500 active:scale-[0.98]",
                    status === "success"
                      ? "bg-emerald-500/90 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                      : "bg-primary text-primary-foreground hover:shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:scale-[1.01] cursor-pointer"
                  )}
                  data-cursor-hover
                >
                  <AnimatePresence mode="wait">
                    {status === "loading" && (
                      <motion.span
                        key="loading"
                        className="flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Transmitting...
                      </motion.span>
                    )}
                    {status === "success" && (
                      <motion.span
                        key="success"
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Check size={18} /> Message Sent Successfully
                      </motion.span>
                    )}
                    {status === "idle" && (
                      <motion.span
                        key="idle"
                        className="flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Send size={16} /> Send Message
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-24 pt-8 border-t border-border/20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xs font-mono tracking-wider text-muted-foreground/30">
            Designed & built by Arun Kumar Yarlagadda
          </p>
        </motion.div>
      </div>
    </section>
  );
};
