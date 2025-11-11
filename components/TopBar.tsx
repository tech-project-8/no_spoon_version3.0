"use client";
import Container from "@/components/Container";
import Image from "next/image";
import spoon from "@/components/assets/spoon.png";

export default function TopBar() {
return (
<header className="fixed top-0 inset-x-0 z-50 h-[var(--header-height)] bg-black text-white">
<Container className="h-full flex items-center justify-between">
{/* Left: Spoon image placeholder that user can replace later */}
<a href="/" className="flex items-center gap-3">
{/* Put your real spoon asset at /public/spoon.png and it will render here */}
<Image
  src={spoon}
  alt="Spoon"
  className="h-5 w-10 rounded-full object-contain"
/>{/* If you already have the file, uncomment this and remove the div above */}
{/* <Image alt="Spoon" src="/spoon.png" height={18} width={48} className="h-5 w-auto" /> */}
</a>


{/* Center: Wordmark in Instrument Serif */}
<div className="absolute left-1/2 -translate-x-1/2">
<a href="/" className="brand-serif text-xl tracking-wide">NoSpoon</a>
</div>


{/* Right spacer so the brand stays centered visually */}
<nav className="w-10" aria-hidden />
</Container>
</header>
);
}