const { sum } = require('../src/index');

test('addition 2 + 3 = 5', () => {
  expect(sum(2, 3)).toBe(5);
});
