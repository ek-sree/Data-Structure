class Stack{
    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length ==0
    }


    pop(){
        if(this.isEmpty()){
            return "UnserFlow"
        }else{
            let popedItem = this.items[this.items.length-1]
            this.items.length -= 1
            return popedItem
        }
    }

    reverse(str){
        for(let i=0; i<str.length; i++){
            this.items.push(str[i])
        }
        let reverse = ''
        while(!this.isEmpty()){
            reverse += this.pop()
        }
        return reverse
    }
    

    display(){
        let result =''
        for(let i =this.items.length-1; i>=0; i--){
            result += this.items[i]+' '
        }
        console.log(result);
    }
}

const stack =new Stack()
console.log("sree");
console.log(stack.reverse('sree'));