class Node{
    constructor(value){
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
            this.head=node
            this.tail=node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    sort(){
        let current = this.head
        while(current){
            let prev = this.head
            while(prev){
                if(prev.next){
                    if(prev.value > prev.next.value){
                        let temp = prev.value
                        prev.value = prev.next.value
                        prev.next.value = temp
                    }
                }
                prev = prev.next
            }
            current = current.next
        }
    }

    display(){
        if(this.isEmpty()){
            console.log("List is empty");
        }else{
            let current = this.head
            let listValue  = ''
            while(current){
                listValue += current.value+ ' '
                current = current.next
            }
            console.log(listValue);
        }
    }
}


const list = new linkedList()
list.prepend(10)
list.prepend(30)
list.prepend(50)
list.prepend(20)

list.display()

list.sort()
list.display()