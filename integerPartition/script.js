/*

    --- WORK IN PROGRESS ---

==> In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers.
Two sums that differ only in the order of their summands are considered the same partition. For example, 4 can be partitioned in five distinct ways:
4
3 + 1
2 + 2
2 + 1 + 1
1 + 1 + 1 + 1
Params: Integer.
Output: All possible partitions.
*/

function createPartition(num) {
  const partitions = [num];

  for (let i = num; i > 0; i--) {
    const curArr = [];

    if (i < num && i > 0) {
      curArr.push(i);
      for (let index = num - i; index > 0; index--) {
        curArr.push(1);

        // if (index >= 2) {
        //   const secArr = [index];
        //   let curNum = num - index;

        //   while (curNum > 1) {
        //     secArr.push(curNum);
        //     curNum = 0;
        //   }

        //   partitions.push(secArr);
        // }
      }

      partitions.push(curArr);
    }
  }

  return partitions;
}

console.log(createPartition(4));
console.log(createPartition(6));
