function sameFrequency(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  if (num1.length !== num2.length) return false;
  let acc = {};

  for (let i = 0; i < num1.length; i++) {
    if (acc[num1[i]]) {
      acc[num1[i]]++;
    } else {
      acc[num1[i]] = 1;
    }
  }

  for (let i = 0; i < num2.length; i++) {
    if (!acc[num2[i]]) {
      return false;
    }

    acc[num2[i]]--;
  }

  return true;
}

console.log("sameFrequency(182, 281)", sameFrequency(182, 281));
console.log("sameFrequency(34, 14)", sameFrequency(34, 14));
console.log("sameFrequency(3589578, 5879385)", sameFrequency(3589578, 5879385));
console.log();

function areThereDuplicatesFreq(...args) {
  if (args.length === 1) return false;

  let acc = {};

  for (let i = 0; i < args.length; i++) {
    if (acc[args[i]]) {
      return true;
    }

    acc[args[i]] = 1;
  }

  return false;
}

console.log("areThereDuplicatesFreq(1, 2, 3)", areThereDuplicatesFreq(1, 2, 3));
console.log("areThereDuplicatesFreq(1, 2, 2)", areThereDuplicatesFreq(1, 2, 2));
console.log(
  "areThereDuplicatesFreq(a, b, c, a)",
  areThereDuplicatesFreq("a", "b", "c", "a")
);
console.log();

function areThereDuplicatesPtr(...args) {
  if (args.length === 1) return false;

  args.sort();
  let left = 0;
  let right = 1;

  while (right < args.length) {
    if (args[left] === args[right]) {
      return true;
    }

    left++;
    right++;
  }

  return false;
}

console.log("areThereDuplicatesPtr(1, 2, 3)", areThereDuplicatesPtr(1, 2, 3));
console.log("areThereDuplicatesPtr(1, 2, 2)", areThereDuplicatesPtr(1, 2, 2));
console.log(
  "areThereDuplicatesPtr(a, b, c, a)",
  areThereDuplicatesPtr("a", "b", "c", "a")
);
console.log();

function avaragePair(arr, avg) {
  let min = 0;
  let max = arr.length - 1;
}
