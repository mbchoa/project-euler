// The following problem is taken from Project Euler.
// https://projecteuler.net/problem=1

// "Multiples of 3 and 5"
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// First implementation using functional style
var computeFunctional = function(collection) {
  return collection.
    filter(function(number) {
      return number % 3 === 0 || number % 5 === 0;
    }).
    reduce(function(accum, curr) {
      return accum + curr;
    });
};

// Second implementation using simple progressive summing
var computeProgressiveSum = function(collection) {
  var result = 0;
  for(var i = 0; i < collection.length; i++) {
    if(collection[i] % 3 === 0 || collection[i] % 5 === 0)
      result += collection[i];
  }
  return result;
};

// Testing
var collection = function(size) {
  var output = [];
  for(var i = 0; i < size; i++) {
    output.push(i);
  }
  return output;
};

console.log(computeFunctional(collection(1000)));
console.log(computeProgressiveSum(collection(1000)));
