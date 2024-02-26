class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class binarySearchTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root===null
    }

    insert(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root, node){
        if(node.value < root.value){
            if(!root.left){
                root.left = node
            }else{
                this.insertNode(root.left, node)
            }
        }else{
            if(!root.right){
                root.right = node
            }else{
                this.insertNode(root.right, node)
            }
        }
    }

    search(root, value){
        if(!root){
            return false
        }else{
            if(root.value ==value){
                return true
            }else if(value < root.value){
                return this.search(root.left, value)
            }else{
                return this.search(root.right, value)
            }
        }
    }

    preOrder(root){
        if(!root){
            return 'no value found'
        }else{
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(!root){
            return 'no value found'
        }else{
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(!root){
            return "No value found"
        }else{
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    /*breadth first search*/
    levelOrder(){
        const queue = []
        queue.push(this.root)
        while(queue.length){
            let current = queue.shift()
            console.log(current.value);
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }
    }

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value){
        if(!root){
            return null
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left, value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right, value)
        }else{
            if(!root.left && root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }

    secondLargest(){
        if(!this.root){
            return "tree is empty"
        }else{
            let parent =  null
            let current = this.root

            while(current.right){
                parent = current
                current = current.right
            }
            return parent.value
        }
    }

    secondSmallest(){
        if(!this.root){
            return "Tree is empty"
        }else{
            let current = this.root
            let parent = null
            while(current.left){
                parent = current
                current = current.left
            }
            if(parent){
                return parent.value
            }
            return "There is no second smallest element"
        }
    }
    
}

const bst = new binarySearchTree()
console.log(bst.isEmpty());

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.insert(13)

console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 5));
console.log(bst.search(bst.root, 15));
console.log(bst.search(bst.root, 7));
console.log(bst.search(bst.root, 13));
console.log(bst.search(bst.root, 130));

bst.preOrder(bst.root)
console.log(bst.isEmpty());

bst.inOrder(bst.root)
console.log(bst.isEmpty());

bst.postOrder(bst.root)

console.log(bst.isEmpty());
bst.levelOrder()

console.log("MIN");
console.log(bst.min(bst.root));

console.log("MAX");
console.log(bst.max(bst.root));

console.log("Before Delete node");

bst.levelOrder()

console.log("Before Delete node");
bst.delete(10)
bst.levelOrder()

console.log(bst.secondLargest());
console.log(bst.secondSmallest());

