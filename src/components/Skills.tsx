import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const Skills = () => {
  const technicalSkills = [
    { name: "Python", level: 95, category: "language" },
    { name: "C++", level: 85, category: "language" },
    { name: "AI/Machine Learning", level: 80, category: "ai" },
    { name: "Web Development", level: 85, category: "web" },
    { name: "GitHub", level: 90, category: "tools" },
    { name: "Docker", level: 75, category: "devops" },
    { name: "VS Code", level: 90, category: "tools" },
    { name: "ChatGPT Integration", level: 85, category: "ai" },
    { name: "Problem Solving", level: 95, category: "core" },
    { name: "System Design", level: 80, category: "architecture" }
  ]

  const domains = [
    {
      title: "AI & Machine Learning",
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "ChatGPT"],
      description: "สร้างโมเดล AI และระบบเรียนรู้ที่ชาญฉลาด"
    },
    {
      title: "Web Development",
      technologies: ["React", "JavaScript", "HTML/CSS", "Node.js", "Full Stack"],
      description: "พัฒนาเว็บแอปพลิเคชันแบบ Full Stack"
    },
    {
      title: "System Programming",
      technologies: ["C++", "Python", "Docker", "Linux", "System Design"],
      description: "เขียนโปรแกรมระดับต่ำและระบบประสิทธิภาพสูง"
    },
    {
      title: "Development Tools",
      technologies: ["VS Code", "GitHub", "Docker", "ChatGPT", "Git"],
      description: "เครื่องมือพัฒนาสมัยใหม่สำหรับการทำงานเป็นทีม"
    }
  ]

  const softSkills = [
    "คิดนอกกรอบ",
    "ชอบแก้ปัญหา",
    "ทำงานเป็นระบบ",
    "เข้าสังคมได้ง่าย",
    "การทำงานเป็นทีม",
    "สื่อสารได้ดี",
    "เรียนรู้อย่างต่อเนื่อง",
    "ปรับตัวได้ดี"
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