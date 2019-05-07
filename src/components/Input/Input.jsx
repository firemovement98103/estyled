import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { baseBodyTextSansColor } from '../Text/Text';

export const sharedInputCSS = css`
  &::placeholder, & {
    ${baseBodyTextSansColor}
  }
  ${({
    theme, error,
  }) => `
    color: ${theme.colors[error ? 'error' : 'text']};
    &::placeholder { color: ${theme.colors[error ? 'error' : 'borderLight']}; }
    padding: ${theme.spacing.xs()};
  `}
`;
const StyledSymbol = styled.label`
  ${({
    theme, error, left, right,
  }) => `
    color: ${theme.colors[error ? 'error' : 'borderLight']}
    ${left ? `padding-left: ${theme.spacing.xs()}` : ''}
    ${right ? `padding-right: ${theme.spacing.xs()}` : ''}
  `};
`;
const StyledInputContainer = styled.label`
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
    width: 100%;
    ${({ theme, error }) => `
      :focus-within {
        border: 1px solid ${theme.colors[error ? 'error' : 'primary']}
      }
      border: 1px solid ${theme.colors[error ? 'error' : 'borderLight']}
    `};
`;
const StyledInput = styled.input`
    ${sharedInputCSS}
    width: 100%;
    border: none;
    &:focus {
      outline: none;
    }
`;
const Input = ({
  error, left, right, id, className, ...props
}) => (
  <StyledInputContainer error={error} htmlFor={id} className={className}>
    {left && <StyledSymbol left htmlFor={id} error={error}>{left}</StyledSymbol>}
    <StyledInput id={id} error={error} {...props} hasLeft={!!left} hasRight={!!right} />
    {right && <StyledSymbol right htmlFor={id} error={error}>{right}</StyledSymbol>}
  </StyledInputContainer>
);
Input.InternalStyledInput = StyledInput;
Input.StyledInput = StyledInputContainer;
Input.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
  id: PropTypes.string.isRequired,
  left: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  right: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};
Input.defaultProps = {
  className: null,
  error: false,
  left: null,
  right: null,
};

export default Input;
