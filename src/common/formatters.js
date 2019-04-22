import { float as floatParser } from './parsers';

export const float = (input, decimalPlaces, dropTrailingZeroes = false) => {
  // We use our own parser since parseFloat does not handle `1,000` for instance
  const safeInput = typeof input === 'string' ? floatParser(input) : input;
  if (
    safeInput === undefined
        || safeInput === null
        || Number.isNaN(safeInput)
        || (`${input}`.indexOf('.') !== input.length - 1 && `${input}`.substr(-1) === '.')
  ) {
    return null;
  } if (`${input}`.substr(-1) === '.') {
    return input;
  }
  let decimalCount = decimalPlaces;
  if (Number.isNaN(parseInt(decimalPlaces, 10))) {
    const inputDecimals = input.toString().split('.')[1];
    decimalCount = inputDecimals ? inputDecimals.length : 0;
  }
  const toFormat = safeInput.toLocaleString('en-US', {
    minimumFractionDigits: decimalCount,
    maximumFractionDigits: decimalCount,
  });
  return dropTrailingZeroes ? parseFloat(toFormat.toString()).toString() : toFormat;
};

export const int = input => float(input, 0);

export const dollar = (input, decimals = 0) => (float(input) === null
  ? null
  : floatParser(input).toLocaleString('en-US', {
    currency: 'USD',
    style: 'currency',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }));
