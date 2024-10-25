// import { TypewriterEffectSmoothDemo } from "./aceternityUI/TypewriterEffect/TypewriterEffectComponent";

import { HeroHighlightDemo } from "./aceternityUI/HeroHighlight/HeroHighlightComponent";
// import bootstrap from "../Photos/techStackPhotos/Bootstrap.png";
// import react from "../Photos/techStackPhotos/React.png";
// import ts from "../Photos/techStackPhotos/typescript.png";
// import css from "../Photos/techStackPhotos/CSS3.png";
// import chakra from "../Photos/techStackPhotos/Chakra UI.png";
// import js from "../Photos/techStackPhotos/js_5968292.png";
// import tailwind from "../Photos/techStackPhotos/Tailwind CSS.png";
// import html from "../Photos/techStackPhotos/HTML5.png";
// import java from "../Photos/techStackPhotos/Java.png";
// import php from "../Photos/techStackPhotos/PHP.png";
import { IconCloudDemo } from "./MagicUI/InteractiveIconCloudComponent";
import { WordFadeInDemo } from "./MagicUI/WordFadeInComponent";
import { WordRotateDemo } from "./MagicUI/WordRotateComponent";
import FlickeringGrid from "./ui/flickering-grid";
import { GradualSpacingDemo } from "./MagicUI/GradualSpacingComponent";
import { Link } from "react-router-dom";

const AboutMePage = () => {
  return (
    <div className="flex flex-col gap-[25vh] items-center mt-[15vh]  ">
      <div className="flex flex-row gap-[5vh] flex-wrap justify-center ">
        {/* <TypewriterEffectSmoothDemo /> */}
        <div className="text-3xl font-bold flex flex-col items-center gap-2 ">
          <p>Hello World I'm </p>
          <WordRotateDemo />
        </div>
        <div className="flex flex-wrap items-center px-[3vh] ">
          <p className="text-lg font-medium">
            Hi, currently learning software engineering <br />
            with a focus on web development.. I enjoy working on creative <br />
            projects. Right now, I’m <br />
            focused on learning java, and working toward my goal <br />
            of becoming a Full-Stack Developer. When I’m not studying, you can{" "}
            find me Driving a car. <br />
            Feel free to reach out if you’d like to{"  "}
            <Link to="/contactPage" className="underline text-blue-700">
              connect!
            </Link>
          </p>
          {/* <WordFadeInDemo /> */}
        </div>
      </div>
      {/* <div className="flex  w-full justify-around items-center font-serif my-[11vh] gap-5"> */}
      {/* <div className="text-3xl font-bold">My tech stack</div> */}
      {/* <HeroHighlightDemo /> */}
      {/* <div className="flex gap-6">
          <div className="flex flex-wrap flex-row max-w-[30vh] gap-[1vh] justify-center items-center">
            {imageArr.map((image, ind) => (
              <img src={image} key={ind} width="60vh" />
            ))} */}
      {/* </div> */}
      {/* <IconCloudDemo /> */}
      {/* </div> */}
      <div className="relative h-[500px] rounded-lg w-screen bg-background overflow-hidden border flex items-center mb-10">
        <FlickeringGrid
          className="z-0 absolute inset-0 size-full w-screen flex items-center"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.5}
          flickerChance={0.1}
          height={800}
          // width={800}
        />
        <div className="flex  w-full justify-center flex-wrap items-center font-serif my-[11vh] gap-5">
          <div className="">
            <GradualSpacingDemo />
          </div>
          <div className="bg-white  ">
            <IconCloudDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
