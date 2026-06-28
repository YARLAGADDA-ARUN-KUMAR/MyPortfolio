import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Send, Check } from "lucide-react";
import cn from "../../lib/utils";

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");
    // Simulate API request
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/10">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display mb-4 text-center">
            Let's <span className="text-primary text-glow">Connect</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-xl mx-auto">
            Have a project in mind, looking for a developer intern, or just want to say hi? 
            Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-stretch">
          {/* Contact Details Column */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-display text-left">Contact Info</h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-left">
                You can reach me directly through email, phone, or connect with me via professional networks. 
                I'm currently based in Andhra Pradesh, India, and open to remote roles.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:arunkumaryarlagadda01@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground font-medium">Email Me</p>
                  <p className="text-sm font-semibold text-foreground break-all">
                    arunkumaryarlagadda01@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+916304518854"
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground font-medium">Call Me</p>
                  <p className="text-sm font-semibold text-foreground">+91 6304518854</p>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/YARLAGADDA-ARUN-KUMAR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:text-primary transition-all duration-300 text-sm font-semibold"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/arun-kumar-yarlagadda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:text-primary transition-all duration-300 text-sm font-semibold"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="md:col-span-7">
            <div className="p-8 rounded-2xl border border-border bg-card/30 backdrop-blur-xs relative overflow-hidden h-full flex flex-col justify-center">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 text-left">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-sm text-foreground"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 text-left">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-sm text-foreground"
                    placeholder="name@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 text-left">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-sm text-foreground resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className={cn(
                    "w-full py-3.5 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.98]",
                    status === "success"
                      ? "bg-emerald-500 text-white"
                      : "bg-primary text-primary-foreground hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] hover:scale-[1.01] cursor-pointer"
                  )}
                >
                  {status === "loading" && (
                    <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  )}
                  {status === "success" && (
                    <>
                      <Check size={18} /> Message Sent Successfully!
                    </>
                  )}
                  {status === "idle" && (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
