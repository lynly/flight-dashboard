import styled from "styled-components";

const twoThirds = (45 * 2) / 3;

const Display = styled.div`
  box-sizing: border-box;
  border: 1px solid #003366;
  padding: 24px;
  overflow-y: scroll;
  margin-bottom: 12px;
  margin-right: 0;
  height: ${twoThirds}vh;

  @media (max-width: 768px) {
    height: auto;
    align-items: stretch;
    margin-right: 12px;
    margin-bottom: 0;
    width: ${twoThirds}vw;
    flex-grow: 2;
    padding: 12px;
  }
`;

export { Display };
