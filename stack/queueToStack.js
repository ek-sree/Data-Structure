class Queue {
    constructor() {
        this.rear = -1;
        this.front = 0;
        this.size = 0;
        this.items = [];
    }

    isEmpty() {
        return this.size === 0;
    }

    enqueue(value) {
        this.rear++;
        this.items[this.rear] = value;
        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        } else {
            let dequeueValue = this.items[this.front];
            for (let i = this.front; i < this.rear; i++) {
                this.items[i] = this.items[i + 1];
            }
            this.rear--;
            this.size--;
            return dequeueValue;
        }
    }
}

class Stack extends Queue {
    constructor() {
        super();
        this.tempQueue = new Queue();
    }

    push(value) {
        this.enqueue(value);
    }

    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        } else {
            while (this.size > 1) {
                this.tempQueue.enqueue(this.dequeue());
            }
            
            const popValue = this.dequeue();
            
            const temp = this.items;
            this.items = this.tempQueue.items;
            this.tempQueue.items = temp;
           
            this.rear = this.size - 2; 

            return popValue;
        }
    }
}



const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

console.log(stack.pop()); 
