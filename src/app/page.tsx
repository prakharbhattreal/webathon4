"use client";

import Hero from "@/components/Hero";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-audiowide dark:bg-black">
      <Navbar/>
      <Hero/>
    </div>
  );
}