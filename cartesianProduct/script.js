/*
==> In set theory a Cartesian product is a mathematical operation that returns a set (or product set or simply product) from multiple sets. 
That is, for sets A and B, the Cartesian product A × B is the set of all ordered pairs (a, b) where a ∈ A and b ∈ B.
Params: Two lists of values.
Output: List A x List B.
*/

const cartesian = (listA, listB) => {
 const result = [];

 for (let i = 0; i < listA.length; i++) {
     for (let j = 0; j < listB.length; j++) {
         const product = listA[i] + listB[j];
         result.push(product);
     }
 }

 return result;
}

const numList = [1, 2, 3];
const charList = ["x", "y", "z"];

console.log(cartesian(numList, charList));
