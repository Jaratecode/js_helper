expor function rot13(message){
  const alphaLower = [...'abcdefghijklmnopqrstuvwxyz'];
  const alphaUpper = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

  const arr = [...message];

  return arr.reduce( (acc, letter) => {
    if (letter != ' ' && letter.match(/[a-zA-Z]/i)) {
      let capitalize = alphaLower.some( lower => letter == lower) ? alphaLower : alphaUpper
      let letterIndex = capitalize.indexOf(letter) + 13

      let rotIndex = letterIndex < alphaLower.length ? letterIndex : letterIndex - alphaLower.length
      
      acc += capitalize[rotIndex];

    } else {
      acc += letter
    }
    return acc;
  }, '')
}