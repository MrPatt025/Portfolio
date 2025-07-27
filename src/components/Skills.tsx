import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const Skills = () => {
  const technicalSkills = [
    { name: "Python", level: 90, category: "language" },
    { name: "JavaScript/TypeScript", level: 85, category: "language" },
    { name: "Java", level: 80, category: "language" },
    { name: "C/C++", level: 75, category: "language" },
    { name: "HTML/CSS", level: 85, category: "web" },
    { name: "React/Next.js", level: 80, category: "web" },
    { name: "Node.js", level: 75, category: "backend" },
    { name: "TensorFlow/PyTorch", level: 70, category: "ai" },
    { name: "Docker", level: 65, category: "devops" },
    { name: "Git/GitHub", level: 85, category: "tools" }
  ]

  const domains = [
    {
      title: "AI & Machine Learning",
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Jupyter"],
      description: "Deep learning, neural networks, computer vision, NLP"
    },
    {
      title: "Edge Computing",
      technologies: ["Raspberry Pi", "Arduino", "ARM Cortex", "NVIDIA Jetson", "FreeRTOS"],
      description: "Embedded systems, IoT, real-time computing, optimization"
    },
    {
      title: "Web Development",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Node.js", "PostgreSQL"],
      description: "Full-stack development, responsive design, modern frameworks"
    },
    {
      title: "DevOps & Tools",
      technologies: ["Git", "Docker", "VS Code", "Linux", "AWS", "GitHub Actions"],
      description: "Version control, containerization, cloud services, CI/CD"
    }
  ]

  const softSkills = [
    "Problem Solving",
    "Critical Thinking",
    "Team Collaboration",
    "Project Management",
    "Technical Communication",
    "Continuous Learning",
    "Leadership",
    "Adaptability"
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through projects, coursework, and countless hours of exploration
          </p>
        </motion.div>

        {/* Technical Proficiency */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Domain Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Domain Expertise</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {domains.map((domain, index) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{domain.title}</CardTitle>
                    <p className="text-muted-foreground">{domain.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {domain.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-8">Soft Skills & Mindset</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Badge variant="outline" className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills