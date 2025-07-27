import { motion } from "framer-motion"
import { 
  Calendar, 
  MapPin, 
  Building, 
  Award,
  ExternalLink,
  BookOpen,
  Users,
  Target
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const Experience = () => {
  const experiences = [
    {
      role: "Research Assistant",
      company: "University AI Lab",
      location: "San Francisco, CA",
      duration: "Sep 2023 - Present",
      type: "Part-time",
      description: "Leading federated learning research project focused on privacy-preserving machine learning for edge devices.",
      achievements: [
        "Developed novel FL algorithm achieving 15% better convergence",
        "Published 2 papers in IEEE conferences",
        "Mentored 3 undergraduate students",
        "Secured $50K research grant"
      ],
      technologies: ["Python", "PyTorch", "TensorFlow", "Docker", "Kubernetes"],
      logo: "🔬"
    },
    {
      role: "Software Engineering Intern",
      company: "TechStart Innovations",
      location: "Palo Alto, CA",
      duration: "Jun 2023 - Aug 2023",
      type: "Internship",
      description: "Full-stack development for IoT data analytics platform serving 10,000+ connected devices.",
      achievements: [
        "Improved system performance by 40%",
        "Built real-time dashboard handling 1M+ data points",
        "Implemented ML-based anomaly detection",
        "Reduced deployment time by 60% with CI/CD pipeline"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
      logo: "💻"
    },
    {
      role: "AI/ML Developer",
      company: "EdgeTech Solutions",
      location: "Remote",
      duration: "Jan 2023 - May 2023",
      type: "Contract",
      description: "Developed computer vision solutions for manufacturing quality control using edge computing.",
      achievements: [
        "Built real-time defect detection system (98% accuracy)",
        "Optimized models for ARM processors",
        "Reduced inference time by 70%",
        "Deployed on 20+ edge devices"
      ],
      technologies: ["OpenCV", "TensorRT", "C++", "Raspberry Pi", "CUDA"],
      logo: "🤖"
    }
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "Stanford University",
      location: "Stanford, CA",
      duration: "2022 - 2026",
      gpa: "3.9/4.0",
      achievements: [
        "Dean's List (4 semesters)",
        "Outstanding Student in AI Track",
        "President, Computer Engineering Society",
        "Google Student Developer Expert"
      ],
      coursework: [
        "Machine Learning",
        "Computer Vision", 
        "Distributed Systems",
        "Embedded Systems",
        "Cybersecurity"
      ]
    }
  ]

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      badge: "☁️"
    },
    {
      name: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2023",
      badge: "🧠"
    },
    {
      name: "Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2024",
      badge: "⚙️"
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building expertise through hands-on experience, cutting-edge research, and continuous learning
          </p>
        </motion.div>

        {/* Professional Experience */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-8"
          >
            Professional Experience
          </motion.h3>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl">{exp.logo}</div>
                        <div>
                          <CardTitle className="text-xl">{exp.role}</CardTitle>
                          <div className="flex items-center gap-2 text-muted-foreground mt-1">
                            <Building className="h-4 w-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {exp.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>
                    <p className="text-muted-foreground mt-4">{exp.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Target className="h-4 w-4" />
                        Key Achievements
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-8"
          >
            Education
          </motion.h3>
          
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <BookOpen className="h-4 w-4" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-lg px-3 py-1">
                      GPA: {edu.gpa}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="grid md:grid-cols-2 gap-6">
                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      Achievements & Leadership
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Relevant Coursework */}
                  <div>
                    <h4 className="font-semibold mb-3">Relevant Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <Badge key={course} variant="outline" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-8">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover text-center h-full">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{cert.badge}</div>
                    <h4 className="font-semibold mb-2">{cert.name}</h4>
                    <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                    <Badge variant="outline">{cert.date}</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resume Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Want the complete details?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Download my comprehensive resume for detailed project descriptions, 
            technical skills breakdown, and complete work history.
          </p>
          <Button size="lg" className="btn-hero" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              Download Full Resume
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience