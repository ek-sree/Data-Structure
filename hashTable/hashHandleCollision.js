class hashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for(let i =0; i<key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            let sameKeyItem = bucket.find((item)=>item[0]===key)
            if(sameKeyItem){
                sameKeyItem[1] = value
            }else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(bucket){
            let sameKeyItem = bucket.find((item)=>item[0]===key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
    }

    remove(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(bucket){
            let sameKeyItem = bucket.find((item)=>item[0]===key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1)
            }
        }
    }

    searchKey(value){
        for(let i=0; i<this.table.length; i++){
            let bucket = this.table[i]
            if(bucket){
                for(let j=0; j<bucket.length; j++){
                    if(bucket[j][1]==value){
                        return bucket[j][0]
                    }
                }
            }
        }
    }

    display(){
        for(let i =0; i<this.table.length; i++){
            if(this.table[i]){
                console.log(i, this.table[i]);
            }
        }
    }
}

const table = new hashTable(50)

table.set('name','sree')
table.set('age',21)
table.set('mane','hari')

table.display()

console.log("get,,..:",table.get('name'));

table.remove('mane')
table.display()

console.log(table.search("age"));

console.log(table.searchKey(21));