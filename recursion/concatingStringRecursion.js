function joins(arr,i=0){
    if(i==arr.length){
        return ""
    }else{
        return arr[i]+ joins(arr,i+1)
    }
}
let res = joins(arr = ["he","ha","ho"])
console.log(res);
