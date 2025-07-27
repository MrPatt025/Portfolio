import { motion } from "framer-motion"
import { Brain, Code2, Zap, Target, Heart, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const About = () => {
  const values = [
    {
      icon: Brain,
      title: "Curious Mind",
      description: "Always asking 'what if?' and diving deep into complex problems"
    },
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, efficient code that tells a story"
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Adapting quickly to new technologies and methodologies"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering impactful solutions that matter"
    },
    {
      icon: Heart,
      title: "Team Player",
      description: "Collaborating effectively and lifting others up"
    },
    {
      icon: Lightbulb,
      title: "Innovator",
      description: "Thinking outside the box to solve tomorrow's challenges"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driven by curiosity and fueled by coffee, I'm on a mission to bridge the gap 
            between cutting-edge research and real-world applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              My Journey in Tech
            </h3>
            
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Started coding at 14 with Python, quickly falling in love with the logic and 
                creativity required to build something from nothing. What began as hobby projects 
                evolved into a passion for artificial intelligence and edge computing.
              </p>
              
              <p>
                Currently pursuing Computer Engineering with a focus on AI/ML systems. 
                I'm particularly fascinated by federated learning, privacy-preserving AI, 
                and how we can bring intelligent computation closer to the edge.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring the latest research papers, 
                contributing to open source projects, or experimenting with embedded systems 
                in my home lab.
              </p>
            </div>

            <div className="pt-6">
              <h4 className="text-xl font-semibold mb-4">Career Vision</h4>
              <p className="text-muted-foreground">
                To work at the intersection of AI research and engineering, developing 
                systems that are not just intelligent, but also ethical, efficient, 
                and accessible to everyone.
              </p>
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover h-full">
                  <CardContent className="p-6 text-center">
                    <value.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <h4 className="font-semibold mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About