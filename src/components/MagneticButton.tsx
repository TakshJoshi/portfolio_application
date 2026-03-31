"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

export default function MagneticButton({
  children,
}: {
  children: React.ReactNode
}) {

  const ref = useRef<HTMLButtonElement>(null)

  const handleMouseMove = (e: any) => {
    const rect = ref.current!.getBoundingClientRect()

    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    ref.current!.style.transform =
      `translate(${x * 0.2}px, ${y * 0.2}px)`
  }

  const reset = () => {
    if (ref.current) {
      ref.current.style.transform = "translate(0,0)"
    }
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-[#0ABAB5]"
    >
      {children}
    </motion.button>
  )
}