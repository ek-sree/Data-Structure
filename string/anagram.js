// function anagram(val1,val2){
//     val1 = val1.split('').sort().join('')
//     val2 = val2.split('').sort().join('')

//     return val1 == val2
// }





function anagram(val1,val2){
    let obj1={}
    let obj2={}

    for(let i = 0; i < val1.length; i++){
        obj1[val1[i]] = (obj1[val1[i]] || 0) +1
        obj2[val2[i]] = (obj2[val2[i]] || 0) +1
    }

    for (const key in obj1) {
        if(obj1[key] !== obj2[key]){
        return false
        }
    }
    return true
}

console.log(anagram('anagram','nagaram'));