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

