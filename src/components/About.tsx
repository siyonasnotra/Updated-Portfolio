import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Biography */}
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-lg leading-relaxed text-muted-foreground">
              As a passionate <span className="text-primary font-semibold">MCA student</span> at{" "}
              <span className="text-primary font-semibold">Christ University</span> and{" "}
              <span className="text-primary font-semibold">BCA graduate</span> from{" "}
              <span className="text-primary font-semibold">IITM</span>, I have a strong foundation in 
              computer science, with hands-on experience in{" "}
              <span className="text-foreground font-medium">web development</span>,{" "}
              <span className="text-foreground font-medium">machine learning</span>, and{" "}
              <span className="text-foreground font-medium">leadership roles</span>.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              I've recently completed a {" "}
              <span className="text-primary font-semibold">Technical Consultant Internship at ADOBE INDIA </span>, 
              contributing to Innovative Projects and strengthening Technical Expertise.
            </p>

             <p className="text-lg leading-relaxed text-muted-foreground">
              Proficient in {" "}
              <span className="text-primary font-semibold">React.js & Artificial Intelligence(AI)</span>, 
              with certifications in {" "}
              <span className="text-primary font-semibold">Web Development and JavaScript</span>.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm driven by innovation and excited to contribute to cutting-edge projects that 
              challenge the status quo. My goal is to leverage my technical expertise and 
              leadership experience to make a meaningful impact in the tech industry.
            </p>
          </div>

          {/* Education Cards */}
          <div className="space-y-4 animate-slide-in-right">
            <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/50 card-interactive">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Master of Computer Applications</h3>
                    <p className="text-primary font-semibold">Christ University, Bangalore</p>
                    <p className="text-sm text-muted-foreground mt-1">July 2024 - Present</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/50 card-interactive">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Bachelor of Computer Applications</h3>
                    <p className="text-primary font-semibold">IITM, New Delhi</p>
                    <p className="text-sm text-muted-foreground mt-1">April 2021 - May 2024</p>
                    <p className="text-lg font-bold text-primary mt-2">94.1%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/50 card-interactive">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Achievements</h3>
                    <ul className="space-y-2 mt-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Rank 11th with 94.1% in BCA cohort of 250+ students</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Best Paper Award at RACS-2025, LPU</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
