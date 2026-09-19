
"use client";

import { Icon } from "@iconify/react";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML5",
        icon: "devicon:html5",
      },
      {
        name: "CSS3",
        icon: "devicon:css3",
      },
      {
        name: "JavaScript",
        icon: "devicon:javascript",
      },
      {
        name: "React.js",
        icon: "devicon:react",
      },
      {
        name: "Next.js Learning",
        icon: "devicon:nextjs",
      },
      {
        name: "Tailwind CSS",
        icon: "devicon:tailwindcss",
      },
      {
        name: "Redux Toolkit",
        icon: "devicon:redux",
      },
    ],
  },

  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: "devicon:nodejs",
      },
      {
        name: "Express.js",
        icon: "devicon:express",
      },
      {
        name: "REST APIs",
        icon: "mdi:api",
      },
    ],
  },

  {
    title: "Database & Auth",
    skills: [
      {
        name: "MongoDB",
        icon: "devicon:mongodb",
      },
      {
        name: "Mongoose",
        icon: "devicon:mongoose",
      },
      {
        name: "JWT",
        icon: "simple-icons:jsonwebtokens",
      },
      {
        name: "Google OAuth",
        icon: "logos:google-icon",
      },
    ],
  },

  {
    title: "Tools & Services",
    skills: [
      {
        name: "GitHub",
        icon: "devicon:github",
      },
      {
        name: "Postman",
        icon: "devicon:postman",
      },
      {
        name: "Cloudinary",
        icon: "logos:cloudinary-icon",
      },
      {
        name: "Razorpay",
        icon: "simple-icons:razorpay",
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-zinc-950 px-6 py-24 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-emerald-400">
            Skills
          </p>

          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Technologies I work with
          </h2>

          <p className="mt-5 leading-7 text-zinc-400">
            I use modern technologies to build responsive interfaces,
            scalable APIs, and complete full-stack web applications.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="space-y-12">
          {skillGroups.map((group) => (
            <div key={group.title}>

              {/* Group title */}
              <h3 className="mb-5 text-lg font-medium text-zinc-200">
                {group.title}
              </h3>

              {/* Skill cards */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex min-h-[120px] flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.06]"
                  >
                    {/* Logo */}
                    <Icon
                      icon={skill.icon}
                      className="mb-3 text-[38px] transition-transform duration-300 group-hover:scale-110"
                    />

                    {/* Name */}
                    <span className="text-sm text-zinc-300 transition-colors group-hover:text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
