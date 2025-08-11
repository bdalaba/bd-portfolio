import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ArrowRight, Code } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/5 via-transparent to-tech-purple/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge 
                variant="outline" 
                className="inline-flex items-center px-4 py-2 bg-tech-blue/10 text-tech-blue border-tech-blue/20 hover:bg-tech-blue/20"
                data-testid="availability-badge"
              >
                <Code className="mr-2 h-4 w-4" />
                <span className="font-mono text-sm">Vibe Coder</span>
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span>Hi, I'm</span>{" "}
                <span className="gradient-text">Brendon Dalaba</span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light">
                Creative Technologist
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                I design and build digital experiences using a blend of code, creativity, and AI.
                My focus is rapid prototyping, clean UI, and turning ideas into usable tools or products with modern tech.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection("projects")}
                className="bg-tech-blue hover:bg-tech-blue/90 text-white shadow-lg hover:shadow-xl transition-all"
                data-testid="button-view-work"
              >
                <span>View My Work</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-border hover:bg-accent"
                data-testid="button-contact"
              >
                <span>Get In Touch</span>
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <a 
                href="https://github.com/bdalaba" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-tech-blue transition-colors"
                data-testid="link-github"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/brendondalaba" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-tech-blue transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:brendon.dalaba@pm.me"
                className="text-muted-foreground hover:text-tech-blue transition-colors"
                data-testid="link-email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="code-block p-6 rounded-xl animate-float max-w-md w-full">
              <div className="font-mono text-sm">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-muted-foreground ml-2 text-sm">technologist.js</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div><span className="text-tech-purple">const</span> <span className="text-tech-blue">technologist</span> = {`{`}</div>
                  <div className="ml-4">name: <span className="text-tech-green">"Brendon Dalaba"</span>,</div>
                  <div className="ml-4">skills: <span className="text-tech-green">["AI Development", "UI Design", "Rapid Prototyping"]</span></div>
                  <div>{`};`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
