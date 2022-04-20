const bbs = require("./bubble");
const ss = require("./selection");
const is = require("./insertion");
const mg = require("./merge");

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
  console.log("==================Merge===================");
  console.log(mg.mergeSort([10, 24,76, 73, 72, 1, 9]));
}

main();
