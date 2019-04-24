import React from 'react';
import { float } from '../../common/parsers';
import { int as intFormat } from '../../common/formatters';
import { int as intValidator } from '../../common/validators';
import PropTypes from './PropTypes';
import Base from './Base';

const WholeNumberInput = ({ ...props }) => (<Base {...props} parser={float} validator={(parsed, raw) => !intValidator(raw) && 'Invalid number'} formatter={intFormat} />);
WholeNumberInput.propTypes = {
  ...PropTypes,
};
export default WholeNumberInput;
