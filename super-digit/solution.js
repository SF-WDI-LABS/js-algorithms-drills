function digitalRoot(num) {
  return num.toString().split('').length === 1 ? num : digitalRoot(sumAllDigits(num));
}


function sumAllDigits (num) {
 let arr = num.toString().split(‘’);
 let result = arr.reduce(function(acc, num) {
   return acc + parseInt(num);
 }, 0);
 return result;
}

//alternate helper function
// function sumAllDigits(num) {
//   let sum = 0;
//   let arr = num.toString().split('');
//   for(var i = 0; i < arr.length; i++) {
//     sum += parseInt(arr[i]);
//   }
//   return sum;
// }
