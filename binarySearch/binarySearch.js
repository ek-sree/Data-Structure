function binary(arr,num){
    let start = 0
    let end = arr.length-1

    while(start<=end){
        let middle = Math.floor((start+end)/2)

        if(arr[middle]==num){
            return middle
        }
        if(arr[middle]<num){
            start = middle+1
        }else{
            end = middle-1
        }
    }
    return -1
}

const res = binary([1,2,3,4,5,6,7],4)
console.log(res);