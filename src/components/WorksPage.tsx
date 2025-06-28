import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/react";
// import { StickyScrollRevealStom } from "./aceternityUI/StickScrollReaveal/StickyScrollRevealComponentStom";
import { Helmet } from "react-helmet-async";
import { StickyScrollRevealNetmovie } from "./aceternityUI/StickScrollReaveal/StickyScrollRevealComponentNetmovie";
import { StickyScrollRevealGaijinHub } from "./aceternityUI/StickScrollReaveal/StickyScrollRevealComponentGaijin-Hub";
import { StickyScrollRevealGmacsteam } from "./aceternityUI/StickScrollReaveal/StickyScrollRevealComponentG-macsteam";
import { StickyScrollRevealDavaoena } from "./aceternityUI/StickScrollReaveal/StickyScrollRevealComponentDavaoena";
// import styled from "styled-components";

interface ComponentItem {
  id: number;
  app: JSX.Element;
  appName: string;
  appLink: string;
}

const Works = () => {
  const componentArr: ComponentItem[] = [
    // {
    //   id: 1,
    //   app: <StickyScrollRevealGaijinHub />,
    //   appName: "netimage",
    //   appLink: "https://netimage.vercel.app/",
    // },
    // {
    //   id: 2,
    //   app: <StickyScrollRevealStom />,
    //   appName: "s-tom",
    //   appLink: "https://s-tom.vercel.app/",
    // },
    {
      id: 3,
      app: <StickyScrollRevealNetmovie />,
      appName: "netmovie",
      appLink: "https://netmovie-olive.vercel.app/",
    },
    {
      id: 4,
      app: <StickyScrollRevealGaijinHub />,
      appName: "Gaijin-Hub",
      appLink: "https://www.gaijin-hub.com/",
    },
    {
      id: 5,
      app: <StickyScrollRevealGmacsteam />,
      appName: "G-Macsteam (Client Project)",
      appLink: "https://g-macsteam.com/",
    },
    {
      id: 5,
      app: <StickyScrollRevealDavaoena />,
      appName: "Davaoeña (Client Project)",
      appLink: "https://davaoena-kdb.vercel.app/en",
    },
  ];

  return (
    // <div className="relative min-w-[99.3vw] bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
    //   <div className="w-screen absolute inset-0 h-full">
    //     <SparklesCore
    //       id="tsparticlesfullpage"
    //       background="transparent"
    //       particleDensity={100}
    //       className="w-full h-full"
    //       particleColor="#FFFFFF"
    //     />
    //   </div>
    <div className="h-full w-[99vw] dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative ">
      <Helmet>
        <title>kiyotomm</title>
        <meta name="description" content="kiyotomm projects" />
        <meta name="robots" content="homepage, react, seo" />
        <link href="/works" />
      </Helmet>
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0   dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {componentArr.reverse().map((arr) => (
        <div
          className="flex flex-col items-center my-[15vh] text-white    "
          key={arr.id}
        >
          <div
            className="text-3xl  ml-[3vh] font-sans flex z-50 color-black "
            id="worksPageLink"
          >
            <Link href={arr.appLink} isExternal className="self-start">
              {arr.appName}
              <ExternalLinkIcon />
            </Link>
          </div>
          <div>{arr.app}</div>
        </div>
      ))}
    </div>
    // </div>

    // // <StyledWrapper>
    //   <AuroraBackground className="h-full min-w-[99.3vw] ">
    //     <motion.div
    //       initial={{ opacity: 0.0, y: 40 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       transition={{
    //         delay: 0.3,
    //         duration: 0.8,
    //         ease: "easeInOut",
    //       }}
    //     >
    //       {componentArr.map((arr) => (
    //         <div
    //           className="flex flex-col items-center my-[15vh] text-white "
    //           key={arr.id}
    //         >
    //           <div className="text-3xl self-start ml-[3vh] font-sans flex z-10 ">
    //             <Link
    //               href={arr.appLink}
    //               isExternal
    //               className="flex gap-[5px] items-center"
    //             >
    //               {arr.appName}
    //               <ExternalLinkIcon />
    //             </Link>
    //           </div>
    //           <div>{arr.app}</div>
    //         </div>
    //       ))}
    //     </motion.div>
    //   </AuroraBackground>
    // </StyledWrapper>
  );
};

export default Works;
