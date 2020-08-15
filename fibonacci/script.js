/*
==> Fibonnacci sequence, every number is the sum of two previous numbers : 1 - 1 - 2 - 3 - 5 - 8.
Input: Integer that will determinate how long is the sequence.
Output: Fibonnacci sequence.
*/

function fib(n) {
    const seq = [1, 1];
    while (seq.length < n) {
       const addNum = seq[seq.length - 2] + seq[seq.length -1];
       seq.push(addNum);
    }
    return seq;
}

console.log(fib(10));