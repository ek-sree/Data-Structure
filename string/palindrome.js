function palindrome(values){
    let start = 0
    let end = values.length-1
    while(start<end){
        if(values[start]!== values[end]){
            return false
        }
        start++
        end--
    }
    return true
}

console.log(palindrome('101'));
