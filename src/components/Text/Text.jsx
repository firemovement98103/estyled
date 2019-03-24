import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { theme as _theme } from '../ThemeProvider/ThemeProvider';

export const body = css`
  ${({
    theme, fontWeight, fontSize, color,
  }) => `
    font-family: "Open Sans", sans-serif;
    font-size: ${theme.fontSize[fontSize || 'md']};
    font-weight: ${theme.fontWeight[fontWeight || 'medium']};
    color: ${theme.colors[color || 'text']};
  `}
`;
const Text = styled.span`
  ${body}
`;
Text.propTypes = {
  fontWeight: PropTypes.oneOf(Object.keys(_theme.fontWeight)),
  fontSize: PropTypes.oneOf(Object.keys(_theme.fontSize)),
  color: PropTypes.oneOf(Object.keys(_theme.colors)),
};
Text.defaultProps = {
  fontWeight: 'medium',
  fontSize: 'md',
  color: 'text',
};
export default Text;
