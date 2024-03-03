class maxHeap{
    constructor(){
        this.heap=[]
    }

    insert(value){
        this.heap.push(value)
        this.shiftUp(this.heap.length-1)
    }

    shiftUp(index){
        let currentValue = this.heap[index]
        let parentIndex = Math.floor((index-1)/2)
        let parentValue = this.heap[parentIndex]
        if(index > 0 && currentValue > parentValue){
            this.heap[index]=parentValue
            this.heap[parentIndex] =currentValue
            this.shiftUp(parentIndex)
        }
    }

    getRightChild(value){
        let index = this.heap.indexOf(value)
        let parentIndex = 2 * index+2
        return this.heap[[parentIndex]]
    }

    getLeftChild(value){
        let index = this.heap.indexOf(value)
        let childIndex = 2* index+1
        return this.heap[childIndex]
    }

    getParent(value){
        let index = this.heap.indexOf(value)
        let parentIndex = Math.floor((index-1)/2)
        return this.heap[parentIndex]
    }
}

const maxheap = new maxHeap()

maxheap.insert(8)
maxheap.insert(90)
maxheap.insert(2)
maxheap.insert(1)
maxheap.insert(9)

console.log(maxheap.getRightChild(90));

console.log(maxheap.getLeftChild(90));

console.log(maxheap.getParent(8));

console.log(maxheap.heap);