function sumOfArray(arr){
    let res =0
    for(let i = 0; i < arr.length; i++){
        res += arr[i]
    }
    return res
}

console.log(sumOfArray([1,2,3,4,5]));