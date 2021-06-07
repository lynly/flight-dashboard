import styled from "styled-components";

const HideOnMobile = styled.div`
    display: none;
    
    @media (min-width: 48rem) {
        display: inline-block;
    }
`;

export default HideOnMobile;