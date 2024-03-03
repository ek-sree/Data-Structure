class minHeap{
    constructor(){
        this.heap=[]
    }

    buildHeap(arr){
        this.heap = arr
        for(let i=this.parent(this.heap.length-1); i>=0; i--){
            this.shiftDown(i)
        }
    }

    shiftDown(currentIndex){
        let endIndex = this.heap.length-1
        let leftIndex = this.leftChild(currentIndex)
        while(leftIndex <= endIndex){
            let rightIndex = this.rightChild(currentIndex)
            let indexToShift

            if(rightIndex <= endIndex && this.heap[rightIndex] < this.heap[leftIndex]){
            indexToShift = rightIndex
            }else{
                indexToShift = leftIndex
            }
            if(this.heap[currentIndex] > this.heap[indexToShift]){
                this.swap(this.heap, currentIndex, indexToShift)
                currentIndex = indexToShift
                leftIndex = this.leftChild(currentIndex)
            }else{
                return
            }
        }
    }

    shiftUp(currentIndex){
        let parentIndex = this.parent(currentIndex)
        while(currentIndex > 0 && this.heap[parentIndex] > this.heap[currentIndex]){
            this.swap(this.heap, currentIndex, parentIndex)
            currentIndex = parentIndex
            parentIndex = this.parent(currentIndex)
        }
    }

    peek(){
        return this.heap[0]
    }

    remove(){
        this.swap(this.heap, 0, this.heap.length-1)
        this.heap.pop()
        this.shiftDown(0)
    }

    insert(value){
        this.heap.push(value)
        this.shiftUp(this.heap.length-1)
    }

    swap(arr, i, j){
        [arr[i],arr[j]] = [arr[j],arr[i]]
    }

    parent(i){
        return Math.floor((i-1)/2)
    }

    leftChild(i){
        return 2 * i + 1
    }

    rightChild(i){
        return 2 * i +2
    }

    display(){
        console.log(this.heap);
    }
}

function heapSort(arr) {
    const heap = new minHeap();
    heap.buildHeap(arr);
    let sorted = [];
    while (heap.heap.length > 0) {
        sorted.push(heap.peek());
        heap.remove();
    }
    return sorted;
}

const minheap = new minHeap()



minheap.buildHeap([10,8,3,20,5])
minheap.display()

// console.log(heapSort([5,8,1,0]));

