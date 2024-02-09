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
        return this.size ===0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    display(){
        if(this.isEmpty()){
           console.log("List is empty"); 
        }else{
            let current = this.head
            let listValues = ''
            while(current){
                listValues += `${current.value} `
                current = current.next
            }
            console.log(listValues);
        }
    }
}

const list = new Linkedlist()
list.prepend(10)
list.prepend(30)
list.prepend(40) 
list.display()
console.log("List size :", list.getSize());
console.log("List is empty :", list.isEmpty());


