const reverso = (str) => {
  let temp = []
  str.split('').forEach(letter => {
    temp.unshift(letter);
  })
  return temp.join('');
}

export default reverso