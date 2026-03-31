"use client"

import Link from "next/link"

export default function Navbar() {

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

        <h1 className="text-white font-semibold text-lg">
          Taksh.dev
        </h1>

        <nav className="flex gap-10 text-sm text-neutral-300">

          <Link href="#projects" className="hover:text-[#0ABAB5] transition">
            Projects
          </Link>

          <Link href="#experience" className="hover:text-[#0ABAB5] transition">
            Experience
          </Link>

          <Link href="#contact" className="hover:text-[#0ABAB5] transition">
            Contact
          </Link>

        </nav>

      </div>

    </header>
  )
}