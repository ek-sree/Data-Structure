function quickSort(arr){
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
    if(arr.length <=1){
        return arr
    }else{
    for(let i =0; i < arr.length-1; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort([2,5,3,6,-1,0]));