import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { baseBodyText } from '../Text/Text';
import CaretDown from '../../icons/caret-down.svg';

const StyledCaretDown = styled(CaretDown)`
  position: absolute;
  height: 100%;
  right: 0;
  z-index: -1;
  ${({ theme }) => `
    padding-left: ${theme.spacing.xs()};
    border-left: 1px solid ${theme.colors.borderLight};
    margin-right: ${theme.spacing.xs()};
    fill: ${theme.colors.primary};
  `}
`;
const StyledSelectWrapper = styled.div`
  border-radius: 2px;
  position: relative;
  ${({ theme }) => `
    border: 1px solid ${theme.colors.borderLight};
    &:active, &:focus, &:focus-within {
      border-color: ${theme.colors.primary};
      ${StyledCaretDown} {
        border-left-color: ${theme.colors.primary};
      }
    }
  `}
`;
const StyledSelect = styled.select`
  -webkit-appearance: none;
  -ms-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  border: none;
  background-color: transparent;
  &:focus, &:active {
    outline: none;
  }
  ${baseBodyText}
  ${({ theme }) => `
    padding: ${theme.spacing.xs()};
    padding-right: calc(${theme.spacing.sm()} + 1em);
  `}
`;
const Select = ({ options, className, ...props }) => (
  <StyledSelectWrapper className={className}>
    <StyledSelect {...props}>
      {options.map(({ value, label }) => <option value={value} key={value}>{label}</option>)}
    </StyledSelect>
    <StyledCaretDown />
  </StyledSelectWrapper>
);
Select.StyledSelect = StyledSelectWrapper;
Select.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  })),
};
Select.defaultProps = {
  className: null,
  options: [],
};

export default Select;
