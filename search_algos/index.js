const data = require("./data");
const ls = require("./linearSearch");
const bns = require("./binarySearch");

function main() {
  console.log("=========Linear search=========");
  console.log(ls.linearSearch([2, 6, 12, 27, 55, 100], 55));
  console.log(ls.linearSearch([2, 6, 12, 27, 55, 100], 56));
  console.log(ls.recursiveLinearSearch([2, 6, 12, 27, 55, 100], 55));
  console.log(ls.recursiveLinearSearch([2, 6, 12, 27, 55, 100], 56));
  console.log("=========Binary search=========");
  console.log(bns.binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 30));
  console.log(bns.binarySearch([2, 6, 12, 27, 55, 100], 56));
  console.log(bns.binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 30));
  console.log(bns.binarySearchRecursive([2, 6, 12, 27, 55, 100], 56));
  console.log(
    bns.binarySearch(
      [2, 4, 5, 9, 11, 14, 15, 21, 25, 28, 30, 50, 52, 60, 63],
      30
    )
  );
  console.log(
    bns.binarySearchRecursive(
      [2, 4, 5, 9, 11, 14, 15, 21, 25, 28, 30, 50, 52, 60, 63],
      13
    )
  );
}

main();
