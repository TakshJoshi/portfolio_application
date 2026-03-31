"use client"

import { motion } from "framer-motion"
import { fadeUp, stagger } from "../lib/animations"
import TextReveal from "@/components/TextReveal"
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

        <motion.p
          variants={fadeUp}
          className="text-neutral-500 mb-6 tracking-widest"
        >
          SOFTWARE ENGINEER
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl font-bold"
        >
          TAKSH
          <br />
          <span className="text-[#0ABAB5]">JOSHI</span>
        </motion.h1>
          

        <motion.p
          variants={fadeUp}
          className="text-xl text-neutral-300 mb-8"
        >
          <TextReveal text="Full Stack Engineer · iOS Developer · Backend Systems" />
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex gap-6 justify-center"
        >

          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-[#0ABAB5] hover:scale-105 transition">
            Resume
          </button>

          <button className="px-6 py-3 rounded-lg border border-[#0ABAB5] text-[#0ABAB5] hover:bg-[#0ABAB5]/10 transition">
            Projects
          </button>

        </motion.div>

      </motion.div>

    </section>
  )
}