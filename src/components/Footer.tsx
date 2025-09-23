import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/yourusername", label: "Twitter" },
    { icon: Mail, href: "mailto:you@email.com", label: "Email" }
  ];

  return (
    <footer className="bg-secondary/30 py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gradient mb-4">Your Name</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Building innovative solutions and creating exceptional digital experiences
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-smooth hover:scale-110 shadow-soft"
                  aria-label={social.label}
                >
                  <IconComponent className="h-5 w-5" />
                </a>
              );
            })}
          </div>
          
          {/* Copyright */}
          <div className="pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Your Name. All rights reserved. Built with React & TypeScript.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;