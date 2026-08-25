"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { IconCalendarEvent, IconMail, IconPhone } from "@tabler/icons-react";

const events = [
  {
    id: "hackathon",
    title: "Hackathon",
    description: "Build innovative solutions and compete with the best teams.",
  },
  {
    id: "ai-ml",
    title: "AI / ML Workshop",
    description: "Explore artificial intelligence and machine learning.",
  },
  {
    id: "web-dev",
    title: "Web Development",
    description: "Learn and compete in modern web development.",
  },
  {
    id: "ui-ux",
    title: "UI / UX Design",
    description: "Show your creativity through design and user experience.",
  },
  {
    id: "coding",
    title: "Coding Contest",
    description: "Test your problem-solving and programming skills.",
  },
  {
    id: "tech-quiz",
    title: "Tech Quiz",
    description: "Challenge your knowledge of technology and innovation.",
  },
];

export default function EventRegistrationForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    console.log({
      firstName: formData.get("firstname"),
      lastName: formData.get("lastname"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      college: formData.get("college"),
      course: formData.get("course"),
      year: formData.get("year"),
      rollNumber: formData.get("rollnumber"),
      event: formData.get("event"),
    });
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-2xl rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
          Event Registration
        </h2>

        <p className="mt-2 max-w-lg text-sm text-neutral-600 dark:text-neutral-300">
          Register for your favorite event and be a part of our college
          tech fest.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Personal Details */}
        <div className="mb-6">
          <h3 className="mb-4 text-lg font-semibold text-neutral-800 dark:text-neutral-200">
            Personal Details
          </h3>

          <div className="mb-4 flex flex-col gap-4 md:flex-row">
            <LabelInputContainer>
              <Label htmlFor="firstname">First Name</Label>
              <Input
                id="firstname"
                name="firstname"
                placeholder="Rahul"
                type="text"
                required
              />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="lastname">Last Name</Label>
              <Input
                id="lastname"
                name="lastname"
                placeholder="Sharma"
                type="text"
                required
              />
            </LabelInputContainer>
          </div>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">College Email</Label>

            <div className="relative">
              <IconMail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />

              <Input
                id="email"
                name="email"
                className="pl-10"
                placeholder="rahul@college.edu"
                type="email"
                required
              />
            </div>
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="phone">Phone Number</Label>

            <div className="relative">
              <IconPhone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />

              <Input
                id="phone"
                name="phone"
                className="pl-10"
                placeholder="+91 98765 43210"
                type="tel"
                required
              />
            </div>
          </LabelInputContainer>
        </div>

        {/* College Details */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-semibold text-neutral-800 dark:text-neutral-200">
            College Details
          </h3>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="college">College / University</Label>

            <Input
              id="college"
              name="college"
              placeholder="Graphic Era Hill University"
              type="text"
              required
            />
          </LabelInputContainer>

          <div className="mb-4 flex flex-col gap-4 md:flex-row">
            <LabelInputContainer>
              <Label htmlFor="course">Course / Branch</Label>

              <Input
                id="course"
                name="course"
                placeholder="B.Tech CSE"
                type="text"
                required
              />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="year">Year</Label>

              <select
                id="year"
                name="year"
                required
                className="h-10 w-full rounded-md border border-neutral-200 bg-transparent px-3 text-sm text-neutral-700 outline-none transition focus:border-neutral-400 dark:border-neutral-800 dark:text-neutral-300"
              >
                <option value="">Select year</option>
                <option value="1st">1st Year</option>
                <option value="2nd">2nd Year</option>
                <option value="3rd">3rd Year</option>
                <option value="4th">4th Year</option>
                <option value="other">Other</option>
              </select>
            </LabelInputContainer>
          </div>

          <LabelInputContainer>
            <Label htmlFor="rollnumber">Roll Number / Student ID</Label>

            <Input
              id="rollnumber"
              name="rollnumber"
              placeholder="23CSE1042"
              type="text"
              required
            />
          </LabelInputContainer>
        </div>

        {/* Event Selection */}
        <div className="mb-8">
          <h3 className="mb-2 text-lg font-semibold text-neutral-800 dark:text-neutral-200">
            Choose Your Event
          </h3>

          <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
            Select the event you want to participate in.
          </p>

          <div className="grid gap-3 md:grid-cols-2">
            {events.map((event) => (
              <label
                key={event.id}
                className="group relative cursor-pointer rounded-xl border border-neutral-200 p-4 transition-all hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-900"
              >
                <input
                  type="radio"
                  name="event"
                  value={event.id}
                  required
                  className="peer sr-only"
                />

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <div className="flex h-4 w-4 items-center justify-center rounded-full border border-neutral-400 peer-checked:border-black dark:border-neutral-600 dark:peer-checked:border-white">
                      <div className="h-2 w-2 scale-0 rounded-full bg-black transition-transform peer-checked:scale-100 dark:bg-white" />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-neutral-800 dark:text-neutral-200">
                      {event.title}
                    </h4>

                    <p className="mt-1 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                      {event.description}
                    </p>
                  </div>
                </div>

                <span className="absolute inset-0 rounded-xl border-2 border-transparent transition peer-checked:border-black dark:peer-checked:border-white" />
              </label>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          className="group/btn relative block h-11 w-full rounded-md bg-linear-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Register for Event →
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />

      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};