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
      value: "mrpatt025@email.com",
      link: "mailto:mrpatt025@email.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/mrpatt025",
      link: "https://linkedin.com/in/mrpatt025"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/mrpatt025",
      link: "https://github.com/mrpatt025"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Thailand",
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
              <h3 className="text-2xl font-semibold mb-6">ติดต่อผม</h3>
              <p className="text-muted-foreground mb-8">
                ผมกำลังมองหาโอกาสในการฝึกงานและทำงานเต็มเวลาในสาย Software Engineer, 
                AI Engineer และ Full Stack Developer หากคุณมีโปรเจกต์ที่น่าสนใจหรือ
                ต้องการคุยเกี่ยวกับเทคโนโลยี ผมยินดีที่จะรับฟัง
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
              <h4 className="text-lg font-semibold">ติดต่อด่วน</h4>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="mailto:mrpatt025@email.com?subject=โอกาสการทำงาน">
                    <Mail className="mr-2 h-4 w-4" />
                    ส่งอีเมล
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-4 w-4" />
                    นัดหมายคุยงาน
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-4 w-4" />
                    วิดีโอคอล
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
                <CardTitle>ส่งข้อความหาผม</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">ชื่อ</Label>
                      <Input 
                        id="firstName" 
                        placeholder="ชื่อจริง" 
                        className="transition-all focus:scale-[1.02]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">นามสกุล</Label>
                      <Input 
                        id="lastName" 
                        placeholder="นามสกุล" 
                        className="transition-all focus:scale-[1.02]"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">อีเมล</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@company.com"
                      className="transition-all focus:scale-[1.02]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">บริษัท/องค์กร</Label>
                    <Input 
                      id="company" 
                      placeholder="บริษัทของคุณ"
                      className="transition-all focus:scale-[1.02]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">หัวข้อ</Label>
                    <Input 
                      id="subject" 
                      placeholder="โอกาสการทำงาน / ความร่วมมือในโปรเจกต์"
                      className="transition-all focus:scale-[1.02]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">ข้อความ</Label>
                    <Textarea 
                      id="message" 
                      placeholder="บอกผมเกี่ยวกับโปรเจกต์ โอกาสการฝึกงาน หรือความร่วมมือที่คุณสนใจ..."
                      className="min-h-[120px] transition-all focus:scale-[1.02]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full btn-hero">
                    <Send className="mr-2 h-4 w-4" />
                    ส่งข้อความ
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
            พร้อมทำงานร่วมกัน?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            ผมพร้อมที่จะร่วมงานในโปรเจกต์ที่น่าสนใจ เรียนรู้จากทีมมืออาชีพ 
            และสร้างสรรค์สิ่งใหม่ ๆ ด้วยกัน มาสร้างผลงานที่น่าตื่นตาตื่นใจกันเถอะ!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero" asChild>
              <a href="mailto:mrpatt025@email.com?subject=มาร่วมงานกัน">
                เริ่มคุยงานกันเลย
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                ดาวน์โหลด Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact