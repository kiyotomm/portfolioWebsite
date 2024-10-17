import { StickyScrollRevealDemo } from "./aceternityUI/StickScrollReaveal/StickyScrollRevealComponent";
// import styled from "styled-components";

const WorksPage = () => {
  return (
    // <StyledWrapper>
    <div className="flex flex-col items-center ">
      <div className="text-3xl self-start">netimage</div>
      <StickyScrollRevealDemo />
    </div>
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
