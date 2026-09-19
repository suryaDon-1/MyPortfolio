
import Image from "next/image";

function SectionOne() {
  return (
    <div className="about-card absolute inset-0 z-10 flex items-center bg-[#111113] px-5 py-10 sm:px-8 md:px-12">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 sm:gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12">

        {/* ================= LEFT CONTENT ================= */}
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-emerald-400 sm:mb-6 sm:text-sm">
            About Me
          </p>

          <h1 className="max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-7xl">
            I build full-stack applications and
            <span className="text-emerald-400">
              {" "}
              enjoy understanding how they work.
            </span>
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-6 text-zinc-400 sm:mt-6 sm:text-base sm:leading-7 lg:mt-8 lg:text-lg lg:leading-8">
            I'm Surya, a MERN Stack Developer focused on building modern web
            applications with JavaScript, React, Node.js, Express.js, and
            MongoDB.
          </p>

          {/* Tech Stack */}
          <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
            <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-300 sm:px-4 sm:py-2 sm:text-sm">
              React
            </span>

            <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-300 sm:px-4 sm:py-2 sm:text-sm">
              Node.js
            </span>

            <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-300 sm:px-4 sm:py-2 sm:text-sm">
              Express
            </span>

            <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-300 sm:px-4 sm:py-2 sm:text-sm">
              MongoDB
            </span>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative mx-auto w-full max-w-[250px] sm:max-w-xs lg:max-w-md">

          {/* Offset border */}
          <div className="absolute -right-2 -bottom-2 h-full w-full rounded-2xl border border-emerald-400/30 sm:-right-3 sm:-bottom-3" />

          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 sm:rounded-3xl">
            <Image
              src="/123.jpg"
              alt="Surya - MERN Stack Developer"
              width={600}
              height={750}
              priority
              className="aspect-[4/5] w-full object-cover object-center transition-transform duration-500 hover:scale-105"
            />

            {/* Subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Small accent */}
          <div className="absolute -left-2 top-6 h-12 w-1 bg-emerald-400 sm:top-8 sm:h-16" />
        </div>

      </div>
    </div>
  );
}

export default SectionOne;