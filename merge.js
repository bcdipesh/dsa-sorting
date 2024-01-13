function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let mergedArr = [];

  // Loop until i or j reaches the end of
  // arr1 or arr2 respectively
  while (i < arr1.length && j < arr2.length) {
    // Compare elements on both array
    // Push the smallest element to the mergedArr
    // Increment the index of the swapped array
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }

  // Check and push the remaining elements
  // from arr1 or arr2
  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }

  return mergedArr;
}

function mergeSort(arr) {
  // If array has only 1 or 0 element return the array
  if (arr.length <= 1) return arr;

  // Get the midIndex, and divide the array
  // into left and right, then recursively call
  // mergeSort with left and right
  const MID_INDEX = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, MID_INDEX));
  const right = mergeSort(arr.slice(MID_INDEX));

  return merge(left, right);
}

module.exports = { merge, mergeSort };
