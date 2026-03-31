import "./globals.css"

import ParticlesBackground from "@/components/ParticlesBackground"
import GradientBackground from "@/components/GradientBackground"
import CursorGlow from "@/components/CursorGlow"
import SmoothScroll from "@/components/SmoothScroll"
import ScrollProgress from "@/components/ScrollProgress"
import MouseLight from "@/components/MouseLight"

export const metadata = {
  title: "Taksh Joshi",
  description: "Full Stack Engineer · iOS Developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className="bg-black text-white antialiased overflow-x-hidden">

        <ScrollProgress />

        <ParticlesBackground />
        <GradientBackground />

        <MouseLight />
        <CursorGlow />

        <SmoothScroll>
          {children}
        </SmoothScroll>

      </body>
    </html>
  )
}