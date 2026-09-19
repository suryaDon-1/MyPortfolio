import React from "react";

function Sectionsix() {
  return (
    <div className="about-card absolute inset-0 z-[60] flex items-center bg-[#0f1012] px-4 py-8 sm:px-6 md:px-12">
      <div className="mx-auto w-full max-w-6xl">
        {/* Heading */}
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-400 sm:text-sm sm:tracking-[0.25em]">
          My Approach
        </p>

        <h2 className="mt-3 max-w-2xl text-2xl font-bold leading-tight sm:mt-4 sm:text-3xl md:text-5xl">
          How I approach development.
        </h2>

        {/* Cards */}
        <div className="mt-7 grid gap-3 sm:mt-10 sm:gap-4 md:mt-12 md:grid-cols-3 md:gap-5">
          {/* Card 01 */}
          <div className="group relative rounded-2xl border border-white/10 bg-[#111113] p-5 transition-all duration-300 hover:border-emerald-400/20 sm:rounded-3xl sm:p-7">
            {/* Dot */}
            <span className="absolute left-5 top-5 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)] sm:left-7 sm:top-7" />

            <span className="ml-4 text-3xl font-bold text-zinc-700 sm:ml-5 sm:text-4xl">
              01
            </span>

            <h3 className="mt-4 text-lg font-semibold sm:mt-6 sm:text-xl">
              Understand
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400 sm:mt-4 sm:text-base sm:leading-7">
              Understand the problem, requirements and how the different parts
              of an application work together.
            </p>
          </div>

          {/* Card 02 */}
          <div className="group relative rounded-2xl border border-white/10 bg-[#111113] p-5 transition-all duration-300 hover:border-emerald-400/20 sm:rounded-3xl sm:p-7">
            {/* Dot */}
            <span className="absolute left-5 top-5 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)] sm:left-7 sm:top-7" />

            <span className="ml-4 text-3xl font-bold text-zinc-700 sm:ml-5 sm:text-4xl">
              02
            </span>

            <h3 className="mt-4 text-lg font-semibold sm:mt-6 sm:text-xl">
              Build
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400 sm:mt-4 sm:text-base sm:leading-7">
              Create clean, reusable and maintainable solutions.
            </p>
          </div>

          {/* Card 03 */}
          <div className="group relative rounded-2xl border border-white/10 bg-[#111113] p-5 transition-all duration-300 hover:border-emerald-400/20 sm:rounded-3xl sm:p-7">
            {/* Dot */}
            <span className="absolute left-5 top-5 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)] sm:left-7 sm:top-7" />

            <span className="ml-4 text-3xl font-bold text-zinc-700 sm:ml-5 sm:text-4xl">
              03
            </span>

            <h3 className="mt-4 text-lg font-semibold sm:mt-6 sm:text-xl">
              Improve
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400 sm:mt-4 sm:text-base sm:leading-7">
              Continuously improve code quality, usability, performance and
              understanding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sectionsix;