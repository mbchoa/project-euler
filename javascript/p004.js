// The following problem is taken from Project Euler
// https://projecteuler.net/problem=4

// Problem 2: Largest Palindrome Product
// A palindromic number reads the same both ways. The largest palindrome made
// from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.

// Implementation
var isIntPalindrome = function(n) {
  var str = n.toString();
  var reverse = str.split("").reverse().join("");
  return str === reverse;
};

var compute = function() {
  var max = 0;
  for(var i = 999; i >= 100; i--) {
    for(var j = 999; j >= 100; j--) {
      var isPalindrome = isIntPalindrome(i*j);
      if(isPalindrome && (i*j) > max) {
        max = i*j;
      }
    }
  }
  return max;
};

// Testing
console.log(isIntPalindrome(998001));
console.log(compute());
