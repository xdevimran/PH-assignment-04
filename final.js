function cubeNumber(number) {
  if (typeof number !== "number") {
    return "please provide a positive number.";
  }
  let cube = number * number * number;
  return cube;
}


function matchFinder(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string") {
      return "Provide a valid String";
    } else {
      const words1 = string1.includes(string2);
  
      return words1;
    }
  }

  
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



  function findAddress(obj) {
    if (obj && obj.street && obj.house && obj.society) {
      return obj.street + "," + obj.house + "," + obj.society;
    } else {
      if (!obj.street) obj.street = "__";
      if (!obj.house) obj.house = "__";
      if (!obj.society) obj.society = "__";
      return obj.street + "," + obj.house + "," + obj.society;
    }
  }

  
  function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
      return "This is an empty Array";
    }
    
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
      sum += changeArray[i];
    }
  
    if (sum >= totalDue) {
      return true;
    } else {
      return false;
    }
  }