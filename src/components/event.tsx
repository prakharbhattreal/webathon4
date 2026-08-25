// src/components/events.tsx
"use client";

import ExpandableCardDemo from "@/components/ui/expandable-card-demo-standard"; // Adjust path if placed in components/ui

export default function EventsSection() {
  return (
    <section className="py-20 w-full max-w-7xl mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold">Upcoming Events</h2>
        <p className="text-muted-foreground mt-2">
          Click on any card to view detailed event info.
        </p>
      </div>

      {/* Expandable Cards Block */}
      <ExpandableCardDemo />
    </section>
  );
}