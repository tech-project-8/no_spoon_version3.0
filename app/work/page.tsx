"use client";

import React, { useRef, useEffect } from "react";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import WhiteHeader from "@/components/whiteheader"; // ✅ Use same header as About page

export default function WorkPage() {
  const introRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  // 👇 When user presses back button from Work page, go to Home
  useEffect(() => {
    const handlePopState = () => {
      router.push("/");
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [router]);

  const projects = [
    { id: "1", title: "Creative Brand Identity", image: "/assets/Work item 1.png" },
    { id: "2", title: "Modern Web Experience", image: "/assets/Work item 2.png" },
    { id: "3", title: "Digital Product Launch", image: "/assets/Work item 3.png" },
  ];

  const bounceVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        mass: 0.6,
      },
    },
  };

  return (
    <main className="bg-white text-neutral-900 overflow-x-hidden relative">
      {/* ✅ Use shared white header */}
      <WhiteHeader />

      {/* PROJECT SECTION */}
      <section ref={introRef} className="bg-white py-5 md:py-14 mt-20">
        <Container>
          <div className="flex flex-col items-center gap-2 md:gap-7 w-full">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                className="w-full"
                variants={bounceVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: i * 0.2 }}
              >
                <Link
                  href={`/project/${project.id}`}
                  aria-label={`Open ${project.title}`}
                  className="block w-full"
                >
                  <div className="overflow-hidden duration-300 w-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full object-cover"
                      style={{
                        width: "100vw",
                        maxWidth: "100%",
                        height: "auto",
                        marginLeft: "calc(-0.5vw + 0.5%)",
                      }}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
