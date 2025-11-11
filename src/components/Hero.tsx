import { Github, Linkedin, Mail, ArrowDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";
import { RESUME_URL } from "@/data/resume";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-surface opacity-50" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-primary text-sm uppercase tracking-widest font-semibold">HELLO!</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Myself <span className="text-gradient glow-effect">Siyona Snotra</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground">
              Tech Enthusiast
            </p>
            <p className="text-xl text-muted-foreground">
              MCA at Christ University
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              {/* Resume Button - Shows first, prominent position */}
              {RESUME_URL ? (
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground group shadow-lg"
                  asChild
                >
                  <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Resume
                  </a>
                </Button>
              ) : (
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 opacity-70 cursor-not-allowed"
                  disabled
                  title="Set RESUME_URL in src/data/resume.ts"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Resume (Add Link)
                </Button>
              )}

              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground group"
                asChild
              >
                <a href="https://github.com/siyonasnotra" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  GitHub
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
                asChild
              >
                <a href="https://www.linkedin.com/in/siyona-snotra-487266251/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </a>
              </Button>
              {/* <Button 
                size="lg" 
                variant="outline"
                className="border-primary/50 hover:border-primary hover:bg-surface-hover group"
                asChild
              >
                <a href="mailto:siyona.snotra@gmail.com">
                  <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Email
                </a>
              </Button> */}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-glow" />
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 hover:border-primary transition-all duration-500 hover:scale-105">
                <img 
                  src={profileImage} 
                  alt="Siyona Snotra" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
