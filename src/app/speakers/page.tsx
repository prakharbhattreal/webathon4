import FocusCardsDemo from "@/components/focus-cards-demo";

export default function SpeakersPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-12 text-black dark:bg-black dark:text-white font-audiowide">
      <section className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-neutral-400">
            Meet the Experts
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Our Speakers
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-neutral-400 md:text-lg">
            Learn from industry leaders, innovators, and creators who are
            shaping the future of technology.
          </p>
        </div>

        {/* Speaker Cards */}
        <FocusCardsDemo/>
      </section>
    </main>
  );
}