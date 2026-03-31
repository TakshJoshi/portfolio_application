"use client"

import dynamic from "next/dynamic"
import { useState, useEffect } from "react"

const TechStack = dynamic(() => import("./TechStack"), {
  ssr: false
})

export default function TechStackWrapper() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full h-screen">

      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
          <div className="text-white/60 animate-pulse text-sm tracking-widest">
            LOADING TECH STACK...
          </div>
        </div>
      )}

      <div className={`${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>
        <TechStack />
      </div>

    </div>
  )
}