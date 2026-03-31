"use client"

import { useEffect, useState } from "react"
import Particles from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import type { Engine } from "@tsparticles/engine"

export default function ParticlesBackground() {

  const [init, setInit] = useState(false)

  useEffect(() => {

    const initParticles = async () => {
      const engine = (await import("@tsparticles/engine")).tsParticles
      await loadSlim(engine as unknown as Engine)
      setInit(true)
    }

    initParticles()

  }, [])

  if (!init) return null

  return (
    <Particles
      id="tsparticles"
      options={{
        fpsLimit: 60,
        background: {
          color: "transparent"
        },
        particles: {
          number: {
            value: 60
          },
          color: {
            value: "#0ABAB5"
          },
          links: {
            enable: true,
            distance: 150,
            color: "#0ABAB5",
            opacity: 0.2
          },
          move: {
            enable: true,
            speed: 1
          },
          size: {
            value: { min: 1, max: 3 }
          }
        }
      }}
      className="fixed inset-0 -z-10"
    />
  )
}