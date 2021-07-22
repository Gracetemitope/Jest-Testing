const length = require('./stringLenght');

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('length', () => {
  expect(length("Grace")).toBe(5);
});

// test('string length', () => {
//   expect(length("Grace").toBe(5);
// });
