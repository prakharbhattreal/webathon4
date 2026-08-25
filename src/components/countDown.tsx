"use client";

import { useEffect, useState } from "react";

const EVENT_DATE = new Date("2026-10-24T00:00:00+05:30").getTime();

export function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    setMounted(true);

    const updateCountdown = () => {
      setTimeLeft(Math.max(0, EVENT_DATE - Date.now()));
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="mt-6 flex items-center justify-center gap-2 text-sm sm:gap-3">
        <TimeUnit value={0} label="days" />
        <Separator />
        <TimeUnit value={0} label="hours" />
        <Separator />
        <TimeUnit value={0} label="min" />
        <Separator />
        <TimeUnit value={0} label="sec" />
      </div>
    );
  }

  if (timeLeft <= 0) {
    return (
      <p className="mt-6 text-sm font-medium text-muted-foreground">
        The event has started!
      </p>
    );
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft / (1000 * 60 * 60)) % 24
  );
  const minutes = Math.floor(
    (timeLeft / (1000 * 60)) % 60
  );
  const seconds = Math.floor(
    (timeLeft / 1000) % 60
  );

  return (
    <div className="mt-6 flex items-center justify-center gap-2 text-sm sm:gap-3">
      <TimeUnit value={days} label="days" />
      <Separator />
      <TimeUnit value={hours} label="hours" />
      <Separator />
      <TimeUnit value={minutes} label="min" />
      <Separator />
      <TimeUnit value={seconds} label="sec" />
    </div>
  );
}

function TimeUnit({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="flex items-baseline gap-1">
      <span className="font-mono text-base font-semibold tracking-tight sm:text-lg">
        {String(value).padStart(2, "0")}
      </span>

      <span className="text-xs text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <span className="text-muted-foreground/40">
      :
    </span>
  );
}