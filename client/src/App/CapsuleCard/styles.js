import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const Col = styled.div`
  flex-grow: 1;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Card = styled.div`
  border-top: 1px solid #aaaaaa;
  margin: 24px 0;
`;

export { Row, Col, Card };
