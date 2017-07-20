function findLongestWordLength(str) {
  var wordsArr = str.split(' ');
  var wordLengths = wordsArr.map(function(word){
    return word.length;
  });

  return Math.max.apply(null, wordLengths);
}

function findLongestWord(str){
  var wordsArr = str.split(' ');
  var wordLengths = wordsArr.map(function(word){
    return word.length;
  });

  var longestWordLength = Math.max.apply(null, wordLengths);

  var index = wordLengths.indexOf(longestWordLength);
  console.log(wordsArr[index]);
  return wordsArr[index];
}
