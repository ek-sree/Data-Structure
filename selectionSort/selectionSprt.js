function selectionSort(arr){
    for(let i =0; i<arr.length; i++){
        let minIndex = i

        for(let j =i+1; j<arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        if(minIndex !== i){
            [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
        }
    }
    return arr
}

console.log(selectionSort([3,1,6,0,-1,-5,13,123,12]));