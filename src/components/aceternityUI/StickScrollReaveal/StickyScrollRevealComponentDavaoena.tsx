"use client";
import { StickyScroll } from "./StickyScrollReveal";
import image from "../../../Photos/workspage photos/davaoena/Screenshot 2025-06-28 at 11.57.47.png";
// import image2 from "../../../Photos/workspage photos/netimage/netimage-ss.jpg";
// import image3 from "../../../Photos/workspage photos/netimage/netimage-ss-light.jpg.png";

const content = [
  {
    title: "Davaoeña-KDB (Ongoing project)",
    description: "Davaoeña-KDB is a client project. A business portfolio",
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
    title: "What is Davaoeña-KDB?",
    description: "Davaoeña-KDB is a Bar based in Japan.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src={image}
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
export function StickyScrollRevealDavaoena() {
  return (
    <div className="p-10 w-[90vw]  ">
      <StickyScroll content={content} />
    </div>
  );
}
