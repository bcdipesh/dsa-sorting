function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  const mergedArr = [];

  /**
   * loop until i or j reaches the end of
   * arr1 or arr2 respectively
   */
  while (i < arr1.length && j < arr2.length) {
    /**
     * compare elements on both array and
     * push the smallest element to the mergedArr
     * finally increment the index of the swapped array
     */
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i += 1;
    } else {
      mergedArr.push(arr2[j]);
      j += 1;
    }
  }

  // check and push the remaining elements from arr1 or arr2
  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i += 1;
  }

  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j += 1;
  }

  return mergedArr;
}

function mergeSort(arr) {
  // if array has only 1 or 0 element return the array
  if (arr.length <= 1) return arr;

  /**
   * get the midIndex, and divide the array
   * into left and right, then recursively call
   * mergeSort with left and right
   */
  const MID_INDEX = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, MID_INDEX));
  const right = mergeSort(arr.slice(MID_INDEX));

  return merge(left, right);
}

module.exports = { merge, mergeSort };
