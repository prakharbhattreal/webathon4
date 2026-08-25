"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Contact",
      link: "#contact",
    }
  ];

  return <FloatingNav navItems={navItems} />;
}