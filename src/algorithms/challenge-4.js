function calculateGrade(marks) {
  let average = 0;
  let sum = 0;
  for (let i = 1; i < marks.length; i++) {
    sum = sum + marks[i];
  }
  average = sum / marks.length;
  if (average <= 49) {
    return "F";
  } else if (average <= 59) {
    return "E";
  } else if (average <= 69) {
    return "D";
  } else if (average <= 79) {
    return "C";
  } else if (average <= 89) {
    return "B";
  } else if (average <= 100) {
    return "A";
  }
}

calculateGrade([]);

//   # Challenge 4

// Implement the function calculateGrade(marks) that takes an array of grades and calculates the average. It should return the average grade by comparing with the grade table
// 1-49: F
// 50-59: E
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A
// # Example
//     calculateGrade([80, 80, 70]) to  return A
//     calculateGrade([19, 5, 42, 2, 77]) to return 'F'
//     calculateGrade([59, 80, 40, 2, 77]) to return 'E'
//     calculateGrade([89, 50, 40, 90, 77]) to return 'D'
