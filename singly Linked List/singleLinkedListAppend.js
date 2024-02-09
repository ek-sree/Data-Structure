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

    getSize(){
        return this.size
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
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.display()
console.log("List size is :", list.getSize());


