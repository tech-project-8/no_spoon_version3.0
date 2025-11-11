"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import BlackHeader from "@/components/blackheader"; // ✅ import your new black header
import { useEffect } from "react";

interface ProjectData {
  name: string;
  video: string;
  headline: string;
  text: string;
  images: string[];
}

const projects: Record<string, ProjectData> = {
  "1": {
    name: "Tego",
    video: "/assets/Tego/video.mp4",
    headline: "Seamless Product Experiences",
    text: `Tego is a cutting-edge project focused on creating seamless product experiences through design and technology. It embodies innovation, clarity, and modern craftsmanship to help brands connect deeply with their audiences.`,
    images: [
      "/assets/Tego/image1.jpg",
      "/assets/Tego/image2.jpg",
      "/assets/Tego/image3.jpg",
      "/assets/Tego/image4.jpg",
    ],
  },
  "2": {
    name: "Scantum",
    video: "/assets/Scantum/video.mp4",
    headline: "Luxury Meets Modernity",
    text: `Scantum redefines luxury and modernity by fusing clean visuals with intuitive interfaces. The project showcases our attention to detail, harmony of motion, and elegance in visual storytelling.`,
    images: [
      "/assets/Scantum/image1.jpg",
      "/assets/Scantum/image2.jpg",
      "/assets/Scantum/image3.jpg",
      "/assets/Scantum/image4.jpg",
    ],
  },
  "3": {
    name: "Rexplorer",
    video: "/assets/Rexplorer/video.mp4",
    headline: "Exploration and Creativity",
    text: `Rexplorer celebrates exploration and creativity. With a focus on dynamic visuals and adaptive layout, this project brings together strong typography, interactivity, and immersive motion.`,
    images: [
      "/assets/Rexplorer/image1.jpg",
      "/assets/Rexplorer/image2.jpg",
      "/assets/Rexplorer/image3.jpg",
      "/assets/Rexplorer/image4.jpg",
    ],
  },
};

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const project = projects[id];

  if (!project) {
    return (
      <main className="flex items-center justify-center h-screen bg-black text-white text-2xl">
        Project not found
      </main>
    );
  }

  // 🌀 Animation config
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
  };

  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">
      {/* ✅ Black Header */}
      <BlackHeader />

      {/* ✅ HERO VIDEO SECTION */}
      <section className="relative w-full overflow-hidden bg-black" style={{ height: "100svh" }}>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={project.video}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </section>

      {/* ✅ TEXT SECTION */}
      <section
        className="bg-white text-black flex items-center justify-center py-20 relative"
        style={{
          borderBottom: "none",
          marginBottom: "-2px",
        }}
      >
        <motion.div
          className="px-6 md:px-12 max-w-4xl mx-auto text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={container}
        >
          <motion.p
            variants={item}
            style={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 200,
              fontSize: "50px",
              lineHeight: "40px",
              color: "#3A3A3A",
              marginBottom: "20px",
            }}
          >
            {project.headline}
          </motion.p>

          <motion.p
            variants={item}
            style={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontSize: "28px",
              color: "#3A3A3A",
              fontWeight: 400,
              lineHeight: "1.3",
            }}
          >
            {project.text}
          </motion.p>
        </motion.div>
      </section>

      {/* ✅ PROJECT IMAGES SECTION */}
      <section
        className="bg-white text-white py-12 relative"
        style={{
          borderTop: "none",
          marginTop: "-1px",
        }}
      >
        <div className="w-full flex flex-col gap-8 md:gap-7 px-0 sm:px-2 md:px-7">
          {project.images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              <img
                src={src}
                alt={`${project.name} ${idx + 1}`}
                className="w-full h-auto object-cover"
                loading="lazy"
                style={{
                  width: "100%",
                  maxWidth: "100vw",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
