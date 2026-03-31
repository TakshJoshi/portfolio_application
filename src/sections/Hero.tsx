"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-black">

      {/* ================= BACKGROUND ================= */}
    {/* ================= BACKGROUND ================= */}
<div className="absolute inset-0 -z-10 overflow-hidden bg-black">

{/* PLANET HORIZON */}
<motion.div
  animate={{ rotate: 360 }}
  transition={{
    duration: 140,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute left-1/2 bottom-[-60%] -translate-x-1/2 w-[1600px] h-[1600px] rounded-full pointer-events-none"
  style={{
    background: `
      radial-gradient(circle at center,
        rgba(0,0,0,1) 55%,
        rgba(255,255,255,0.25) 58%,
        rgba(255,0,0,1) 60%,
        rgba(139,92,246,0.8) 65%,
        rgba(59,130,246,0.5) 72%,
        rgba(0,0,0,1) 85%
      )
    `,
    filter: "blur(22px)",
  }}
/>

{/* SUBTLE SKY TINT */}
<div
  className="absolute inset-0 pointer-events-none"
  style={{
    background:
      "radial-gradient(circle at 50% 100%, rgba(139,92,246,0.15), transparent 60%)",
  }}
/>
</div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-4xl z-10">

        <p className="text-neutral-500 text-sm tracking-widest mb-6">
          SOFTWARE ENGINEER
        </p> 

        <h1
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          style={{
            backgroundImage:
              "linear-gradient(to right, #8b5cf6, #3b82f6)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Taksh Joshi
        </h1>

        <h2 className="text-xl md:text-2xl text-neutral-300 mb-8">
          Full Stack Engineer · iOS Developer · Backend Systems
        </h2>

        <p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-12">
          I build scalable, production-grade systems —
          from full-stack web platforms and microservices
          to high-performance native iOS applications.
        </p>

        <div className="flex gap-6 justify-center flex-wrap">
          <a
            href="/Taksh_Joshi_Resume.pdf"
            target="_blank"
            className="px-7 py-3 rounded-lg text-white transition-all duration-300 hover:scale-105"
            style={{
              background:
                "linear-gradient(90deg, #8b5cf6, #065f46)",
            }}
          >
            Download Resume
          </a>

          <a
            href="#projects"
            className="px-7 py-3 border rounded-lg transition-all duration-300 hover:scale-105 border-emerald-700 text-emerald-600"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  )
}