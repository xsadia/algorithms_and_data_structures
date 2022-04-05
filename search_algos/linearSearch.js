function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }

  return -1;
}

function recursiveLinearSearch(arr, val, acc = 0) {
  if (arr.length < 1) return -1;

  let [x, ...xs] = arr;

  if (x === val) return acc;

  return recursiveLinearSearch(xs, val, acc + 1);
}

module.exports = { linearSearch, recursiveLinearSearch };
