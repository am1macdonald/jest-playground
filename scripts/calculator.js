
  const add = (a, b) => {
    return a + b;
  }
  
  const subtract = (a, b) => {
    return a - b;
  }
  
  const multiply = (a, b) => {
    return a * b;
  }
  
  const divide = (a, b) => {
    return b === 0 ? NaN : a /b ;
  }


export {add, subtract, multiply, divide}