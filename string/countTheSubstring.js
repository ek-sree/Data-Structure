function countString(string,substring){
    let count=0
    for(let i=0; i<string.length; i++){
        let merged = string[i]+string[i+1]
        if(merged==substring){
            count++
        }
    }
    return count
}

console.log(countString('hhhihihihasasdsreeedsnhihihihi','hi'));