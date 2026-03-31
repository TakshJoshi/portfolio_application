import Navbar from "@/components/Navbar"
import Landing from "@/components/Hero"
import About from "@/components/About"
import Career from "@/components/Career"
import Projects from "@/components/Projects"
import TechStack from "@/components/TechStack"
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

      <TechStack />

      <Contact />

    </main>
  )
}
