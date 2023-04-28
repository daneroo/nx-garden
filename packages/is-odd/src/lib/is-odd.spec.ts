import { isOdd } from './is-odd';

describe('isOdd', () => {
  it('should work for an odd number', () => {
    expect(isOdd(23)).toEqual(true);
  });
  it('should work for an even number', () => {
    expect(isOdd(42)).toEqual(false);
  });
  // write a data driven test
  it.each([
    [0, false],
    [1, true],
    [2, false],
    [3, true],
  ])('should work for %i', (input, expected) => {
    expect(isOdd(input)).toEqual(expected);
  });
});
