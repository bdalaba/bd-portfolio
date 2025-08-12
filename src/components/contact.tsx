import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:brendon.dalaba@pm.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: <Linkedin className="h-6 w-6 text-white" />,
      title: "LinkedIn",
      value: "linkedin.com/in/brendondalaba",
      href: "https://linkedin.com/in/brendondalaba",
      gradient: "from-tech-green to-tech-blue"
    },
    {
      icon: <Mail className="h-6 w-6 text-white" />,
      title: "Email",
      value: "brendon.dalaba@pm.me",
      href: "mailto:brendon.dalaba@pm.me",
      gradient: "from-tech-purple to-tech-green"
    }
  ];

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss your next project or collaboration opportunity
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {contactInfo.map((contact) => (
                <div key={contact.title} className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${contact.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    {contact.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{contact.title}</h3>
                    <a 
                      href={contact.href}
                      className="text-muted-foreground hover:text-tech-blue transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`contact-${contact.title.toLowerCase()}`}
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}

              {/* Code block decoration */}
              <div className="code-block p-4 rounded-lg animate-float">
                <div className="font-mono text-sm">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="text-muted-foreground ml-2">contact.js</span>
                  </div>
                  <div className="space-y-1 text-xs">
                    <div><span className="text-tech-purple">const</span> <span className="text-tech-blue">contact</span> = {`{`}</div>
                    <div className="ml-4">email: <span className="text-tech-green">"brendon.dalaba@pm.me"</span>,</div>
                    <div className="ml-4">status: <span className="text-tech-green">"available"</span>,</div>
                    <div className="ml-4">response_time: <span className="text-tech-green">"24h"</span></div>
                    <div>{`};`}</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-border shadow-lg">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium mb-2 block">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      data-testid="input-name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium mb-2 block">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      data-testid="input-email"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-sm font-medium mb-2 block">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project discussion"
                      required
                      data-testid="input-subject"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium mb-2 block">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Tell me about your project..."
                      required
                      data-testid="textarea-message"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-tech-blue hover:bg-tech-blue/90 text-white"
                    data-testid="button-submit"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
