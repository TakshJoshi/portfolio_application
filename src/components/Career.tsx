"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useRef } from "react"

const career = [
  {
    role: "iOS Intern",
    company: "Infosys",
    year: "2025",
    description:
      "Built an iOS based Library Management System which caters specificly towardsspecific needs of Infosys Mysurur GCC's Library.",
  },
  {
    role: "B.Tech Computer Science",
    company: "Chitkara University",
    year: "2022 – Present",
    description:
      "Focused on full-stack development, iOS development, system design and core CS subjects including OS, DBMS and computer networks.",
  },
  {
    role: "Senior Secondary (12th)",
    company: "Stepping Stones School, Chandigarh",
    year: "2022",
    description:
      "Completed science stream with strong emphasis on mathematics and computer science.",
  },
  {
    role: "Secondary School (10th)",
    company: "Ryan International School, Chandigarh",
    year: "2020",
    description:
      "Developed early interest in programming, mathematics and logical problem solving.",
  },
]

export default function Career() {

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  })

  return (
    <section id="career" className="py-32 px-6">

      <h2 className="text-4xl font-bold text-center mb-24">
        My Career <span className="text-[#0ABAB5]">&</span> Experience
      </h2>

      <div ref={ref} className="relative max-w-5xl mx-auto">

        {/* animated timeline line */}

        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-white/10 -translate-x-1/2" />

        <motion.div
          style={{ scaleY }}
          className="absolute left-1/2 top-0 w-[2px] h-full bg-[#0ABAB5] origin-top -translate-x-1/2 shadow-[0_0_15px_#0ABAB5]"
        />

        {career.map((item, i) => {

          const isLeft = i % 2 === 0

          return (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`mb-20 flex ${isLeft ? "justify-start" : "justify-end"}`}
            >

              <div className="w-[45%] relative">

                {/* glowing timeline dot */}

                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0ABAB5] rounded-full shadow-[0_0_12px_#0ABAB5]" />

                {/* card */}

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-[#0ABAB5]/40 transition">

                  <div className="flex justify-between items-center mb-3">

                    <div>
                      <h4 className="text-lg font-semibold">
                        {item.role}
                      </h4>

                      <h5 className="text-neutral-400 text-sm">
                        {item.company}
                      </h5>
                    </div>

                    <span className="text-[#0ABAB5] font-semibold">
                      {item.year}
                    </span>

                  </div>

                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {item.description}
                  </p>

                </div>

              </div>

            </motion.div>

          )
        })}

      </div>

    </section>
  )
}