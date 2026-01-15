"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "faster" | "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "faster") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
          {items.map((item, idx) => {
            // Array of vibrant/bright colors
            const colors = [
              "#FFD700", // Gold
              "#FF69B4", // Hot Pink
              "#7CFC00", // Lawn Green
              "#00BFFF", // Deep Sky Blue
              "#FF6347", // Tomato
              "#FFB347", // Pastel Orange
              "#40E0D0", // Turquoise
              "#FF00FF", // Magenta
              "#00FF7F", // Spring Green
              "#FFA500", // Orange
              "#FFFF00", // Yellow
              "#00FFEF", // Aqua
              "#FF5E13", // Vivid Orange
              "#FF85A1", // Light Pink
              "#A3FFAE", // Mint
              "#FF1493", // Deep Pink
              "#00FF00", // Lime
              "#00CED1", // Dark Turquoise
              "#FF4500", // Orange Red
              "#1E90FF", // Dodger Blue
              "#32CD32", // Lime Green
              "#FF8C00", // Dark Orange
              "#8A2BE2", // Blue Violet
              "#00FA9A", // Medium Spring Green
              "#FF00FF", // Fuchsia
              "#39FF14", // Neon Green
              "#FF6EC7", // Neon Pink
              "#FFDEAD", // Navajo White
              "#00BFFF", // Deep Sky Blue
            ];
            // Assign color deterministically per card to avoid flicker
            const bgColor = colors[idx % colors.length];
            // Helper to determine if color is light or dark
            function getContrastYIQ(hex: string) {
              hex = hex.replace('#', '');
              const r = parseInt(hex.substring(0,2),16);
              const g = parseInt(hex.substring(2,4),16);
              const b = parseInt(hex.substring(4,6),16);
              const yiq = (r*299 + g*587 + b*114) / 1000;
              return yiq >= 128 ? '#222' : '#fff';
            }
            const textColor = getContrastYIQ(bgColor);
            return (
              <li
                className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 px-8 py-6 md:w-[450px] "
                key={item.name}
                style={{ background: bgColor, borderColor: bgColor, color: textColor }}
              >
                <blockquote>
                  <div
                    aria-hidden="true"
                    className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                  ></div>
                  <span className="relative z-20 text-lg leading-[1.6] font-bold" style={{ color: textColor }}>
                    {item.name}
                  </span>
                  <div className="relative z-20 mt-6 flex flex-row items-center">
                    <span className="flex flex-col gap-1">
                      <span className="text-sm leading-[1.6] font-normal" style={{ color: textColor }}>
                        {item.quote}
                      </span>
                      <span className="text-sm leading-[1.6] font-normal" style={{ color: textColor }}>
                        {item.title}
                      </span>
                    </span>
                  </div>
                </blockquote>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
