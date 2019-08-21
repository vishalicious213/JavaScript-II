// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/
//----------------------------------------------------------------------

function getLength(arr, cb) {
  return cb(arr.length);
  // getLength passes the length of the array into the callback.
}

const backPack = getLength(items, itemTotal => `There are ${itemTotal} school supplies`);

console.log(backPack);

// let testLength = function getLength(items, itemsLength) {
//   console.log("hello");
//   console.log(itemsLength);
// };
// console.log(testLength);

//----------------------------------------------------------------------

function last(arr, cb) {
  return cb(arr[arr.length-1]);
  // last passes the last item of the array into the callback.
}

const lastItem = last(items, lastOne => `The last item is ${lastOne}`);

console.log(lastItem);

//----------------------------------------------------------------------

function sumNums(x, y, cb) {
  return cb(x+y);
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}

const addThese = sumNums(1, 2, sum => `The sum is ${sum}`);

console.log(addThese);

//----------------------------------------------------------------------

function multiplyNums(x, y, cb) {
  return cb(x*y);
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

const multiplyThese = multiplyNums(3, 6, prod => `The product is ${prod}`);

console.log(multiplyThese);

//----------------------------------------------------------------------

function contains(item, list, cb) {
  // v1
  // items.forEach(function(item) {
  //   console.log(item);
  // })
  // v2
let returnItem = list.includes(item);
  cb(returnItem);
}
  
// items.forEach() if item == 
const checkItem = (result) => {
  console.log(result);
};
contains("Pencil", items, checkItem);

  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  // item = item from array,  list = array,  cb = true/false


//console.log(if TRUE, item is present)
//console.log(if FALSE, that item is not present)

//----------------------------------------------------------------------

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
