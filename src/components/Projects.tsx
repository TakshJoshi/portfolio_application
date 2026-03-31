"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: "PlayScape",
    description:
      "Production iOS application for sports facility booking and community engagement.",
    tech: ["Swift", "UIKit", "iOS"],
    github: "https://github.com/TakshJoshi/Avinya",
    demo: "https://apps.apple.com/in/app/playscape/id6744958839",
    image: "/projects/playscape.png"
  },
  {
    title: "E-Tender Management",
    description:
      "Semantic search system for government tenders using hybrid retrieval and cross-encoder ranking.",
    tech: ["Python", "LangChain", "BM25", "RAG"],
    github: "https://github.com/NSuryansh/Tender-Managment-Software",
    demo: "https://github.com/NSuryansh/Tender-Managment-Software",
    image: "/projects/rag.png"
  },
  {
    title: "Emonal",
    description:
      "Offline-first recovery companion with trigger tracking and behavioral journaling.",
    tech: ["SwiftUI", "iOS"],
    github: "https://github.com/TakshJoshi/Emonal",
    demo: "/projects/emonal",
    image: "/projects/recovery.png"
  },
  {
    title: "AI Interview Assistant",
    description:
      "AI-powered interview practice platform that generates questions and evaluates answers using LLMs.",
    tech: ["React", "Node", "AI", "LLM"],
    github: "https://github.com/Techintek/ai-interview-assistant",
    demo: "https://ai-interview-assistant-sable-one.vercel.app/",
    image: "/projects/ai_interview.png"
  }
]

export default function Projects() {

  const sectionRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {

    const track = document.querySelector(".projects-track") as HTMLElement

    if (!track) return

    gsap.to(track, {

      x: -(track.scrollWidth - window.innerWidth),

      ease: "none",

      scrollTrigger: {
        trigger: ".projects-section",
        start: "top top",
        end: () => "+=" + (track.scrollWidth - window.innerWidth),
        scrub: 0.5,
        pin: true
      }

    })

  })

  return (

    <section className="projects-section relative overflow-hidden pb-80">

      <div className="max-w-7xl mx-auto w-full px-10 pt-30">

        <h2 className="text-5xl font-bold mb-20">
          My <span className="text-[#0ABAB5]">Projects</span>
        </h2>

        <div className="projects-track flex gap-10 pr-[40vw]">

          {projects.map((project, i) => (

            <div
              key={i}
              className="w-[380px] shrink-0 rounded-xl border border-white/10 bg-[#0b0b0b] overflow-hidden group"
            >

              <div className="h-[200px] overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  width={380}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

              </div>

              <div className="p-6">

                <h3 className="text-lg font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-neutral-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">

                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-[#0ABAB5]/10 text-[#0ABAB5]"
                    >
                      {t}
                    </span>
                  ))}

                </div>

                <div className="flex gap-3">

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex-1 text-center text-sm border border-white/10 py-2 rounded-lg hover:border-[#0ABAB5]/40 transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex-1 text-center text-sm border border-[#0ABAB5]/40 py-2 rounded-lg text-[#0ABAB5] hover:bg-[#0ABAB5]/10 transition"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </div>

          ))}

          <Link
            href="/projects"
            className="w-[380px] shrink-0 flex items-center justify-center
            rounded-xl border border-dashed border-[#0ABAB5]/40
            text-[#0ABAB5] text-lg font-semibold hover:border-[#0ABAB5]"
          >
            View More →
          </Link>

        </div>

      </div>

    </section>

  )

}