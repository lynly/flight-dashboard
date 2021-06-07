import styled from "styled-components";

const Empty = styled.div`
  font-weight: 300;
  font-style: italic;
  color: #2e5299;
    padding: 0.75rem;
  svg,
  span {
    padding-left: 0.625rem;
  }
  @media (min-width: 48rem) {
    padding: 3.125rem;
  }
`;

export { Empty };
