import styled from 'styled-components';
import { body } from '../Text/Text';

export default styled.label`
  ${body}
  ${({ theme }) => `
    font-weight: ${theme.fontWeight.heavy};
  `}
`;
