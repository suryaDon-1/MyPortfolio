
import React from "react";

function SectionFour() {
  return (
    <div className="about-card absolute inset-0 z-40 flex items-center bg-[#0f1012] px-5 py-10 sm:px-6 md:px-12 md:py-0">
      <div className="mx-auto w-full max-w-6xl">
        {/* Heading */}
        <p className="text-xs uppercase tracking-[0.25em] text-emerald-400 sm:text-sm">
          Education
        </p>

        <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl md:mt-4 md:text-5xl">
          My academic journey.
        </h2>

        {/* Timeline */}
        <div className="mt-8 max-w-4xl sm:mt-10 md:mt-14">
          {/* MCA */}
          <div className="relative border-l border-white/10 pb-8 pl-6 sm:pb-10 sm:pl-8 md:pb-12">
            <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />

            <p className="text-sm font-medium text-emerald-400">
              2024 — 2026
            </p>

            <h3 className="mt-2 text-lg font-semibold sm:text-xl">
              Master of Computer Applications
            </h3>

            <p className="mt-2 text-sm text-zinc-500 sm:text-base">
              Sardar Patel University, Mandi
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400 sm:mt-4 sm:text-base sm:leading-7">
              Completed MCA with a focus on programming, software development,
              databases and modern application development.
            </p>
          </div>

          {/* BCA */}
          <div className="relative border-l border-white/10 pb-8 pl-6 sm:pb-10 sm:pl-8 md:pb-12">
            <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />

            <p className="text-sm font-medium text-emerald-400">
              2021 — 2024
            </p>

            <h3 className="mt-2 text-lg font-semibold sm:text-xl">
              Bachelor of Computer Applications
            </h3>

            <p className="mt-2 text-sm text-zinc-500 sm:text-base">
              Vallabh Government College, Mandi
            </p>
          </div>

          {/* School */}
          <div className="relative border-l border-white/10 pl-6 sm:pl-8">
            <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />

            <p className="text-sm font-medium text-emerald-400">
              2019
            </p>

            <h3 className="mt-2 text-lg font-semibold sm:text-xl">
              School Education
            </h3>

            <p className="mt-2 text-sm text-zinc-500 sm:text-base">
              Swami Vivekanand School, Mandi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
