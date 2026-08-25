// src/app/events/page.tsx
"use client";

import ExpandableCardDemo from "@/components/ui/expandable-card-demo-standard";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-audiowide py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
          Upcoming Events
        </h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
          Click on any event card below to view full details and registration links.
        </p>
      </div>

      {/* Expandable Cards List */}
      <div className="max-w-4xl mx-auto">
        <ExpandableCardDemo />
      </div>
    </div>
  );
}