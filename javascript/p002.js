// The following problem is taken from Project Euler
// https://projecteuler.net/problem=2

// Problem 2: Even Fibonacci Numbers
// Each new term in the Fibonacci sequence is generated by adding the previous
// two terms. By starting with 1 and 2, the first 10 terms will be:
//
//          1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//
// By considering the terms in the Fibonacci sequence whose values do not exceed
// four million, find the sum of the even-valued terms.

// Implementation
var createFibArray = function(array, max) {
  if(array.length < 2) {
    return array;
  } else if (array[array.length-1] > max) {
    return array.slice(0, array.length-1);
  } else {
    array.push(array[array.length-1] + array[array.length-2]);
    return createFibArray(array, max);
  }
};

var compute = function() {
  // create fibonacci array up to 4 million
  // filter array for even Numbers
  // fold filtered array
  var fibArr = createFibArray([0,1], 4000000)
  return fibArr
    .filter(function(item) {
      return item % 2 === 0;
    }).
    reduce(function(accum, curr) {
      return accum + curr;
    });
}

// Testing
console.log(compute());
