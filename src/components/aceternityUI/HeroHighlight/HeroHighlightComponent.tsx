"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./HeroHighlight";
import bootstrap from "../../../Photos/techStackPhotos/Bootstrap.png";
import react from "../../../Photos/techStackPhotos/React.png";
import ts from "../../../Photos/techStackPhotos/typescript.png";
import css from "../../../Photos/techStackPhotos/CSS3.png";
import chakra from "../../../Photos/techStackPhotos/Chakra UI.png";
import js from "../../../Photos/techStackPhotos/js_5968292.png";
import tailwind from "../../../Photos/techStackPhotos/Tailwind CSS.png";
import html from "../../../Photos/techStackPhotos/HTML5.png";
import java from "../../../Photos/techStackPhotos/Java.png";
import php from "../../../Photos/techStackPhotos/PHP.png";

export function HeroHighlightDemo() {
  const imageArr = [
    html,
    css,
    js,
    ts,
    react,
    chakra,
    bootstrap,
    tailwind,
    java,
    php,
  ];
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white  leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <div className="flex flex-wrap flex-row w-[30vh] gap-[1vh]">
          {imageArr.map((image, ind) => (
            <img src={image} key={ind} width="50px" />
          ))}
        </div>
        <Highlight className="text-black dark:text-white">
          copy, of a copy, of a copy.
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
