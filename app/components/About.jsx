"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionOne from "./About/SectionOne.jsx";
import SectionTwo from "./About/SectionTwo.jsx";
import SectionThree from "./About/SectionThree.jsx";
import SectionFour from "./About/SectionFour.jsx";
import SectionFive from "./About/SectionFive.jsx";
import Sectionsix from "./About/Sectionsix.jsx";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".about-card");

      // First card visible
      gsap.set(cards[0], {
        yPercent: 0,
        scale: 1,
      });

      // All other cards start below
      gsap.set(cards.slice(1), {
        yPercent: 100,
        scale: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,

          start: "top top",

          // About's own scrolling area
          end: "+=500%",

          pin: cardsRef.current,

          scrub: 4,

          anticipatePin: 1,

          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, index) => {
        if (index === 0) return;

        const previousCard = cards[index - 1];

        // New card moves upward
        tl.to(card, {
          yPercent: 0,
          duration: 1,
          ease: "none",
        });

        // Previous card goes slightly backward
        tl.to(
          previousCard,
          {
            scale: 0.94,
            duration: 1,
            ease: "none",
          },
          "<",
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    /*
      THIS wrapper belongs only to About.

      It creates the scroll space required by
      the About animation.
    */
    <section
      ref={sectionRef}
      id="about"
      className="relative h-[600vh] bg-[#09090b]"
    >
      {/*
        THIS is the viewport that gets pinned.

        It does NOT affect Hero, Projects, Skills, etc.
      */}
      <div ref={cardsRef} className="relative h-screen w-full overflow-hidden">
        {/* ================= CARD 1 ================= */}

        <SectionOne />

        {/* ================= CARD 2 ================= */}

        <SectionTwo />

        {/* ================= CARD 3 ================= */}

        <SectionThree />

        {/* ================= CARD 4 ================= */}
        <SectionFour />

        {/* ================= CARD 5 ================= */}
        <SectionFive />

        {/* ================= CARD 6 ================= */}
        <Sectionsix />
      </div>
    </section>
  );
}

export default About;
