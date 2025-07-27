import { motion } from "framer-motion"
import { ExternalLink, Github, Play, Award, TrendingUp, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const Projects = () => {
  const projects = [
    {
      title: "FedLearn Edge",
      description: "Distributed machine learning system enabling privacy-preserving AI training across edge devices. Implemented using PyTorch and custom communication protocols.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop&crop=entropy",
      technologies: ["Python", "PyTorch", "Docker", "gRPC", "Raspberry Pi"],
      achievements: [
        "92% accuracy maintained with 10x privacy improvement",
        "Reduced bandwidth usage by 65%",
        "Successfully deployed on 5+ edge devices"
      ],
      links: {
        github: "#",
        demo: "#",
        paper: "#"
      },
      status: "Featured",
      category: "AI/ML"
    },
    {
      title: "Neural Architecture Search",
      description: "Automated neural network design system using evolutionary algorithms. Discovers optimal architectures for specific tasks with minimal human intervention.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop&crop=entropy",
      technologies: ["Python", "TensorFlow", "CUDA", "NumPy", "Matplotlib"],
      achievements: [
        "15% performance improvement over manual designs",
        "Reduced design time from weeks to hours",
        "Published in university research symposium"
      ],
      links: {
        github: "#",
        paper: "#"
      },
      status: "Research",
      category: "AI/ML"
    },
    {
      title: "SmartHome IoT Hub",
      description: "Complete IoT ecosystem with edge computing capabilities. Real-time sensor data processing, predictive analytics, and automated decision making.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&crop=entropy",
      technologies: ["C++", "ESP32", "MQTT", "InfluxDB", "Grafana", "React"],
      achievements: [
        "30% energy savings through predictive optimization",
        "Sub-100ms response times for critical alerts",
        "Handles 50+ concurrent sensor streams"
      ],
      links: {
        github: "#",
        demo: "#"
      },
      status: "Production",
      category: "IoT/Embedded"
    },
    {
      title: "CyberShield Analytics",
      description: "Real-time cybersecurity monitoring dashboard with ML-powered threat detection. Analyzes network traffic patterns to identify potential security breaches.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop&crop=entropy",
      technologies: ["Python", "Scikit-learn", "React", "D3.js", "PostgreSQL"],
      achievements: [
        "97% threat detection accuracy",
        "Real-time processing of 10k+ events/sec",
        "Reduced false positives by 80%"
      ],
      links: {
        github: "#",
        demo: "#"
      },
      status: "Open Source",
      category: "Cybersecurity"
    },
    {
      title: "DevOps Pipeline Optimizer",
      description: "Intelligent CI/CD pipeline that automatically optimizes build times and resource allocation using reinforcement learning algorithms.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop&crop=entropy",
      technologies: ["Python", "Docker", "Kubernetes", "GitHub Actions", "AWS"],
      achievements: [
        "45% reduction in average build times",
        "30% cost savings on cloud resources",
        "Zero-downtime deployments achieved"
      ],
      links: {
        github: "#",
        demo: "#"
      },
      status: "In Development",
      category: "DevOps"
    },
    {
      title: "Quantum-Safe Cryptography",
      description: "Implementation of post-quantum cryptographic algorithms for securing communications in the quantum computing era.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=500&h=300&fit=crop&crop=entropy",
      technologies: ["C", "Python", "OpenSSL", "GMP", "Assembly"],
      achievements: [
        "NIST-compliant algorithm implementation",
        "5x faster than reference implementation",
        "Successfully tested against quantum simulators"
      ],
      links: {
        github: "#",
        paper: "#"
      },
      status: "Research",
      category: "Cryptography"
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