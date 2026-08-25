"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-100">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-125  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] scrollbar-none [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};


const cards = [
  {
    description: "HACKATHON",
    title: "Innovate, build",
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <div className="space-y-4">
          <p className="text-neutral-600 dark:text-neutral-400">
            Put your problem-solving skills to the test in a fast-paced
            competitive programming challenge.
          </p>

          <div className="grid grid-cols-2 gap-y-2 text-sm pt-2 border-t border-neutral-200 dark:border-neutral-800">
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              DATE
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              12 October 2026
            </span>

            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              TIME
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              10:00 AM - 5:00 PM
            </span>

            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              VENUE
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              Computer Lab 1
            </span>

            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              TEAM SIZE
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              2-4 members
            </span>

            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              FEE
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              Free
            </span>

            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              PRIZE POOL
            </span>
            <span className="font-semibold text-green-600 dark:text-green-400">
              $15,000
            </span>
          </div>
        </div>
      );
    },
  },
  {
    description: "TREASURE HUNT",
    title: "Clues, Challenges, Treasure",
    src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f", // Replaced with an adventure/map themed placeholder image
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <div className="space-y-4">
          <p className="text-neutral-600 dark:text-neutral-400">
            A thrilling adventure combining logic, teamwork, observation, and
            problem-solving. Follow clues, overcome challenges, and race
            against other teams to uncover the ultimate treasure.
          </p>

          <div className="grid grid-cols-2 gap-y-2 text-sm pt-2 border-t border-neutral-200 dark:border-neutral-800">
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              DATE
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              13 October 2026
            </span>

            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              TIME
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              11:00 AM - 2:00 PM
            </span>

            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              VENUE
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              Campus Grounds
            </span>

            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              TEAM SIZE
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              3-5 members
            </span>

            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              FEE
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              Free
            </span>

            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              PRIZE POOL
            </span>
            <span className="font-semibold text-green-600 dark:text-green-400">
              $500
            </span>
          </div>
        </div>
      );
    },
  },

{
    description: "E-SPORTS",
    title: "Ultimate Gaming Arena",
    src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop", // Gaming arena placeholder image
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <div className="space-y-4">
          <p className="text-neutral-600 dark:text-neutral-400">
            Experience the ultimate competitive gaming arena where strategy,
            teamwork, reflexes, and skill come together. Compete against fellow
            gamers, climb the leaderboard, and battle for victory.
          </p>

          <div className="grid grid-cols-2 gap-y-2 text-sm pt-2 border-t border-neutral-200 dark:border-neutral-800">
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              DATE
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              15 October 2026
            </span>

            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              TIME
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              1:00 PM - 6:00 PM
            </span>

            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              VENUE
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              Auditorium
            </span>

            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              TEAM SIZE
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              4-5 members
            </span>

            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              FEE
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              Free
            </span>

            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              PRIZE POOL
            </span>
            <span className="font-semibold text-green-600 dark:text-green-400">
              $2,000
            </span>
          </div>
        </div>
      );
    },
  },
{
    description: "CAPTURE THE FLAG",
    title: "Cybersecurity CTF",
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop", // Matrix/cybersecurity themed placeholder image
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <div className="space-y-4">
          <p className="text-neutral-600 dark:text-neutral-400">
            Put your cybersecurity skills to the test through a series of
            challenges covering cryptography, web security, forensics, reverse
            engineering, and more. Find the flags, crack the challenges, and
            prove your skills.
          </p>

          <div className="grid grid-cols-2 gap-y-2 text-sm pt-2 border-t border-neutral-200 dark:border-neutral-800">
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              DATE
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              16 October 2026
            </span>

            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              TIME
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              10:00 AM - 4:00 PM
            </span>

            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              VENUE
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              Cyber Security Lab
            </span>

            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              TEAM SIZE
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              1-3 members
            </span>

            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              FEE
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              Free
            </span>

            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              PRIZE POOL
            </span>
            <span className="font-semibold text-green-600 dark:text-green-400">
              $1,500
            </span>
          </div>
        </div>
      );
    },
  },
{
    description: "WORKSHOP",
    title: "Hands-On Tech & Skills",
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop", // Tech workshop/presentation themed placeholder image
    ctaText: "View",
    ctaLink: "#",
    content: () => {
      return (
        <div className="space-y-4">
          <p className="text-neutral-600 dark:text-neutral-400">
            An interactive learning experience designed to bridge the gap
            between theory and practical skills. Learn from experts, explore
            emerging technologies, and gain hands-on experience through engaging
            activities.
          </p>

          <div className="grid grid-cols-2 gap-y-2 text-sm pt-2 border-t border-neutral-200 dark:border-neutral-800">
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              DATE
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              17 October 2026
            </span>

            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              TIME
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              9:00 AM - 1:00 PM
            </span>

            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              VENUE
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              Seminar Hall B
            </span>

            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              TEAM SIZE
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              Individual (1)
            </span>

            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              FEE
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              Free
            </span>

            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              BENEFITS
            </span>
            <span className="font-semibold text-green-600 dark:text-green-400">
              Certificates & Swag
            </span>
          </div>
        </div>
      );
    },
  },

];
