import styled from "styled-components";

const Col = styled.div`
    padding-left: 0;
    padding-right: 0;
    
    @media (min-width: 48rem) {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        flex-basis: 0;
        flex-grow: 1;
    }
`;

export default Col;