function binarySearch( searchArray, target ){
  //we will use this function recursively
  function search(min, max) {
    // If the min index is greater than the max index, not found
    if (min > max) {
      return -1;
    }
    // If the value at the min index === target, return min
    if (searchArray[min] === target){
      return min;
    }

    // If the value at the max index === target, return max
    if (searchArray[max] === target){
      return max;
    }

    // Find the mid index and value at mid.
    var mid = Math.floor( ( min + max ) / 2 );
    var middle = searchArray[mid];

    //recurse based on comparison
    if (middle < target) {
      return search(mid, max-1);
    } else if (middle > target) {
      return search(min+1, middle);
    }

    // If middle === target, return that index
    return mid;
  }

  //start between min and max of entire array
  return search(0, searchArray.length-1);
}
