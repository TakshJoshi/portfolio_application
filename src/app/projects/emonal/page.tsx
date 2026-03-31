"use client"

import { useState } from "react"
import Image from "next/image"

export default function EmonalDemo() {

  const [screen, setScreen] = useState("home")

  const screens: any = {
    home: "/projects/emonal/home.png",
    journal: "/projects/emonal/journal.png",
    entry: "/projects/emonal/new-entry.png",
    calendar: "/projects/emonal/calender.png"
  }

  return (

    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-10 p-10">

      {/* Title */}

      <div className="text-center max-w-xl">

        <h1 className="text-5xl font-bold mb-4">
          Emonal
        </h1>

        <p className="text-white/60">
          Addiction recovery companion focused on emotional awareness,
          journaling, and behavioral reflection.
        </p>

      </div>


      {/* iPhone */}

      <div className="relative w-[320px] h-[640px] rounded-[40px] overflow-hidden border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.8)]">

        {/* App Screen */}

        <Image
          src={screens[screen]}
          alt="emonal screen"
          fill
          className="object-cover"
        />

        {/* Bottom Tabs */}

        <button
          onClick={() => setScreen("home")}
          className="absolute bottom-0 left-0 w-1/3 h-[90px]"
        />

        <button
          onClick={() => setScreen("journal")}
          className="absolute bottom-0 left-1/3 w-1/3 h-[90px]"
        />

        <button
          onClick={() => setScreen("calendar")}
          className="absolute bottom-0 right-0 w-1/3 h-[90px]"
        />

        {/* PLUS BUTTON (journal screen only) */}

        {screen === "journal" && (

          <button
            onClick={() => setScreen("entry")}
            className="absolute top-6 right-6 w-14 h-14"
          />

        )}

        {/* CANCEL BUTTON (entry screen only) */}

        {screen === "entry" && (

          <button
            onClick={() => setScreen("journal")}
            className="absolute top-6 left-6 w-24 h-12"
          />

        )}

      </div>

    <p className="text-white/30 text-xs text-center max-w-sm">
        Interactive mockup — not a full production build.
    </p>

    </div>

  )
}