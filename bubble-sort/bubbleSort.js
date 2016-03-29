function bubbleSort(array) {
  var end = array.length - 1;
  // create a swapped switch (true/false)
  var swapped = true;
  // while our switch is 'true'
  while(swapped){
    //console.log(array);
    // flip the swapped switch to false
    swapped = false;
    for(var i = 0; i < end; ++i) {
      // If an element is greater than its neighbor
      if (array[i] > array[i+1]) {
        // swap the element and its neighbor
        var temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        // flip the switch to true
        swapped = true;
      }
    }
    end--;
  }
};
