"use client";
import { StickyScroll } from "./StickyScrollReveal";
import image from "../../../Photos/workspage photos/netmovie/netmovie - Google Chrome 1_5_2025 11_31_09 PM.png";
const content = [
  {
    title: "Movie Finder",
    description: "Coming soon...",
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
      "React, Typescript, Tailwind css, ShadcnUI, TMDB API,                           ",
    description: `  
    `,
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src={image}
          className="w-screen h-full object-cover"
          alt="Game Finder mobile preview"
        />
      </div>
    ),
  },
  //   {
  //     title: "Improving User Flow, Navigation, and Favorites Feature",
  //     description: `
  //     My next focus is on enhancing the user experience by organizing routes better and ensuring smooth navigation.
  //     I'll introduce features like loading spinners, intuitive error messages, and more responsive design elements
  //     to make the browsing experience seamless and engaging.
  //   `,
  //     content: (
  //       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--teal-500),var(--green-500))] flex items-center justify-center text-white">
  //         <img
  //           src={image3}
  //           className="w-screen h-full object-cover"
  //           alt="Game Finder light mode preview"
  //         />
  //       </div>
  //     ),
  //   },
  //   {
  //     title: " React, TypeScript, Chakra UI and RAWG API",
  //     description: "",
  //     content: (
  //       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--cyan-500))] flex items-center justify-center text-white">
  //         {/* Optional image component for future updates */}
  //       </div>
  //     ),
  //   },
];
export function StickyScrollRevealNetmovie() {
  return (
    <div className="p-10 ">
      <StickyScroll content={content} />
    </div>
  );
}
