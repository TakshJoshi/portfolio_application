"use client";

import { motion } from "framer-motion";

export default function Projectsthreeys() {
    return (
        <section id="projects" className="relative py-32 px-6">
            <div className="max-w-6xl mx-auto">

            {/* Section Title */}
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-20"
            >
                Projects
            </motion.h2>

        {/* ================= PLAYSCAPE FEATURED ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="group relative p-12 rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-md mb-24 transition-all duration-500 hover:shadow-xl"
          style={{
            boxShadow: "0 0 0px transparent",
          }}
          whileHover={{
            boxShadow: "0 0 40px rgba(124,58,237,0.25)",
          }}
        >
          <h3
            className="text-3xl md:text-4xl font-semibold mb-6 transition-colors duration-300"
            style={{ color: "white" }}
          >
            PlayScape — Live on App Store
          </h3>

          <p className="text-neutral-400 max-w-3xl leading-relaxed mb-8">
            Production iOS application built using Swift and UIKit.
            Enables sports facility booking, community interaction,
            and scalable modular feature expansion including tournaments.
          </p>

          <a
            href="https://apps.apple.com/in/app/playscape/id6744958839"
            target="_blank"
            className="inline-block px-8 py-3 rounded-lg text-white transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: "var(--purple)" }}
          >
            View on App Store
          </a>
        </motion.div>

        {/* ================= TENDER MANAGEMENT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="group p-12 rounded-2xl border border-neutral-800 bg-neutral-900/30 mb-24 transition-all duration-500 hover:shadow-xl"
          whileHover={{
            boxShadow: "0 0 40px rgba(0,66,37,0.35)",
          }}
        >
          <h3
            className="text-3xl md:text-4xl font-semibold mb-6"
            style={{ color: "white" }}
          >
            Tender Management Software — MERN Stack
          </h3>

          <p className="text-neutral-400 max-w-3xl leading-relaxed">
            End-to-end procurement lifecycle platform featuring
            JWT authentication, role-based access control,
            secure bidding workflows, and document management.
          </p>
        </motion.div>

        {/* ================= SMALLER PROJECTS ================= */}

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Mess-Sarthi */}
          <motion.div
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 25px rgba(124,58,237,0.2)",
            }}
            className="p-8 border border-neutral-800 rounded-xl bg-neutral-900/30 transition-all duration-500"
          >
            <h4 className="text-2xl font-semibold mb-4 text-white">
              Mess-Sarthi
            </h4>
            <p className="text-neutral-400">
              MERN-based system to predict food demand and reduce
              mess wastage through regulated preparation.
            </p>
          </motion.div>

          {/* BidHub */}
          <motion.div
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 25px rgba(0,66,37,0.3)",
            }}
            className="p-8 border border-neutral-800 rounded-xl bg-neutral-900/30 transition-all duration-500"
          >
            <h4 className="text-2xl font-semibold mb-4 text-white">
              BidHub
            </h4>
            <p className="text-neutral-400">
              iOS auction platform built with Swift and UIKit,
              including booking and community modules.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}