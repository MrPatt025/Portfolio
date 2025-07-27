import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import heroBg from "@/assets/hero-bg.jpg"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Name and Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Mr.Patt025</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-2"
          >
            Computer Engineering Student
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-foreground/80 mb-8"
          >
            AI & Full Stack Developer • นักคิดนอกกรอบ • Problem Solver
          </motion.p>
          
          {/* Tagline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            สร้างอนาคตด้วยโค้ด ด้วยความคิดสร้างสรรค์และการทำงานเป็นระบบ 
            พร้อมสร้างผลกระทบที่มีความหมายผ่านเทคโนโลยี
          </motion.p>
          
          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="btn-hero group">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <div className="flex gap-3">
              <Button variant="outline" size="lg" className="btn-outline-hero">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              <Button variant="outline" size="lg" className="btn-outline-hero">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
              <Button variant="outline" size="lg" className="btn-outline-hero">
                <Mail className="mr-2 h-5 w-5" />
                Contact
              </Button>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 animate-float">
        <div className="w-20 h-20 border border-primary/30 rounded-lg rotate-12 animate-pulse" />
      </div>
      <div className="absolute top-1/3 right-10 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-16 h-16 border border-accent/30 rounded-full animate-pulse" />
      </div>
      <div className="absolute bottom-1/3 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-12 h-12 bg-primary/20 rounded-lg rotate-45" />
      </div>
    </section>
  )
}

export default Hero