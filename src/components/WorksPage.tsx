import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/react";
import { StickyScrollRevealNetImage } from "./aceternityUI/StickScrollReaveal/StickyScrollRevealComponentNetimage";
import { StickyScrollRevealStom } from "./aceternityUI/StickScrollReaveal/StickyScrollRevealComponentStom";
import { AuroraBackground } from "./aceternityUI/AuroraBackgoround/AuroraBackground";
import { motion } from "framer-motion";
// import styled from "styled-components";

interface ComponentItem {
  id: number;
  app: JSX.Element;
  appName: string;
  appLink: string;
}

const Works = () => {
  const componentArr: ComponentItem[] = [
    {
      id: 1,
      app: <StickyScrollRevealNetImage />,
      appName: "netimage",
      appLink: "https://netimage.vercel.app/",
    },
    {
      id: 2,
      app: <StickyScrollRevealStom />,
      appName: "s-tom",
      appLink: "https://s-tom.vercel.app/",
    },
  ];

  // return (
  //   <div className=" h-screen w-screen  bg-neutral-950 ">
  //     {" "}
  //     <>
  //       {componentArr.map((arr) => (
  //         <div className="flex flex-col items-center my-[15vh]" key={arr.id}>
  //           <div className="text-3xl self-start ml-[3vh] font-sans flex  ">
  //             <Link
  //               href={arr.appLink}
  //               isExternal
  //               className="flex gap-[5px] items-center"
  //             >
  //               {arr.appName}
  //               <ExternalLinkIcon />
  //             </Link>
  //           </div>
  //           {arr.app}
  //         </div>
  //       ))}
  //     </>
  //     <BackgroundBeams />
  //   </div>
  // );
  return (
    // <StyledWrapper>
    <AuroraBackground className="h-full min-w-[99.3vw] ">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        {componentArr.map((arr) => (
          <div
            className="flex flex-col items-center my-[15vh] text-white "
            key={arr.id}
          >
            <div className="text-3xl self-start ml-[3vh] font-sans flex z-10 ">
              <Link
                href={arr.appLink}
                isExternal
                className="flex gap-[5px] items-center"
              >
                {arr.appName}
                <ExternalLinkIcon />
              </Link>
            </div>
            {arr.app}
          </div>
        ))}
      </motion.div>
    </AuroraBackground>
    // </StyledWrapper>
  );
};
// const StyledWrapper = styled.div`
//   .container {
//     width: 100vw;
//     height: 100vh;
//     background-color: #111111;
//     background-image: linear-gradient(
//       32deg,
//       rgba(8, 8, 8, 0.74) 30px,
//       transparent
//     );
//     background-size: 60px 60px;
//     background-position: -5px -5px;
//   }
// `;

export default Works;
