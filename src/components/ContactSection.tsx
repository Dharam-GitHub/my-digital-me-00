import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "you@email.com",
      href: "mailto:you@email.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourprofile",
      color: "text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/yourusername",
      color: "text-gray-900 dark:text-gray-100"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/yourusername",
      color: "text-blue-400"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 skill-gradient mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's connect and discuss how we can work together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((contact) => {
                  const IconComponent = contact.icon;
                  return (
                    <Card key={contact.label} className="p-4 hover-lift card-gradient shadow-soft">
                      <a 
                        href={contact.href}
                        className="flex items-center group transition-smooth"
                      >
                        <div className="p-3 rounded-lg bg-primary/10 mr-4 group-hover:bg-primary/20 transition-smooth">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{contact.label}</p>
                          <p className="text-muted-foreground group-hover:text-primary transition-smooth">
                            {contact.value}
                          </p>
                        </div>
                      </a>
                    </Card>
                  );
                })}
              </div>
              
              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-smooth hover:scale-110"
                        aria-label={social.label}
                      >
                        <IconComponent className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="animate-scale-in">
              <Card className="p-8 text-center card-gradient shadow-medium">
                <div className="mb-6">
                  <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Ready to Start a Project?</h3>
                  <p className="text-muted-foreground mb-6">
                    I'm available for freelance work and full-time opportunities. 
                    Let's discuss your next project and bring your ideas to life.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <Button variant="hero" size="lg" className="w-full">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </Button>
                  <Button variant="outline-card" size="lg" className="w-full">
                    Schedule a Call
                  </Button>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Average response time: <span className="font-semibold text-primary">24 hours</span>
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;