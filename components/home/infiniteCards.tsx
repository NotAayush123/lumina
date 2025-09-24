import React from 'react'
import { InfiniteMovingCards } from "@/components/home/infiniteMovingCards";
const infiniteCards = () => {
    
const mentalHealthInfo = [
  {
    quote:
      "Anxiety affects 40 million adults in the US. Remember, feeling anxious is normal - it's your mind's way of protecting you. With proper support and coping strategies, anxiety becomes manageable.",
    name: "Anxiety Disorders",
    title: "You're stronger than your worries 💙",
  },
  {
    quote:
      "Depression is more than just sadness - it's a real medical condition. But here's the good news: it's highly treatable. Small steps forward count, and you don't have to face this alone.",
    name: "Depression",
    title: "Every small step matters 🌟",
  },
  {
    quote: 
      "ADHD brains work differently, not deficiently. Your unique way of thinking can be a superpower with the right tools and understanding. Celebrate your creativity and energy!",
    name: "ADHD",
    title: "Different is beautiful 🚀",
  },
  {
    quote:
      "PTSD shows how strong you are - you survived something difficult. Healing takes time, but with support, you can reclaim your peace and move forward at your own pace.",
    name: "PTSD",
    title: "Your resilience is remarkable ✨",
  },
  {
    quote:
      "Bipolar disorder doesn't define you. With proper treatment and self-care, you can lead a fulfilling life. Your highs and lows are part of your journey, not your destination.",
    name: "Bipolar Disorder", 
    title: "Balance is possible 🌈",
  },
  {
    quote:
      "OCD thoughts don't reflect who you are. You are not your intrusive thoughts. With therapy and support, you can learn to manage OCD and live freely.",
    name: "OCD",
    title: "You are not your thoughts 🦋",
  },
];
  return (
     <div className="w-full bg-blue-500">
  <InfiniteMovingCards  items={mentalHealthInfo} direction="right" speed="faster" />
</div>
  )
}

export default infiniteCards;