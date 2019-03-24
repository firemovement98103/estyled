import styled from 'styled-components';

export default styled.div`
  ${({ theme, h }) => `
    font-size: ${theme.fontSize[h]};
    font-weight: ${theme.fontWeight.heavy};
    line-height: 1.4em;
  `}
`;
