class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Linkedlist{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size==0
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    searchValue(value){
        if(this.isEmpty()){
           return console.log("Empty list");
            
        }else{
            let i = 0
            let current = this.head
            while(current){
                if(current.value === value){
                    return console.log(i); 
                }else{
                    current = current.next
                    i++
                }
            }
            return console.log("value not found");
        }
    }

    display(){
        if(this.isEmpty()){
            console.log("No value found");
        }
            else{
            let current = this.head
            let listValues = ''
            while(current){
                listValues += current.value + " "
                current = current.next
            }
            console.log(listValues);
        }
    }
}

const list = new Linkedlist()

list.append(10)
list.append(20)
list.append(30)

list.display()

list.searchValue(20)
