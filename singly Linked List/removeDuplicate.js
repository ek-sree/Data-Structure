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

    removeDuplicate(){
        let current = this.head
        while(current && current.next){
            if(current.value === current.next.value){
                current.next = current.next.next
                this.size--
            }else{
            current = current.next
            }
        }
    }

    display(){
        if(this.isEmpty()){
            console.log("list is empty");
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
list.append(10)
list.append(30)
list.append(40)
list.append(30)
list.append(10)

list.display()

list.removeDuplicate()
list.display()


