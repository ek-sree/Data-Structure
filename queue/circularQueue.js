class circularQueue{
    constructor(capacity){
        this.items = new Array(capacity)
        this.front = -1
        this.rear = -1
        this.size = 0
        this.capacity = capacity
    }

    isEmpty(){
        return this.size==0
    }

    isFull(){
        return this.size==this.capacity
    }

    enqueue(value){
        if(!this.isFull()){
            this.rear = (this.rear+1)%this.capacity
            this.items[this.rear] = value
            this.size++
            if(this.front== -1){
                this.front = this.rear
            }
        }
    }

    dequeue(){
        if(this.isEmpty()){
            return "Queue is empty"
        }else{
            let dequeueValue = this.items[this.front]
            this.items[this.front] = null
            this.front = (this.front+1)%this.capacity
            this.size--
            if(this.isEmpty()){
                this.rear =-1
                this.front=-1
            }
            return dequeueValue
        }
    }

    peek(){
        if(this.isEmpty()){
            return "Queue is empty"
        }else{
            return this.items[this.front]
        }
    }

    display(){
        if(this.isEmpty()){
            console.log("Queue is empty");
        }else{
            let result =''
            let index = this.front
        while(index !== this.rear){
            result += this.items[index]+' '
            index = (index+1) % this.capacity
        }
        result += this.items[this.rear]
            console.log(result);
        }
    }
}

const queue = new circularQueue(5)

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)

queue.display()