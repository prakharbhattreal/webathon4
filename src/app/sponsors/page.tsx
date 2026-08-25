"use client";

import CardHoverEffectDemo from "@/components/card-hover-effect-demo";

export default function SpeakersPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white font-audiowide">
      <section className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-neutral-400">
            Meet the Experts
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Our Sponsors
          </h1>
        </div>

        <CardHoverEffectDemo />
      </section>
    </main>
  );
}