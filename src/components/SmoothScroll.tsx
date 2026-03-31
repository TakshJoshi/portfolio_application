"use client"

import { useEffect } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.3,
      lerp: 0.1,
      smoothWheel: true
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

  }, [])

  return <>{children}</>
}