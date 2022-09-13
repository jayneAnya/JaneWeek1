function sumMix(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return Number(sum);
}

sumMix([]);

// # Challenge 3

// Implement the function sumMix(arr) that given an array of integers as strings 
//and numbers, returns the sum of the array values as if all were numbers.
// # Example
//     sumMix([9, 3, '7', '3']) to return 22
//     sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]) to return 42
//     sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']) to return 41
