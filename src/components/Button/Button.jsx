import styled from 'styled-components';

export default styled.button`
  ${({ theme, fluid, primary }) => `
    background-color: ${theme.colors[primary ? 'primary' : 'white']};
    color: ${theme.colors[primary ? 'primaryInverse' : 'primary']};
    border: 1px solid ${theme.colors.primary};
    padding: ${theme.spacing.xs()} ${theme.spacing.md()} ${theme.spacing.xs()} ${theme.spacing.md()};
    border-radius: ${theme.spacing.size(1, '') / 2}px;
    ${fluid ? 'width: 100%' : ''};
    font-size: ${theme.fontSize.md};
    :hover {
      cursor: pointer;
      color: ${theme.colors.primary};
      background-color: ${theme.colors[primary ? 'white' : 'primaryInverse']};
    }
    :focus {
        outline: none;
        border-color: ${theme.colors.primaryInverse}
    }
  `};
`;
