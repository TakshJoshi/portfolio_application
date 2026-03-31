"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export default function About(){

  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {

    const text = textRef.current
    if(!text) return

    // split paragraph into words
    const words = text.innerText.split(" ")
    text.innerHTML = words
      .map(word => `<span class="word inline-block opacity-0">${word}&nbsp;</span>`)
      .join("")

    const wordElements = text.querySelectorAll(".word")

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%"
      }
    })

    // animate title
    tl.from(titleRef.current,{
      opacity:0,
      y:30,
      duration:0.8,
      ease:"power3.out"
    })

    // animate words
    tl.to(wordElements,{
      opacity:1,
      y:0,
      stagger:0.04,
      duration:0.8,
      ease:"power3.out"
    },"-=0.4")

    // subtle parallax
    gsap.to(text,{
      y:-40,
      ease:"none",
      scrollTrigger:{
        trigger:sectionRef.current,
        start:"top bottom",
        end:"bottom top",
        scrub:true
      }
    })

  })

  return(

    <section
      ref={sectionRef}
      className="py-32 px-8 flex items-end justify-end text-end"
    >

      <div className="max-w-2xl">

        <h3
          ref={titleRef}
          className="uppercase tracking-[6px] text-[#0ABAB5] mb-4"
        >
          About Me
        </h3>

        <p
          ref={textRef}
          className="text-3xl leading-relaxed font-semibold"
        >
          I'm a developer focused on building interactive web experiences, AI tools, and iOS applications that combine strong engineering with thoughtful design.
        </p>

      </div>

    </section>

  )
}