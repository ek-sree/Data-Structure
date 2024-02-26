class Queue{
    constructor(){
        this.items = []
        this.front = 0
        this.rear = -1
        this.size =0
    }

    isEmpty(){
        return this.size==0
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
            this.size--
            this.rear--
            return dequeueValue
        }
    }

    midValue(){
        let mid = Math.floor((this.front + this.rear)/2)
        return this.items[mid]
    }

    display(){
        if(this.isEmpty()){
            console.log("queue is empty");
        }else{
            let result =''
            for(let i=this.front; i<=this.rear; i++){
                result+= this.items[i]+' '
            }
            console.log(result);
        }
    }
}

const queue = new Queue()
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