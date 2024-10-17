import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/react";
import { StickyScrollRevealNetImage } from "./aceternityUI/StickScrollReaveal/StickyScrollRevealComponentNetimage";
import { StickyScrollRevealStom } from "./aceternityUI/StickScrollReaveal/StickyScrollRevealComponentStom";
// import styled from "styled-components";

interface ComponentItem {
  id: number;
  app: JSX.Element;
  appName: string;
  appLink: string;
}

const WorksPage = () => {
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
  return (
    // <StyledWrapper>
    <>
      {componentArr.map((arr) => (
        <div className="flex flex-col items-center my-[15vh]" key={arr.id}>
          <div className="text-3xl self-start ml-[3vh] font-sans  ">
            <Link href={arr.appLink} isExternal>
              {arr.appName}
              <ExternalLinkIcon />
            </Link>
          </div>
          {arr.app}
        </div>
      ))}
    </>
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

export default WorksPage;
