import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "NutriAI",
      description: "An AI-driven nutrition & wellness platform with personalized recipe suggestions, meal planning, and 24/7 AI chatbot assistance.",
      technologies: ["React 18", "TypeScript", "Tailwind CSS", "AI APIs", "Framer Motion", "Three.js"],
      highlights: [
        "Dynamic 5-step onboarding with BMI & fitness goal tracking",
        "Interactive dashboard with animated progress rings",
        "AI-powered recipe engine with weekly meal planning",
        "Ingredient-based recipe suggestions"
      ],
      sourceCode: "https://github.com/siyonasnotra/NutriAI",
      link: "https://nutri-ai-ashy.vercel.app/"
    },
    {
      title: "AgroInsight - Crop Recommendation System",
      description: "ML-based prediction system achieving 96% accuracy in assisting farmers with optimal crop selection based on environmental conditions.",
      technologies: ["Python", "Machine Learning", "Flask", "HTML", "CSS"],
      highlights: [
        "96% accuracy in crop predictions",
        "40% improvement in user interaction",
        "25% reduction in data processing time",
        "Seamless interface for farmers"
      ],
      sourceCode: "https://github.com/siyonasnotra/Agro-Insight",
      link: "https://agroinsight.vercel.app/index.html"
    },
    {
      title: "Core-Fitness Gym Website",
      description: "Responsive gym website with member registration, service details, and real-time location tracking using geolocation APIs.",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "PHP", "Node.js"],
      highlights: [
        "Real-time location tracking with OpenStreetMap",
        "User authentication system with PHP",
        "Database integration for member management",
        "Responsive design across all devices"
      ],
      sourceCode: "https://github.com/siyonasnotra/Core-Fitness",
      link: "https://corefitnessupdated.vercel.app/"
    },
    {
      title: "Personal Portfolio Website",
      description: "Clean, responsive portfolio website showcasing projects, skills, and professional experience with interactive features.",
      technologies: ["React.js", "CSS3", "JavaScript", "Tailwind CSS", "TypeScript"],
      highlights: [
        "Clean and modern UI design",
        "Fully responsive across devices",
        "Interactive components and animations",
        "Optimized performance"
      ],
      sourceCode: "https://github.com/siyonasnotra/Updated-Portfolio",
      link: "https://siyonasnotra.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur border-border hover:border-primary/50 card-interactive group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start text-sm text-muted-foreground">
                        <span className="text-primary mr-2 mt-0.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary/90 group/btn"
                    asChild
                  >
                    <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                      Source Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary/50 hover:border-primary group/btn"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
