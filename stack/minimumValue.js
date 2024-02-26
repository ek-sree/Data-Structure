class Stack{
    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length==0
    }

    push(value){
        this.items[this.items.length]=value
    }

    pop(){
        if(this.isEmpty()){
            return "stack is empty"
        }else{
            let popedItem =this.items[this.items.length-1]
            this.items.length -=1
            return popedItem
        }
    }

    minValue(){
        if(this.isEmpty()){
            return "stack is empty"
        }else{
            let min = this.items[0]
            let minIndex=0
            for(let i=0; i<this.items.length; i++){
                if(this.items[i] < min){
                    min = this.items[i]
                    minIndex =i
                }
            }
            return {min,minIndex}
        }
    }

    display(){
        let result = ''
        for(let i=this.items.length-1; i>=0; i--){
            result += this.items[i]+' '
        }
        console.log(result);
    }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)

stack.display()

console.log(stack.minValue());