import React from 'react';
import PropTypes from './PropTypes';
import NumberInput from './Number';

const Dollar = ({ ...props }) => (<NumberInput {...props} left="$" />);
Dollar.propTypes = {
  ...PropTypes,
};
export default Dollar;
