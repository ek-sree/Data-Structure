function quickSort(arr){
    let pivotIndex = Math.floor(arr.length/2)
    let pivot = arr[pivotIndex]
    let left =[]
    let right =[]
    if(arr.length <=1){
        return arr
    }
    for(let i =0; i<arr.length; i++){
        if(i == pivotIndex){
            continue;
        }
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort([3,1,6,7,-1]));