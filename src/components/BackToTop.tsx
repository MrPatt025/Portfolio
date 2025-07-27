import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0.8 
      }}
      transition={{ duration: 0.3 }}
      className={`fixed bottom-8 right-8 z-50 ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'}`}
    >
      <Button
        onClick={scrollToTop}
        size="icon"
        className="h-12 w-12 rounded-full shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-110"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </motion.div>
  )
}

export default BackToTop