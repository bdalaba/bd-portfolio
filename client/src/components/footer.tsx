import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:alex.chen@example.com", label: "Email" }
  ];

  return (
    <footer className="py-12 border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-r from-tech-blue to-tech-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-mono font-bold text-sm">AC</span>
            </div>
            <span className="font-mono font-semibold text-lg">Alex Chen</span>
          </div>

          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-tech-blue transition-colors"
                aria-label={link.label}
                data-testid={`footer-${link.label.toLowerCase()}`}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="text-sm text-muted-foreground font-mono flex items-center">
            © 2024 Built with <Heart className="h-4 w-4 text-tech-blue mx-1" /> and{" "}
            <span className="text-tech-green ml-1">React</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
