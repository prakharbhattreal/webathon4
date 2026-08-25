"use client";

import Hero from "@/components/Hero";
import { Navbar } from "@/components/navbar";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import ExpandableCardDemo from "@/components/ui/expandable-card-demo-standard"; // Import your expandable cards block
import { useMotionValue } from "motion/react";

export default function Home() {
  const pathLength = useMotionValue(0);

  return (
    <div className="relative flex flex-col flex-1 items-center justify-center bg-zinc-50 font-audiowide dark:bg-black min-h-screen">
      <Navbar />

      <Hero />

      {/* Events Section */}
      <section className="relative z-10 w-full max-w-7xl px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-black dark:text-white">
          Events
        </h2>
        <ExpandableCardDemo />
      </section>
    </div>
  );
}