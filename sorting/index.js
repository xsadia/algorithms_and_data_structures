const bbs = require("./bubble");
const ss = require("./selection");
const is = require("./insertion");

function main() {
  console.log("==================Bubble Sort===================");
  console.log(bbs.bubbleSort([5, 3, 4, 1, 2]));
  console.log(bbs.bubbleSort([37, 45, 29, 8, 2]));
  console.log("==================Selection Sort===================");
  console.log(ss.selectionSort([5, 3, 4, 1, 2]));
  console.log(ss.selectionSort([37, 45, 29, 8, 2]));
  console.log("==================Selection Sort===================");
  console.log(is.insertionSort([5, 3, 4, 1, 2]));
  console.log(is.insertionSort([37, 45, 29, 8, 2]));
}

main();
