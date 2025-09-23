import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              About Me
            </h2>
            <div className="w-24 h-1 skill-gradient mx-auto rounded-full mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bio Text */}
            <div className="animate-slide-in-left">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate software developer with over 5 years of experience building 
                scalable web applications and innovative digital solutions. My journey in tech 
                started with curiosity and has evolved into a deep expertise in modern web technologies.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I specialize in React, TypeScript, Node.js, and cloud technologies. I love solving 
                complex problems and turning ideas into reality through clean, efficient code.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Location</h4>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Experience</h4>
                  <p className="text-muted-foreground">5+ Years</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Email</h4>
                  <p className="text-muted-foreground">you@email.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Phone</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            
            {/* Statistics Cards */}
            <div className="grid grid-cols-2 gap-4 animate-scale-in">
              <Card className="p-6 text-center hover-lift card-gradient shadow-soft">
                <div className="text-3xl font-bold text-gradient mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </Card>
              <Card className="p-6 text-center hover-lift card-gradient shadow-soft">
                <div className="text-3xl font-bold text-gradient mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
              <Card className="p-6 text-center hover-lift card-gradient shadow-soft">
                <div className="text-3xl font-bold text-gradient mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </Card>
              <Card className="p-6 text-center hover-lift card-gradient shadow-soft">
                <div className="text-3xl font-bold text-gradient mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;