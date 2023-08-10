function manualReverseSort(arr) {
    if (arr[0] < 0 || arr[1] < 0) {
      return "Invalid Input: Numbers must be non-negative";
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
  
  // Example usage:
  const numberArray = [25, -12];
  const sortedNumberArray = manualReverseSort(numberArray);
  
  console.log("Original Array:", numberArray);
  console.log("Sorted Array:", sortedNumberArray);
  