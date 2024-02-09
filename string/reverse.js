function reverseString(value){
    let reversed = ''
    for(let i=value.length-1; i>=0; i--){
        reversed += value[i]
    }
    return reversed
}

console.log(reverseString("olleh"));