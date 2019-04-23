import React from 'react';
import { float } from '../../common/parsers';
import { int as intFormat } from '../../common/formatters';
import PropTypes from './PropTypes';
import Base from './Base';

const WholeNumberInput = ({ ...props }) => (<Base {...props} parser={float} validator={val => !float(val) && 'Invalid number'} formatter={intFormat} />);
WholeNumberInput.propTypes = {
  ...PropTypes,
};
export default WholeNumberInput;
