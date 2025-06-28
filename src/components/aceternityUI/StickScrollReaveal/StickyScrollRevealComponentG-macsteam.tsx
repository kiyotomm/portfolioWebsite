"use client";
import { StickyScroll } from "./StickyScrollReveal";
import image from "../../../Photos/workspage photos/gmacsteam/Screenshot 2025-06-28 at 11.56.15.png";
import image2 from "../../../Photos/workspage photos/gmacsteam/Screenshot 2025-06-28 at 11.56.59.png";
// import image3 from "../../../Photos/workspage photos/netimage/netimage-ss-light.jpg.png";

const content = [
  {
    title: "G-Macsteam (Ongoing project)",
    description:
      "G-Macsteam is a client project. A business portfolio that also has a booking system and auth.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img
          src={image}
          className="w-screen h-full object-cover"
          alt="netimage "
        />
      </div>
    ),
  },
  {
    title: "What is G-Macsteam?",
    description:
      "G-Macsteam Ltd. is a furnace cleaning business based in Canada. owned by a Filipino business owner, it has more than 200 5 star review in google.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src={image2}
          className="w-screen h-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  //   {
  //     title: "Improving Routes and User Experience",
  //     description: `
  //     One of the next things I want to work on is adding routes to make navigation smoother.
  //     I plan to organize the pages better so users can easily find what they’re looking for.
  //     I also want to enhance the overall experience by making everything feel more intuitive and responsive.

  //     This means working on loading indicators, better error handling, and adding small touches
  //     that make the app more enjoyable to use. The goal is to make sure users have a smooth, hassle-free experience.
  //   `,
  //     content: (
  //       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
  //         <img
  //           src={image3}
  //           className="w-screen h-full object-cover"
  //           alt="linear board demo"
  //         />
  //       </div>
  //     ),
  //   },
  {
    title: "Next.js, Typescript, Shadcn UI, Supabase, Resend",
    description: "",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        {/* <img
          src={image3}
          className="w-screen h-full object-cover"
          alt="linear board demo"
        /> */}
      </div>
    ),
  },
];
export function StickyScrollRevealGmacsteam() {
  return (
    <div className="p-10 w-[90vw]  ">
      <StickyScroll content={content} />
    </div>
  );
}
