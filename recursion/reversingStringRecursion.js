function joins(arr,i=0){
    if(i==arr.length){
        return ""
    }else{
        return  joins(arr,i+1)+arr[i]}
}
let res = joins(arr = ["he","ha","ho"])
console.log(res);