function sum() {
  let arr = [2, 3, 1, 4, 5, 9];
  let num = 12;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == num) {
        console.log([arr[i], arr[j]]);
        return;
      }
    }
  }
  console.log("not found");
}
sum();
