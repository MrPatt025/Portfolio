import { motion } from "framer-motion"
import { Mail, Linkedin, Github, MapPin, Phone, Send, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alex.chen@email.com",
      link: "mailto:alex.chen@email.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/alexchen",
      link: "https://linkedin.com/in/alexchen"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/alexchen",
      link: "https://github.com/alexchen"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco Bay Area",
      link: null
    }
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to contribute to innovative projects and learn from the best. 
            Let's discuss how I can add value to your team.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                I'm actively seeking internship and full-time opportunities in AI, 
                edge computing, and innovative tech companies. Whether you have a 
                challenging project or just want to discuss the latest in tech, 
                I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{item.label}</p>
                    {item.link ? (
                      <a 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4 pt-8"
            >
              <h4 className="text-lg font-semibold">Quick Actions</h4>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="mailto:alex.chen@email.com?subject=Internship Opportunity">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Meeting
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-4 w-4" />
                    Video Call
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="John" 
                        className="transition-all focus:scale-[1.02]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe" 
                        className="transition-all focus:scale-[1.02]"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@company.com"
                      className="transition-all focus:scale-[1.02]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input 
                      id="company" 
                      placeholder="Tech Company Inc."
                      className="transition-all focus:scale-[1.02]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="Internship Opportunity / Project Collaboration"
                      className="transition-all focus:scale-[1.02]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project, internship opportunity, or how we can collaborate..."
                      className="min-h-[120px] transition-all focus:scale-[1.02]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full btn-hero">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Ready to build something amazing together?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, innovative projects, 
            and ways to push the boundaries of what's possible with technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero" asChild>
              <a href="mailto:alex.chen@email.com?subject=Let's Collaborate">
                Start the Conversation
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact