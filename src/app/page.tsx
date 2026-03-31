import Navbar from "@/components/Navbar"
import Landing from "@/components/Hero"
import About from "@/components/About"
import Career from "@/components/Career"
import Projects from "@/components/Projects"
import dynamic from "next/dynamic"
import TechStackWrapper from "@/components/TechStackWrapper"
import SocialIcons from "@/components/SocialIcons"
import ResumeButton from "@/components/ResumeButton"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Landing />
      <SocialIcons />
      <ResumeButton />
      <About />

      {/* <WhatIDo /> */}

      <Career />

      <Projects />

      <TechStackWrapper />
      <Contact />

    </main>
  )
}
