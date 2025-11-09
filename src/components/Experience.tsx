import { Briefcase, Users, Award as Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { CERTIFICATES } from "@/data/certificates";

export const Experience = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: "Associate Technical Consultant Intern",
      company: "Adobe",
      location: "Bangalore, Karnataka, India",
      period: "May 2025 - July 2025",
      achievements: [
        "Developed NutriAI, an AI-driven nutrition & wellness platform leveraging APIs for personalized recipe suggestions and meal plans based on BMI, fitness goals, and dietary preferences.",
        "Designed and implemented a dynamic 5-step onboarding flow and interactive dashboard with animated progress rings and adaptive nutrition quizzes.",
        "Implemented an AI-powered recipe engine with weekly meal planning, ingredient-based suggestions, and a 24/7 AI chatbot for nutrition guidance.",
        "Utilized React 18, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, Three.js, React Query, Vite and React Router DOM to achieve responsive design, smooth animations, and optimized performance."
      ],
      skills: ["React 18", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Three.js", "AI Integration"]
    }
  ];

  const leadership = [
    {
      icon: Users,
      title: "President & Head of Marketing",
      organization: "Social Media Networking and Knowledge Committee (SNKC)",
      company: "Innovage Tech, IITM",
      location: "New Delhi",
      period: "April 2022 - May 2024",
      description: "Led the committee in organizing tech events, managing social media presence, and fostering knowledge sharing among students."
    },
    {
      icon: Trophy,
      title: "Class Representative",
      organization: "Bachelor's in Computer Applications",
      company: "IITM",
      location: "New Delhi",
      period: "April 2021 - May 2024",
      description: "Represented the batch of 2021-24, facilitating communication between students and faculty, and organizing academic activities."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Work Experience */}
        <div className="mb-16 animate-fade-in-up">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur border-border hover:border-primary/50 card-interactive">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <exp.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{exp.title}</CardTitle>
                    <p className="text-primary font-semibold text-lg">{exp.company}</p>
                    <p className="text-muted-foreground">{exp.location}</p>
                    <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-muted-foreground">
                      <span className="text-primary mr-3 mt-1">▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leadership Experience */}
        <div className="animate-fade-in-up">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Leadership <span className="text-gradient">Experience</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {leadership.map((role, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur border-border hover:border-primary/50 card-interactive">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <role.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{role.title}</CardTitle>
                      <p className="text-primary font-semibold">{role.organization}</p>
                      <p className="text-sm text-muted-foreground">{role.company}, {role.location}</p>
                      <p className="text-sm text-muted-foreground mt-1">{role.period}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{role.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Certificates Section */}
      <div className="mt-12 animate-fade-in-up">
        <h3 className="text-3xl font-bold mb-6 text-center">
          Certificates & <span className="text-gradient">Awards</span>
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Internship Certificate */}
          <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/50 card-interactive">
            <CardHeader>
              <CardTitle className="text-lg">Internship Certificate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Certificate for the Associate Technical Consultant Intern role.</p>
              {CERTIFICATES.internship ? (
                <Button size="sm" asChild className="bg-primary hover:bg-primary/90">
                  <a href={CERTIFICATES.internship} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Certificate
                  </a>
                </Button>
              ) : (
                <Button size="sm" variant="outline" disabled title="Set CERTIFICATES.internship in src/data/certificates.ts">
                  View Certificate (Add URL)
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Best Paper Award */}
          <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/50 card-interactive">
            <CardHeader>
              <CardTitle className="text-lg">Best Paper Award</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Award certificate for Best Paper recognition.</p>
              {CERTIFICATES.bestPaper ? (
                <Button size="sm" asChild className="bg-primary hover:bg-primary/90">
                  <a href={CERTIFICATES.bestPaper} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Certificate
                  </a>
                </Button>
              ) : (
                <Button size="sm" variant="outline" disabled title="Set CERTIFICATES.bestPaper in src/data/certificates.ts">
                  View Certificate (Add URL)
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Other Certifications List */}
          <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/50 card-interactive">
            <CardHeader>
              <CardTitle className="text-lg">Other Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-4">
                {CERTIFICATES.otherCertifications.map((cert, i) => (
                  <li key={i} className="flex items-center justify-between">
                    <span className="text-muted-foreground">{cert.title}</span>
                    {cert.url ? (
                      <Button size="sm" asChild className="bg-primary hover:bg-primary/90">
                        <a href={cert.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View
                        </a>
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" disabled title={`Set CERTIFICATES.otherCertifications[${i}].url in src/data/certificates.ts`}>
                        Add URL
                      </Button>
                    )}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground">Tip: add public links (or place PDFs in <code>/public/certs/</code> and reference them like <code>/certs/name.pdf</code>)</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
