import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  display: none;
`;
const StyledLabel = styled.label`
  &:before {
    display: block;
  }
  ${({ theme, checked }) => `
    font-size: ${theme.fontSize.lg};
    &:before {
      content: "${checked ? '\\02611' : '\\02610'}";
      color: ${theme.colors.primary};
    }
  `}
`;
const Checkbox = ({ id, checked, onChange }) => (
  <>
    <StyledLabel htmlFor={id} checked={checked} />
    <Input id={id} type="checkbox" checked={checked} onChange={onChange} />
  </>
);
Checkbox.styled = StyledLabel;

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
Checkbox.defaultProps = {
  checked: false,
};

export default Checkbox;
