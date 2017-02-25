function maxContigSubarray(arr) {
    var maxSum = -10000;
    var currentSum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            continue;
        }
        currentSum = currentSum+arr[i];
        maxSum = Math.max(currentSum, maxSum);
        if (currentSum < 0) {
            currentSum = 0;
        }
    }
    return maxSum;
}

testArr1 = [4,7,-1,-12,7];
testArr2 = [0,8,0,2,3];
testArr3 = [-1,5,66,7,-8,-22,4];
testArr4 = [-2,-3,4,-1,-5,6];

console.log(maxContigSubarray(testArr1));
console.log(maxContigSubarray(testArr2));
console.log(maxContigSubarray(testArr3));
console.log(maxContigSubarray(testArr4));
