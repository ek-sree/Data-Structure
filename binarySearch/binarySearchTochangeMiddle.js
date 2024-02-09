function changeMiddle(arr,target){
    let start =0;
    let end = arr.length-1
     while(start<=end){
        let middle = Math.floor((start+end)/2)

        if(arr[middle]==target){
            arr[middle]=1
            return arr
        }
        if(arr[middle]<target){
            start=middle+1
        }else{
            end = middle-1
        }
     }
}

let res =changeMiddle([1,2,3,4,5,6,7],4);
console.log(res);