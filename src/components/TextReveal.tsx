"use client"

import { motion } from "framer-motion"

export default function TextReveal({ text }: { text: string }) {

  const words = text.split(" ")

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          className="text-neutral-300"
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}