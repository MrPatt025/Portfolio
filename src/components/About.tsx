import { motion } from "framer-motion"
import { Brain, Code2, Zap, Target, Heart, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Think Outside the Box",
      description: "Finding innovative and creative solutions to create unique outcomes"
    },
    {
      icon: Target,
      title: "Problem Solving Enthusiast",
      description: "Enjoying analysis and solving complex problems with systematic approaches"
    },
    {
      icon: Brain,
      title: "Easy to Socialize",
      description: "Able to work well with teams, communicate clearly, and create positive work environments"
    },
    {
      icon: Zap,
      title: "Systematic Work Style",
      description: "Planning and executing work methodically, focusing on efficiency and stability"
    },
    {
      icon: Code2,
      title: "Team Collaboration",
      description: "Collaborating well with others, sharing knowledge, and supporting teammates"
    },
    {
      icon: Heart,
      title: "Effective Communication",
      description: "Conveying technical ideas and concepts in an easily understandable way"
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
              Learning Journey
            </h3>
            
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                I'm a Computer Engineering student passionate about the world of AI and software development. 
                With out-of-the-box thinking and a love for problem-solving, I see opportunities to create innovative solutions.
              </p>
              
              <p>
                From writing my first Python code to developing complex AI and Web Applications, 
                I believe in the power of technology to change the world, focusing on systematic and efficient work approaches.
              </p>
              
              <p>
                My core skills include Python, C++, AI/ML, and Full Stack Development, 
                along with modern tools like Docker, GitHub, VS Code, and ChatGPT integration.
              </p>
            </div>

            <div className="pt-6">
              <h4 className="text-xl font-semibold mb-4">Career Objectives</h4>
              <p className="text-muted-foreground">
                I'm seeking opportunities as a Software Engineer, AI Engineer, or Full Stack Developer 
                in flexible work environments (Remote/Hybrid/On-site) to create meaningful impact 
                and learn from professional teams.
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