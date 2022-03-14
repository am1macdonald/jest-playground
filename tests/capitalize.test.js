import capitalize from '../scripts/capitalize.js'

test('capitalizes a letter', () => {
  let str = 'a';
  expect(capitalize(str)).toBe('A');
})

test('capitalizes a string > 1', () => {
  let str = 'almond';
  expect(capitalize(str)).toBe('Almond');
})

test('capitalizes a sentence', () => {
  let str = 'a black dog walks down the road';
  expect(capitalize(str)).toBe('A black dog walks down the road');
})

