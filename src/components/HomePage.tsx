import image from "../Photos/IMG_2211.jpg";
import { TextGenerateEffectDemo } from "./aceternityUI/TextGenerateEffect/TextGenerateEffectComponent";

const HomePage = () => {
  return (
    <div className="h-[50rem] w-screen dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center py-[]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        <div className="flex flex-wrap gap-[7vh] justify-center  ">
          <div>
            <img
              src={image}
              className="rounded-[5vh] md:w-[500px] md:h-[500px] h-[300px] w-[300px] object-cover"
            />
          </div>
          <div className="w-[25vh]  flex items-center justify-center ">
            <TextGenerateEffectDemo />
          </div>
        </div>
      </p>
    </div>
  );
};

export default HomePage;
