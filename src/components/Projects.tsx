import { motion } from "framer-motion"
import { ExternalLink, Github, Play, Award, TrendingUp, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const Projects = () => {
  const projects = [
    {
      title: "OHW-Project",
      description: "โปรเจกต์หลักที่ผมพัฒนาขึ้น รวมเทคโนโลยี AI และ Web Development เข้าด้วยกัน เป็นระบบที่แก้ปัญหาจริงด้วยการคิดนอกกรอบ ใช้ Python เป็นหลักและมีการบูรณาการ AI/ML",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop&crop=entropy",
      technologies: ["Python", "AI/ML", "Web Development", "GitHub", "Docker"],
      achievements: [
        "ใช้ AI ในการแก้ปัญหาที่ซับซ้อน",
        "ออกแบบระบบที่ทำงานเป็นระบบ",
        "พัฒนาด้วยความคิดสร้างสรรค์"
      ],
      links: {
        github: "#",
        demo: "#",
        paper: ""
      },
      status: "Featured",
      category: "AI/Web"
    },
    {
      title: "AI-Powered Solution System",
      description: "ระบบแก้ปัญหาอัตโนมัติที่ใช้ Python และ Machine Learning ในการวิเคราะห์และหาทางแก้ไขที่เหมาะสม รองรับการทำงานแบบระบบและมีประสิทธิภาพสูง",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop&crop=entropy",
      technologies: ["Python", "C++", "AI/ML", "Docker", "VS Code"],
      achievements: [
        "ลดเวลาการแก้ปัญหา 60%",
        "ระบบคิดวิเคราะห์อัตโนมัติ",
        "รองรับการทำงานหลายรูปแบบ"
      ],
      links: {
        github: "#",
        demo: "",
        paper: ""
      },
      status: "In Progress",
      category: "AI/Automation"
    },
    {
      title: "Smart Development Toolkit",
      description: "ชุดเครื่องมือพัฒนาซอฟต์แวร์ที่ผมสร้างขึ้นเพื่อเพิ่มประสิทธิภาพการทำงาน รวม VS Code extensions, Docker containers และ GitHub workflows พร้อมการบูรณาการ ChatGPT",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&crop=entropy",
      technologies: ["VS Code", "Docker", "GitHub", "ChatGPT", "Web Development"],
      achievements: [
        "เพิ่มประสิทธิภาพการทำงาน 50%",
        "ลดขั้นตอนการ Deploy",
        "ระบบทำงานเป็นทีมที่สมบูรณ์"
      ],
      links: {
        github: "#",
        demo: "#",
        paper: ""
      },
      status: "Completed",
      category: "Developer Tools"
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Featured": return <Award className="h-4 w-4" />
      case "Production": return <TrendingUp className="h-4 w-4" />
      case "Research": return <Zap className="h-4 w-4" />
      default: return <Play className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Featured": return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
      case "Production": return "bg-green-500/10 text-green-500 border-green-500/20"
      case "Research": return "bg-blue-500/10 text-blue-500 border-blue-500/20"
      default: return "bg-purple-500/10 text-purple-500 border-purple-500/20"
    }
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions spanning AI, IoT, cybersecurity, and cutting-edge research
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover h-full overflow-hidden">
                {/* Project Image */}
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={`${getStatusColor(project.status)} flex items-center gap-1`}>
                      {getStatusIcon(project.status)}
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold mb-2">Key Achievements</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 pt-4">
                    {project.links.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.links.demo && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.links.paper && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.links.paper} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Paper
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <a href="#" className="inline-flex items-center">
              <Github className="mr-2 h-5 w-5" />
              View More on GitHub
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects