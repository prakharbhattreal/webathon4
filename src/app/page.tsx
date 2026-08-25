"use client";

import Hero from "@/components/Hero";
import { Navbar } from "@/components/navbar";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { useMotionValue } from "motion/react";

export default function Home() {
  const pathLength = useMotionValue(0);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-audiowide dark:bg-black">
      <Navbar/>
      <GoogleGeminiEffect
        pathLengths={[pathLength]}
        title=""
        description=""
        className="absolute inset-x-0 bottom-0"
      />
    </div>
  );
}
