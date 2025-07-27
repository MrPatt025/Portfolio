import { motion } from "framer-motion"
import { 
  TrendingUp, 
  Users, 
  Award, 
  Code,
  Star,
  GitBranch,
  Activity,
  Calendar
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Achievements = () => {
  const stats = [
    {
      icon: Code,
      value: "50+",
      label: "Projects Completed",
      description: "From AI models to full-stack applications"
    },
    {
      icon: GitBranch,
      value: "1,200+",
      label: "GitHub Contributions",
      description: "Active open source contributor"
    },
    {
      icon: Star,
      value: "3.9/4.0",
      label: "Academic GPA",
      description: "Consistent academic excellence"
    },
    {
      icon: Award,
      value: "15+",
      label: "Competitions Won",
      description: "Hackathons and coding contests"
    }
  ]

  const achievements = [
    {
      title: "IEEE Conference Publication",
      category: "Research",
      description: "Co-authored paper on 'Privacy-Preserving Federated Learning for Edge Computing' - IEEE ICDCS 2024",
      date: "2024",
      impact: "Cited by 25+ researchers",
      badge: "🏆"
    },
    {
      title: "Google Code-in Winner",
      category: "Competition",
      description: "Global finalist among 3,000+ participants for outstanding open source contributions",
      date: "2023",
      impact: "$1,000 scholarship + mentorship",
      badge: "🥇"
    },
    {
      title: "Stanford AI Challenge Champion",
      category: "Hackathon",
      description: "Built real-time emotion recognition system using computer vision and edge computing",
      date: "2023",
      impact: "1st place among 150+ teams",
      badge: "🚀"
    },
    {
      title: "Open Source Contribution",
      category: "Community",
      description: "Core contributor to TensorFlow Edge optimization library - 500+ stars on GitHub",
      date: "2023-2024",
      impact: "Used by 10,000+ developers",
      badge: "💻"
    },
    {
      title: "President, Computer Engineering Society",
      category: "Leadership",
      description: "Leading 200+ member organization, organizing tech talks and industry partnerships",
      date: "2023-2024",
      impact: "Increased membership by 60%",
      badge: "👥"
    },
    {
      title: "Dean's List Recognition",
      category: "Academic",
      description: "Consistent top 5% academic performance across 4 consecutive semesters",
      date: "2022-2024",
      impact: "Maintained 3.9+ GPA",
      badge: "📚"
    }
  ]

  const recognitions = [
    "Outstanding Student in AI Track - Stanford University",
    "Google Student Developer Expert",
    "Microsoft Learn Student Ambassador",
    "AWS Student Cloud Advocate",
    "NVIDIA DLI Certified Instructor"
  ]

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Achievements & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognized for excellence in academics, research, leadership, and technical innovation
          </p>
        </motion.div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover text-center">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Detailed Achievements */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-8"
          >
            Major Achievements
          </motion.h3>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">{achievement.badge}</div>
                        <div>
                          <CardTitle className="text-lg">{achievement.title}</CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="secondary" className="text-xs">
                              {achievement.category}
                            </Badge>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3 mr-1" />
                              {achievement.date}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{achievement.description}</p>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{achievement.impact}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recognition & Awards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-8">Recognition & Awards</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {recognitions.map((recognition, index) => (
              <motion.div
                key={recognition}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-4 bg-card border border-border rounded-lg hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{recognition}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Ready to add value to your team?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            These achievements represent my commitment to excellence, continuous learning, 
            and making meaningful contributions to the tech community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge variant="outline" className="text-base py-2 px-4">
              <Activity className="mr-2 h-4 w-4" />
              Always Learning & Growing
            </Badge>
            <Badge variant="outline" className="text-base py-2 px-4">
              <Users className="mr-2 h-4 w-4" />
              Team-Focused Mindset
            </Badge>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements