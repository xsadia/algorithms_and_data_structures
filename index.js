//frequency counter pattern
function anagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let acc = {};

  for (let char of str1) {
    if (!acc[char]) {
      acc[char] = 1;
    } else {
      acc[char]++;
    }
  }

  for (let char of str2) {
    if (!acc[char]) return false;
    acc[char]--;
  }

  return true;
}

//pointers pattern
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
  if (array.length === 0) return 0;

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
console.log(countUniqueValues([1, 1, 2, 2, 3, 3, 4, 5, 6, 6, 7]));
console.log(countUniqueValues([]));
