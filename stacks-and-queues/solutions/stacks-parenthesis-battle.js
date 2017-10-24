var Stack = require('./stack');

function parenthesisBattle(parensArr){
  var stack = new Stack();

  for (var i = 0; i < parensArr.length; i++){
    // push "("s into stack to wait for matches
    if (parensArr[i] === '('){
      stack.push(parensArr[i]);
    }
    // if a ")" is found
    else if (parensArr[i] === ')'){
      // if it has a match waiting in the stack, pop the match out
      if (stack.length() > 0){
        stack.pop();
      }
      // otherwise, we've found a ")" who will never get a hug :(
      else {
        console.log('  unmatched ")"   :(');
        return ')'
      }
    }
  }

  // finished the for loop – there are no unmatched ")"s
  // check if there are spare "("s waiting in the stack for a hug
  if (stack.length() > 0){
    console.log('  unmatched "("    :(');
    return('(');
  }

  // if we didn't find any unmatched parentheses, it was a tie!
  return 'tie';
}

sampleRuns = [
    { input: ["(", ")"], expected: 'tie' },
    { input: [")", "("], expected: ')' },
    { input: ["(", "(", ")"], expected:  '(' },
    { input: ["(", ")", ")"], expected: ')' }
];

sampleRuns.forEach(function(run){
  console.log('Battle! ', run.input);
  var actual = parenthesisBattle(run.input);
  console.log('  expected:', run.expected);
  console.log('  actual:', actual);
  if (actual === run.expected){
    console.log('  Yay!');
  } else {
    console.log('  not working yet');
  }
});
