import React from 'react';
import PropTypes from './PropTypes';
import Base from './Base';

const NumberInput = ({ ...props }) => (<Base {...props} parser={val => parseFloat(val.replace(/[,.]/, ''))} validator={val => /\D/.test(val) && 'Invalid number'} />);
NumberInput.propTypes = {
  ...PropTypes,
};
export default NumberInput;
