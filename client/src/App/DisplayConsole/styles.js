import styled from "styled-components";

const Display = styled.div`
  padding: 0.75rem;
  overflow-y: scroll;
  height: auto;

  @media (min-width: 48rem) {
    padding: 1.5rem;
    height: 40vh;
  }
`;

export default Display;
