function sortMaker(arr) {
  if (arr[0] < 0 || arr[1] < 0) {
    return "Invalid Input";
  }

  if (arr[0] === arr[1]) {
    return "equal";
  }

  if (arr[0] < arr[1]) {
    const temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
  }

  return arr;
}

console.log(sortMaker([0, 1]));
console.log(sortMaker([4, 2]));
console.log(sortMaker([4, 4]));
console.log(sortMaker([1, 2]));
console.log(sortMaker([4, -2]));
