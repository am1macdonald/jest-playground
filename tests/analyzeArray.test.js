import analyze from "../scripts/analyzeArray.js";

test ('returns desired properties in object', () => {
  let arr = [1, 8, 3, 4, 2, 6];
  expect(analyze(arr)).toMatchObject({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  })
})