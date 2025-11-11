"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [hoverItem, setHoverItem] = useState<string>("find");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, delay, ease: "easeOut" },
    }),
  };

  return (
    <motion.footer
      className="bg-black text-neutral-300 flex flex-col justify-between p-6 md:p-20 overflow-hidden"
      onMouseLeave={() => !isMobile && setHoverItem("find")}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {/* Top Section */}
      <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
        {/* Left - Navigation */}
        <motion.div
          className="space-y-3 md:space-y-6"
          variants={fadeUp}
          custom={0.1}
        >
          {["Work", "Find", "Follow", "Connect"].map((item) => (
            <h3
              key={item}
              className={`text-4xl sm:text-5xl md:text-7xl font-light cursor-pointer transition-colors ${
                hoverItem === item.toLowerCase() || isMobile
                  ? "text-white"
                  : "text-neutral-800"
              }`}
              onMouseEnter={() =>
                !isMobile && setHoverItem(item.toLowerCase())
              }
            >
              {item}
            </h3>
          ))}
        </motion.div>

        {/* Right - Info Section */}
        <motion.div
          className="relative flex flex-col justify-start md:justify-center mt-6 md:mt-0"
          variants={fadeUp}
          custom={0.3}
        >
          {/* ✅ Mobile: show all sections together */}
          {isMobile ? (
            <div className="space-y-6 text-white text-sm sm:text-base md:text-lg">
              {/* FIND */}
              <div className="leading-relaxed space-y-2">
                <p className="font-light text-lg md:text-xl">Goa</p>
                <p>Vasvaddo Beach Road,</p>
                <p>Benaulim, Goa 403716</p>

                <div className="flex flex-col sm:flex-row sm:space-x-6 mt-3">
                  <a href="tel:+919325720064" className="hover:underline">
                    +91 93257 20064
                  </a>
                  <a href="tel:+919591769569" className="hover:underline">
                    +91 95917 69569
                  </a>
                </div>

                <a
                  href="mailto:info@nospoon.com"
                  className="block mt-2 hover:underline"
                >
                  info@nospoon.com
                </a>
              </div>

              {/* FOLLOW */}
              <div className="space-y-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/nospoon.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:underline"
                >
                  Instagram
                </a>
              </div>

              {/* CONNECT */}
              <div className="space-y-3">
                <a href="/news" className="block hover:underline">
                  News
                </a>
                <a href="/careers" className="block hover:underline">
                  Careers
                </a>
              </div>
            </div>
          ) : (
            /* ✅ Desktop: Animate on hover */
            <AnimatePresence mode="wait">
              {hoverItem === "find" && (
                <motion.div
                  key="find"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                  className="text-white text-sm sm:text-base md:text-lg leading-relaxed space-y-2"
                >
                  <p className="font-light text-lg md:text-xl">Goa</p>
                  <p>Vasvaddo Beach Road,</p>
                  <p>Benaulim, Goa 403716</p>

                  <div className="flex flex-col sm:flex-row sm:space-x-6 mt-3">
                    <a href="tel:+919325720064" className="hover:underline">
                      +91 93257 20064
                    </a>
                    <a href="tel:+919591769569" className="hover:underline">
                      +91 95917 69569
                    </a>
                  </div>

                  <a
                    href="mailto:info@nospoon.com"
                    className="block mt-2 hover:underline"
                  >
                    info@nospoon.com
                  </a>
                </motion.div>
              )}

              {hoverItem === "follow" && (
                <motion.div
                  key="follow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                  className="text-white text-sm sm:text-base md:text-lg space-y-3"
                >
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:underline"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/nospoon.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:underline"
                  >
                    Instagram
                  </a>
                </motion.div>
              )}

              {hoverItem === "connect" && (
                <motion.div
                  key="connect"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                  className="text-white text-sm sm:text-base md:text-lg space-y-3"
                >
                  <a href="/news" className="block hover:underline">
                    News
                  </a>
                  <a href="/careers" className="block hover:underline">
                    Careers
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </motion.div>
      </div>

      {/* Bottom Texts */}
      <motion.div
        className="text-xs sm:text-sm text-neutral-400 mt-10 space-y-2 md:space-y-0 md:grid md:grid-cols-2"
        variants={fadeUp}
        custom={0.5}
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <p className="md:text-right">
          sed diam nonummy nibh euismod quis nostrud.
        </p>
      </motion.div>

      {/* Branding */}
      <motion.div
        className="flex items-center justify-center mt-2 md:mt-2 w-full text-white leading-none"
        style={{
          height: "120px",
          opacity: 1,
        }}
        variants={fadeUp}
        custom={0.7}
      >
        <span
          className="font-serif text-center whitespace-nowrap"
          style={{
            fontFamily: "Helvetica Neue",
            fontWeight: 300,
            fontStyle: "Light",
            textTransform: "Camelcase",
            lineHeight: "1",
            letterSpacing: "0%",
            fontSize: "clamp(80px, 15vw, 300px)",
          }}
        >
          No Spoon
        </span>
      </motion.div>
    </motion.footer>
  );
}
