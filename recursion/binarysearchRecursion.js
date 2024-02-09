function binaryRecursion(arr,value,start=0,end=arr.length-1){
    let middle = Math.floor((start+end)/2)

    if(arr[middle]==value){
        return middle
    }
    if(arr[middle]<value){
        start = middle
    }else{
        end = middle
    }
    return binaryRecursion(arr,value,start,end)
}

const res = binaryRecursion([3,4,5,6,7,8,9],6)
console.log(res);

