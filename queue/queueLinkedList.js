class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(){
        this.front = null
        this.rear = null
        this.size = 0
    }

    isEmpty(){
        return this.size==0
    }

    getSize(){
        return this.size
    }

    enqueue(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.front=node
            this.rear=node
        }else{
            this.rear.next = node
            this.rear = node
        }
        this.size++
    }

    dequeue(){
        if(this.isEmpty()){
            return "UnderFlow"
        }else{
            let dequeueValue = this.front.value
            this.front = this.front.next
            this.size--
            if(this.isEmpty()){
                this.rear = null
            }
            return dequeueValue
        }
    }

    peek(){
        return this.front.value
    }

    display(){
        if(this.isEmpty()){
            console.log("Queue is empty");
        }else{
            let current = this.front;
            let result = ''
            while(current){
                result += current.value+' '
                current = current.next
            }
            console.log(result);
        }
    }
}

const queue = new Queue()

console.log('empty :-',queue.isEmpty());
console.log('size :-',queue.getSize());
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

queue.display()
console.log('size :-',queue.getSize());

queue.dequeue()
queue.display()
console.log("peek :-",queue.peek());