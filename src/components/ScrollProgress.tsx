import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scroll = totalScroll / windowHeight * 100
      setScrollProgress(scroll)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-50"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-primary to-accent origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        transition={{ duration: 0.1 }}
      />
    </motion.div>
  )
}

export default ScrollProgress