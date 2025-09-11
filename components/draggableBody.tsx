"use client";

import React from "react";
import { DraggableCardBody, DraggableCardContainer } from "./draggableCard";


export function DraggableCardDemo() {
  const items = [
    {
      title: "Anxiety",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=800&auto=format&fit=crop",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Depression",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=800&auto=format&fit=crop",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Stress",
      image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=800&auto=format&fit=crop",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Loneliness",
      image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?q=80&w=800&auto=format&fit=crop",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Burnout",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Self-Doubt",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=800&auto=format&fit=crop",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Fear",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=800&auto=format&fit=crop",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];
  const [cards, setCards] = React.useState(items);
  const [allSwiped, setAllSwiped] = React.useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen w-full items-center justify-center overflow-clip px-40">
      {/* Left Side: Text */}
      <div className="flex flex-col items-start justify-center px-8 py-16 h-full">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-neutral-800 dark:text-neutral-100">Work on Mental Health!</h1>
        <p className="mb-8 text-lg md:text-xl text-neutral-600 max-w-md">
          Swipe away each card to overcome a mental health challenge. When all cards are gone, you'll see your progress!
        </p>
        <button className="px-6 py-3 rounded-lg bg-green-600 text-white font-bold text-lg shadow hover:bg-green-700 transition">Start Your Journey</button>
        {allSwiped && (
          <div className="mt-12 p-6 rounded-xl bg-green-100 text-green-800 text-2xl font-bold shadow">
            Better Mental Health 🎉
          </div>
        )}
      </div>
      {/* Right Side: Draggable Cards */}
      <div className="flex items-center justify-center h-full relative">
        <DraggableCardContainer className="relative w-full h-full flex items-center justify-center overflow-clip">
          {cards.map((item, idx) => (
            <DraggableCardBody key={idx} className={item.className}>
              <div className="absolute top-2 right-2 z-20">
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded-full text-xs shadow hover:bg-red-600 transition"
                  aria-label={`Swipe away ${item.title}`}
                >
                  Swipe Away
                </button>
              </div>
              <img
                src={item.image}
                alt={item.title}
                className="pointer-events-none relative z-10 h-80 w-80 object-cover"
              />
              <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                {item.title}
              </h3>
            </DraggableCardBody>
          ))}
        </DraggableCardContainer>
      </div>
    </div>
  );
}
