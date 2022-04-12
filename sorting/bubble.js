function bubbleSort(arr) {
  let i = arr.length - 1;
  let swapped = false;
  while (i >= 0) {
    swapped = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
    i--;
  }

  return arr;
}

module.exports = {
  bubbleSort,
};
