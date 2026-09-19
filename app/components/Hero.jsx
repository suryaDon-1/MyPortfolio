"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

function Hero() {
  const roleRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const socialRef = useRef(null);
  const socialLinkRef = useRef([]);
  const visualRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(roleRef.current, {
        y: 30,
        opacity: 0,
      });

      gsap.set(titleRef.current, {
        y: 50,
        opacity: 0,
      });

      gsap.set(descriptionRef.current, {
        y: 30,
        opacity: 0,
      });

      gsap.set(buttonsRef.current, {
        y: 25,
        opacity: 0,
      });

      gsap.set(socialRef.current, {
        y: 20,
        opacity: 0,
      });

      gsap.set(visualRef.current, {
        x: 80,
        opacity: 0,
      });

      const tl = gsap.timeline();

      tl.to(roleRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      })
        .to(
          titleRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .to(
          descriptionRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .to(
          buttonsRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .from(
          socialLinkRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.2",
        )
        .to(
          socialRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.2",
        )
        .to(
          visualRef.current,
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8",
        );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="home"
      className="flex min-h-screen items-center overflow-hidden px-0 pt-24 pb-12 sm:pt-28 md:pt-24 md:pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-6 md:grid-cols-2 md:gap-10 lg:gap-16">
        {/* ================= HERO CONTENT ================= */}
        <div className="w-full">
          {/* Role */}
          <p
            ref={roleRef}
            className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-emerald-400 sm:text-sm sm:tracking-[0.25em]"
          >
            Full Stack Developer
          </p>

          {/* Title */}
          <h1
            ref={titleRef}
            className="text-[2.7rem] font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Suryansh
            <br />
            <span className="text-emerald-400">Guleria.</span>
          </h1>

          {/* Description */}
          <p
            ref={descriptionRef}
            className="mt-5 max-w-xl text-sm leading-6 text-zinc-400 sm:mt-6 sm:text-base sm:leading-7 md:text-lg"
          >
            I build modern full-stack web applications using JavaScript, React,
            Node.js, Express.js and MongoDB, with a focus on practical and
            user-focused web experiences.
          </p>

          {/* Buttons */}
          <div
            ref={buttonsRef}
            className="mt-7 flex flex-wrap gap-3 sm:mt-8 sm:gap-4"
          >
            <Link
              href="#projects"
              className="rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-emerald-300 sm:px-6 sm:py-3"
            >
              View Projects
            </Link>

            <Link
              href="#contact"
              className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-emerald-400 hover:text-emerald-400 sm:px-6 sm:py-3"
            >
              Contact Me
            </Link>
          </div>

          {/* Social Links */}
          <div
            ref={socialRef}
            className="mt-7 flex items-center gap-5 text-xs text-zinc-500 sm:mt-8 sm:gap-6 sm:text-sm"
          >
            <a
              href="#"
              className="transition-colors hover:text-white"
              ref={(el) => (socialLinkRef.current[0] = el)}
            >
              GitHub
            </a>

            <a
              href="#"
              className="transition-colors hover:text-white"
              ref={(el) => (socialLinkRef.current[1] = el)}
            >
              LinkedIn
            </a>

            <a
              href="mailto:your-email@example.com"
              className="transition-colors hover:text-white"
              ref={(el) => (socialLinkRef.current[2] = el)}
            >
              Email
            </a>
          </div>
        </div>

        {/* ================= DEVELOPER VISUAL ================= */}
        <div
          ref={visualRef}
          className="relative mx-auto w-full max-w-md md:max-w-lg"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70 p-5 shadow-2xl sm:rounded-3xl sm:p-7 md:p-8">
            {/* Window Controls */}
            <div className="mb-6 flex items-center gap-2 sm:mb-8">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70 sm:h-3 sm:w-3" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70 sm:h-3 sm:w-3" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70 sm:h-3 sm:w-3" />
            </div>

            {/* Code */}
            <div className="overflow-x-auto font-mono text-xs leading-7 text-zinc-400 sm:text-sm sm:leading-8">
              <p>
                <span className="text-emerald-400">const</span> developer ={" "}
                {"{"}
              </p>

              <p className="pl-4 sm:pl-6">
                stack: <span className="text-white">"MERN"</span>,
              </p>

              <p className="pl-4 sm:pl-6">
                focus: <span className="text-white">"Web Apps"</span>,
              </p>

              <p className="pl-4 sm:pl-6">
                learning:{" "}
                <span className="text-white">"Next.js + GSAP"</span>
              </p>

              <p>{"}"}</p>
            </div>

            {/* Decorative Circles */}
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full border border-emerald-400/20 sm:-right-6 sm:-top-6" />

            <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full border border-emerald-400/10 sm:-bottom-8 sm:-left-8" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;