import {add, subtract, multiply, divide} from "../scripts/calculator";

// adds
test ('adds to 7', () => {
  let a = 2;
  let b = 5;
  expect(add(a, b)).toBe(7);
})

test ('adds to 10', () => {
  let a = 2;
  let b = 8;
  expect(add(a, b)).toBe(10);
})


// subtracts
test ('subtracts 7 from 21', () => {
  let a = 21;
  let b = 7;
  expect(subtract(a, b)).toBe(14);
})

test ('subtracts 50 from 210', () => {
  let a = 210;
  let b = 50;
  expect(subtract(a, b)).toBe(160);
})


// multiplies

test ('multiplies 7 with 21', () => {
  let a = 21;
  let b = 7;
  expect(multiply(a, b)).toBe(147);
})

test ('multiplies 3 with 4', () => {
  let a = 3;
  let b = 4;
  expect(multiply(a, b)).toBe(12);
})


// divides

test ('divides 7 into 21', () => {
  let a = 21;
  let b = 7;
  expect(divide(a, b)).toBe(3);
})

test ('divides 5 into 25', () => {
  let a = 25;
  let b = 5;
  expect(divide(a, b)).toBe(5);
})

test ('Does not divide by zero', () => {
  let a = 25;
  let b = 0;
  expect(divide(a, b)).toBe(NaN);
})

