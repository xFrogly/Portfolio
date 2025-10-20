import { Code2, Database, Cloud, Smartphone, GitBranch, Palette } from "lucide-react";

const skills = [
  {
    icon: Code2,
    name: "Frontend Development",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
    level: 95,
  },
  {
    icon: Database,
    name: "Backend Development",
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express"],
    level: 90,
  },
  {
    icon: Cloud,
    name: "Cloud & DevOps",
    technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Vercel"],
    level: 85,
  },
  {
    icon: Smartphone,
    name: "Mobile Development",
    technologies: ["React Native", "Flutter", "iOS", "Android"],
    level: 80,
  },
  {
    icon: GitBranch,
    name: "Version Control",
    technologies: ["Git", "GitHub", "GitLab", "Bitbucket"],
    level: 95,
  },
  {
    icon: Palette,
    name: "UI/UX Design",
    technologies: ["Figma", "Adobe XD", "Sketch", "Responsive Design"],
    level: 75,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Skills & Expertise
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit built through years of hands-on experience and continuous learning
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={skill.name}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-smooth hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="text-primary font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-primary to-accent h-full transition-smooth"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-secondary text-xs px-2 py-1 rounded-md text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;