import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text/Text';
import Label from '../Label/Label';

const StyledFormField = styled.div`
  ${({ theme, error, required }) => `
    display: flex;
    flex-direction: column;
    ${required && `
      ${Label}:after {
        content: "*";
        color: ${theme.colors.error};
        margin-left: ${theme.spacing.xs()};
      }
    `}
    ${error ? `
      ${Label} {
        color: ${theme.colors.error};
      }
    ` : ''}
  `}
`;

const FormField = ({
  error, children, required, className,
}) => (
  <StyledFormField error={error} required={required} className={className}>
    {children}
    {error && <Text fontSize="sm" color="error">{error}</Text>}
  </StyledFormField>
);
FormField.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
};
FormField.defaultProps = {
  className: null,
  error: null,
  required: false,
};

export default FormField;
