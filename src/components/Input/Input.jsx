import styled from 'styled-components';

export default styled.input`
  border-radius: 4px;
  ${({ theme, error }) => `
    border: 1px solid ${theme.colors[error ? 'error' : 'borderLight']};
    color: ${theme.colors[error ? 'error' : 'text']};
    padding: ${theme.spacing.xs()};
    :focus {
      outline: 1px ${theme.colors[error ? 'error' : 'primary']} solid;
    }
  `}
`;
