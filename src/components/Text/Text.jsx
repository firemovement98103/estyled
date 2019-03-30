import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { theme as _theme } from '../ThemeProvider/ThemeProvider';

export const baseBodyTextSansColor = css`
  font-family: "Open Sans", sans-serif;
  ${({ theme }) => `
    font-size: ${theme.fontSize.md};
    font-weight: ${theme.fontWeight.medium};  
  `}
`;
export const baseBodyText = css`
  ${baseBodyTextSansColor}
  ${({ theme }) => `
    color: ${theme.colors.text};
  `}
`;
export const body = css`
  font-family: "Open Sans", sans-serif;
  line-height: 1.4em;
  ${({
    theme, fontWeight, fontSize, color,
  }) => `
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
