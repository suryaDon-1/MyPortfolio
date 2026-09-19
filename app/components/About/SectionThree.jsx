import React from "react";

function SectionThree() {
  return (
    <div className="about-card absolute inset-0 z-30 flex items-center bg-[#111113] px-5 py-8 sm:px-8 md:px-12">
      <div className="mx-auto w-full max-w-6xl">

        {/* ================= HEADER ================= */}
        <p className="text-xs uppercase tracking-[0.25em] text-emerald-400 sm:text-sm">
          What I Do
        </p>

        <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl md:mt-4 md:text-5xl">
          Building across the stack.
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
          I enjoy working across both frontend and backend development,
          understanding how the different parts of an application
          communicate with each other.
        </p>

        {/* ================= CARDS ================= */}
        <div className="mt-7 grid gap-3 sm:mt-9 sm:gap-4 md:mt-12 md:grid-cols-3 md:gap-5">

          {/* Frontend */}
          <div className="rounded-2xl border border-white/10 bg-[#09090b] p-4 sm:rounded-3xl sm:p-6 md:p-7">
            <span className="text-sm text-emerald-400">
              01
            </span>

            <h3 className="mt-3 text-xl font-semibold sm:mt-5 sm:text-2xl">
              Frontend
            </h3>

            <p className="mt-2 text-sm leading-6 text-zinc-400 sm:mt-4 sm:text-base sm:leading-7">
              Building responsive and interactive interfaces using
              JavaScript, React, Tailwind CSS and Redux Toolkit.
            </p>
          </div>

          {/* Backend */}
          <div className="rounded-2xl border border-white/10 bg-[#09090b] p-4 sm:rounded-3xl sm:p-6 md:p-7">
            <span className="text-sm text-emerald-400">
              02
            </span>

            <h3 className="mt-3 text-xl font-semibold sm:mt-5 sm:text-2xl">
              Backend
            </h3>

            <p className="mt-2 text-sm leading-6 text-zinc-400 sm:mt-4 sm:text-base sm:leading-7">
              Creating REST APIs and backend services using Node.js,
              Express.js and JWT.
            </p>
          </div>

          {/* Database */}
          <div className="rounded-2xl border border-white/10 bg-[#09090b] p-4 sm:rounded-3xl sm:p-6 md:p-7">
            <span className="text-sm text-emerald-400">
              03
            </span>

            <h3 className="mt-3 text-xl font-semibold sm:mt-5 sm:text-2xl">
              Database
            </h3>

            <p className="mt-2 text-sm leading-6 text-zinc-400 sm:mt-4 sm:text-base sm:leading-7">
              Working with MongoDB and Mongoose to design schemas
              and manage application data.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SectionThree;