import { Code2, Database, Wrench, CloudCog } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["C/C++", "Python", "JavaScript", "TypeScript"]
    },
    {
      icon: Wrench,
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "React", "Node.js", "Tailwind CSS", "Bootstrap"]
    },
    {
      icon: CloudCog,
      title: "Frameworks & Libraries",
      skills: ["Flask", "Pandas", "NumPy", "Matplotlib", "shadcn/ui", "Framer Motion", "Three.js"]
    },
    {
      icon: Database,
      title: "Database & Tools",
      skills: ["MongoDB", "MySQL", "NoSQL", "Git", "GitHub", "NPM", "VS Code", "PyCharm"]
    }
  ];

  const coursework = [
    "Data Mining & Visualization",
    "Internet of Things (IoT)",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Software Engineering",
    "Machine Learning"
  ];

  return (
    <section id="skills" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur border-border hover:border-primary/50 card-interactive animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary"
                      className="bg-surface hover:bg-primary hover:text-primary-foreground transition-all cursor-default text-sm px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Relevant Coursework */}
        <Card className="bg-card/50 backdrop-blur border-border animate-fade-in-up">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Relevant Coursework</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              {coursework.map((course, i) => (
                <Badge 
                  key={i} 
                  variant="outline"
                  className="border-primary/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all cursor-default text-sm px-4 py-2"
                >
                  {course}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
