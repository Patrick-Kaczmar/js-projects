const sum = require('./sum')

test.only('adds 1 + 2 - 1 / 2 to equal 1', () => {
    expect(sum(1, 2, 1, 2)).toBe(1)
})

test.only('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });