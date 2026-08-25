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
    </div>
  );
}