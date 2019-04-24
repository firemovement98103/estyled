import React from 'react';
import { float } from '../../common/parsers';
import { float as formatFloat } from '../../common/formatters';
import { float as floatValidator } from '../../common/validators';
import PropTypes from './PropTypes';
import Base from './Base';

const NumberInput = ({ ...props }) => (
  <Base
    {...props}
    parser={float}
    validator={(parsed, raw) => !floatValidator(raw) && 'Invalid number'}
    validateOnChange
    formatter={formatFloat}
    inputMode="numeric"
    pattern="[0-9]*"
  />
);
NumberInput.propTypes = {
  ...PropTypes,
};
export default NumberInput;
