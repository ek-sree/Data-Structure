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

    insertAtBegining(value){
        const node = new Node(value)
        node.next = this.head
        this.head = node
        this.size++
    }

    insertAtEnd(value){
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

    insertAtPosition(value,index){
        if(index < 0 || index > this.size){
            return console.log("Invaild index");
        }
        if(index == 0){
            this.insertAtBegining(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0; i<index-1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
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
list.insertAtBegining(4)
list.insertAtBegining(3)
list.insertAtBegining(2)
list.insertAtBegining(2)

list.display()

list.insertAtEnd(4)
list.insertAtEnd(3)
list.insertAtEnd(2)
list.insertAtEnd(2)

list.display()


list.insertAtPosition(30,2)
list.insertAtPosition(40,6)
list.display()