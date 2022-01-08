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
