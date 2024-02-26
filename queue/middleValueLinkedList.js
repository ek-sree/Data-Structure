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
                this.rear =null
            }
            return dequeueValue
        }
    }

    midValue(){
        if(this.isEmpty()){
            return "Queue is empty"
        }else{
            let slow = this.front
            let fast = this.front
            while(fast && fast.next){
                slow = slow.next
                fast = fast.next.next
            }
            return slow.value
        }
    }

    display(){
        if(this.isEmpty()){
            console.log("queue is empty");
        }else{
            let current = this.front
            let result = ''
            while(current){
                result += current.value+' '
                current = current.next
            }
            console.log(result);
        }
    }
}

const queue  = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.enqueue(60)

queue.display()

console.log(queue.dequeue());
queue.display()
console.log(queue.midValue());