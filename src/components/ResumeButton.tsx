"use client"

import { FileText } from "lucide-react"
import { motion } from "framer-motion"

export default function ResumeButton() {

  return (
    <motion.a
      href="https://drive.google.com/file/d/1bGARnzNf3zYCqszWm7R1hmw4HySJNHYh/view?usp=drive_linkf"
      target="_blank"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
      whileHover={{ scale: 1.1 }}
      className="fixed right-8 bottom-20 z-50
      flex items-center gap-2
      text-sm tracking-widest
      text-white/70 hover:text-[#0ABAB5]"
    >

      RESUME

      <FileText size={16} />

    </motion.a>
  )
}