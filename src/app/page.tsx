"use client";

import Hero from "@/components/Hero";
import { Navbar } from "@/components/navbar";

export default function Home() {
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