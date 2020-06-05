const coins = [100, 50, 20, 10, 5, 2, 1];

function makeChange(coinArr, target) {
  const change = [];
  let changeVal = 0;
  let targetVal = target;

  while (changeVal !== target) {
    for (const coin of coinArr) {
      while (targetVal - coin >= 0) {
        change.push(coin);
        changeVal += coin;
        targetVal -= coin;
      }
    }
  }

  return change;
}

console.log(makeChange(coins, 432));
