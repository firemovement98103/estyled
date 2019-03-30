import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Label from '../Label/Label';
import Checkbox from './Checkbox';

const StyledLabeledCheckbox = styled.div`
  display: flex;
  ${({ theme }) => `
    ${Checkbox.styled} {
      margin-right: ${theme.spacing.xs()};
    }
  `}
`;

const LabeledCheckbox = ({
  id, className, children, ...props
}) => (
  <StyledLabeledCheckbox className={className}>
    <Checkbox id={id} {...props} />
    <Label htmlFor={id}>{children}</Label>
  </StyledLabeledCheckbox>
);
LabeledCheckbox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
};
LabeledCheckbox.defaultProps = {
  className: null,
  children: null,
};

export default LabeledCheckbox;
