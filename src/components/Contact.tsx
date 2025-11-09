import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "siyona.snotra@gmail.com",
      link: "mailto:siyona.snotra@gmail.com"
    },
    {
      icon: Mail,
      label: "University Email",
      value: "siyona.snotra@mca.christuniversity.in",
      link: "mailto:siyona.snotra@mca.christuniversity.in"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9717131508",
      link: "tel:+919717131508"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, Karnataka",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/siyonasnotra",
      link: "https://github.com/siyonasnotra"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Siyona Snotra",
      link: "https://www.linkedin.com/in/siyona-snotra-487266251/"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {contactInfo.map((item, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur border-border hover:border-primary/50 card-interactive animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  {item.link ? (
                    <a 
                      href={item.link} 
                      className="flex items-start gap-4 group"
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground">{item.label}</h3>
                        <p className="text-muted-foreground group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground">{item.label}</h3>
                        <p className="text-muted-foreground">{item.value}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Links */}
          <Card className="bg-card/50 backdrop-blur border-border animate-fade-in-up">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6 text-center">Connect With Me</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {socialLinks.map((social, index) => (
                  <Button 
                    key={index}
                    size="lg"
                    className="bg-primary hover:bg-primary/90 group"
                    asChild
                  >
                    <a href={social.link} target="_blank" rel="noopener noreferrer">
                      <social.icon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                      {social.label}
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
