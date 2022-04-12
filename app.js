//Introduction

// example in JavaScript
function binarySearch(list, item) {
    let low = 0;
    let high = list.length - 1;
  
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = list[mid];
        if (guess === item) {
            return mid;
        } 
        if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    } 
    return null;
}

const myList = [1, 3, 5, 7, 9];
console.log(binarySearch(myList, 3));
console.log(binarySearch(myList, -1));

//Exercise 1.1
// log2 128 = x
// 2 x 2 x 2 x 2 x 2 x 2 x 2 = 128
// x = 7
// It would take a maximum of seven steps.

//Exercise 1.2
// log2 256 = x
// x = 8
// It would take a maximum of eight steps.