"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useScroll } from "motion/react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";

export default function Hero() {
  const containerRef = useRef(null);
  
  // Track scroll position of the wrapper container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className="h-[400vh] w-full relative pt-40 overflow-clip bg-background text-foreground"
    >
      <GoogleGeminiEffect
        pathLengths={[
          scrollYProgress,
          scrollYProgress,
          scrollYProgress,
          scrollYProgress,
          scrollYProgress,
        ]}
        title="NIRVAN '26"
        description=""
      />
    </div>
  );
}