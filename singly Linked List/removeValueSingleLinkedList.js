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

    removeValue(value){
        if(this.isEmpty()){
            console.log("Empty");
        }
        if(this.head.value === value){
            this.head = this.head.next
            this.size--
        }else{
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
                let removeNode = prev.next
                prev.next = removeNode.next
                this.size--
            }
            return null
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
list.append(10)
list.append(20)
list.append(30)
list.append(40)

list.removeValue(899)

list.display()
