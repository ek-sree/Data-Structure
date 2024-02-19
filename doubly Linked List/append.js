class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList{
    constructor() {
        this.head = null
        this.prev = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size==0
    }

    append(value){
        const node =  new Node(value)
        if(this.isEmpty()){
            this.head =  node
            this.tail = node
        }else{
            node.prev = this.tail
            this.tail.next = node
            this.tail=node
        }
        this.size++
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
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
            listValues+=current.value+' '
            current=current.next
        }
        console.log(listValues);
    }

    displayReverse(){
        let current = this.tail
        let listValues = ''
        while(current){
            listValues += current.value+' '
            current = current.prev
        }
        console.log(listValues);
    }
}

const list = new linkedList()
list.append(50)
list.append(60)
list.append(70)
list.append(80)

list.displayReverse()
list.display()
