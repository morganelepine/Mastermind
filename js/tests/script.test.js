const script = require('../script.js');

describe('Combination', () => {
  it('should contain 4 colors', () => {
    expect(script.combination.length).toEqual(4);
  });
  it('should NOT contain twice the same color', () => {
    expect(script.combination[0]).not.toEqual(script.combination[1] || script.combination[2] || script.combination[3]);
    expect(script.combination[1]).not.toEqual(script.combination[0] || script.combination[2] || script.combination[3]);
    expect(script.combination[2]).not.toEqual(script.combination[0] || script.combination[1] || script.combination[3]);
    expect(script.combination[3]).not.toEqual(script.combination[0] || script.combination[1] || script.combination[2]);
  });
})