import React from 'react';
import { float } from '../../common/parsers';
import { float as formatFloat } from '../../common/formatters';
import PropTypes from './PropTypes';
import Base from './Base';

const NumberInput = ({ ...props }) => (<Base {...props} parser={float} validator={val => !float(val) && 'Invalid number'} formatter={formatFloat} />);
NumberInput.propTypes = {
  ...PropTypes,
};
export default NumberInput;
