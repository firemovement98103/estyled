import styled from 'styled-components';
import { body as bodyText } from '../Text/Text';

export default styled.a`
  ${bodyText}
  text-decoration: none;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
  ${({ theme, body }) => `
    &, :visited {
      color: ${theme.colors.text};
    }
    ${body ? `&&& { color: ${theme.colors.primary}; }` : ''}
    :hover {
      color: ${theme.colors.primary};
    }
  `}
`;
