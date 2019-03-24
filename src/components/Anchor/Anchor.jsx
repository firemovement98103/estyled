import styled from 'styled-components';
import { body } from '../Text/Text';

export default styled.a`
  ${body}
  text-decoration: none;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
  ${({ theme }) => `
    &, :visited {
      color: ${theme.colors.text};
    }
    :hover {
      color: ${theme.colors.primary};
    }
  `}
`;
