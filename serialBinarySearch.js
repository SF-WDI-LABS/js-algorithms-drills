function binarySearch(searchArray, searchElement) {
  var min = 0;
  var max = searchArray.length - 1;
  var mid;
  var currentElement;

  while (min <= max) {
    mid = (min + max) / 2 | 0;
    currentElement = searchArray[mid];

    if (currentElement < searchElement) {
        min = mid + 1;
    }
    else if (currentElement > searchElement) {
        max = mid - 1;
    }
    else {
        return mid;
    }
  }

  return -1;
}
