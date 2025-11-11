"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import BlackHeader from "@/components/blackheader"; 

function AnimatedLines({ text }: { text: string }) {
  const shouldReduceMotion = useReducedMotion();

  const lines =
    text.match(/[^.?!]+[.?!]?/g)?.map((s) => s.trim()).filter(Boolean) || [text];

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.35,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      className="px-6 md:px-12 max-w-4xl mx-auto text-left"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={container}
      aria-live="polite"
    >
      <span className="sr-only">{text}</span>

      <div className="flex flex-col gap-6">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            variants={item}
            style={{
              margin: 0,
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontSize: "28px",
              color: "#3A3A3A",
              fontWeight: 400,
              lineHeight: "1.3",
              textAlign: "left",
            }}
          >
            {line}
          </motion.p>
        ))}
      </div>

      {/* View More About Us link */}
      <motion.div
        className="mt-10 flex justify-center"
        variants={item}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Link
          href="/about"
          className="text-[18px] italic text-neutral-700 hover:text-black transition-colors duration-300"
        >
          View More About Us
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function HomePage() {
  const textRef = useRef<HTMLDivElement | null>(null);

  const scrollToText = () => {
    textRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const text = `No Spoon is a creative agency specializing in design and web development, dedicated to transforming ideas into powerful digital experiences. With a focus on innovation, aesthetics, and functionality, No Spoon crafts visually stunning and user-friendly websites that help brands stand out in the digital world. From modern UI/UX design to full-stack web development, the team combines creativity with cutting-edge technology to deliver tailored solutions that meet each client’s unique goals. Whether it’s building a new brand identity or developing a high-performing web platform, No Spoon turns imagination into impact.`;

  return (
    <main className="bg-neutral-100 text-neutral-900">
      {/* HERO VIDEO SECTION */}
      <section
        className="relative w-full overflow-hidden bg-black text-white"
        style={{
          height: "100dvh",
          maxHeight: "100svh",
        }}
      >
        {/* Background video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/recap.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* ✅ Replaced old header with BlackHeader */}
        <div className="absolute top-0 left-0 right-0 z-30">
          <BlackHeader />
        </div>

        {/* Scroll down arrow */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
          <button
            onClick={scrollToText}
            className="animate-bounce text-white hover:text-gray-300 text-3xl"
            aria-label="Scroll to About Section"
          >
            ↓
          </button>
        </div>
      </section>

      {/* TEXT SECTION */}
      <section
        ref={textRef}
        className="relative bg-white flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-8 py-16 md:py-24"
      >
        <AnimatedLines text={text} />
      </section>

      {/* WORK SECTION */}
      <section className="bg-white">
        <motion.div
          className="flex flex-col items-center gap-5 md:gap-6 pb-16 w-full px-4 sm:px-6 md:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ staggerChildren: 0.25 }}
        >
          {[1, 2, 3].map((i) => {
            const filename = `Work item ${i}.png`;
            const src = `/assets/${encodeURIComponent(filename)}`;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 80 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1.5, ease: "easeInOut" },
                  },
                }}
                className="w-full overflow-hidden"
              >
                <Link href={`/project/${i}`} aria-label={`Open project ${i}`}>
                  <motion.img
                    src={src}
                    alt={`Work item ${i}`}
                    loading="lazy"
                    className="w-full h-auto object-cover block cursor-pointer"
                    whileHover={{
                      scale:
                        typeof window !== "undefined" &&
                        window.innerWidth > 768
                          ? 1.02
                          : 1,
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </Link>
              </motion.div>
            );
          })}

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1.3, ease: "easeInOut" },
              },
            }}
          >
            <Link
              href="/work"
              className="text-[18px] italic text-neutral-700 hover:text-black mt-2"
            >
              View More Work
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
