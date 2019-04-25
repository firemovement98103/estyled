import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Label from '../Label/Label';

const Option = styled.div`
  display: flex;
  align-items: center;
`;
const OptionsWrapper = styled.div`
    display: flex;
    ${({ theme, horizontal }) => `
      flex-direction: ${horizontal ? 'row' : 'column'};
      ${Label} {
          margin-left: ${theme.spacing.xs()};
      }
      ${horizontal ? `
        ${Option} + ${Option} {
          margin-left: ${theme.spacing.md()};
        }
      ` : ''}
    `}
`;
const RadioList = ({
  options, id, value, onChange, horizontal,
}) => (
  <OptionsWrapper horizontal={horizontal}>
    {options.map(({ value: optionValue, label, ...rest }) => (
      <Option key={optionValue}>
        <input {...rest} value={optionValue} type="radio" id={optionValue} name={id} checked={optionValue === value} onChange={() => onChange(optionValue)} />
        <Label htmlFor={optionValue}>{label}</Label>
      </Option>
    ))}
  </OptionsWrapper>
);
RadioList.propTypes = {
  horizontal: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]).isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
RadioList.defaultProps = {
  horizontal: false,
  value: null,
};

export default RadioList;
