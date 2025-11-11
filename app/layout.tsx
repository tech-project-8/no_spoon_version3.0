import type { Metadata } from "next";
import "./globals.css";
// import TopBar from "@/components/TopBar";
import { Instrument_Serif } from "next/font/google";
import CustomCursor from "/components/CustomCursor.tsx";


// Load Instrument Serif just for the brand wordmark
const instrumentSerif = Instrument_Serif({
weight: ["400"],
subsets: ["latin"],
variable: "--font-instrument-serif",
});


export const metadata: Metadata = {
title: "NoSpoon",
description: "Responsive site – redesigned home",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en" className={instrumentSerif.variable}>
<body className="min-h-dvh">
{/* <TopBar /> */}
<CustomCursor />
{children}

</body>
</html>
);
}