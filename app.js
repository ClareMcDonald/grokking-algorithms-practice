// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state
  // update DOM to reflect the new state

function binarySearch(list, item) {
    let low = 0;
    let high = list.length - 1;
    let mid;
  
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        let guess = list[mid];
        if (guess === item) {
            return mid;
        } 
        if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
        return null;
    } 
}

const myList = [1, 3, 5, 7, 9];
console.log(binarySearch(myList, 3));
console.log(binarySearch(myList, -1));