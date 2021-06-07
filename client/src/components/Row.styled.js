import styled, { css } from "styled-components";
import PropTypes from 'prop-types';

const Row = styled.div`
    margin-left: 0;
    margin-right: 0;

  @media (min-width: 48rem) {
    display: flex;
    margin-left: -0.75rem;
    margin-right: -0.75rem;
  }

  ${props => props.alignItems && css`
    align-items: ${props.alignItems};
  `}

  ${props => props.justifyContent && css`
    justify-content: ${props.justifyContent};
  `}
  
`;


Row.propTypes = {
  children: PropTypes.node,
  alignItems: PropTypes.oneOf(['stretch', 'flex-start', 'flex-end', 'center', 'baseline']),
  justifyContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
};

export default Row;