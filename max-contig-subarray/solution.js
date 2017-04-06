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


//Bonus solution


function maxContigSubarray(arr) {
    //initializing two vars to keep track of max and current sum
    var currMax = 0;
    var max = 0;
    var wholeArraySum = 0;
    var biggestNum = arr[0];
    for(var i =0; i < arr.length; i+=1) {
        //track sum for all of array
        wholeArraySum += arr[i];
        if(biggestNum < arr[i]) {
            biggestNum = arr[i];
        }
        //recalculate current Max 
        currMax = Math.max(0, currMax + arr[i]);
        //compare to max and get biggest, reset max if currMax is bigger
        max = Math.max(max, currMax);
    }
    if(wholeArraySum < 0) {
        return biggestNum;
    } else {
       return max;
    }
}

testArr1 = [4,7,-1,-12,7];
testArr2 = [0,8,0,2,3];
testArr3 = [-1,5,66,7,-8,-22,4];
testArr4 = [-2,-3,4,1,-1,-5,4];
testArr5 = [-6,-7,-2,-1,-5];

console.log(maxContigSubarray(testArr1));
console.log(maxContigSubarray(testArr2));
console.log(maxContigSubarray(testArr3));
console.log(maxContigSubarray(testArr4));
console.log(maxContigSubarray(testArr5));
