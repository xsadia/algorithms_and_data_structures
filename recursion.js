function facIter(num) {
  let fac = num;
  for (let i = num - 1; i >= 1; i--) {
    fac *= i;
  }

  return fac;
}

console.log(facIter(5));

function facRec(num) {
  if (num === 1) return 1;

  return num * facRec(num - 1);
}

/**
 *  4 * facRec(3) -> 6 * 4 -> 24
 *    3 * facRec(2) -> 3 * 2-> 6
 *      2 * facRec(1) -> 2 * 1 -> 2
 *        return 1
 */

console.log(facRec(5));

function productOfArray(arr) {
  if(arr.length === 0) return 1;

  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1,2,3,10]))

function recursiveRange(n) {
  if(n === 1) return 1;

  return n + recursiveRange(n - 1);
}

console.log(recursiveRange(10))

function fib(n) {
  if(n <= 2) return 1;

  return fib(n - 1) + fib(n - 2)
}

console.log(fib(7))
