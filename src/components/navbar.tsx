"use client";

import { FiHome, FiCalendar, FiMic, FiAward, FiImage } from "react-icons/fi";
import { FloatingNav } from "@/components/ui/floating-navbar";

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <FiHome className="h-4 w-4" />,
    },
    {
      name: "Event",
      link: "/event",
      icon: <FiCalendar className="h-4 w-4" />,
    },
    {
      name: "Speakers",
      link: "/speakers",
      icon: <FiMic className="h-4 w-4" />,
    },
    {
      name: "Sponsors",
      link: "/sponsors",
      icon: <FiAward className="h-4 w-4" />,
    },
    {
      name: "Gallery",
      link: "/gallery",
      icon: <FiImage className="h-4 w-4" />,
    },
  ];

  return <FloatingNav navItems={navItems} />;
}
