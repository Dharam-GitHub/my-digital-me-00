import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Tech Solutions Inc.",
      position: "Senior Software Developer",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      description: "Lead development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.",
      technologies: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
      achievements: [
        "Improved application performance by 40%",
        "Led team of 5 developers",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      company: "StartupXYZ",
      position: "Full Stack Developer",
      location: "New York, NY",
      duration: "2020 - 2022",
      description: "Built the core platform from ground up using modern web technologies. Collaborated with design team to create intuitive user experiences.",
      technologies: ["Vue.js", "Python", "Django", "MongoDB", "Docker"],
      achievements: [
        "Developed MVP that secured $2M funding",
        "Built real-time messaging system",
        "Optimized database queries improving speed by 50%"
      ]
    },
    {
      company: "Digital Agency Co.",
      position: "Frontend Developer",
      location: "Los Angeles, CA",
      duration: "2019 - 2020",
      description: "Created responsive websites and web applications for various clients. Specialized in modern JavaScript frameworks and mobile-first design.",
      technologies: ["JavaScript", "React", "SASS", "WordPress", "Firebase"],
      achievements: [
        "Delivered 20+ client projects on time",
        "Improved site loading speeds by 35%",
        "Implemented accessibility standards (WCAG 2.1)"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Experience
            </h2>
            <div className="w-24 h-1 skill-gradient mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and key accomplishments
            </p>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={exp.company} 
                className="p-8 hover-lift card-gradient shadow-soft animate-slide-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-primary mb-2">{exp.position}</h3>
                    <h4 className="text-xl font-semibold text-foreground mb-2">{exp.company}</h4>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.duration}
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>
                
                <div className="mb-6">
                  <h5 className="font-semibold mb-3">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 skill-gradient rounded-full mr-3 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold mb-3">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-smooth">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;