"use client"

import { useEffect, useState } from "react"

export default function CursorGlow() {

  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {

    const move = (e: MouseEvent) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", move)

    return () => window.removeEventListener("mousemove", move)

  }, [])

  return (
    <div
      className="pointer-events-none fixed w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
      style={{
        background: "#0ABAB5",
        left: pos.x - 200,
        top: pos.y - 200,
      }}
    />
  )
}