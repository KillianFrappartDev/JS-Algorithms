const itemList = [
  { id: "a", val: 3, w: 3 },
  { id: "b", val: 6, w: 8 },
  { id: "c", val: 10, w: 3 },
  { id: "d", val: 7, w: 5 },
  { id: "e", val: 14, w: 2 },
];

function opt(items, maxWeight) {
  const result = [];
  let currentWeight = 0;

  for (const item of items) {
    const proportionalValue = item.val / item.w;
    result.push({ id: item.id, value: proportionalValue, weight: item.w });
  }

  for (let outer = 0; outer < result.length; outer++) {
    let outerEl = result[outer];

    for (let inner = outer + 1; inner < result.length; inner++) {
      let innerEl = result[inner];

      if (outerEl.value < innerEl.value) {
        result[outer] = innerEl;
        result[inner] = outerEl;

        outerEl = result[outer];
        innerEl = result[inner];
      }
    }
  }

  setWeight();

  while (currentWeight > maxWeight) {
    result.pop();
    currentWeight = 0;
    setWeight();
  }

  return result;

  function setWeight() {
    for (const item of result) {
      currentWeight += item.weight;
    }
  }
}

console.log(opt(itemList, 10));
