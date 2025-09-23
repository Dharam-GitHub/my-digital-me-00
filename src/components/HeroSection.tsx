import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Your Name
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light opacity-90">
            Senior Software Developer
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-80 leading-relaxed">
            Passionate about creating innovative solutions and building exceptional user experiences. 
            5+ years of expertise in full-stack development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="min-w-[160px]">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button variant="outline-card" size="lg" className="min-w-[160px] bg-white/10 backdrop-blur-sm">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-bounce"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-6 w-6 text-white/70" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;