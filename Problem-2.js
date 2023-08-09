function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Provide a valid String";
  } else {
    const words1 = string1.includes(string2);

    return words1;
  }
}

const result = matchFinder("john Doe", "ohn");
console.log(result);
