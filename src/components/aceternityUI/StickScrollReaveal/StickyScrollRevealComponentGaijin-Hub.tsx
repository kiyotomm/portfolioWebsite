"use client";
import { StickyScroll } from "./StickyScrollReveal";
import image from "../../../Photos/workspage photos/gaijinhub/Screenshot 2025-06-28 at 11.52.59.png";
import image2 from "../../../Photos/workspage photos/gaijinhub/Screenshot 2025-06-28 at 11.53.12.png";
// import image3 from "../../../Photos/workspage photos/netimage/netimage-ss-light.jpg.png";

const content = [
  {
    title: "Gaijin-Hub (beta)",
    description:
      "Gaijin-Hub business owners to clients and clients to business owners.",
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
    title: "What is Gaijin-Hub?",
    description:
      "Gaijin-Hub is a business listing app. Where Business owners can list their business information, recieve booking, manage the booking(Made in Gaijin-Hub). Business owners can display all their business information. Address, contact number, email and so on. For clients, They can make a booking on which date and time, make a request and a review.",
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
    title: "Next.js, Typescript, Daisy UI, Supabase, Resend",
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
export function StickyScrollRevealGaijinHub() {
  return (
    <div className="p-10 w-[90vw]  ">
      <StickyScroll content={content} />
    </div>
  );
}
