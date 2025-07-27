import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail, Code2, Cpu, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import heroBg from "@/assets/hero-bg.jpg"
import { useEffect, useState } from "react"

const Hero = () => {
  const [typedText, setTypedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const roles = [
    "AI Engineer",
    "Full Stack Developer", 
    "Problem Solver",
    "Tech Innovator"
  ]

  useEffect(() => {
    const currentRole = roles[currentIndex]
    let charIndex = 0
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setTypedText(currentRole.slice(0, charIndex))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % roles.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [currentIndex])

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Enhanced Background with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
        role="img"
        aria-label="Technology background"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/70 backdrop-blur-sm" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-6"
            >
              <Badge 
                variant="outline" 
                className="glass-effect border-primary/30 text-primary hover-glow"
              >
                🚀 Available for Opportunities
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-display mb-6"
            >
              Hi, I'm{" "}
              <span className="gradient-text">Mr.Patt025</span>
            </motion.h1>
            
            {/* Dynamic Role with Typing Effect */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-h2 text-muted-foreground mb-4 h-16"
            >
              <span>I'm a </span>
              <span className="text-accent font-mono">{typedText}</span>
              <span className="animate-pulse text-accent">|</span>
            </motion.div>
            
            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-body text-foreground/80 mb-2"
            >
              Computer Engineering Student
            </motion.p>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-body text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Passionate about creating innovative solutions through AI and full-stack development. 
              Building the future with systematic thinking and creative problem-solving.
            </motion.p>
            
            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <Button 
                size="lg" 
                className="btn-hero group focus-ring"
                aria-label="Download resume"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="btn-outline-hero focus-ring"
                  aria-label="View GitHub profile"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="btn-outline-hero focus-ring"
                  aria-label="Connect on LinkedIn"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            {/* Tech Stack Showcase */}
            <div className="relative max-w-md mx-auto">
              {/* Central Avatar/Icon */}
              <div className="w-48 h-48 mx-auto mb-8 relative">
                <div className="w-full h-full rounded-full glass-effect border-2 border-primary/30 flex items-center justify-center hover-glow">
                  <Code2 className="w-20 h-20 text-primary" />
                </div>
                {/* Floating Tech Icons */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 rounded-full glass-effect border border-accent/30 flex items-center justify-center">
                      <Brain className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-12 h-12 rounded-full glass-effect border border-primary/30 flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 rounded-full glass-effect border border-accent/30 flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
                    <div className="w-12 h-12 rounded-full glass-effect border border-primary/30 flex items-center justify-center">
                      <Github className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Skills Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="flex flex-wrap gap-2 justify-center"
              >
                {["Python", "AI/ML", "React", "TypeScript", "Node.js", "Docker"].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="glass-effect hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Enhanced Floating Elements */}
      <div className="absolute top-1/4 left-10 animate-float opacity-30">
        <div className="w-20 h-20 border border-primary/50 rounded-lg rotate-12 glass-effect" />
      </div>
      <div className="absolute top-1/3 right-10 animate-float opacity-30" style={{ animationDelay: '1s' }}>
        <div className="w-16 h-16 border border-accent/50 rounded-full glass-effect" />
      </div>
      <div className="absolute bottom-1/3 left-1/4 animate-float opacity-30" style={{ animationDelay: '2s' }}>
        <div className="w-12 h-12 bg-primary/20 rounded-lg rotate-45 glass-effect" />
      </div>
      <div className="absolute top-1/2 right-1/4 animate-float opacity-30" style={{ animationDelay: '0.5s' }}>
        <div className="w-14 h-14 border border-accent/50 rounded-lg rotate-45 glass-effect" />
      </div>
    </section>
  )
}

export default Hero