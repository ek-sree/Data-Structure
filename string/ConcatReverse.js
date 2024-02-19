function reverseString(val){
let concat =''
    for(let i=0; i<val.length; i++){
        concat+=val[i]
    }

    let reversed = ''
    for(let i=concat.length-1; i>=0; i--){
        reversed += concat[i]
    }
    return reversed
}

console.log(reverseString(["drow","olleh"]));