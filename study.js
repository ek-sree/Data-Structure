class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList{
    constructor() {
        this.head = null
        this.size =0
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

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    insertIndex(index, value){
        const node = new Node(value)
        if(index == 0){
            node.next = this.head
            this.head = node
        }else{
            let prev = this.head
            for(let i =0; i< index-1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
        }
        this.size++
    }

    inserValue(target,value){
        const node = new Node(value)
        if(this.head.value == target){
            node.next = this.head
            this.head = node
        }else{
            let prev = this.head
            while(prev && prev.value !== target){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
        }
        this.size++
    }

    reverse(){
        let current = this.head
        let prev = null
        while(current){
            let next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }

    sort(){
        let current = this.head
        while(current){
            let prev = this.head
            while(prev.next){
                if(prev.value > prev.next.value){
                    let temp = prev.value
                    prev.value = prev.next.value
                    prev.next.value = temp
                }
                prev = prev.next
            }
            current = current.next
        }
    }

    deleteIndex(index){
        if(index ==0){
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i =0; i<index-1; i++){
                prev = prev.next
            }
            let removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
    }

    deleteValue(value){
        if(this.head.value == value){
            this.head = this.head.next
        }else{
            let prev = this.head
            while(prev.next.value !== value){
                prev = prev.next
            }
            let removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
    }

    searchIndex(value){
        let i =0
        let current = this.head
        while(current.value !== value){
            current = current.next
                i++
        }
        return console.log(i);
    }

    searchValue(index){
        let current = this.head
        for(let i =0; i<index; i++){
            current = current.next
        }
        return console.log(current.value);
    }

    deleteMiddle(){
        let fast = this.head
        let slow = this.head
        let prev = null
        while(fast && fast.next){
            fast = fast.next.next
            prev = slow
            slow = slow.next
        }
        prev.next = slow.next
        this.size--
    }

    deleteDuplicate(){
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
                listValues += current.value +' '
                current = current.next
            }
            console.log(listValues);
        }
    }
}

const list = new linkedList()
list.append(50)
list.append(60)
list.append(70)
list.append(80)

list.display()

list.prepend(40)
list.prepend(30)
list.prepend(20)
list.prepend(10)

list.display()

list.insertIndex(3,2)
list.display()

list.inserValue(20,3)
list.display()

list.reverse()
list.display()

list.sort()
list.display()

list.deleteIndex(3)
list.display()

list.append(80)

list.deleteValue(40)
list.display()

list.searchIndex(50);

list.searchValue(3)


list.deleteMiddle()
list.display()

list.deleteDuplicate()
list.display()

