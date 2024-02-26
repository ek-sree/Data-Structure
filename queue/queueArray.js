class Queue{
    constructor(){
        this.items = []
        this.rear = -1
        this.front = 0
        this.size = 0
    }

    isEmpty(){
        return this.size==0
    }

    getSize(){
        return this.size
    }

    enqueue(value){
        this.rear++
        this.items[this.rear]=value
        this.size++
    }

    dequeue(){
        if(this.isEmpty()){
            return "UnderFlow"
        }else{
        let dequeueValue = this.items[this.front]
        for(let i=this.front; i<this.rear; i++){
            this.items[i] = this.items[i+1]
        }
        this.rear--
        this.size--
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
        let result = ''
        for(let i=this.front; i<=this.rear; i++){
            result += this.items[i]+' '
        }
        console.log(result);
    }
}

const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

queue.display()