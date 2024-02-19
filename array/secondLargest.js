function secondLargest(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let seconlargestNum = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
    seconlargestNum = largest;
    largest = arr[i];
    }else if(arr[i] !== largest && arr[i] > seconlargestNum){
        secondLargest = arr[i]
    }
  }
  return seconlargestNum
}

console.log(secondLargest([2,5,3,7,3,2,1]));