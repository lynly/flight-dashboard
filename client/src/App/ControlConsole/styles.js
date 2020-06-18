import styled from "styled-components";

const oneThird = 46 / 3;

const Control = styled.div`
  box-sizing: border-box;
  border: 1px solid #004066;
  padding: 24px;
  height: ${oneThird}vh;

  @media (max-width: 768px) {
    height: auto;
    align-items: stretch;
    width: ${oneThird}vw;
    flex-grow: 1;
    padding: 12px;
  }
`;

const Input = styled.input`
  background: white;
  border-radius: 3px;
  border: 1px solid #004066;
  color: #004066;
  padding: 4px 8px;
  @media (max-width: 768px) {
    width: 59px;
  }
`;

const Button = styled.button`
  background: white;
  border-radius: 3px;
  border: 1px solid #004066;
  color: #004066;
  overflow-wrap: break-word;
  padding: 4px 8px;
  &:hover,
  &:active {
    &:not([disabled]) {
      background: #004066;
      color: white;
    }
  }
  ${(props) =>
    props.disabled &&
    `
      background: #efefef;
      border: 1px solid #aaaaaa;
      color: #aaaaaa;
    `}
`;

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Col = styled.div`
  flex-grow: 1;
  @media (max-width: 768px) {
    height: 33vh;
  }
`;

export { Control, Button, Row, Col, Input };
