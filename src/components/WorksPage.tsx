import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/react";
import { StickyScrollRevealNetImage } from "./aceternityUI/StickScrollReaveal/StickyScrollRevealComponentNetimage";
import { StickyScrollRevealStom } from "./aceternityUI/StickScrollReaveal/StickyScrollRevealComponentStom";
// import styled from "styled-components";

interface ComponentItem {
  id: number;
  app: JSX.Element;
}

const WorksPage = () => {
  const arr: ComponentItem[] = [
    { id: 1, app: <StickyScrollRevealNetImage /> },
    { id: 2, app: <StickyScrollRevealStom /> },
  ];
  return (
    // <StyledWrapper>
    <>
      <div className="flex flex-col items-center my-[15vh]  ">
        <div className="text-3xl self-start ml-[3vh] font-sans  ">
          <Link href="https://netimage.vercel.app/" isExternal>
            netimage <ExternalLinkIcon />
          </Link>
        </div>
        <StickyScrollRevealNetImage />
      </div>
      <div className="flex flex-col items-center my-[15vh]  ">
        <div className="text-3xl self-start ml-[3vh] font-sans  ">
          <Link href="https://netimage.vercel.app/" isExternal>
            netimage <ExternalLinkIcon />
          </Link>
        </div>
        <StickyScrollRevealStom />
      </div>
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
