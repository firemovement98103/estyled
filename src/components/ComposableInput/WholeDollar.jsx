import React from 'react';
import PropTypes from './PropTypes';
import WholeNumberInput from './WholeNumber';

const WholeDollar = ({ ...props }) => (<WholeNumberInput {...props} left="$" />);
WholeDollar.propTypes = {
  ...PropTypes,
};
WholeDollar.StyledInput = WholeNumberInput.StyledInput;
export default WholeDollar;
