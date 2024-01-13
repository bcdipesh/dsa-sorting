function bubbleSort(arr) {
  // Loop over all the elements of the array
  for (let i = 0; i < arr.length; i++) {
    // Flag to keep track of whether a swap took place
    let lastSwapped = false;
    // Loop only upto elements that are unsorted
    for (let j = 0; j < arr.length - i; j++) {
      // If current element is greater that the next element
      // Swap places
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        lastSwapped = true;
      }
    }
    // If there was no swap break the loop because
    // the array is sorted
    if (!lastSwapped) break;
  }

  return arr;
}

module.exports = bubbleSort;
