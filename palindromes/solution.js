function isWordAPalindrome(input) {
	var isPalindrome = true;
  var word = input.toLowerCase();
	for (var i=1; i < word.length+1; i++) {
		if (word.substring(i-1, i) != word.substring(word.length-i, word.length+1-i)) {
				isPalindrome = false;
		}
		return isPalindrome;
	}
}

console.log(isWordAPalindrome("Hannah"));
console.log(isWordAPalindrome("racecar"));
console.log(isWordAPalindrome("Blarg"));
