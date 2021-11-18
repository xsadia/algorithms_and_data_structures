function sumZero(array) {
  let high = array.length - 1;
  let low = 0;
  if (-array[low] === array[high]) return [array[low], array[high]];

  while (low < high) {
    let sum = array[low] + array[high];

    if (sum === 0) {
      return [array[low], array[high]];
    } else if (sum > 0) {
      high--;
    } else {
      low++;
    }
  }

  return undefined;
}

function countUniqueValues(array) {
  let left = 0;
  let right = 1;

  while (right < array.length) {
    if (array[left] !== array[right]) {
      left++;
      array[left] = array[right];
      right++;
    } else {
      right++;
    }
  }

  return left + 1;
}

console.log(countUniqueValues([1, 1, 1, 2, 3, 3, 4, 4, 5, 6]));
//0, 0, 0, 1, 2, 2, 3, 3, 4, 5
console.log(countUniqueValues([1, 1, 1, 2, 3, 3, 3, 3, 3, 3]));
