import React from "react";

function SectionFive() {
  return (
    <div className="about-card absolute inset-0 z-50 flex items-center bg-[#111113] px-5 py-8 sm:px-6 md:px-12 md:py-0">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-7 md:grid-cols-2 md:gap-12">

        {/* LEFT */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-400 sm:text-sm">
            Experience
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl md:mt-4 md:text-5xl">
            Learning through real development work.
          </h2>
        </div>

        {/* RIGHT */}
        <div className="rounded-2xl border border-white/10 bg-[#09090b] p-5 sm:rounded-3xl sm:p-7 md:p-8">
          <p className="text-sm text-emerald-400">
            Jan 2026 — Jun 2026
          </p>

          <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
            MERN Stack Development
          </h3>

          <p className="mt-2 text-sm text-zinc-500 sm:text-base">
            Sensation Software Solutions Pvt. Ltd., Mohali
          </p>

          <p className="mt-4 text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
            Completed six months of industrial training focused on hands-on
            MERN stack development and full-stack web application development.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {["React.js", "Node.js", "Express.js", "MongoDB"].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-zinc-400 sm:px-3 sm:text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFive;