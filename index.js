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

//sliding window pattern
function maxSubArraySum(array, num) {
  let max = 0;
  let temp = 0;

  if (array.length < num) return null;

  for (let i = 0; i < num; i++) {
    max += array[i];
  }
  temp = max;

  for (let i = num; i < array.length; i++) {
    temp = temp - array[i - num] + array[i];
    if (temp > max) {
      max = temp;
    }
  }

  return max;
}

console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

//divide and conquer
function search(array, num) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (currentElement < num) {
      min = middle + 1;
    } else if (currentElement > num) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

console.log(search([1, 2, 3, 20, 100, 400, 700, 800, 2020, 11000], 2020));
