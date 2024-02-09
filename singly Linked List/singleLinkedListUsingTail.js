class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Linkedlist{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size==0
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    removeFromFront(){
        if(this.isEmpty()){
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return null
        }
        if(this.size==1){
            this.head = null
            this.tail = null
        }else{
           let prev = this.head
            while(prev.next != this.tail){
                prev = prev.next
            }
            this.tail = prev
            prev.next = null
        }
        this.size--
    }

    display(){
        if(this.isEmpty()){
            console.log("List is empty");
        }else{
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

module.exports = Linkedlist

list.append(10)
list.append(20)
list.append(30)

list.display()

list.prepend(40)
list.prepend(50)
list.prepend(60)

list.display()

list.removeFromFront()
list.display()

list.removeFromEnd()
list.display()