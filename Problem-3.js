function sortMaker(arr) {
  let numbers = arr;
  if (arr[0] < -0 || arr[1] < -0) {
    return "Invalid Input";
  } else if (arr[0] > arr[1]) {
    return arr[0] + ", " + arr[1];
  } else if (arr[1] > arr[0]) {
    return arr[1] + ", " + arr[0];
  } else if (arr[0] === arr[1]) {
    return "equal";
  }
  return numbers;
}

console.log(sortMaker([0, 1]));
console.log(sortMaker([4, 2]));
console.log(sortMaker([4, 4]));
console.log(sortMaker([1, 2]));
console.log(sortMaker([4, -2]));
