class hashTable{
    constructor(size){
        this.table= new Array(size)
        this.size = size
    }

    hash(key){
        let total =0
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
            let sameKeyItem = bucket.find((item)=>item[0]==key)
            if(sameKeyItem){
                sameKeyItem[1] = value
            }else{
                bucket.push([key,value])
            }
        }
    }

    get(...key){
        let result =[]
        key.forEach((key)=>{
            let index = this.hash(key)
            let bucket = this.table[index]
            if(bucket){
                let sameKeyItem = bucket.find((item)=>item[0]==key)
                if(sameKeyItem){
                    result.push([sameKeyItem[1]])
                }else{
                    result.push(undefined)
                }
            }else{
                result.push(undefined)
            }
        })
        return result.length==1 ? result[0] : result 
    }

    remove(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(bucket){
            let sameKeyItem = bucket.find((item)=>item[0]==key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1)
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

table.set("name",'sree')
table.set('age',21)
table.set('mane',"hari")
table.set('rollno',10)
table.display()

console.log("get......");
console.log(table.get('name','mane','age'));

console.log("removing...");
table.remove('mane')
table.display()