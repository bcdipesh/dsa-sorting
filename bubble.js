function bubbleSort(arr) {
  // loop over all the elements of the array
  for (let i = 0; i < arr.length; i += 1) {
    // flag to keep track of whether a swap took place
    let lastSwapped = false;

    // loop only upto elements that are unsorted
    for (let j = 0; j < arr.length - i; j += 1) {
      // if current element is greater that the next element, swap places
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        lastSwapped = true;
      }
    }

    // if there was no swap break the loop because the array is sorted
    if (!lastSwapped) break;
  }

  return arr;
}

module.exports = bubbleSort;
