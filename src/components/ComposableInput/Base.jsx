import React, { useState } from 'react';
import PropTypes from './PropTypes';
import Input from '../Input/Input';

const Base = ({
  value, parser, onChange, validator, validateOnChange, validateOnBlur, onError, onBlur, ...props
}) => {
  const [internalValue, setValue] = useState(value);
  const parseAndPersistToState = (inputValue, validate, additional) => {
    const parsed = parser(inputValue);
    setValue(inputValue);
    if (validate) {
      const errorReason = validator(parsed, inputValue);
      if (errorReason) {
        onError(errorReason, parsed, inputValue);
      }
    }
    additional(parsed, inputValue);
  };
  return (
    <Input
      {...props}
      value={internalValue}
      onChange={({ target: { value: inputValue } }) => {
        parseAndPersistToState(inputValue, validateOnChange, onChange);
      }}
      onBlur={({ target: { value: inputValue } }) => {
        parseAndPersistToState(inputValue, validateOnBlur, onBlur);
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
};

export default Base;
