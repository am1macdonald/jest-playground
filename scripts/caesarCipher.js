const cypher = (str, key) => {
  let temp = [];

  str.split('').forEach(letter => {
      let num = letter.charCodeAt(0)

      if (num === 32) {
        temp.push(num)
      } else if (num >= 97 && num <= 122) {
        if (num + key > 122) {
          temp.push(num + key - 26)
        } else if (num + key < 97) {
          temp.push(num + key + 26)
        } else {
          temp.push(num + key)
        }
      } else if (num >= 65 && num <= 90) {
        if (num + key > 90) {
          temp.push(num + key - 26)
        } else if (num + key < 65) {
          temp.push(num + key + 26)
        } else {
          temp.push(num + key)
        }
      } else { temp.push(num) }
    }


  )
  return String.fromCharCode(...temp);
}



export default cypher