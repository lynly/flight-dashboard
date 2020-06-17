import styled from "styled-components";

const Dashboard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
    height: 100vh;
  }
  background-color: white;
  padding: 12px;
`;

export { Dashboard };
