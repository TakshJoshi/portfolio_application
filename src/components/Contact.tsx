"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Github, Linkedin } from "lucide-react"
import { SiLeetcode } from "react-icons/si"

export default function Contact() {

  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {

    gsap.from(".contact-item", {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%"
      }
    })

  })

  return (

    <section
      ref={ref}
      className="py-40 px-10 max-w-7xl mx-auto"
    >

      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">

        {/* LEFT */}

        <div className="contact-item">

          <h2 className="text-5xl font-light mb-10 tracking-wide">
            CONTACT
          </h2>

          <div className="space-y-6 text-white/70">

            <div>
              <p className="text-sm mb-1">Email</p>
              <p className="text-lg text-white">
                takshjoshi04@gmail.com
              </p>
            </div>

            <div>
              <p className="text-sm mb-1">Location</p>
              <p className="text-lg text-white">
                Chandigarh, India
              </p>
            </div>

          </div>

        </div>


        {/* SOCIAL */}

        <div className="contact-item">

          <p className="text-white/60 mb-6 text-sm">
            Social
          </p>

          <div className="flex flex-col gap-6 text-xl">

            <a
              href="https://github.com/TakshJoshi"
              target="_blank"
              className="flex items-center justify-between border-b border-white/10 pb-2 hover:text-[#0ABAB5] transition"
            >
              Github
              {/* <Github size={18}/> */}
            </a>

            <a
              href="https://linkedin.com/in/taksh-joshi-301657255/"
              target="_blank"
              className="flex items-center justify-between border-b border-white/10 pb-2 hover:text-[#0ABAB5] transition"
            >
              Linkedin
              {/* <Linkedin size={18}/> */}
            </a>

            <a
              href="https://leetcode.com/u/takshjoshi/"
              target="_blank"
              className="flex items-center justify-between border-b border-white/10 pb-2 hover:text-[#0ABAB5] transition"
            >
              LeetCode
              {/* <SiLeetcode size={18}/> */}
            </a>
            <a
              href="https://codeforces.com/profile/takshjoshi04"
              target="_blank"
              className="flex items-center justify-between border-b border-white/10 pb-2 hover:text-[#0ABAB5] transition"
            >
                Codeforces
              {/* <SiLeetcode size={18}/> */}
            </a>

          </div>

        </div>


        {/* RIGHT */}

        <div className="contact-item text-white/60">

          <p className="mb-6">
            Designed and Developed by
            <span className="text-[#0ABAB5] ml-2">
              Taksh Joshi
            </span>
          </p>

          <p>
            © 2026
          </p>

        </div>

      </div>

    </section>

  )
}