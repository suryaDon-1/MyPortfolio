import React from "react";

function SectionTwo() {
  return (
    <div className="about-card absolute inset-0 z-20 flex items-center bg-[#0f1012] px-5 py-8 sm:px-8 md:px-12">
      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-2 md:gap-12">

        {/* ================= LEFT ================= */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-400 sm:text-sm">
            My Journey
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl md:mt-4 md:text-5xl">
            From learning the fundamentals to building full-stack apps.
          </h2>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="space-y-3 text-sm leading-6 text-zinc-400 sm:space-y-4 sm:text-base sm:leading-7 md:space-y-5 md:leading-8">

          <p>
            My journey in technology started during my school years.
            Curiosity about computers gradually led me toward programming
            and software development.
          </p>

          <p>
            During my BCA at Vallabh Government College, Mandi, I
            strengthened my programming fundamentals and developed an
            interest in web development.
          </p>

          <p>
            During my MCA at Sardar Patel University, Mandi, I continued
            developing my understanding of software development, databases,
            programming, and modern web technologies.
          </p>

          <p>
            I later completed six months of industrial training in MERN
            Stack Development at Sensation Software Solutions Pvt. Ltd.,
            Mohali.
          </p>

        </div>

      </div>
    </div>
  );
}

export default SectionTwo;