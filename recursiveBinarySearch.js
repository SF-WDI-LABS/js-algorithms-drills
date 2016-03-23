function binarySearchR(searchArray, searchElement, min, max) {
  if (max < min) { 
    return -1; 
  }

  var mid = Math.floor((min + max) / 2);

  if (searchArray[mid] > searchElement) {
    return binarySearchR(searchArray, searchElement, min, mid - 1);
  }

  if (searchArray[mid] < searchElement) {
    return binarySearchR(searchArray, searchElement, mid + 1, max);
  }
  return mid;
}
