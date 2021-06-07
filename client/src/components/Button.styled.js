import styled, { css } from "styled-components";
import PropTypes from 'prop-types';

const Button = styled.button`
  ${(props) => props.variant ? themeVariant[props.variant] : themeVariant['primary']};
    height: auto;
    width: 100%;
    padding: calc((54px - 4px - 1.5rem) / 2) 1.5rem;
    font-size: 1rem;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    border-radius: 8px;
    cursor: pointer;
    overflow-wrap: break-word;
    margin-top: 1.5rem;

    @media (min-width: 48rem) {
        width: auto;
        min-width: 12.5rem;
        margin-top: 0;
    }
    
    &.focus-visible,
    &:focus {
        outline: 2px solid #2e5299;
        outline-offset: 2px;
    }
`;

const primaryButtonStyle = css`
    color: #ffffff;
    background-color: #2e5299;
    border: 2px solid #2e5299;

    &:hover {
        color: #ffffff;
        background-color: #002664;
        border: 2px solid #002664;
    }

    &:active {
        color: #ffffff;
        background-color: #5975AD;
        border-color: transparent;
        opacity: 80%;
    }

    &:disabled {
        color: #646974;
        background-color: #dee3e5;
        border: 2px solid #dee3e5;
    }
`;

const secondaryButtonStyle = css`
    color: #2e5299;
    background-color: #f9fdff;
    border: 2px solid #2e5299;

    &:hover {
        color: #ffffff;
        background-color: #2e5299;
        border: 2px solid #2e5299;
    }

    &:active {
        color: #ffffff;
        background-color: #5975AD;
        border: 2px solid #2e5299;
        opacity: 80%;
    }

    &:disabled {
        color: #646974;
        background-color: #dee3e5;
        border: 2px solid #dee3e5;
    }
`;

const themeVariant = {
  primary: primaryButtonStyle,
  secondary: secondaryButtonStyle,
};

Button.propTypes = {
    children: PropTypes.node,
    variant: PropTypes.oneOf(['primary', 'secondary']),
};

export default Button;