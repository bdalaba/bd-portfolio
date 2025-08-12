import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import dutchulatorLogo from "/assets/dutchulator-logo_1754661104524.png";

export function Projects() {
  const projects = [
    {
      title: "Dutchulator",
      description: "A sleek score tracker for Dutch Blitz—built for speed, accuracy, and a touch of game-night flair.",
      image: dutchulatorLogo,
      tech: ["React", "Typescript", "Tailwind"],
      live: "https://dutchulator.app/"
    }
    // Commented out for later use:
    // {
    //   title: "E-Commerce Platform",
    //   description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard for business owners.",
    //   image: "https://images.unsplash.com/photo-1587614203976-365c74645e83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    //   tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    //   github: "https://github.com/bdalaba",
    //   live: "https://example.com"
    // },
    // {
    //   title: "Analytics Dashboard",
    //   description: "Real-time analytics dashboard with interactive charts, data visualization, and comprehensive reporting features for business insights.",
    //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    //   tech: ["Vue.js", "D3.js", "Python", "FastAPI"],
    //   github: "https://github.com/bdalaba",
    //   live: "https://example.com"
    // }
  ];

  return (
    <section id="projects" className="py-16 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Some of my recent work and side projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="project-card border-border hover:shadow-xl transition-all duration-300"
                data-testid={`project-card-${index}`}
              >
                <div className="relative">
                  <img 
                    src={project.image}
                    alt={`${project.title} interface screenshot`}
                    className="w-full h-48 object-cover rounded-t-lg"
                    data-testid={`project-image-${index}`}
                  />
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="h-8 w-8"
                      data-testid={`project-live-${index}`}
                    >
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="outline"
                        className="tech-badge font-mono text-xs"
                        data-testid={`project-tech-${tech.toLowerCase()}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
