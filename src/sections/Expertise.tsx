"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Expertise() {
  return (
    <section className="relative py-40 px-8">

      {/* Subtle Ambient Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-1/3 w-[700px] h-[700px] rounded-full blur-[180px]"
          style={{ backgroundColor: "var(--purple)", opacity: 0.06 }}
        />
      </div>

      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-sm text-neutral-500 tracking-widest mb-4">
            CAPABILITIES
          </p>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Technical Expertise
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-16"
        >
          {/* Frontend */}
          <motion.div variants={item}>
            <h3
              className="text-xl font-semibold mb-6"
              style={{ color: "var(--purple)" }}
            >
              Frontend Engineering
            </h3>

            <ul className="space-y-4 text-neutral-400">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Modern Web Animation</li>
            </ul>
          </motion.div>

          {/* Backend */}
          <motion.div variants={item}>
            <h3
              className="text-xl font-semibold mb-6"
              style={{ color: "var(--racing-green)" }}
            >
              Backend & Systems
            </h3>

            <ul className="space-y-4 text-neutral-400">
              <li>NestJS / Node.js</li>
              <li>PostgreSQL / Prisma ORM</li>
              <li>Redis / BullMQ</li>
              <li>FastAPI Microservices</li>
            </ul>
          </motion.div>

          {/* DevOps */}
          <motion.div variants={item}>
            <h3
              className="text-xl font-semibold mb-6"
              style={{ color: "var(--purple)" }}
            >
              Infrastructure & DevOps
            </h3>

            <ul className="space-y-4 text-neutral-400">
              <li>Docker</li>
              <li>Supabase / Firebase</li>
              <li>REST APIs</li>
              <li>Scalable Architecture Design</li>
            </ul>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}