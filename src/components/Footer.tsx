import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/alexchen",
      icon: Github
    },
    {
      name: "LinkedIn", 
      href: "https://linkedin.com/in/alexchen",
      icon: Linkedin
    },
    {
      name: "Email",
      href: "mailto:alex.chen@email.com",
      icon: Mail
    }
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand & Mission */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">Alex Chen</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Computer Engineering student passionate about building the future 
                through AI, edge computing, and innovative technology solutions.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="outline"
                    size="icon"
                    asChild
                    className="hover:scale-110 transition-transform"
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                    >
                      <link.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(link.href)
                      }}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4">Get in Touch</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>San Francisco Bay Area</p>
                <a 
                  href="mailto:alex.chen@email.com"
                  className="hover:text-foreground transition-colors block"
                >
                  alex.chen@email.com
                </a>
                <p className="text-sm mt-4">
                  Open for internships and collaborations in AI, ML, and innovative tech.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center text-muted-foreground text-sm"
            >
              <span>© {currentYear} Alex Chen. Built with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500" />
              <span>and React + TypeScript</span>
            </motion.div>

            {/* Back to Top */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="hover:scale-105 transition-transform"
              >
                <ArrowUp className="h-4 w-4 mr-2" />
                Back to Top
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer