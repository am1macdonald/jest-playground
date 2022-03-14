import reverso from '../scripts/reverso.js'

test ('returns a string', () => {
  let str = 'string';
  expect(reverso(str)).toMatch(/([A-Za-z])\w+/)
})

test ('returns the string backwards', () => {
  let str = 'string';

  expect(reverso(str)).toMatch(/gnirts/)
})


