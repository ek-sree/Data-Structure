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

    bubbleSort(){
        if(this.isEmpty() || this.size==1){
            return
        }else{
            let swapped
            do{
                let current = this.head
                swapped =false
                while(current.next != null){
                    if(current.value > current.next.value){
                        let temp = current.value
                        current.value = current.next.value
                        current.next.value = temp
                        swapped = true
                    }
                    current = current.next
                }
            }while(swapped)
        }
    }

    display(){
        if(this.isEmpty()){
            console.log("List is empty");
        }
        let current = this.head
        let listValues = ''
        while(current){
            listValues+=current.value+' '
            current = current.next
        }
        console.log(listValues);
    }
}

const list = new Linkedlist()

list.append(-1)
list.append(0)
list.append(-3)
list.append(100)
list.append(20)
list.append(1)
list.display()

list.bubbleSort()
list.display()
