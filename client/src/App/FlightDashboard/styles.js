import styled from "styled-components";

const Dashboard = styled.div`
  background-color: white;
  
  @media (min-width: 48rem) {
    position: absolute;
    top: 50%;
    left: 50%;
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  } 
`;

export default Dashboard;
