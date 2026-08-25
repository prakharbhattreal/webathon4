"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue } from "motion/react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";

export default function Hero() {
  const pathLength = useMotionValue(1);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          Build Something
          <span className="block">Extraordinary</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-neutral-400 md:text-xl">
          A modern digital experience built with Next.js,
          Aceternity UI and smooth animations.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="rounded-full bg-white px-6 py-3 font-medium text-black">
            Get Started
          </button>

          <button className="rounded-full border border-white/20 px-6 py-3">
            Explore
          </button>
        </div>
      </div>

      <GoogleGeminiEffect
        pathLengths={[pathLength]}
        title=""
        description=""
        className="absolute inset-x-0 bottom-0"
      />
    </section>
  );
}