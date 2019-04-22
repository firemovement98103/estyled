import React, { useState } from 'react';
import PropTypes from './PropTypes';
import Input from '../Input/Input';

const Base = ({
  value,
  parser,
  onChange,
  validator,
  validateOnChange,
  validateOnBlur,
  onError,
  onBlur,
  formatter,
  formatOnChange,
  formatOnBlur,
  ...props
}) => {
  const [displayValue, setDisplayValue] = useState(formatter(value) || '');
  const parseAndPersistToState = (inputValue, validate, format, additional) => {
    const parsed = parser(inputValue);
    if (validate) {
      const errorReason = validator(parsed, inputValue);
      if (errorReason) {
        onError(errorReason, parsed, inputValue);
      }
    }
    if (format && validate && !validator(parsed, inputValue)) {
      const formatted = formatter(parsed);
      setDisplayValue(formatted);
    } else {
      setDisplayValue(inputValue);
    }
    additional(parsed, inputValue);
  };
  return (
    <Input
      {...props}
      value={displayValue}
      onChange={({ target: { value: inputValue } }) => {
        parseAndPersistToState(inputValue, validateOnChange, formatOnChange, onChange);
      }}
      onBlur={({ target: { value: inputValue } }) => {
        parseAndPersistToState(inputValue, validateOnBlur, formatOnBlur, onBlur);
      }}
    />
  );
};
Base.propTypes = {
  ...PropTypes,
};
Base.defaultProps = {
  value: '',
  parser: val => val,
  onChange: () => {},
  validateOnChange: false,
  validator: () => true,
  onError: () => {},
  validateOnBlur: true,
  onBlur: () => {},
  formatter: val => val,
  formatOnChange: false,
  formatOnBlur: true,
};

export default Base;
