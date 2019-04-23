import React from 'react';
import PropTypes from './PropTypes';
import WholeNumberInput from './WholeNumber';

const WholeDollar = ({ ...props }) => (<WholeNumberInput {...props} left="$" />);
WholeDollar.propTypes = {
  ...PropTypes,
};
export default WholeDollar;
