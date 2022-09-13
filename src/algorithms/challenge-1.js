function countTruthy(arr) {
  return arr.filter(Boolean).length;
}

countTruthy([]);
export default countTruthy;
expect(countTruthy([6, 3, 0, 30, 7])).toBe(4);
expect(countTruthy(["", 3, 0, 30, 7])).toBe(3);
expect(countTruthy(["", 0, 0, undefined, 7])).toBe(1);
expect(countTruthy([16, 33, 3, 2])).toBe(4);
expect(countTruthy([16, 33, null, 2])).toBe(3);
