function findLongestWordLength(str) {
  let wordsArr = str.split(' ');
  let wordLengths = wordsArr.map(function(word){
    return word.length;
  });

  return Math.max.apply(null, wordLengths);
};

function findLongestWord(str){
  let wordsArr = str.split(' ');
  let wordLengths = wordsArr.map(function(word){
    return word.length;
  });

  let longestWordLength = Math.max.apply(null, wordLengths);

  let index = wordLengths.indexOf(longestWordLength);
  console.log(wordsArr[index]);
  return wordsArr[index];
};

function findLongestWords(str){
  let maxLength = findLongestWordLength(str);
  let wordsArr = str.split(' ');
  let wordsOfMaxLength = wordsArr.filter(function(word){
    return word.length === maxLength;
  })
  return wordsOfMaxLength
};
