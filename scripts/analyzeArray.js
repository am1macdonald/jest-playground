const analyze = (arr) => {

  const average = (arr.reduce((prev, curr) => {
    return prev + curr;
  }, 0)) / arr.length;
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  const length = arr.length
  

  return {
    average: average,
    min: min,
    max: max,
    length: length
  }
}

export default analyze