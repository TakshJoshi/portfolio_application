"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "React / Next.js", level: 90 },
  { name: "Node / MERN", level: 85 },
  { name: "iOS Development", level: 80 },
  { name: "System Design", level: 75 },
]

export default function Skills() {

  return (
    <section className="py-32 max-w-3xl mx-auto">

      <h2 className="text-4xl font-bold mb-12 text-center">
        Skills
      </h2>

      {skills.map((skill, i) => (
        <div key={i} className="mb-8">

          <p className="mb-2 text-neutral-300">{skill.name}</p>

          <div className="w-full bg-neutral-800 rounded-full h-3">

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1 }}
              className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-[#0ABAB5]"
            />

          </div>

        </div>
      ))}

    </section>
  )
}