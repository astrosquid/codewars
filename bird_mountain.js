const printMountainData = mountain => {
  for (let line of mountain) {
    console.log(line.join(''))
  }
}

const hasPeaks = mountain => {
  for (let line of mountain) {
    if (line.includes('^')) {
      return true
    }
  }
  return false
}

const isSurroundedByPeaks = (mountain, line, i) => {
  if (mountain[line - 1][i] !== '^' || mountain[line + 1][i] !== '^') {
    return false
  }
  
  if (mountain[line][i - 1] !== '^' || mountain[line][i + 1] !== '^') {
    return false
  }
  
  return true
}

var peakHeight = function(mountain) {
  console.log(mountain)
  let peakNumber = 0
  
  while (hasPeaks(mountain)) {
    const locations = []
    peakNumber += 1
  
    for (let line = 0; line < mountain.length; line++) {
      for (let i = 0; i < mountain[line].length; i++) {
        if (mountain[line][i] === '^') {
          if (i === 0 || i === mountain[line].length - 1) {
            locations.push([line, i])
            continue
          }
          
          if (line === 0 || line === mountain.length - 1) {
            locations.push([line, i])
            continue
          }
          
          if (!isSurroundedByPeaks(mountain, line, i)) {
            locations.push([line, i])
            continue
          }
        }
      }
    }
    
    for (let location of locations) {
      mountain[location[0]][location[1]] = peakNumber
    }
  }
  
  printMountainData(mountain)
  
  return peakNumber
}
