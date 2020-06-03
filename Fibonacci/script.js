function fib(n) {
    const seq = [1, 1];
    while (seq.length < n) {
       const addNum = seq[seq.length - 2] + seq[seq.length -1];
       seq.push(addNum);
    }
    return seq[n];
}

console.log(5);