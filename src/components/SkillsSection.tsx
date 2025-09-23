import { Card } from "@/components/ui/card";
import { Code, Database, Globe, Smartphone, Cloud, Users } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS"],
      color: "text-blue-500"
    },
    {
      title: "Backend Development", 
      icon: Database,
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
      color: "text-green-500"
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["React Native", "Flutter", "iOS", "Android", "Ionic"],
      color: "text-purple-500"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      color: "text-orange-500"
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "Go"],
      color: "text-red-500"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Leadership", "Communication", "Problem Solving", "Team Work", "Mentoring"],
      color: "text-indigo-500"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 skill-gradient mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and areas of expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={category.title} 
                  className="p-6 hover-lift card-gradient shadow-soft"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg bg-primary/10 mr-3`}>
                      <IconComponent className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div 
                        key={skill}
                        className="flex items-center justify-between py-1"
                      >
                        <span className="text-sm text-muted-foreground">{skill}</span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div 
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i < 4 ? 'skill-gradient' : 'bg-muted'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;