// import { TypewriterEffectSmoothDemo } from "./aceternityUI/TypewriterEffect/TypewriterEffectComponent";

import { HeroHighlightDemo } from "./aceternityUI/HeroHighlight/HeroHighlightComponent";

const AboutMePage = () => {
  return (
    <div className="flex flex-col gap-[10vh]">
      <div className="flex flex-row gap-[5vh] flex-wrap justify-center">
        {/* <TypewriterEffectSmoothDemo /> */}
        <div className="text-3xl font-bold flex items-center ">
          Hello World I'm <span className="text-purple-600"> Tom</span>.
        </div>
        <div className="flex items-center px-[3vh]">
          <p className="text-lg font-medium">
            Hi, I’m Tom! currently learning software engineering <br />
            with a focus on web development.. I enjoy working on creative <br />
            projects. Right now, I’m <br />
            focused on improving my Problem Solving & Debugging skills, and
            working toward my goal <br />
            of becoming a Full-Stack Developer. When I’m not studying, you can{" "}
            <br />
            find me Driving a car. Feel free to reach out if you’d like to
            connect!
          </p>
        </div>
      </div>
      <div className="">
        <p className="text-3xl font-serif">My tech stack</p>
        <div className=" ">
          <HeroHighlightDemo />
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
