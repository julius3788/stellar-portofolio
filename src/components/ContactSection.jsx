import {
  ArrowRight,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { toast } from "react-hot-toast";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.target);
    formData.append("access_key", "84b6cabf-eab5-4d42-b804-f200f603efe2");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Thank you for your submission!');
        event.target.reset();
      } else {
        toast.error(data.message);
      }    
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or
          just connecting with like-minded individuals. Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information - Left Column */}
          <div className="space-y-10 lg:col-span-1">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-foreground">Contact Information</h3>
              
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card/50 hover:bg-card transition-colors">
                  <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">Email</h4>
                    <a
                      href="mailto:julius3788@gmail.com"
                      className="text-foreground hover:text-primary transition-colors text-base font-medium"
                    >
                      julius3788@gmail
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card/50 hover:bg-card transition-colors">
                  <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">Phone</h4>
                    <a
                      href="https://wa.me/6285221906559"
                      className="text-foreground hover:text-primary transition-colors text-base font-medium"
                    >
                      +62 852 2190 6559
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card/50 hover:bg-card transition-colors">
                  <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">Location</h4>
                    <p className="text-foreground text-base font-medium">
                      Jakarta, Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-6 border-t border-border">
              <h4 className="font-semibold text-foreground mb-6 text-center">Connect With Me</h4>
              <div className="flex justify-center gap-6">
                <a
                  href="https://www.linkedin.com/in/julius-sutrisno/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card hover:bg-primary/10 transition-colors group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://github.com/julius3788"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card hover:bg-primary/10 transition-colors group"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://www.instagram.com/julius.stt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card hover:bg-primary/10 transition-colors group"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://www.facebook.com/julius.sutrisno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card hover:bg-primary/10 transition-colors group"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Form Section - Right Column (2/3 width) */}
          <div className="lg:col-span-2">
            <div className="bg-card p-8 md:p-10 rounded-2xl shadow-lg border border-border">
              <h3 className="text-2xl font-semibold mb-8 text-foreground">Send a Message</h3>
              
              <form className="space-y-8" onSubmit={onSubmit}>
                {/* Name and Email Row */}
                <div className="space-y-4">
                  {/* Labels Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label 
                        htmlFor="name" 
                        className="block text-sm font-medium text-muted-foreground"
                      >
                        Your name
                      </label>
                    </div>
                    <div className="space-y-1">
                      <label 
                        htmlFor="email" 
                        className="block text-sm font-medium text-muted-foreground"
                      >
                        Email address
                      </label>
                    </div>
                  </div>

                  {/* Inputs Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full pl-10 pr-4 py-3.5 rounded-lg border border-input/70 bg-background text-foreground 
                                 placeholder:text-muted-foreground/50
                                 focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary/50
                                 transition-all duration-200 text-sm"
                        placeholder="Enter your name"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg 
                          className="h-4 w-4 text-muted-foreground/70" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="1.5" 
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full pl-10 pr-4 py-3.5 rounded-lg border border-input/70 bg-background text-foreground 
                                 placeholder:text-muted-foreground/50
                                 focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary/50
                                 transition-all duration-200 text-sm"
                        placeholder="Enter your email"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-4 w-4 text-muted-foreground/70" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-4">
                  {/* Label */}
                  <div className="space-y-1">
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium text-muted-foreground"
                    >
                      Message
                    </label>
                  </div>

                  {/* Textarea */}
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full pl-10 pr-4 py-3.5 rounded-lg border border-input/70 bg-background text-foreground 
                               placeholder:text-muted-foreground/50
                               focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary/50
                               transition-all duration-200 text-sm resize-none"
                      placeholder="Enter your message"
                    />
                    <div className="absolute top-3.5 left-3 pointer-events-none">
                      <svg 
                        className="h-4 w-4 text-muted-foreground/70" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="1.5" 
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" 
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "cosmic-button w-full flex items-center justify-center gap-2",
                      "bg-foreground hover:bg-foreground/90 text-background font-medium",
                      "transition-all duration-300 transform hover:-translate-y-0.5",
                      "shadow-sm hover:shadow-md",
                      "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    )}
                  >
                    <span className="text-sm tracking-wide">
                      {isSubmitting ? "Sending..." : "Submit"}
                    </span>
                    {!isSubmitting && (
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};