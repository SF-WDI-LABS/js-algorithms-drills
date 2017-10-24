var Queue = require('./queue');
var seedData = [
  { name: 'banana',  price: .29 },
  { name: 'smoothie', price: 4.00 },
  { name: 'car', price: 10000 }
];

function calculateTotal(itemQueue){
  var total = 0;
  var count = 1;
  var firstItem = itemQueue.dequeue();
  while (firstItem !== undefined){
    if (count % 15 === 0){
      total += firstItem.price * 0.7;
    } else if (count % 5 === 0){
      total += firstItem.price * 0.8;
    } else if (count % 3 === 0){
      total += firstItem.price * 0.9;
    } else {
      total += firstItem.price;
    }
    count++;
    firstItem = itemQueue.dequeue();
  }
  return total;
}

var myQueue = new Queue(seedData);
console.log('Calculating total for\n', myQueue);
console.log('Total is', calculateTotal(myQueue));
