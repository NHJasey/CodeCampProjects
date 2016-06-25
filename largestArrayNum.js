function largestOfFour(arr) {
  var results = [];
  for (var n in arr) {
      var largestNumber = 0;
      for (var sb in arr[n]) {
          if (arr[n][sb] > largestNumber) {
              largestNumber = arr[n][sb];
          }
      }
    results[n] = largestNumber;
}
  return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
