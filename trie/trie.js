class trienode{
    constructor(){
        this.children ={}
        this.endOf = false
    }
}

class trie{
    constructor(){
        this.root = new trienode()
    }

    insert(word){
        let node = this.root
        for(let i=0; i<word.length; i++){
            let char = word[i]
            if(!node.children[char]){
                node.children[char] = new trienode()
            }
            node = node.children[char]
        }
        node.endOf = true
        console.log(word);
    }

    search(word){
        let node = this.root
        for(let i=0; i< word.length; i++){
            let char =  word[i]
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.endOf
    }

    prefix(word){
        let node = this.root
        for(let i=0; i<word.length; i++){
            let char = word[i]
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return true
    }

    delete(word){
        let index=0;
        this.deleteHelper(this.root,word,index)
    }

    deleteHelper(node,word,index){
        if(word.length==index){
            if(!node.endOf){
                return
            }
            node.endOf =false
            return Object.keys(node).length==0
        }
        let char = word[index]
        if(!node.children[char]){
            return
        }
        let deleteNode = this.deleteHelper(node.children[char],word,index+1)
        if(deleteNode){
            delete node.children[char]
            return Object.keys(node).length==0
        }
        return false
    }

}

const tr = new trie()
tr.insert('apple')
tr.insert('apal')

console.log(tr.search('apple'));
console.log(tr.prefix('apple'));

tr.delete('apple')
console.log(tr.search('apple'));
