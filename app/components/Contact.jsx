import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#09090b] px-6 py-28 text-white"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        {/* Top label */}
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-8 bg-emerald-400" />

          <span className="text-sm uppercase tracking-[0.25em] text-emerald-400">
            Contact
          </span>
        </div>

        {/* Main content */}
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          {/* Left */}
          <div>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Have an idea?
              <br />
              <span className="text-zinc-500">Let’s make it happen.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400">
              I’m open to new opportunities, freelance projects, and interesting
              collaborations. If you have something in mind, let’s talk.
            </p>

            {/* CTA */}
            <a
              href="mailto:suryanshguleria447@gmail.com"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:bg-emerald-400"
            >
              <Mail size={17} />
              Let's Talk
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Right */}
          <div className="lg:pb-2">
            {/* Email */}
            <div className="border-t border-white/10 pt-6">
              <p className="mb-2 text-xs uppercase tracking-widest text-zinc-600">
                Email
              </p>

              <a
                href="mailto:suryanshguleria447@gmail.com"
                className="break-all text-sm text-zinc-300 transition hover:text-emerald-400"
              >
                suryanshguleria447@gmail.com
              </a>
            </div>

            {/* Social */}
            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="mb-3 text-xs uppercase tracking-widest text-zinc-600">
                Connect
              </p>

              <div className="flex gap-5 text-sm text-zinc-400">
                <a
                  href="https://github.com/suryaDon-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  GitHub
                </a>

                <a
                  href="https://linkedin.com/in/suryansh-guleria-119249394"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-24 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-xs text-zinc-700">
            Let’s create something meaningful.
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
