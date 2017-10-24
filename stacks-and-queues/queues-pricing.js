var Queue = require('./queue');
var seedData = [
  { name: 'banana',  price: .29 },
  { name: 'smoothie', price: 4.00 },
  { name: 'car', price: 10000 }
];

function calculateTotal(itemQueue){

}

var myQueue = new Queue(seedData);
console.log('Calculating total for\n', myQueue);
console.log('Total is', calculateTotal(myQueue));
