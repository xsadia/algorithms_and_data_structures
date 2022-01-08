function power(num, pow) {
  if (pow === 1) return num;
  if (pow === 0) return 1;

  return num * power(num, pow - 1);
}

/**
 *  power(2, 4) -> 2 * power(2, 3) ->  16
 *       power(2, 3) -> 2 * power(2, 2) -> 8
 *             power(2, 2) -> 2 * power(2, 1) -> 4
 *                  returns 2;
 */
console.log("Power");
console.log(power(2, 4));
console.log(power(2, 2));
console.log(power(2, 0));
console.log(power(2, 1));
console.log();

function fac(num) {
  if (num <= 1) return 1;

  return num * fac(num - 1);
}

console.log("Factorial");
console.log(fac(1)); // 1
console.log(fac(2)); // 2
console.log(fac(4)); // 24
console.log(fac(7)); // 5040
console.log();

function productOfArray(arr) {
  if (arr.length === 1) return arr[0];
  if (arr.length === 0) return null;

  return arr[0] * productOfArray(arr.splice(1));
}

console.log("Product of array");
console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
console.log();

function range(num) {
  if (num === 1) return 1;

  return num + range(num - 1);
}

console.log("Range");
console.log(range(6)); // 21
console.log(range(10)); // 55
console.log();

function fib(num) {
  if (num <= 2) return 1;

  return fib(num - 2) + fib(num - 1);
}

console.log("fibonacci");
console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
