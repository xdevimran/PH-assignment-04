function cubeNumber(number) {
  if (typeof number !== "number") {
    return "please provide a positive number.";
  }
  let cube = number * number * number;
  return cube;
}

console.log(cubeNumber(3));
console.log(cubeNumber(4));
console.log(cubeNumber(-2));