// function selectionSort(arr){
//     for(let i =0; i<arr.length; i++){
//         let minIndex = i

//         for(let j =i+1; j<arr.length; j++){
//             if(arr[j] < arr[minIndex]){
//                 minIndex = j
//             }
//         }
//         if(minIndex !== i){
//             [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
//         }
//     }
//     return arr
// }

// console.log(selectionSort([3,1,6,0,-1,-5,13,123,12]));




function selectionSort(arr){
    for(i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] > arr[j]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] =temp
            }
        }
    }
    return arr
}

console.log(selectionSort([-2,4,6,2,0,-8]));