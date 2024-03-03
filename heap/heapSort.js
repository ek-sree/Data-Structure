const heapSort=(arr)=>{
    const parentIndex=(i)=>{
        return Math.floor((i-1)/2)
    }

    let index = parentIndex(arr.length-1)
    for(let i =index; i>=0; i--){
        maxHeapfy(i,arr,arr.length-1)
    }

    function maxHeapfy(index,arr,n){
        let leftIndex = 2 * index+1
        let rightIndex  = 2*index+2
        let endIndex = n
        let indexToShift=index
        if(leftIndex <= endIndex && arr[leftIndex] > arr[indexToShift]){
            indexToShift = leftIndex
        }

        if(rightIndex <= endIndex && arr[rightIndex] > arr[indexToShift]){
            indexToShift = rightIndex
        }

        if(indexToShift !== index){
            [arr[index],arr[indexToShift]] = [arr[indexToShift],arr[index]]
            maxHeapfy(indexToShift,arr,n)
        }
    }

    for(let i=arr.length-1; i<=0; i--){
        [arr[0],arr[i]]=[arr[i],arr[0]]
        maxHeapfy(0,arr,i)
    }
    return arr
}

arr=[2,0,34,9,-1]

const res = heapSort(arr)
console.log(res);