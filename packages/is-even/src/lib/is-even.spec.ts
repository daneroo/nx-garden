import { isEven } from './is-even';

describe('isEven', () => {
  it('should work for an odd number', () => {
    expect(isEven(23)).toEqual(false);
  });
  it('should work for an even number', () => {
    expect(isEven(42)).toEqual(true);
  });
  // write a data driven test
  it.each([
    [0, true],
    [1, false],
    [2, true],
    [3, false],
  ])('should work for %i', (input, expected) => {
    expect(isEven(input)).toEqual(expected);
  });
});
