class Stack{
    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length ==0
    }

    push(value){
        this.items[this.items.length] =value
    }

    pop(){
        if(this.isEmpty()){
            return "underFLow"
        }else{
            let popedItem = this.items[this.items.length-1]
            this.items.length -=1
            return popedItem
        }
    }

    midValue(){
        let mid = Math.floor(this.items.length/2)
        return [this.items[mid],mid]
    }

    display(){
        let result = ''
        for(let i=this.items.length-1; i>=0; i--){
            if(this.items[i]){
                result += this.items[i]+' '
            }
        }
        console.log(result);
    }
}

const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)

stack.display()

console.log(stack.midValue());