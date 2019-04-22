export const float = (input) => {
  const safeInput = input === undefined || input === null ? '' : input;
  const parsed = parseFloat(safeInput.toString().replace(/,/g, ''));
  return Number.isNaN(parsed) || `${safeInput}`.indexOf('.') !== `${safeInput}`.lastIndexOf('.') ? null : parsed;
};

export const int = (input = '') => {
  const parsedAsFloat = float(input);
  return parsedAsFloat === null ? null : Math.round(parsedAsFloat);
};
