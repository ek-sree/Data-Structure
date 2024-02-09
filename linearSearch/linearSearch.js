function linear(arr,num){
    for(let i=0; i<arr.length; i++){
        if(arr[i]==num)
        return i
    }
}

console.log(linear([4,5,7,4,8,2],7));