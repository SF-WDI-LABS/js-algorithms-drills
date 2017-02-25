function maxContigSubarray(arr) {
  var currentMax = 0;
  var max = 0;
  for (var i = 0; i < arr.length; i += 1) {
    currentMax = Math.max(0, currentMax + arr[i]);
    max = Math.max(max, currentMax);
  }
  return max;
}

testArr1 = [4,7,-1,-12,7];
testArr2 = [0,8,0,2,3];
testArr3 = [-1,5,66,7,-8,-22,4];
testArr4 = [-2,-3,4,1,-1,-5,4];

console.log(maxContigSubarray(testArr1));
console.log(maxContigSubarray(testArr2));
console.log(maxContigSubarray(testArr3));
console.log(maxContigSubarray(testArr4));
