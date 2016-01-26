// The following problem is taken from Project Euler
// https://projecteuler.net/problem=3

// Problem 2: Largest Prime Factor
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

// Implementation
var smallestPrimeFactor = function(n) {
  for(var i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if(n % i === 0) return i;
  }
  return n;
};

var compute = function() {
  var number = 600851475143;
  while(true) {
    var primeFactor = smallestPrimeFactor(number);
    if(primeFactor === number) {
      return primeFactor;
    } else {
      number /= primeFactor;
    }
  }
};

// Test
console.log(smallestPrimeFactor(13195));
console.log(compute());
