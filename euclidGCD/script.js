/* 
==> In mathematics, the Euclidean algorithm, or Euclid's algorithm, is an efficient method for computing the greatest common divisor (GCD)
of two numbers, the largest number that divides both of them without leaving a remainder.
Params: Integer A && Integer B.
Output: Greatest common divisor.
*/

// O(n)
function findGCD(numA, numB) {
  const divisors = [];
  let highestNum;

  if (numA > numB) {
    highestNum = numA;
  } else {
    highestNum = numB;
  }

  for (let i = 2; i < highestNum; i++) {
    if (numA % i === 0 && numB % i === 0) {
      divisors.push(i);
    }
  }

  return divisors[divisors.length - 1];
}

console.log("Method 1 :");
console.log(findGCD(150, 100));
console.log(findGCD(100, 300));
console.log(findGCD(49, 21));
console.log(findGCD(1071, 462));

//O(?)
function getGCD(numA, numB) {
  const commonDiv = [];
  const divA = findDiv(numA);
  const divB = findDiv(numB);

  for (const numA of divA) {
    for (let i = 0; i < divB.length; i++) {
      if (numA === divB[i]) {
        commonDiv.push(numA);
        divB.splice(i, 1);
      }
    }
  }

  function findDiv(num) {
    let curNum = num;
    const divisors = [];

    for (let i = 2; i <= curNum; i++) {
      while (curNum % i === 0) {
        divisors.push(i);
        curNum = curNum / i;
      }
    }
    return divisors;
  }

  return commonDiv.reduce(function (prevVal, curVal) {
    return prevVal * curVal;
  }, 1);
}

console.log("Method 2 :");
console.log(getGCD(100, 150));
console.log(getGCD(100, 300));
console.log(getGCD(21, 49));
console.log(getGCD(1071, 462));
