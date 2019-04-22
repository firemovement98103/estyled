const { float, int, dollar } = require('../formatters');

describe('formatters', () => {
  describe('float', () => {
    it('should round the decimals to the number of places in the second arg', () => {
      expect(float(1.234, 1)).toEqual('1.2');
    });
    it('should add commas in the appropriate spots', () => {
      expect(float(1000000.01)).toEqual('1,000,000.01');
    });
    it('should honor falsey number values', () => {
      expect(float('0.0')).toEqual('0.0'); // Cannot pass 0.0 as a number in the test, gets converted to 0
    });
    it('should round appropriately', () => {
      expect(float(0.04, 1)).toEqual('0.0');
      expect(float(0.05, 1)).toEqual('0.1');
    });
    it('should return null for undefined values', () => {
      expect(float()).toEqual(null);
    });
    it('should return null for invalid floating point numbers', () => {
      expect(float('Not a float')).toEqual(null);
    });
    it('should return null for an NaN input', () => {
      expect(float(NaN)).toEqual(null);
    });
    it('should return a validly formatted string if the string was already validly formatted', () => {
      expect(float('1,234,567.00')).toEqual('1,234,567.00');
    });
    it('should return the original number of decimal places if the second arg is not provided', () => {
      expect(float('2000.0400')).toEqual('2,000.0400');
    });
    it('should drop trailing 0s if the third argument provided is truthy', () => {
      expect(float('2.000', undefined, true)).toEqual('2');
    });
    it('should add 0s if an integer is passed in and the fixed decimals is greater than 0', () => {
      expect(float(2, 2)).toEqual('2.00');
    });
    it('should be able to handle non formatted number strings', () => {
      expect(float('1000')).toEqual('1,000');
    });
    it('should add a leading zero to decimals', () => {
      expect(float('.77')).toEqual('0.77');
    });
    it('should return the original input in the event of it ending in a period', () => {
      expect(float('12.')).toEqual('12.');
    });
    it('should return null when there are multiple periods, as it would make it an invalid number', () => {
      expect(float('12.1.')).toEqual(null);
    });
    it('should return null when the float is completely invalid', () => {
      expect(float('12.1.11')).toEqual(null);
    });
    it('should drop any excess decimal points', () => {
      expect(float('20.49994482597021', 2, true)).toEqual('20.5');
    });
  });
  describe('int', () => {
    it('should have no decimals', () => {
      expect(int('1000.00')).toEqual('1,000');
    });
    it('should format integers', () => {
      expect(int(1000)).toEqual('1,000');
    });
    it('should format integer strings', () => {
      expect(int('1000')).toEqual('1,000');
    });
    it('should format an already formatted int', () => {
      expect(int('1,000')).toEqual('1,000');
    });
    it('should format numbers with an invalid placement of commas (user edits a string manually)', () => {
      expect(int('10,00')).toEqual('1,000');
    });
  });
  describe('dollars', () => {
    it('should handle negative numbers', () => {
      expect(dollar(-1000)).toEqual('-$1,000');
    });
    it('should round decimals', () => {
      expect(dollar(10.583, 2)).toEqual('$10.58');
    });
    it('should drop decimals by default', () => {
      expect(dollar(10.583)).toEqual('$11');
    });
    it('should only produce 1 decimal if the second arg is 1', () => {
      expect(dollar(10.583, 1)).toEqual('$10.6');
    });
    it('should return null if the float is non-parseable', () => {
      expect(dollar('I am not a number, I am a human being')).toEqual(null);
    });
  });
});
