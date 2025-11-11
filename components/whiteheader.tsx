"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WhiteHeader() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-30 text-black flex items-center justify-between px-4 sm:px-8 md:px-12 py-6 bg-transparent">
        {/* Left spoon button */}
        <button
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
          className="flex items-center"
        >
          <img
            src="/assets/BlackSpoon.png"
            alt="Open menu"
            className="cursor-pointer w-[50px] sm:w-[100px] md:w-[110px] h-auto object-contain"
          />
        </button>

        {/* Centered No Spoon */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
          <h1
            className="text-center"
            style={{
              fontFamily: "var(--font-instrument-serif, inherit)",
              fontWeight: 300,
              fontStyle: "normal",
              letterSpacing: "-0.05em",
              color: "black",
            }}
          >
            <span className="text-[20px] sm:text-[46px] md:text-[54px] leading-none">
              No Spoon
            </span>
          </h1>
        </div>
      </header>

      {/* Overlay for blur/close */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-white/50 z-40"
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: sidebarOpen ? "0%" : "-100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-64 md:w-72 bg-white text-black z-50 shadow-lg overflow-auto p-6"
      >
        <button
          onClick={() => setSidebarOpen(false)}
          className="mb-4 text-black hover:text-gray-600 text-[25px]"
        >
          ×
        </button>

        <h2 className="text-[25px] italic font-semibold mb-4">Menu</h2>
        <nav className="flex flex-col gap-3 text-[25px] italic">
          <Link href="/work" className="hover:text-gray-600">
            Work
          </Link>
          <Link href="/about" className="hover:text-gray-600">
            About
          </Link>
          <a
            href="https://www.instagram.com/nospoon.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600"
          >
            Follow
          </a>
          <Link href="/services" className="hover:text-gray-600">
            Services
          </Link>
        </nav>
      </motion.aside>
    </>
  );
}
