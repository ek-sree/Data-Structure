// function rotate(arr,num){
//     for(let i=0; i<num; i++){
//         let last = arr.pop()
//         arr.unshift(last)
//     }
//     return arr
// }


function rotate(arr,num){
    const length = arr.length
    if(num ==0 || length ==0){
        return arr
    }else{
        const rotated = []
        for(let i=0; i<length; i++){
            let newArr = (i + num ) % length;
            rotated[newArr] = arr[i] 
        }
        return rotated
    }
}
console.log(rotate([1,2,3,4,5],3));