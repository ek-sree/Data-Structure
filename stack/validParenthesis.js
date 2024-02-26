class Stack{
    constructor(){
        this.items = []
        this.object = {
            "{":"}",
            "(":")",
            "[":"]"
        }
    }

    isValidParenthesis(str){
        for(let i =0; i<str.length; i++){
            if(this.object[str[i]]){
                this.items.push(str[i])
            }else{
                if(str[i]!== this.object[this.items.pop()]){
                    return false
                }
            }
        }
        return this.items.length==0
    }
}

const stack = new Stack()
console.log(stack.isValidParenthesis('()[]'));
console.log(stack.isValidParenthesis('(}[)'));