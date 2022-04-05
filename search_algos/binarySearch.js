function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === val) return mid;
    if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    mid = Math.floor((left + right) / 2);
  }

  return -1;
}

function binarySearchRecursive(arr, val, left = 0, right = arr.length - 1) {
  if (arr.length < 1) return -1;

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === val) return mid;

  if (arr[mid] < val) {
    return binarySearch(arr, val, mid + 1, right);
  }

  return binarySearch(arr, val, left, mid - 1);
}

module.exports = { binarySearch, binarySearchRecursive };
