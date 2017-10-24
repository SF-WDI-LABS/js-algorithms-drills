var Stack = require('./stack');

function parenthesisBattle(parensArr){
  var stack = new Stack();
  
}

sampleRuns = [
    { input: ["(", ")"], expected: 'tie' },
    { input: [")", "("], expected: ')' },
    { input: ["(", "(", ")"], expected:  '(' },
    { input: ["(", ")", ")"], expected: ')' }
];

sampleRuns.forEach(function(run){
  console.log('Battle! ', run.input);
  var actual = battleForCode(run.input);
  console.log('  expected:', run.expected);
  console.log('  actual:', actual);
  if (actual === run.expected){
    console.log('  Yay!');
  } else {
    console.log('  not working yet');
  }
});
