// https://www.codewars.com/kata/scramblies/train/javascript

// this wasn't performant enough to survive being timed out by codewars.
function scrambleWithoutMap(str1, str2) {
  const scrambleArray = str1.split('')
  for (let letter of str2) {
    let foundIndex = scrambleArray.findIndex( x => {
      return letter === x
    } )

    if (foundIndex === -1) {
      return false
    }

    scrambleArray.splice(foundIndex, 1)
  }

  return true
}

function scramble(str1, str2) {
  const letterCounts = {}
  for (let letter of str1) {
    if (letterCounts[letter]) {
      letterCounts[letter] += 1
    } else {
      letterCounts[letter] = 1
    }
  }

  //console.log(letterCounts)

  for (let letter of str2) {
    if (letterCounts[letter] && letterCounts[letter] > 0) {
      letterCounts[letter] -= 1
    } else {
      return false
    }
  }
  return true
}

const scramblie = 'scriptjava'
const answer = 'javascript'
console.log(scramble(scramblie, answer))

const wrongScram = 'apple'
const cannot = 'orange'
console.log(scramble(wrongScram, cannot))
