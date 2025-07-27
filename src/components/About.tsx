import { motion } from "framer-motion"
import { Brain, Code2, Zap, Target, Heart, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "คิดนอกกรอบ",
      description: "มองหาวิธีแก้ปัญหาที่แปลกใหม่และสร้างสรรค์ เพื่อสร้างโซลูชันที่ไม่เหมือนใคร"
    },
    {
      icon: Target,
      title: "ชอบแก้ปัญหา",
      description: "เพลิดเพลินกับการวิเคราะห์และแก้ไขปัญหาที่ซับซ้อน ด้วยความเป็นระบบ"
    },
    {
      icon: Brain,
      title: "เข้าสังคมได้ง่าย",
      description: "สามารถทำงานร่วมกับทีมได้ดี สื่อสารได้ชัดเจน และสร้างบรรยากาศการทำงานที่ดี"
    },
    {
      icon: Zap,
      title: "ทำงานเป็นระบบ",
      description: "วางแผนและดำเนินงานอย่างมีระเบียบ เน้นประสิทธิภาพและความเสถียร"
    },
    {
      icon: Code2,
      title: "การทำงานเป็นทีม",
      description: "ร่วมมือกับผู้อื่นได้ดี แบ่งปันความรู้ และสนับสนุนเพื่อนร่วมงาน"
    },
    {
      icon: Heart,
      title: "สื่อสารได้ดี",
      description: "ถ่ายทอดไอเดียและแนวคิดเทคนิคได้อย่างเข้าใจง่าย"
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
              เส้นทางการเรียนรู้
            </h3>
            
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                ผมเป็นนักศึกษาวิศวกรรมคอมพิวเตอร์ที่หลงใหลในโลกของ AI และการพัฒนาซอฟต์แวร์ 
                ด้วยความคิดที่นอกกรอบและรักในการแก้ปัญหา ทำให้ผมมองเห็นโอกาสในการสร้างโซลูชันที่แปลกใหม่
              </p>
              
              <p>
                จากการเขียนโค้ด Python ครั้งแรก จนถึงการพัฒนา AI และ Web Applications ที่ซับซ้อน 
                ผมเชื่อมั่นในพลังของเทคโนโลยีที่จะเปลี่ยนแปลงโลก โดยเน้นการทำงานเป็นระบบและมีประสิทธิภาพ
              </p>
              
              <p>
                ทักษะหลักของผม ได้แก่ Python, C++, AI/ML, และ Full Stack Development 
                พร้อมกับการใช้เครื่องมือสมัยใหม่อย่าง Docker, GitHub, VS Code และ ChatGPT
              </p>
            </div>

            <div className="pt-6">
              <h4 className="text-xl font-semibold mb-4">เป้าหมายในอาชีพ</h4>
              <p className="text-muted-foreground">
                ผมมองหาโอกาสในตำแหน่ง Software Engineer, AI Engineer หรือ Full Stack Developer 
                ในสภาพแวดล้อมการทำงานที่ยืดหยุ่น (Remote/Hybrid/On-site) เพื่อสร้างผลกระทบที่มีความหมาย 
                และเรียนรู้จากทีมงานมืออาชีพ
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