"use client";

import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

export const DraggableCardBody = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = {
    stiffness: 150,
    damping: 20,
    mass: 0.5,
  };

  const rotateX = useSpring(
    useTransform(mouseY, [-200, 200], [15, -15]),
    springConfig
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-200, 200], [-15, 15]),
    springConfig
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();

    if (!rect) return;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      drag
      dragMomentum={true}
      dragElastic={0.2}
      whileDrag={{
        scale: 1.05,
        cursor: "grabbing",
        zIndex: 100,
      }}
      whileHover={{
        scale: 1.03,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative min-h-96 w-80 cursor-grab overflow-hidden rounded-md bg-neutral-100 p-4 shadow-2xl dark:bg-neutral-900",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const DraggableCardContainer = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative min-h-screen w-full overflow-hidden perspective-[3000px]",
        className
      )}
    >
      {children}
    </div>
  );
};