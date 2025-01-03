"use client";
import { StickyScroll } from "./StickyScrollReveal";
import image from "../../../Photos/workspage photos/netimage/netimage-ss-desktop-size.png";
import image2 from "../../../Photos/workspage photos/netimage/netimage-ss.jpg";
import image3 from "../../../Photos/workspage photos/netimage/netimage-ss-light.jpg.png";

const content = [
  {
    title: "Image Search",
    description:
      "Find the perfect image effortlessly. With advanced search algorithms, quickly discover the photos you need from a vast collection. Search by keywords, categories, or upload your own image for reverse search. No more endless scrolling—just instant results.",
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
    title: "What I Struggled With: Using TanStack Query for the First Time",
    description:
      "Using TanStack Query in my project was more challenging than I had expected. Since it was my first time working with it, I found fetching and displaying data confusing. I struggled with understanding how to properly configure queries and manage the loading and error states. Debugging why the data wasn’t rendering smoothly took some time, but the experience helped me learn a lot about asynchronous data handling in React.",
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
  {
    title: "Improving Routes and User Experience",
    description: `
    One of the next things I want to work on is adding routes to make navigation smoother. 
    I plan to organize the pages better so users can easily find what they’re looking for. 
    I also want to enhance the overall experience by making everything feel more intuitive and responsive.

    This means working on loading indicators, better error handling, and adding small touches 
    that make the app more enjoyable to use. The goal is to make sure users have a smooth, hassle-free experience.
  `,
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <img
          src={image3}
          className="w-screen h-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Typescript, Javascript, Chakra UI, Unsplash API",
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
export function StickyScrollRevealNetImage() {
  return (
    <div className="p-10   ">
      <StickyScroll content={content} />
    </div>
  );
}
