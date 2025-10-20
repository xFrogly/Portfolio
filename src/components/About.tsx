import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <img 
              src={profilePhoto} 
              alt="Alex Chen - Software Developer" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto hover:scale-105 transition-smooth glow-effect"
            />
          </div>
          
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience 
              building modern web applications. I specialize in creating intuitive, 
              high-performance solutions that solve real-world problems.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in tech started with a curiosity about how things work, 
              which evolved into a deep love for writing clean, efficient code. 
              I thrive in collaborative environments where innovation and continuous 
              learning are valued.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the 
              developer community through blog posts and mentorship.
            </p>
            
            <div className="pt-4">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Core Values</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Clean, maintainable code
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  User-centered design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Continuous learning & improvement
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Collaborative problem-solving
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;