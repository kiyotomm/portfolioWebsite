"use client";
import { TypewriterEffectSmooth } from "./TypewriterEffect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Hello",
    },
    {
      text: "World, I'm",
    },

    {
      text: "Tom!",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <TypewriterEffectSmooth words={words} />
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        learning to become a software engineer
      </p>
    </div>
  );
}
