const { float, int } = require('../validators');

describe('float', () => {
  it('should not accept trailing letters', () => {
    expect(float('1234abcd')).toEqual(false);
  });
  it('should not accept non-digit characters', () => {
    expect(float('abcd')).toEqual(false);
  });
  it('should accept thousands denotation (comma)', () => {
    expect(float('1,234')).toEqual(true);
  });
  it('should accept decimal denotation (period)', () => {
    expect(float('123.52')).toEqual(true);
  });
  it('should accept invalid character combinations that can be correctly parsed (like a misplaced comma)', () => {
    expect(float('1,2345')).toEqual(true);
  });
});

describe('int', () => {
  it('should not accept trailing letters', () => {
    expect(int('1234abcd')).toEqual(false);
  });
  it('should not accept non-digit characters', () => {
    expect(int('abcd')).toEqual(false);
  });
  it('should accept thousands denotation (comma)', () => {
    expect(int('1,234')).toEqual(true);
  });
  it('should not accept decimal denotation (period)', () => {
    expect(int('123.52')).toEqual(false);
  });
  it('should accept invalid character combinations that can be correctly parsed (like a misplaced comma)', () => {
    expect(int('1,2345')).toEqual(true);
  });
});
