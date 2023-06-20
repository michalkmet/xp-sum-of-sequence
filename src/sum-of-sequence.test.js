const sequenceSum = require('./sum-of-sequence');

describe('Sum of a sequence', () => {
  it('should return 0 given begin greater than end', () => {
    expect(sequenceSum(10,1,2)).toBe(0);
  });
  it('given end is not result, dont add it to the sum', () => {
    expect(sequenceSum(1,5,3)).toBe(5);
  });
  it('given 2,2,2 should be 2', () => {
    expect(sequenceSum(2,2,2)).toBe(2);
  });
  it('given 2,6,2 should be 12', () => {
    expect(sequenceSum(2,6,2)).toBe(12);
  });

});
