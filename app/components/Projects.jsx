
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import projects from "./Projectdata/Projects.js";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-zinc-950 px-6 py-24 text-white sm:px-10 lg:px-16"
    >
      {/* ================= BACKGROUND GLOW ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-20 max-w-2xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-emerald-400"
          >
            Selected Work
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            My journey through <span className="text-zinc-500">projects.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 text-base leading-7 text-zinc-400"
          >
            Each project represents a different stage of my journey — from
            learning the fundamentals to building full-stack applications and
            exploring AI.
          </motion.p>
        </motion.div>

        {/* ================= PROJECTS ================= */}
        <div className="relative">
          {/* ================= TIMELINE ================= */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-[19px] top-0 hidden h-full w-px bg-gradient-to-b from-emerald-400/40 via-zinc-800 to-transparent md:block"
          />

          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.article
                key={project.number}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="group relative grid gap-10 md:grid-cols-[80px_1fr] lg:grid-cols-[100px_1fr]"
              >
                {/* ================= NUMBER ================= */}
                <div className="relative z-10 hidden md:block">
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: index * 0.08 + 0.15,
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950 text-sm font-medium text-zinc-400 transition-all duration-300 group-hover:border-emerald-400/60 group-hover:text-emerald-400 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]"
                  >
                    {project.number}
                  </motion.div>
                </div>

                {/* ================= CONTENT ================= */}
                <div className="grid items-center gap-8 lg:grid-cols-2">
                  {/* ================= IMAGE ================= */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? -40 : 40,
                      scale: 0.96,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.1,
                      ease: "easeOut",
                    }}
                    className={`group/image relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-500 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] ${index % 2 !== 0 ? "lg:order-2" : ""} ${project.featured ? "shadow-[0_0_80px_rgba(16,185,129,0.08)]" : ""}`}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover/image:scale-[1.05]"
                      />

                      {/* Image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent opacity-70 transition-opacity duration-500 group-hover/image:opacity-90" />

                      {/* ================= PROJECT TYPE ================= */}
                      <div className="absolute left-4 top-4">
                        <span className="inline-flex rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs text-zinc-300 backdrop-blur-md transition-all duration-300 group-hover/image:border-emerald-400/30 group-hover/image:text-emerald-300">
                          {project.type}
                        </span>
                      </div>

                      {/* Small corner accent */}
                      <div className="absolute bottom-4 right-4 h-2 w-2 rounded-full bg-emerald-400 opacity-0 shadow-[0_0_12px_rgba(52,211,153,0.8)] transition-opacity duration-500 group-hover/image:opacity-100" />
                    </div>
                  </motion.div>

                  {/* ================= TEXT ================= */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? 40 : -40,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.2,
                      ease: "easeOut",
                    }}
                    className={`${index % 2 !== 0 ? "lg:order-1" : ""} transition-transform duration-500 lg:group-hover:translate-x-1`}
                  >
                    {/* Number / type */}
                    <p className="mb-3 text-sm font-medium text-emerald-400 transition-transform duration-300 group-hover:translate-x-1">
                      {project.number} / {project.type}
                    </p>

                    {/* Title */}
                    <h3 className="text-3xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-emerald-50 sm:text-4xl">
                      {project.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="mt-3 text-lg text-zinc-300">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500">
                      {project.description}
                    </p>

                    {/* ================= TECHNOLOGIES ================= */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((technology, techIndex) => (
                        <motion.span
                          key={technology}
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 0.3,
                            delay: 0.3 + techIndex * 0.05,
                          }}
                          className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-400/30 hover:bg-zinc-800 hover:text-zinc-200"
                        >
                          {technology}
                        </motion.span>
                      ))}
                    </div>

                    {/* ================= VIEW PROJECT ================= */}
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors duration-300 hover:text-emerald-400"
                    >
                      <span>View project</span>

                      <span className="transition-transform duration-300 group-hover/link:translate-x-1.5">
                        →
                      </span>
                    </Link>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
