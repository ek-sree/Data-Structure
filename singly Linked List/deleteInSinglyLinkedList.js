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
        return this.size == 0
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

    delete(index){
        if(index < 0 || index > this.size){
            return console.log("Invaild index, Index not found");
        }else{
            let removeNode
            if(index == 0){
                this.head = this.head.next
            }else{
                let prev = this.head
                for(let i = 0; i < index-1; i++){
                    prev = prev.next
                }
                removeNode = prev.next
                prev.next = removeNode.next
            }
        }
        this.size--
    }

    display(){
        if(this.isEmpty()){
            console.log("List is empty");
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
list.append(40)
list.append(50)

list.display()

list.delete(2)

list.display()