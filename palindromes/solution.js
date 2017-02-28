function isWordAPalindrome(input) {
  var word = input.toLowerCase();
  for (var i=0; i < input.length; i++) {
	if (word[i] !== word[input.length-1-i]) {
		return false;
	}
	return true;
   }
}

console.log(isWordAPalindrome("Hannah"));
console.log(isWordAPalindrome("racecar"));
console.log(isWordAPalindrome("Blarg"));

//alternate
function isWordAPalindrome(input) {
  return input === input.split('').reverse().join('');
}

