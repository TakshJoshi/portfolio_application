"use client"

import { motion } from "framer-motion"

export default function GradientBackground() {
  return (
    <motion.div
      className="fixed inset-0 -z-10"
      animate={{
        background: [
          "radial-gradient(circle at 20% 20%, #0ABAB5 0%, transparent 40%)",
          "radial-gradient(circle at 80% 30%, #7C3AED 0%, transparent 40%)",
          "radial-gradient(circle at 40% 80%, #0ABAB5 0%, transparent 40%)",
          "radial-gradient(circle at 20% 20%, #7C3AED 0%, transparent 40%)"
        ]
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        filter: "blur(120px)",
        opacity: 0.25
      }}
    />
  )
}