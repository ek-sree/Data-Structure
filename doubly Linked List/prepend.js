class Node{
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size==0
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head.prev = node
            this.head=node
        }
        this.size++
    }

    display(){
        let current = this.head
        let listValues = ''
        while(current){
            listValues += current.value+' '
            current= current.next
        }
        console.log(listValues);
    }
}

const list = new linkedList()

list.prepend(50)
list.prepend(40)
list.prepend(30)
list.prepend(20)

list.display()
