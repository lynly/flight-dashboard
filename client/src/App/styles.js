import styled from "styled-components";

const Application = styled.div`
  box-sizing: border-box;
  top: 25%;
  bottom: 25%;
  left: 25%;
  right: 25%;
  position: absolute;
  max-width: 50vw;
  max-height: 50vh;

  @media (max-width: 768px) {
    max-width: 100vw;
    max-height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export { Application };
