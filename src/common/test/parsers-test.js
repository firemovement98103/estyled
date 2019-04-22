const { float, int } = require('../parsers');

describe('parsers', () => {
  describe('float', () => {
    it('should parse a float from a string', () => {
      expect(float('1.23')).toEqual(1.23);
    });
    it('should accept validly formatted strings, such as `1,000.00`', () => {
      expect(float('1,000.00')).toEqual(1000.0);
    });
    it('should not fail to parse a floating point number', () => {
      expect(float(1.23)).toEqual(1.23);
    });
    it('should return null in the event of being unable to parse the float', () => {
      expect(float('Not a float, dawg')).toEqual(null);
    });
    it('should be a null value if the input is undefined', () => {
      expect(float()).toEqual(null);
    });
    it('should parse 0.0 (ensuring falsey numbers get treated correctly', () => {
      expect(float(0.0)).toEqual(0.0);
    });
    it('should parse decimals without a leading zero', () => {
      // eslint-disable-next-line
      expect(float(0.77)).toEqual(0.77);
    });
    it('should return null when there are multiple periods in the value', () => {
      expect(float('0.77.77')).toEqual(null);
    });
  });
  describe('int', () => {
    it('should return the int for a string', () => {
      expect(int('1')).toEqual(1);
    });
    it('should return the int for a number passed in', () => {
      expect(int(5)).toEqual(5);
    });
    it('should return the int for a float passed in', () => {
      expect(int(2.4)).toEqual(2);
    });
    it('should return the int for a float string passed in', () => {
      expect(int('1.00')).toEqual(1);
    });
    it('should handle formatted strings (use of commas)', () => {
      expect(int('1,000')).toEqual(1000);
    });
    it('should handle formatted strings with decimals and return the int', () => {
      expect(int('1,000.00')).toEqual(1000);
    });
    it('should ignore a decimal point with no decimals', () => {
      expect(int('1000.')).toEqual(1000);
    });
    it('should properly round', () => {
      expect(int('3082.9722')).toEqual(3083);
    });
    it('should parse a falsy value of 0', () => {
      expect(int('0')).toEqual(0);
    });
  });
});
