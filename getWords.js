this.addEventListener('message', (msg) => {
  const {leadChar, allChars} = msg.data
  console.log(leadChar, allChars)

  const leadCharIndex = allChars.indexOf(leadChar)
  this.postMessage(getAllCombination(allChars.slice(0, leadCharIndex).concat(allChars.slice(leadCharIndex + 1))).map((subs) => [leadChar].concat(subs)))
})

function getAllCombination (arr) {
  let results = []

  arr.forEach((char, i) => {
    let subCombinations = getAllCombination(arr.slice(0, i).concat(arr.slice(i + 1)))
    if (subCombinations.length) {
      results = results.concat(subCombinations.map((subs) => [char].concat(subs)))
    }
    else {
      results = [char]
    }
  })

  return results
}

