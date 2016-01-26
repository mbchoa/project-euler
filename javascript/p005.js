// The following problem is taken from Project Euler
// https://projecteuler.net/problem=5

// Problem 5: Smallest Multiple
// 2520 is the smallest number that can be divided by each of the numbers from
// 1 to 10 without any remainder.
//
// What is the smallest positive number that is evenly divisible by all of
// the numbers from 1 to 20?

// Implementation
// noprotect
var compute = function() {
  var number = 2;
  while(true) {
    var divisibleByAll = true;
    for(var i = 1; i <= 20; i++) {
      divisibleByAll = divisibleByAll && (number % i === 0);
      if(!divisibleByAll) break;
    }
    if(divisibleByAll)
      return number;
    else
      number++;
  }
};

// Testing
console.log(compute());
