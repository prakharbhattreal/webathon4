"use client";

import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export default function DraggableCardDemo() {
  const items = [
    {
      title: "HACKATHON",
      image: "/hackathon.JPG",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "TECH TREASURE HUNT",
      image: "/treasurehunt.JPG",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "CTF",
      image: "/ctf.JPG",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "ESPORTS",
      image: "/esports.JPG",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "LOGO QUEST",
      image: "/logoquest.JPG",
      className: "absolute top-20 right-[20%] rotate-[2deg]",
    },
    {
      title: "CODING COMPETITION",
      image: "/codingcomp.JPG",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];

  return (
    <DraggableCardContainer className="relative min-h-screen w-full">
      <p className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 text-center text-3xl font-black text-neutral-700 md:text-5xl">
        OUR EVENTS
      </p>

      {items.map((item) => (
        <DraggableCardBody
          key={item.title}
          className={item.className}
        >
          <img
            src={item.image}
            alt={item.title}
            draggable={false}
            className="pointer-events-none relative z-10 h-80 w-full rounded-md object-cover"
          />

          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}