"use client";
import { StickyScroll } from "./StickyScrollReveal";
import image from "../../../Photos/workspage photos/stom/s-tom-ss-1.png";
import image2 from "../../../Photos/workspage photos/stom/s-tom-ss-2.png";
import image3 from "../../../Photos/workspage photos/stom/s-tom-ss-3.png";

const content = [
  {
    title: "Game Search",
    description:
      "Discover the perfect game effortlessly. Use our smart search algorithms to explore games by genre, platform, or even mood. Whether you're a casual player or a hardcore gamer, we’ve made finding your next game as easy as ever.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--purple-500))] flex items-center justify-center text-white">
        <img
          src={image}
          className="w-screen h-full object-cover"
          alt="Game Finder desktop preview"
        />
      </div>
    ),
  },
  {
    title:
      "What I Struggled With: Sharing and Filtering Data                             ",
    description: `
    My next focus is on enhancing the user experience by organizing routes better and ensuring smooth navigation. 
    I plan to introduce user authentication, allowing users to log in and save their favorite games for easy access. 
    This will provide a more personalized experience and add value for returning users. 

    I'll also implement features like loading spinners, intuitive error messages, and more responsive design elements 
    to ensure a seamless and engaging browsing experience. The goal is to make Game Finder not only functional but enjoyable to use.
  `,
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src={image2}
          className="w-screen h-full object-cover"
          alt="Game Finder mobile preview"
        />
      </div>
    ),
  },
  {
    title: "Improving User Flow, Navigation, and Favorites Feature",
    description: `
    My next focus is on enhancing the user experience by organizing routes better and ensuring smooth navigation.
    I'll introduce features like loading spinners, intuitive error messages, and more responsive design elements 
    to make the browsing experience seamless and engaging.
  `,
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--teal-500),var(--green-500))] flex items-center justify-center text-white">
        <img
          src={image3}
          className="w-screen h-full object-cover"
          alt="Game Finder light mode preview"
        />
      </div>
    ),
  },
  {
    title: " React, TypeScript,, Chakra UI and RAWG API",
    description: "",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--cyan-500))] flex items-center justify-center text-white">
        {/* Optional image component for future updates */}
      </div>
    ),
  },
];
export function StickyScrollRevealStom() {
  return (
    <div className="p-10 ">
      <StickyScroll content={content} />
    </div>
  );
}
