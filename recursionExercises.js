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
// console.log("Power");
// console.log(power(2, 4));
// console.log(power(2, 2));
// console.log(power(2, 0));
// console.log(power(2, 1));
// console.log();

function fac(num) {
  if (num <= 1) return 1;

  return num * fac(num - 1);
}

// console.log("Factorial");
// console.log(fac(1)); // 1
// console.log(fac(2)); // 2
// console.log(fac(4)); // 24
// console.log(fac(7)); // 5040
// console.log();

function productOfArray(arr) {
  if (arr.length === 1) return arr[0];
  if (arr.length === 0) return null;

  return arr[0] * productOfArray(arr.splice(1));
}

// console.log("Product of array");
// console.log(productOfArray([1, 2, 3])); // 6
// console.log(productOfArray([1, 2, 3, 10])); // 60
// console.log();

function range(num) {
  if (num === 1) return 1;

  return num + range(num - 1);
}

// console.log("Range");
// console.log(range(6)); // 21
// console.log(range(10)); // 55
// console.log();

function fib(num) {
  if (num <= 2) return 1;

  return fib(num - 2) + fib(num - 1);
}

// console.log("fibonacci");
// console.log(fib(4)); // 3
// console.log(fib(10)); // 55
// console.log(fib(28)); // 317811
// console.log(fib(35)); // 9227465

function reverse(str) {
  let aws = [];
  let splitStr = str.split('');

  function helper(string) {
    if(string.length === 1) {
      aws.push(string[0]);
      return;
    }

    aws.push(string[string.length - 1]);
    return helper(string.slice(0, string.length - 1));
  }

  helper(splitStr);

  return aws.join('');
}

function reverseV2(str){
  if(str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

// console.log(reverse('awesome')) // 'emosewa'
// console.log(reverse('rithmschool')) // 'loohcsmhtir'

function isPalindrome(str) {
  let reversed = [];
  let splitStr = str.split('');

  function helper(arr) {
    if(arr.length === 1) {
      reversed.push(arr[0]);

      return;
    }

    reversed.push(arr[arr.length - 1]);
    helper(arr.slice(0, arr.length - 1));
  }

  helper(splitStr)

  return reversed.join('') === str;
}

function isPalindromeV2(str){
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
  return false;
}


// console.log(isPalindrome('foobar')) // false
// console.log(isPalindrome('tacocat')) // true

function someRecursive(arr, fn) {
  if(arr.length < 1) return false;

  let [x, ...xs] = arr

  if(fn(x)) {
    return true;
  }

  return someRecursive(xs, fn);
}


const isOdd = val => val % 2 !== 0;

// console.log(someRecursive([1,2,3,4], isOdd)) // true
// console.log(someRecursive([4,6,8,9], isOdd)) // true
// console.log(someRecursive([4,6,8], isOdd)) // false
// console.log(someRecursive([4,6,8], val => val > 10)) // false

function flatten(arr){
  let newArr = []
    for(let i = 0; i < arr.length; i++){
      if(Array.isArray(arr[i])){
          newArr = newArr.concat(flatten(arr[i]))
      } else {
          newArr.push(arr[i])
      }
  }   
  return newArr;
}

// console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
// console.log(flatten([[1],[2],[3]])) // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3

function capitalizeFirst(arr) {
  if(arr.length === 0) return [];

  let [x, ...xs] = arr

  return [x.charAt(0).toUpperCase() + x.slice(1)].concat(capitalizeFirst(xs));
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']

function nestedEvenSum(obj, sum = 0) {
  for(let key in obj) {
    if(typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key]
    }
  }

  return sum;
}

let obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

let obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

// console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10

function capitalizedWords(arr) {
  if(arr.length === 0) return [];

  let [x, ...xs] = arr;

  return [x.toUpperCase()].concat(capitalizedWords(xs));
}

function capitalizedWordsHelper(arr) {
  let newArr = [];

  function helper(arr) {
    if(arr.length === 0) {
      return;
    }

    let [x, ...xs] = arr;

    newArr.push(x.toUpperCase());

    return helper(xs);
  }

  helper(arr)

  return newArr;
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
console.log(capitalizedWordsHelper(words));

function stringifyNumbers(obj) {
  for(let key in obj) {
    if(typeof obj[key] === 'number') {
      obj[key] = obj[key].toString();
    } else if(typeof obj[key] === 'object') {
      obj[key] = stringifyNumbers(obj[key])
    }
  }

  return obj;
}


// let obj = {
//     num: 1,
//     test: [],
//     data: {
//         val: 4,
//         info: {
//             isRight: true,
//             random: 66
//         }
//     }
// }


// console.log(stringifyNumbers(obj))

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

function collectStrings(obj) {
  let newArr = [];
  for(let key in obj) {
    if(typeof obj[key] === 'string') {
      newArr.push(obj[key])
    } else if(typeof obj[key] === 'object') {
      newArr = newArr.concat(collectStrings(obj[key]))
    }
  }

  return newArr;
}

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])