var moveZeros = function (arr) {
  const nonZeros = []
  let zeroCount = 0

  for (let element of arr) {
    if (element === 0) {
      zeroCount += 1
    } else {
      nonZeros.push(element)
    }
  }

  while (zeroCount > 0) {
    nonZeros.push(0)
    zeroCount -= 1
  }

  return nonZeros
}

const test = [1, 2, 0, 3, 4, 0, 0, 5] 
console.log("start:", test)
console.log('result', moveZeros(test))
