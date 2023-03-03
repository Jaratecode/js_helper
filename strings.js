
// ROT13 ("rotate by 13 places")
export function rot13(message){
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

// generates hashtag based on the input string
// maximul length 140 characters
export function generateHashtag(string) {

   if (string == '') {
    return false;
  }

  const words = string.split(' ').filter( word => word != '');
  const hashtag =  words.reduce( (acc, word) => acc += word.charAt(0).toUpperCase() + word.slice(1), '#')

  if (hashtag.length > 140 || hashtag == '#') {
    return false
  }

  return hashtag;

}

