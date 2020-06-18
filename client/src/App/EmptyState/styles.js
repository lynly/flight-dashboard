import styled from "styled-components";

const Empty = styled.div`
  font-weight: 300;
  font-style: italic;
  color: #003366;
  padding: 50px;
  svg,
  span {
    padding-left: 10px;
  }
  @media (max-width: 768px) {
    padding: 12px;
  }
`;

export { Empty };
