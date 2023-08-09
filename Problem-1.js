function cubeNumber(number) {
  if (typeof number !== "number") {
    return "please provide a positive number";
  }
  let cube = number * number * number;
  return cube;
}

const result = cubeNumber("4");
console.log(result);
