import { motion } from "framer-motion"
import { Download, Github, Linkedin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Scene3D } from "./3d/Scene3D"
import { FloatingElements } from "./3d/FloatingElements"
import { ParticleField } from "./3d/ParticleField"
import { OrbitControls } from "@react-three/drei"
import { useEffect, useState } from "react"

const Hero3D = () => {
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/5"
      aria-label="Hero section"
    >
      {/* 3D Background Scene */}
      <div className="absolute inset-0 opacity-60">
        <Scene3D camera={{ position: [0, 0, 8], fov: 60 }}>
          <ParticleField count={1500} />
          <FloatingElements />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Scene3D>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left relative z-20"
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
                className="glass-effect border-primary/30 text-primary hover-glow bg-background/20 backdrop-blur-sm"
              >
                🚀 Available for Opportunities
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-display mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent"
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
              <span className="text-accent font-mono glow-text">{typedText}</span>
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
                className="btn-hero group focus-ring hover-lift"
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
                  className="btn-outline-hero focus-ring hover-lift glass-effect"
                  aria-label="View GitHub profile"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="btn-outline-hero focus-ring hover-lift glass-effect"
                  aria-label="Connect on LinkedIn"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
              </div>
            </motion.div>

            {/* Skills Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mt-8"
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
                    className="glass-effect hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift cursor-pointer"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced 3D Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative h-96 lg:h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
            <Scene3D camera={{ position: [0, 0, 6], fov: 75 }}>
              <FloatingElements />
              <OrbitControls 
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={1}
              />
            </Scene3D>
          </motion.div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center glass-effect">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse glow-effect" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero3D