function hammingDistance(val1,val2){
    if(val1.length !== val2.length){
        return -1
    }else{
        let count = 0
        for(let i = 0; i < val1.length; i++){
            if(val1[i] !== val2[i]){
             count++
            }
        }
        return count
    }
}

console.log(hammingDistance('sree','sree'));