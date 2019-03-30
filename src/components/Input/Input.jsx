import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { baseBodyTextSansColor } from '../Text/Text';

export const sharedInputCSS = css`
  border-radius: 4px;
  &::placeholder, & {
    ${baseBodyTextSansColor}
  }
  ${({ theme, error }) => `
    border: 1px solid ${theme.colors[error ? 'error' : 'borderLight']};
    &::placeholder, & { color: ${theme.colors[error ? 'error' : 'text']}; }
    padding: ${theme.spacing.xs()};
    :focus {
      outline: 1px ${theme.colors[error ? 'error' : 'primary']} solid;
    }
  `}
`;
const Input = styled.input`
    ${sharedInputCSS}
`;
Input.propTypes = {
  error: PropTypes.bool,
};
Input.defaultProps = {
  error: false,
};

export default Input;
