import styled, { css } from "styled-components";

export const Input = styled.input.attrs(props => ({
    'aria-describedby': `${props.id}-error ${props.id}-helper` // needed when referencing this in another component for spacing
}))`
    width: 100%;
    font-size: 1rem;
    background-color: #ffffff;
    border: 2px solid #646974;
    border-radius: 6px;
    padding: 0rem 0.8125rem;
    height: 3rem;
    cursor: text;
    appearance: none;

    &::placeholder {
        color: #646974;
        opacity: 1;
    }
    &.focus-visible,
    &:focus {
        outline: 2px solid #2e5299;
        outline-offset: 2px;
    }
    &:disabled {
        opacity: 1;
        background-color: #f4f7f9;
    }

    ${props => props.hasError && css`
        border-color: #b81237;
    `}

    @media (min-width: 48rem) {
        min-width: 12.5rem;
        margin-top: 0;
    }
`;

Input.Label = styled.label`
  display: block;
  color: #242934;
  font-weight: 500;
`;

Input.Error = styled.span`
    display: block;
    color: #b81237;
    margin-top: 0.5rem;
    padding-left: 1.75rem;
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle fill='%23c60c30' cx='8' cy='8' r='8'/%3E%3Cpath fill='%23fff' d='M4.994 4L4 4.994 7.006 8 4 11.006l.994.994L8 8.994 11.006 12l.994-.994L8.994 8 12 4.994 11.006 4 8 7.006z'/%3E%3C/svg%3E") no-repeat 0 4px;
`;

Input.Help = styled.span`
    font-size: 0.875rem;
    line-height: 1.4rem;
    color: #646974;
    margin: 0;
    display: block;
`;

export default Input;