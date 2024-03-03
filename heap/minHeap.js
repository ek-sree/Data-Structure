class minHeap{
    constructor(){
        this.heap=[]
    }
    insert(value){
        this.heap.push(value)
        this.shiftup(index)
            let currentValue = this.heap[index]
            let parentIndex = Math.floor((index-1)/2)
            let parentValue = this.heap[parentIndex]
            if(index > 0 && currentValue < parentValue){
                this.heap[parentIndex] = currentValue
                this.heap[index]=parentValue
                this.shiftup(parentIndex)
        }
    }
}

const minheap = new minHeap()

minheap.insert(1)
minheap.insert(-1)
minheap.insert(3)
minheap.insert(-93)

console.log(minheap.heap);