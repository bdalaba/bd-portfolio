import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Passionate developer with a love for clean code and innovative solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Clean developer workspace with laptop, code editor, and modern setup" 
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="about-image"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a creative technologist who thrives in the space between raw code and rapid execution.
                With a foundation in React, HTML/CSS, and JS—and powered by tools like Cursor, Replit, Claude Code, and ChatGPT—I build prototypes, streamline workflows, and bring ideas to life fast.
                My projects often blend design (Canva, Figma), AI (LLM's, DALL·E, Midjourney), and code into usable solutions that solve real problems.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <Card className="text-center p-4 bg-muted/50">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-tech-blue mb-2" data-testid="stat-projects">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-4 bg-muted/50">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-tech-green mb-2" data-testid="stat-experience">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
