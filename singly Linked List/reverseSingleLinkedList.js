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

    reverse(){
        let prev = null
        let current = this.head
        while(current){
            let next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }

    display(){
        if(this.isEmpty()){
            console.log("List is empty");
        }else{
            let current = this.head
            let listValues = ''
            while(current){
                listValues += current.value + ' '
                current = current.next
            }
            console.log(listValues);
        }
    }
}

const list = new Linkedlist()

list.append("you")
list.append("are")
list.append("how")
list.append("hello")

list.display()

list.reverse()
list.display()