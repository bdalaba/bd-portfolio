import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Brain, Cloud } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Dev Tools",
      icon: <Code className="h-6 w-6 text-white" />,
      gradient: "from-tech-blue to-tech-purple",
      skills: ["Cursor", "Claude Code", "Replit"]
    },
    {
      title: "Creative Tools",
      icon: <Palette className="h-6 w-6 text-white" />,
      gradient: "from-tech-green to-tech-blue",
      skills: ["Canva", "Midjourney", "DALL·E"]
    },
    {
      title: "AI Assistants",
      icon: <Brain className="h-6 w-6 text-white" />,
      gradient: "from-tech-purple to-tech-green",
      skills: ["ChatGPT", "Claude"]
    },
    {
      title: "Deployment",
      icon: <Cloud className="h-6 w-6 text-white" />,
      gradient: "from-tech-blue to-tech-green",
      skills: ["Netlify", "Vercel", "GitHub"]
    }
  ];

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Technologies I love working with
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category) => (
              <Card 
                key={category.title}
                className="hover:shadow-xl transition-shadow duration-300 border-border"
                data-testid={`skill-category-${category.title.toLowerCase()}`}
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-lg flex items-center justify-center mr-4`}>
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="outline"
                        className="tech-badge font-mono text-sm"
                        data-testid={`skill-${skill.toLowerCase()}`}
                      >
                        {skill}
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
