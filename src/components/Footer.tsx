const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary/30 border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gradient">xFrogly</h3>
            <p className="text-muted-foreground">
              Full-Stack Developer crafting elegant solutions to complex problems.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <button 
                onClick={() => scrollToSection("about")}
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("skills")}
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection("projects")}
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Contact
              </button>
            </nav>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Let's Connect</h4>
            <p className="text-muted-foreground mb-2">
              Open to new opportunities and collaborations.
            </p>
            <a 
              href="mailto:xfrogly@gmail.com"
              className="text-primary hover:underline font-medium"
            >
              xfrogly@gmail.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>© {currentYear} xFrogly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
