"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null); // null until detection done
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // ✅ Detect device type (desktop vs mobile/tablet)
  useEffect(() => {
    const checkDevice = () => {
      const ua = navigator.userAgent.toLowerCase();
      const isTouch =
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua) ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0;
      setIsDesktop(!isTouch);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // ✅ Track mouse movement only for desktop
  useEffect(() => {
    if (!isDesktop) return;

    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const hideCursor = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
    };
  }, [isDesktop]);

  // ✅ Don't render anything until detection is done
  if (isDesktop === null) return null;

  // ✅ Don't render on mobile/tablet
  if (!isDesktop) return null;

  // ✅ Smooth animated white circle (pointer) for desktop
  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full border border-white/70 mix-blend-difference"
      style={{
        width: 28,
        height: 28,
      }}
      animate={{
        x: position.x - 14,
        y: position.y - 14,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
    />
  );
}
