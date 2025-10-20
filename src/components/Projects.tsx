import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online marketplace with real-time inventory management, payment processing, and analytics dashboard.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    github: "https://github.com/xFrogly",
    demo: "https://github.com/xFrogly",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Task Management SaaS",
    description: "Collaborative project management tool with real-time updates, team chat, and advanced reporting features.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Socket.io", "Vercel"],
    github: "https://github.com/xFrogly",
    demo: "https://github.com/xFrogly",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "AI Content Generator",
    description: "ML-powered content creation platform that helps writers and marketers generate high-quality content efficiently.",
    tech: ["Python", "TensorFlow", "React", "FastAPI", "Docker"],
    github: "https://github.com/xFrogly",
    demo: "https://github.com/xFrogly",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Real-Time Analytics Dashboard",
    description: "Interactive data visualization platform for business intelligence with custom chart builders and export capabilities.",
    tech: ["Vue.js", "D3.js", "Node.js", "Redis", "Kubernetes"],
    github: "https://github.com/xFrogly",
    demo: "https://github.com/xFrogly",
    color: "from-orange-500 to-red-500",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A showcase of my recent work, demonstrating expertise across various technologies and domains
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group hover:scale-105 transition-smooth border-border hover:border-primary bg-card animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-secondary text-xs px-3 py-1 rounded-full text-muted-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-1 border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button 
                  size="sm"
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;