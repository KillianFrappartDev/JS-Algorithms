/*
==> factorial of 3 = 3 * 2 * 1 / factorial of 4 = 4 * 3 * 2 * 1 / etc...
Params: Integer.
Output: Factorial of provided integer.
*/


function fact(n) {
  let sum = n;
  for (let i = (n - 1); i > 1; i--) {
    sum *= i;
  }
  return sum;
};

console.log(fact(3));
console.log(fact(4));
console.log(fact(5));

