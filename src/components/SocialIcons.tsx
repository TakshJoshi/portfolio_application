"use client"

import { Github, Linkedin } from "lucide-react"
import { SiLeetcode } from "react-icons/si"
import { motion } from "framer-motion"

export default function SocialIcons() {

  const icons = [
    {
      icon: Github,
      link: "https://github.com/TakshJoshi"
    },
    {
      icon: Linkedin,
      link: "https://linkedin.com/in/taksh-joshi-301657255/"
    }
  ]

  return (
    <div className="fixed left-8 bottom-32 z-50 flex flex-col gap-6">

      {icons.map((item, i) => {
        const Icon = item.icon

        return (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ scale: 1.2 }}
            className="text-white/70 hover:text-[#0ABAB5] transition"
          >
            <Icon size={24} />
          </motion.a>
        )
      })}

      {/* LeetCode */}

      <motion.a
        href="https://leetcode.com/u/takshjoshi/"
        target="_blank"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.2 }}
        className="text-white/70 hover:text-[#0ABAB5] transition"
      >
        <SiLeetcode size={22} />
      </motion.a>

    </div>
  )
}